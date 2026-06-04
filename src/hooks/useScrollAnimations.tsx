import { useEffect } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

// Register plugin only if we are using the local bundler fallback
if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

type Direction = "up" | "down" | "left" | "right" | "line-left" | "line-right";

const useScrollAnimations = (): void => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray<HTMLElement>("[data-ns-animate]");

            elements.forEach((el) => {
                /* ---------- READ DATA ATTRIBUTES ---------- */
                const delay = parseFloat(el.dataset.delay ?? "0");
                const duration = parseFloat(el.dataset.duration ?? "0.8");
                const offset = parseFloat(el.dataset.offset ?? "60");
                const direction = (el.dataset.direction ?? "up") as Direction;
                const rotate = parseFloat(el.dataset.rotate ?? "0");
                const scale = parseFloat(el.dataset.scale ?? "1");
                const blur = el.dataset.blur !== "false";
                const once = el.dataset.once !== "false";
                const start = el.dataset.start ?? "top 95%";

                /* ---------- CALCULATE AXIS & SPECIALS ---------- */
                let x = 0;
                let y = 0;
                let origin = "center center";

                switch (direction) {
                    case "up":
                        y = offset;
                        break;
                    case "down":
                        y = -offset;
                        break;
                    case "left":
                        x = offset;
                        break;
                    case "right":
                        x = -offset;
                        break;
                    case "line-left":
                        origin = "right center";
                        break;
                    case "line-right":
                        origin = "left center";
                        break;
                }

                /* ---------- INITIAL STATE ---------- */
                gsap.set(el, {
                    opacity: direction.startsWith("line") ? 1 : 0,
                    x,
                    y,
                    scale,
                    scaleX: direction.startsWith("line") ? 0 : 1,
                    rotate,
                    transformOrigin: origin,
                    filter: !direction.startsWith("line") && blur ? "blur(16px)" : "none",
                    willChange: "transform, opacity, filter"
                });

                /* ---------- SCROLL ANIMATION ---------- */
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    scaleX: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    duration,
                    delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start,
                        end: "top 40%",
                        toggleActions: once
                            ? "play none none none"
                            : "play reverse play reverse"
                    }
                });
            });
        });

        /* ---------- CLEANUP ---------- */
        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);
};

export default useScrollAnimations;
