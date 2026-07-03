import React, { useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

const DiscoveryIntelligence: React.FC = () => {
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
                            end: "+=200%", // Adjusted pin length
                            scrub: 1.5,
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
        <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 pt-8 md:pt-12 pb-20 md:pb-24 flex justify-center bg-white">
            <div className="w-full max-w-[1300px] flex flex-col items-center">

                {/* Premium Capsule Badge */}
                <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
                    <div
                        style={{
                            borderRadius: '10px',
                            overflow: 'visible'
                        }}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-white border border-[#004370]/30 text-[#004370] font-medium text-[16px]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                        <span className="tracking-wide">
                            Discovery Intelligence
                        </span>
                    </div>
                </div>

                {/* Heading & Subheading */}
                <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center max-w-3xl">
                    From First Conversation To <br />
                    <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                        Qualified Opportunity
                    </span>
                </h2>
                <p data-ns-animate="true" data-delay="0.3" className="text-[#5A5A5C] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16 text-center">
                    The SDR Worker uncovers customer needs, evaluates buying intent, and builds complete business context before confidently qualifying every opportunity.
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
                                <stop offset="0%" stopColor="#1079B7" />
                                <stop offset="50%" stopColor="#004370" />
                                <stop offset="100%" stopColor="#1079B7" />
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
                            opacity="0.15"
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
                        <circle cx="137" cy="308" r="6" fill="#fff" stroke="#1079B7" strokeWidth="2.5" />
                        <circle cx="396" cy="196" r="6" fill="#fff" stroke="#1079B7" strokeWidth="2.5" />
                        <circle cx="699" cy="263" r="6" fill="#fff" stroke="#1079B7" strokeWidth="2.5" />
                        <circle cx="1121" cy="8" r="6" fill="#fff" stroke="#1079B7" strokeWidth="2.5" />
                    </svg>

                    {/* Node 1 Label */}
                    <div className="gsap-timeline-label absolute left-[10.4%] top-[97.5%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-black/[0.04] leading-none select-none">1</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[#677C7E] text-[22px] font-bold tracking-tight">Connect</h3>
                            <p className="text-[#5A5A5C] text-[22px] leading-[1.2] font-normal mt-1 max-w-[241px]">
                                Initiate intelligent conversations instantly.
                            </p>
                        </div>
                    </div>

                    {/* Node 2 Label */}
                    <div className="gsap-timeline-label absolute left-[27.1%] top-[71%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-black/[0.04] leading-none select-none">2</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[#677C7E] text-[22px] font-bold tracking-tight">Understand</h3>
                            <p className="text-[#5A5A5C] text-[18px] leading-[1.2] font-normal mt-1 max-w-[241px]">
                                Understand business needs and customer goals.
                            </p>
                        </div>
                    </div>

                    {/* Node 3 Label */}
                    <div className="gsap-timeline-label absolute left-[53.1%] top-[87%] translate-x-[-40px] flex items-center gap-3">
                        <span className="text-[75px] font-bold text-black/[0.04] leading-none select-none">3</span>
                        <div className="flex flex-col text-left">
                            <h3 className="text-[#677C7E] text-[22px] font-bold tracking-tight">Qualify</h3>
                            <p className="text-[#5A5A5C] text-[18px] leading-[1.2] font-normal mt-1 max-w-[241px]">
                                Measure buying intent and sales readiness.
                            </p>
                        </div>
                    </div>

                    {/* Node 4 Label */}
                    <div className="gsap-timeline-label absolute left-[81.2%] top-[13%] translate-x-[-200px] flex gap-3">
                        <div className="flex flex-col">
                            <h3 className="text-[#677C7E] text-[22px] font-bold tracking-tight text-right">Handoff</h3>
                            <p className="text-[#5A5A5C] text-[18px] leading-[1.2] font-normal mt-1 max-w-[241px] text-right">
                                Deliver qualified opportunities with complete context.
                            </p>
                        </div>
                        <span className="text-[75px] font-bold text-black/[0.04] leading-none select-none">4</span>
                    </div>

                </div>

                {/* MOBILE TIMELINE (Vertical running line + layout nodes list) */}
                <div className="flex flex-col md:hidden gap-10 w-full max-w-[400px] mx-auto mt-12 text-left relative pl-8 select-none">
                    {/* Running gradient vertical track */}
                    <div className="absolute left-3.5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#1079B7] via-[#004370] to-[#1079B7]" />

                    {/* Step 1 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1079B7] shadow-[0_0_8px_rgba(16,121,183,0.3)] z-10" />
                        <span className="text-5xl font-bold text-black/[0.04] leading-none select-none">1</span>
                        <div className="flex flex-col">
                            <h3 className="text-[#677C7E] text-lg font-bold tracking-tight">Connect</h3>
                            <p className="text-[#5A5A5C] text-sm font-normal mt-1">
                                Initiate intelligent conversations instantly.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1079B7] shadow-[0_0_8px_rgba(16,121,183,0.3)] z-10" />
                        <span className="text-5xl font-bold text-black/[0.04] leading-none select-none">2</span>
                        <div className="flex flex-col">
                            <h3 className="text-[#677C7E] text-lg font-bold tracking-tight">Understand</h3>
                            <p className="text-[#5A5A5C] text-sm font-normal mt-1">
                                Understand business needs and customer goals.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1079B7] shadow-[0_0_8px_rgba(16,121,183,0.3)] z-10" />
                        <span className="text-5xl font-bold text-black/[0.04] leading-none select-none">3</span>
                        <div className="flex flex-col">
                            <h3 className="text-[#677C7E] text-lg font-bold tracking-tight">Qualify</h3>
                            <p className="text-[#5A5A5C] text-sm font-normal mt-1">
                                Measure buying intent and sales readiness.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="gsap-mobile-step relative flex gap-4 items-start">
                        <div className="absolute left-[-22px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1079B7] shadow-[0_0_8px_rgba(16,121,183,0.3)] z-10" />
                        <span className="text-5xl font-bold text-black/[0.04] leading-none select-none">4</span>
                        <div className="flex flex-col">
                            <h3 className="text-[#677C7E] text-lg font-bold tracking-tight">Handoff</h3>
                            <p className="text-[#5A5A5C] text-sm font-normal mt-1">
                                Deliver qualified opportunities with complete context.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DiscoveryIntelligence;