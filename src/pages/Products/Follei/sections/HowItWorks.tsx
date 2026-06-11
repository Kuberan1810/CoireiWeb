import React, { useEffect, useRef, useState } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

// ----------------------------------------------------
// 1. TIMELINE TICK-RULER COMPONENT
// ----------------------------------------------------
const TimelineRuler: React.FC<{ activeCenterIdx: number; totalTicks: number }> = ({ activeCenterIdx, totalTicks }) => {
    return (
        <div className="absolute left-0 top-0 bottom-0 w-[200px] flex flex-col justify-between items-start select-none pointer-events-none">
            {/* Main vertical track line */}
            <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-white/10" />

            {/* Individual ruler ticks */}
            {Array.from({ length: totalTicks }).map((_, idx) => {
                const diff = Math.abs(idx - activeCenterIdx);

                // Smooth interpolation: peak width is 42px, decaying to 12px at diff >= 3
                const ratio = Math.max(0, 1 - diff / 3); // 1.0 at center, 0.0 at distance >= 3
                const width = `${12 + (42 - 12) * ratio}px`;
                const opacity = 0.35 + (1.0 - 0.35) * ratio;
                const bg = `rgba(255, 255, 255, ${opacity})`;

                return (
                    <div
                        key={idx}
                        style={{ width, opacity, backgroundColor: bg }}
                        className="h-[1.5px] z-10 rounded-full"
                    />
                );
            })}
        </div>
    );
};

import captureCustomerImg from "../../../../assets/images/products/capturecustomer.svg";
import customerIntentImg from "../../../../assets/images/products/customerintent.svg";
import aiFollowupImg from "../../../../assets/images/products/aifollowup.svg";
import convertCustomerImg from "../../../../assets/images/products/convertcustomer.svg";

const cards = [
    {
        title: "Capture Customer Activity",
        desc: "Automatically collect leads and track customer activities across your website, forms, calls, WhatsApp, emails, and campaigns. Every interaction is recorded in one centralized platform.",
        graphic: <img src={captureCustomerImg} alt="Capture Customer Activity" className="w-full aspect-[470/342] object-contain mb-5" />
    },
    {
        title: "Understand Customer Intent",
        desc: "Our AI engine evaluates customer behavior, engagement history, and conversation patterns to identify purchase intent and prioritize high-value opportunities.",
        graphic: <img src={customerIntentImg} alt="Understand Customer Intent" className="w-full aspect-[470/342] object-contain mb-5" />
    },
    {
        title: "Automate Smart Follow-Ups",
        desc: "Trigger intelligent follow-ups through Calls, WhatsApp, SMS, and Email based on customer actions. Deliver the right message at the right time without manual effort.",
        graphic: <img src={aiFollowupImg} alt="Automate Smart Follow-Ups" className="w-full aspect-[470/342] object-contain mb-5" />
    },
    {
        title: "Convert More Customers",
        desc: "Nurture leads continuously through dynamic, contextual conversations that address user objections and drive final product purchases.",
        graphic: <img src={convertCustomerImg} alt="Convert More Customers" className="w-full aspect-[470/342] object-contain mb-5" />
    }
];

export const HowItWorks: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rulerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeStep, setActiveStep] = useState(0);
    const [activeCenterIdx, setActiveCenterIdx] = useState(12);
    const totalTicks = 70;

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const ctx = gsap.context(() => {
            // Continuous ruler tick highlight tracking scroll progress and active step sync
            ScrollTrigger.create({
                trigger: "#follei-step-card-0",
                start: "center center",
                endTrigger: `#follei-step-card-${cards.length - 1}`,
                end: "center center",
                scrub: true,
                onUpdate: (self) => {
                    if (!rulerRef.current) return;
                    const firstEl = stepRefs.current[0];
                    const lastEl = stepRefs.current[cards.length - 1];
                    if (!firstEl || !lastEl) return;

                    const rulerRect = rulerRef.current.getBoundingClientRect();
                    const firstRect = firstEl.getBoundingClientRect();
                    const lastRect = lastEl.getBoundingClientRect();

                    const firstCenterY = (firstRect.top + firstRect.height / 2) - rulerRect.top;
                    const lastCenterY = (lastRect.top + lastRect.height / 2) - rulerRect.top;

                    // Interpolate position based on scroll progress
                    const currentY = firstCenterY + (lastCenterY - firstCenterY) * self.progress;
                    const relativeY = currentY / rulerRect.height;

                    const idx = relativeY * (totalTicks - 1);
                    const clampedIdx = Math.max(0, Math.min(totalTicks - 1, idx));
                    setActiveCenterIdx(clampedIdx);

                    // Synchronize active text highlight index based on progress
                    const activeIdx = Math.max(0, Math.min(cards.length - 1, Math.round(self.progress * (cards.length - 1))));
                    setActiveStep(activeIdx);
                }
            });
        }, container);

        // Refresh triggers once layout is settled/fully loaded
        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);
        const timer = setTimeout(() => ScrollTrigger.refresh(), 1200);

        return () => {
            ctx.revert();
            window.removeEventListener("load", handleLoad);
            clearTimeout(timer);
        };
    }, []);

    const scrollToStep = (index: number) => {
        const el = document.getElementById(`follei-step-card-${index}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section ref={containerRef} className="relative w-full py-24 px-6 md:px-12 lg:px-16 bg-[#161616] text-[#E3E3E0] overflow-visible">
            {/* Background Glows */}
            <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-transparent rounded-full blur-[140px] pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Left Sticky Column (Desktop Only Sticky) */}
                    <div className="col-span-1 md:col-span-5 md:sticky md:top-[12vh] flex flex-col items-start pr-0 md:pr-10 pl-0 md:pl-12 relative">
                        {/* Desktop-only Ruler that spans the entire sticky column */}
                        <div ref={rulerRef} className="absolute left-0 top-0 bottom-0 w-[120px] hidden md:block select-none pointer-events-none">
                            <TimelineRuler activeCenterIdx={activeCenterIdx} totalTicks={totalTicks} />
                        </div>

                        {/* 1. Badge */}
                        <div className="mb-6 flex justify-start">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <Sparkles size={14} className="text-white/80" />
                                <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                                    How It Works
                                </span>
                            </div>
                        </div>

                        {/* 2. Heading */}
                        <h2 className="text-white text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-[1.2] mb-5 text-left">
                            AI-Powered <span className="text-[#3b82f6]">Customer Engagement</span> in Four Simple Steps
                        </h2>

                        {/* 3. Subheading */}
                        <p className="text-white/60 text-base leading-relaxed font-light text-left mb-10">
                            From first interaction to final conversion, Follei AI intelligently tracks, analyzes, and engages every customer ensuring no opportunity is ever missed.
                        </p>

                        {/* 4. Desktop Steps List */}
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-12 select-none">
                                {cards.map((step, idx) => {
                                    const active = activeStep === idx;
                                    return (
                                        <div
                                            key={idx}
                                            ref={(el) => { stepRefs.current[idx] = el; }}
                                            onClick={() => scrollToStep(idx)}
                                            className={`cursor-pointer transition-all duration-300 transform origin-left flex flex-col text-left py-2 ${active
                                                ? "text-white scale-105 font-semibold translate-x-2"
                                                : "text-white/40 hover:text-white/70 hover:translate-x-1 font-light"
                                                }`}
                                        >
                                            <span className="text-lg tracking-wide">{step.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Scrolling Column (Cards List) */}
                    <div className="col-span-1 md:col-span-7 flex flex-col gap-6 md:gap-8 md:pb-[5vh]">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                id={`follei-step-card-${i}`}
                                className="w-full rounded-[24px] border border-white/5 bg-[#181818] p-8 flex flex-col transition-all duration-300 hover:border-[#3b82f6]/30 group"
                            >

                                {/* SVG Graphic Visual Area */}
                                {card.graphic}

                                {/* Text Details */}
                                <div className="flex flex-col mt-4">
                                    {/* Mobile-only Step Label */}
                                    <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-2 md:hidden">Step {i + 1}</span>

                                    <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-4">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;