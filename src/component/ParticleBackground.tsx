import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    currentOpacity: number;
}

interface Comet {
    active: boolean;
    x: number;
    y: number;
    vx: number;
    vy: number;
    length: number;
    opacity: number;
}

const ParticleBackground = () => {
    const canvasRef   = useRef<HTMLCanvasElement>(null);
    const mouse       = useRef({ x: -9999, y: -9999 });
    const animRef     = useRef<number>(0);
    const particles   = useRef<Particle[]>([]);
    // two independent comets
    const comets      = useRef<Comet[]>([
        { active: false, x: 0, y: 0, vx: 0, vy: 0, length: 0, opacity: 0 },
        { active: false, x: 0, y: 0, vx: 0, vy: 0, length: 0, opacity: 0 },
    ]);
    const lastComet   = useRef<number>(Date.now());

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const COUNT        = 35;
        const MOUSE_RADIUS = 100;
        const FADE_SPEED   = 0.08;
        const RECOVER      = 0.015;
        const COMET_EVERY  = 10_000; // ms

        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            particles.current = Array.from({ length: COUNT }, () => {
                const op    = Math.random() * 0.18 + 0.05;
                const angle = Math.random() * Math.PI * 2;
                const spd   = Math.random() * 0.25 + 0.05;
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd,
                    size: Math.random() * 1.2 + 0.3,
                    opacity: op,
                    currentOpacity: op,
                };
            });
        };

        // launch ONE comet from a given side index (0=top 1=right 2=bottom 3=left)
        const launchOne = (c: Comet, side: number) => {
            const w = canvas.width, h = canvas.height;
            let sx = 0, sy = 0;
            if      (side === 0) { sx = Math.random() * w; sy = -10; }
            else if (side === 1) { sx = w + 10;            sy = Math.random() * h; }
            else if (side === 2) { sx = Math.random() * w; sy = h + 10; }
            else                 { sx = -10;               sy = Math.random() * h; }

            const tx   = w - sx + (Math.random() - 0.5) * w * 0.4;
            const ty   = h - sy + (Math.random() - 0.5) * h * 0.4;
            const dist = Math.sqrt(tx * tx + ty * ty);
            const spd  = 2.5;

            c.x       = sx;
            c.y       = sy;
            c.vx      = (tx / dist) * spd;
            c.vy      = (ty / dist) * spd;
            c.length  = 80 + Math.random() * 60;
            c.opacity = 0;
            c.active  = true;
        };

        const launchPair = () => {
            // pick two opposite / different sides for a nice cross effect
            const side1 = Math.floor(Math.random() * 4);          // 0–3
            const side2 = (side1 + 2) % 4;                        // opposite side
            launchOne(comets.current[0], side1);
            launchOne(comets.current[1], side2);
        };

        const drawComet = (c: Comet) => {
            if (!c.active) return;

            c.opacity = Math.min(c.opacity + 0.04, 0.35);
            c.x += c.vx;
            c.y += c.vy;

            if (
                c.x < -c.length - 20 || c.x > canvas.width  + c.length + 20 ||
                c.y < -c.length - 20 || c.y > canvas.height + c.length + 20
            ) {
                c.active = false;
                return;
            }

            const mag   = Math.hypot(c.vx, c.vy);
            const tailX = c.x - (c.vx / mag) * c.length;
            const tailY = c.y - (c.vy / mag) * c.length;

            const grad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
            grad.addColorStop(0,   `rgba(255,255,255,0)`);
            grad.addColorStop(0.4, `rgba(255,255,255,${c.opacity * 0.15})`);
            grad.addColorStop(1,   `rgba(255,255,255,${c.opacity * 0.5})`);

            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(c.x, c.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth   = 1.5;
            ctx.lineCap     = "round";
            ctx.stroke();

            // head dot
            ctx.beginPath();
            ctx.arc(c.x, c.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${c.opacity * 0.8})`;
            ctx.fill();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ── Particles ──────────────────────────────────
            for (const p of particles.current) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0)             p.x = canvas.width;
                if (p.x > canvas.width)  p.x = 0;
                if (p.y < 0)             p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dx   = mouse.current.x - p.x;
                const dy   = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS) {
                    const target = p.opacity * (dist / MOUSE_RADIUS) * 0.15;
                    p.currentOpacity += (target - p.currentOpacity) * FADE_SPEED;
                } else {
                    p.currentOpacity += (p.opacity - p.currentOpacity) * RECOVER;
                }

                const alpha = Math.max(0, p.currentOpacity);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx.fill();
            }

            // ── Trigger comet pair every 10 s ──────────────
            const now = Date.now();
            const bothDone = !comets.current[0].active && !comets.current[1].active;
            if (bothDone && now - lastComet.current >= COMET_EVERY) {
                lastComet.current = now;
                launchPair();
            }

            // ── Draw both comets ───────────────────────────
            comets.current.forEach(drawComet);

            animRef.current = requestAnimationFrame(draw);
        };

        const onMouseMove  = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
        const onMouseLeave = ()              => { mouse.current = { x: -9999, y: -9999 }; };

        resize();
        draw();

        window.addEventListener("resize",     resize);
        window.addEventListener("mousemove",  onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize",     resize);
            window.removeEventListener("mousemove",  onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0, mixBlendMode: "screen" }}
        />
    );
};

export default ParticleBackground;
