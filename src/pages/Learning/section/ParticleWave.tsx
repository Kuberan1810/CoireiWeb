import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
    speed: number;
}

const ParticleWave = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const animRef = useRef<number>(0);
    const particles = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const PARTICLE_COUNT = 180;
        const MOUSE_RADIUS = 130;
        const REPEL_STRENGTH = 5;
        const RETURN_SPEED = 0.06;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        };

        const initParticles = () => {
            particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                return {
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 1.6 + 0.4,
                    opacity: Math.random() * 0.1 + 0.1,
                    vx: 0,
                    vy: 0,
                    speed: Math.random() * 0.4 + 0.1,
                };
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((p) => {
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    p.vx -= Math.cos(angle) * force * REPEL_STRENGTH;
                    p.vy -= Math.sin(angle) * force * REPEL_STRENGTH;
                }

                // drift back to base
                p.vx += (p.baseX - p.x) * RETURN_SPEED;
                p.vy += (p.baseY - p.y) * RETURN_SPEED;

                // damping
                p.vx *= 0.82;
                p.vy *= 0.82;

                p.x += p.vx;
                p.y += p.vy;

                // subtle natural drift
                p.baseX += Math.sin(Date.now() * 0.0003 + p.speed * 10) * 0.15;
                p.baseY += Math.cos(Date.now() * 0.0002 + p.speed * 10) * 0.10;

                // keep base in bounds
                if (p.baseX < 0) p.baseX = canvas.width;
                if (p.baseX > canvas.width) p.baseX = 0;
                if (p.baseY < 0) p.baseY = canvas.height;
                if (p.baseY > canvas.height) p.baseY = 0;

                // proximity glow
                const proximity = dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;
                const glowOpacity = p.opacity + proximity * 0.6;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size + proximity * 1.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(glowOpacity, 0.1)})`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(draw);
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const onMouseLeave = () => {
            mouse.current = { x: -9999, y: -9999 };
        };

        resize();
        draw();

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseleave", onMouseLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            ro.disconnect();
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
        />
    );
};

export default ParticleWave;