import React, { useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

export const TimelineSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 768px)",
                isMobile: "(max-width: 767px)"
            }, (context) => {
                const { isDesktop } = context.conditions as { isDesktop: boolean };

                if (isDesktop) {
                    const path = section.querySelector(".gsap-timeline-path") as SVGPathElement;
                    const glowPath = section.querySelector(".gsap-timeline-glow-path") as SVGPathElement;

                    if (!path || !glowPath) return;

                    // Get total length of path
                    const pathLength = path.getTotalLength();
                    const baseLength = pathLength + 500; // Buffer to prevent repeating dash segment

                    // Set initial stroke dash properties to hide the path
                    gsap.set([path, glowPath], {
                        strokeDasharray: baseLength,
                        strokeDashoffset: baseLength,
                    });

                    // Get nodes and label blocks
                    const nodes = section.querySelectorAll("circle");
                    const labels = section.querySelectorAll(".gsap-timeline-label");

                    // Set initial properties for nodes and labels
                    gsap.set(nodes, { opacity: 0 });
                    gsap.set(labels, { opacity: 0, y: 30 });

                    // Create GSAP ScrollTrigger timeline
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top 10%",
                            end: "+=300%", // Extended pin length for slower animation
                            scrub: 1.5,    // Smooth lag/catch-up for fluid speed transitions
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        }
                    });

                    // 1. Draw to Node 1 (progress 0% to 10.17%)
                    tl.to([path, glowPath], {
                        strokeDashoffset: baseLength - (pathLength * 0.1017),
                        duration: 0.5,
                        ease: "none"
                    });

                    // Reveal Node 1
                    tl.to(nodes[0], { opacity: 1, duration: 0.05, ease: "none" }, "-=0.05");
                    tl.to(labels[0], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.05");

                    // 2. Draw to Node 2 (progress 10.17% to 29.74%)
                    tl.to([path, glowPath], {
                        strokeDashoffset: baseLength - (pathLength * 0.2974),
                        duration: 1.0,
                        ease: "none"
                    });

                    // Reveal Node 2
                    tl.to(nodes[1], { opacity: 1, duration: 0.05, ease: "none" }, "-=0.05");
                    tl.to(labels[1], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.05");

                    // 3. Draw to Node 3 (progress 29.74% to 50.90%)
                    tl.to([path, glowPath], {
                        strokeDashoffset: baseLength - (pathLength * 0.5090),
                        duration: 1.0,
                        ease: "none"
                    });

                    // Reveal Node 3
                    tl.to(nodes[2], { opacity: 1, duration: 0.05, ease: "none" }, "-=0.05");
                    tl.to(labels[2], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.05");

                    // 4. Draw to Node 4 (progress 50.90% to 85.54%)
                    tl.to([path, glowPath], {
                        strokeDashoffset: baseLength - (pathLength * 0.8554),
                        duration: 1.7,
                        ease: "none"
                    });

                    // Reveal Node 4
                    tl.to(nodes[3], { opacity: 1, duration: 0.05, ease: "none" }, "-=0.05");
                    tl.to(labels[3], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.05");

                    // 5. Draw to end of line (progress 85.54% to 100% of path)
                    tl.to([path, glowPath], {
                        strokeDashoffset: baseLength - pathLength,
                        duration: 0.8,
                        ease: "none"
                    });

                } else {
                    // Mobile Fallback: Standard Scroll Trigger batch reveal for vertical timeline
                    const items = section.querySelectorAll(".gsap-mobile-step");
                    gsap.set(items, { opacity: 0, x: -30 });
                    ScrollTrigger.batch(items, {
                        onEnter: (elements) => {
                            gsap.to(elements, {
                                opacity: 1,
                                x: 0,
                                stagger: 0.2,
                                ease: "power2.out",
                                duration: 0.6,
                                overwrite: "auto"
                            });
                        },
                        start: "top 85%"
                    });
                }
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-24 flex justify-center bg-white ">
            <div className="w-full max-w-[1300px] flex flex-col items-center">

                {/* Premium Capsule Badge */}
                <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
                    <div
                        className="inline-flex items-center justify-center gap-2 px-[13px] py-[7px] bg-[#24292C]/20 border border-white/10 text-white select-none relative"
                        style={{
                            boxShadow: `
                                inset 0 3px 4px rgba(255, 255, 255, 0.2), 
                                inset 0 -3px 4px rgba(255, 255, 255, 0.2)
                            `,
                            borderRadius: '2px',
                            overflow: 'visible'
                        }}
                    >
                        {/* Top-Right Corner Line */}
                        <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-white/40 pointer-events-none" />
                        {/* Bottom-Left Corner Line */}
                        <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-white/40 pointer-events-none" />

                        <span className="text-sm tracking-wide text-white">
                            How It Works
                        </span>
                    </div>
                </div>

                {/* Heading & Subheading */}
                <h2 data-ns-animate="true" data-delay="0.2" className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center max-w-3xl">
                    From Information to Understanding
                </h2>
                <p data-ns-animate="true" data-delay="0.3" className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16 text-center">
                    Follei collects information from connected systems, extracts meaningful insights, understands relationships, and transforms them into actionable business intelligence.
                </p>

                {/* DESKTOP TIMELINE (Wavy SVG Line + Node Labels) */}
                <div
                    style={{ aspectRatio: "1316 / 316" }}
                    className="hidden md:block w-full max-w-[1300px] relative mx-auto mt-6"
                >

                    {/* SVG Wavy Line Grid */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1316 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="wave-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                            <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Glow Path background */}
                        <path
                            className="gsap-timeline-glow-path"
                            d="M8 239.369C219.5 438.277 225 134.074 469.266 207.912C713.533 281.751 754.5 310.936 940.173 102.142C1125.85 -106.652 1308 97.03 1308 97.03"
                            stroke="url(#wave-line-grad)"
                            strokeWidth="7"
                            opacity="0.25"
                            filter="url(#wave-glow)"
                            fill="none"
                        />

                        {/* Solid Path foreground */}
                        <path
                            className="gsap-timeline-path"
                            d="M8 239.369C219.5 438.277 225 134.074 469.266 207.912C713.533 281.751 754.5 310.936 940.173 102.142C1125.85 -106.652 1308 97.03 1308 97.03"
                            stroke="url(#wave-line-grad)"
                            strokeWidth="3"
                            fill="none"
                        />

                        {/* Node Points */}
                        <circle cx="137" cy="308" r="5" fill="#fff" filter="drop-shadow(0 0 5px #3b82f6)" />
                        <circle cx="396" cy="196" r="5" fill="#fff" filter="drop-shadow(0 0 5px #06b6d4)" />
                        <circle cx="699" cy="263" r="5" fill="#fff" filter="drop-shadow(0 0 5px #06b6d4)" />
                        <circle cx="1121" cy="8" r="5" fill="#fff" filter="drop-shadow(0 0 5px #3b82f6)" />
                    </svg>

                    {/* Node 1 Label */}
                    <div className="gsap-timeline-label absolute left-[10.4%] top-[97.5%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-white/6 leading-none select-none">1</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-white text-base font-bold tracking-tight">Connect</h3>
                            <p className="text-[#CEEBFF] text-[12px] leading-relaxed font-light mt-1 max-w-[150px]">
                                Bring data from every business source.
                            </p>
                        </div>
                    </div>

                    {/* Node 2 Label */}
                    <div className="gsap-timeline-label absolute left-[30.1%] top-[66%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-white/6 leading-none select-none">2</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-white text-base font-bold tracking-tight">Understand</h3>
                            <p className="text-[#CEEBFF] text-[12px] leading-relaxed font-light mt-1 max-w-[150px]">
                                Learn products, customers, and processes.
                            </p>
                        </div>
                    </div>

                    {/* Node 3 Label */}
                    <div className="gsap-timeline-label absolute left-[53.1%] top-[87%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-white/6 leading-none select-none">3</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-white text-base font-bold tracking-tight">Organize</h3>
                            <p className="text-[#CEEBFF] text-[12px] leading-relaxed font-light mt-1 max-w-[150px]">
                                Build a unified intelligence layer.
                            </p>
                        </div>
                    </div>

                    {/* Node 4 Label */}
                    <div className="gsap-timeline-label absolute left-[85.2%] top-[8%] translate-x-[-160px] flex items-center gap-3">
                        <div className="flex flex-col text-left">
                            <h3 className="text-white text-base font-bold tracking-tight text-right">Activate</h3>
                            <p className="text-[#CEEBFF] text-[12px] leading-relaxed font-light mt-1 max-w-[150px] text-right">
                                Power AI workers across the business.
                            </p>
                        </div>
                        <span className="text-[75px] font-bold text-white/6 leading-none select-none">4</span>
                    </div>

                </div>

                {/* MOBILE TIMELINE (Vertical running line + layout nodes list) */}
                <div className="flex flex-col md:hidden gap-10 w-full max-w-[400px] mx-auto mt-12 text-left relative pl-8 select-none">
                    {/* Running gradient vertical track */}
                    <div className="absolute left-3.5 top-2 bottom-2 w-[2px] bg-linear-to-b from-[#3b82f6] via-[#06b6d4] to-[#3b82f6]" />

                    {/* Step 1 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_8px_#3b82f6] z-10" />
                        <span className="text-5xl font-bold text-white/6 leading-none select-none">1</span>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-bold tracking-tight">Connect</h3>
                            <p className="text-[#CEEBFF] text-sm font-light mt-1">
                                Bring data from every business source.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-cyan-500 shadow-[0_0_8px_#06b6d4] z-10" />
                        <span className="text-5xl font-bold text-white/6 leading-none select-none">2</span>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-bold tracking-tight">Understand</h3>
                            <p className="text-[#CEEBFF] text-sm font-light mt-1">
                                Learn products, customers, and processes.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-cyan-500 shadow-[0_0_8px_#06b6d4] z-10" />
                        <span className="text-5xl font-bold text-white/6 leading-none select-none">3</span>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-bold tracking-tight">Organize</h3>
                            <p className="text-[#CEEBFF] text-sm font-light mt-1">
                                Build a unified intelligence layer.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_8px_#3b82f6] z-10" />
                        <span className="text-5xl font-bold text-white/6 leading-none select-none">4</span>
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg font-bold tracking-tight">Activate</h3>
                            <p className="text-[#CEEBFF] text-sm font-light mt-1">
                                Power AI workers across the business.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
