import React, { useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

const pillsRow1 = [
    "Qualify Leads",
    "Book Meetings",
    "Customer Support",
    "AI Workforce",
    "WhatsApp Engagement",
    "Customer Success"
];

const pillsRow2 = [
    "Email Follow-Ups",
    "Payment Collections",
    "Voice AI",
    "Renewal Management",
    "Revenue Growth",
    "Business Intelligence"
];

export const AIWorkforceSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Fade in header elements
            tl.fromTo(container.querySelector(".gsap-badge"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            tl.fromTo(container.querySelector(".gsap-heading"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );

            tl.fromTo(container.querySelector(".gsap-subheading"),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );

            // Staggered reveal of marquee rows
            tl.fromTo(container.querySelectorAll(".gsap-marquee-row"),
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    stagger: 0.15, 
                    duration: 0.8, 
                    ease: "power2.out" 
                },
                "-=0.3"
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 overflow-hidden bg-[#161616] flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

            <style>{`
                @keyframes marqueeLeft {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                @keyframes marqueeRight {
                    0% { transform: translate3d(-50%, 0, 0); }
                    100% { transform: translate3d(0, 0, 0); }
                }
                .gsap-marquee-container-left {
                    display: flex;
                    gap: 16px;
                    width: max-content;
                    animation: marqueeLeft 55s linear infinite;
                }
                .gsap-marquee-container-right {
                    display: flex;
                    gap: 16px;
                    width: max-content;
                    animation: marqueeRight 55s linear infinite;
                }
                .gsap-marquee-container-left:hover,
                .gsap-marquee-container-right:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-15 relative z-10">
                {/* Badge with capsule style */}
                <div className="gsap-badge mb-6 flex justify-center">
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
                            Autonomous Business Workforce
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="gsap-heading text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
                    Hire an <span className="bg-linear-to-r from-[#3b82f6] to-[#6fc5fe] bg-clip-text text-transparent">AI Workforce</span> That Learns Your Business
                </h2>

                {/* Subheading */}
                <p className="gsap-subheading text-white/60 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16">
                    Follei learns your products, customers, processes, and knowledge, then deploys AI workers across sales, support, collections, renewals, and customer success to drive growth around the clock.
                </p>
            </div>

            {/* Train / Marquee Container (Full Width) */}
            <div className="w-full flex flex-col gap-6 relative z-10 overflow-hidden">
                {/* Row 1 - Moves Left */}
                <div className="gsap-marquee-row w-full overflow-hidden relative flex py-1">
                    <div className="gsap-marquee-container-left">
                        {[...pillsRow1, ...pillsRow1, ...pillsRow1, ...pillsRow1].map((pill, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#1c1c1c]/80 border border-white/5 hover:border-[#3b82f6]/30 hover:bg-white/4 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-default shadow-lg shrink-0 whitespace-nowrap"
                            >
                                <div className="w-2.5 h-2.5 bg-[#3b82f6] rotate-45 rounded-[1px] shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-transform duration-300 group-hover:rotate-135" />
                                <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">{pill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="gsap-marquee-row w-full overflow-hidden relative flex py-1">
                    <div className="gsap-marquee-container-right">
                        {[...pillsRow2, ...pillsRow2, ...pillsRow2, ...pillsRow2].map((pill, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#1c1c1c]/80 border border-white/5 hover:border-[#3b82f6]/30 hover:bg-white/4 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-default shadow-lg shrink-0 whitespace-nowrap"
                            >
                                <div className="w-2.5 h-2.5 bg-[#3b82f6] rotate-45 rounded-[1px] shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-transform duration-300 group-hover:rotate-135" />
                                <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">{pill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIWorkforceSection;
