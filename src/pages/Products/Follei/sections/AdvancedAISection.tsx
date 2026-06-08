import React, { useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";
import { Megaphone, Gauge, BarChart3, Brain, Clock, Signal, Sparkles } from "lucide-react";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

export const AdvancedAISection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const card1 = container.querySelector(".gsap-card-1");
        const card2 = container.querySelector(".gsap-card-2");
        const card3 = container.querySelector(".gsap-card-3");

        const pillContent1 = container.querySelector(".gsap-pill-content-1");
        const pillContent2 = container.querySelector(".gsap-pill-content-2");
        const pillContent3 = container.querySelector(".gsap-pill-content-3");

        const cardContent1 = container.querySelector(".gsap-card-content-1");
        const cardContent2 = container.querySelector(".gsap-card-content-2");
        const cardContent3 = container.querySelector(".gsap-card-content-3");

        const bottomRow = container.querySelectorAll(".gsap-bottom-card");

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 768px)",
                isMobile: "(max-width: 767px)"
            }, (context) => {
                const { isDesktop } = context.conditions as { isDesktop: boolean };

                if (isDesktop) {
                    // Desktop Animation with Pinning and Scattered Morphing
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "+=180%", // Pinned scroll duration
                            scrub: 1.2,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        }
                    });

                    // Initial properties setup for morphing elements
                    gsap.set([card1, card2, card3], {
                        transformOrigin: "center center",
                    });

                    // Card 1: Smart Campaign Builder
                    tl.fromTo(card1,
                        {
                            x: -300,
                            y: -80,
                            width: "280px",
                            height: "56px",
                            borderRadius: "999px",
                            padding: "0px",
                            backgroundColor: "rgba(30, 30, 30, 0.65)",
                            borderColor: "rgba(111, 197, 254, 0.25)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        },
                        {
                            x: 0,
                            y: 0,
                            width: "100%",
                            height: "260px",
                            borderRadius: "24px",
                            padding: "32px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            ease: "power2.inOut"
                        },
                        0
                    );

                    // Card 2: Real-Time AI Insights
                    tl.fromTo(card2,
                        {
                            x: 0,
                            y: -180,
                            width: "280px",
                            height: "56px",
                            borderRadius: "999px",
                            padding: "0px",
                            backgroundColor: "rgba(30, 30, 30, 0.65)",
                            borderColor: "rgba(111, 197, 254, 0.25)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        },
                        {
                            x: 0,
                            y: 0,
                            width: "100%",
                            height: "260px",
                            borderRadius: "24px",
                            padding: "32px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            ease: "power2.inOut"
                        },
                        0
                    );

                    // Card 3: Data Driven Decision Making
                    tl.fromTo(card3,
                        {
                            x: 300,
                            y: -120,
                            width: "320px",
                            height: "56px",
                            borderRadius: "999px",
                            padding: "0px",
                            backgroundColor: "rgba(30, 30, 30, 0.65)",
                            borderColor: "rgba(111, 197, 254, 0.25)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        },
                        {
                            x: 0,
                            y: 0,
                            width: "100%",
                            height: "260px",
                            borderRadius: "24px",
                            padding: "32px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            ease: "power2.inOut"
                        },
                        0
                    );

                    // Decay Pill Bobbing to 0 on scroll
                    tl.fromTo(".gsap-bobber-1", { "--bob-y": "-12px" }, { "--bob-y": "0px", ease: "power1.inOut" }, 0);
                    tl.fromTo(".gsap-bobber-2", { "--bob-y": "-16px" }, { "--bob-y": "0px", ease: "power1.inOut" }, 0);
                    tl.fromTo(".gsap-bobber-3", { "--bob-y": "-10px" }, { "--bob-y": "0px", ease: "power1.inOut" }, 0);

                    // Cross-fade the pill centered text and the card rich content
                    tl.to([pillContent1, pillContent2, pillContent3], {
                        opacity: 0,
                        ease: "power1.inOut"
                    }, 0);

                    tl.to([cardContent1, cardContent2, cardContent3], {
                        opacity: 1,
                        pointerEvents: "auto",
                        ease: "power2.inOut"
                    }, 0.25);

                    // Bottom Row: Staggered Slide up & Fade in
                    tl.fromTo(bottomRow,
                        {
                            y: 150,
                            opacity: 0,
                            scale: 0.95
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            stagger: 0.15,
                            ease: "power2.out"
                        },
                        0.35
                    );
                } else {
                    // Mobile Animation: Normal scroll-trigger reveal (no pinning)
                    const cards = container.querySelectorAll(".gsap-mobile-card");

                    gsap.set(cards, { opacity: 0, y: 50 });

                    ScrollTrigger.batch(cards, {
                        onEnter: (elements) => {
                            gsap.to(elements, {
                                opacity: 1,
                                y: 0,
                                stagger: 0.15,
                                ease: "power2.out",
                                overwrite: "auto",
                                duration: 0.8
                            });
                        },
                        start: "top 85%"
                    });
                }
            });
        });

        // Ensure triggers are properly sized
        const timer = setTimeout(() => ScrollTrigger.refresh(), 300);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616] flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                {/* 1. Top Badge */}
                <div className="mb-6 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <Sparkles size={14} className="text-white/80" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                            Introducing the Future of AI Automation
                        </span>
                    </div>
                </div>

                {/* 2. Heading */}
                <h2 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 max-w-4xl mx-auto">
                    Where <span className="bg-gradient-to-r from-[#3b82f6] to-[#6fc5fe] bg-clip-text text-transparent">advanced AI</span> meets effortless execution.
                </h2>

                {/* 3. Subheading */}
                <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-light mb-32 md:mb-[280px] leading-relaxed">
                    Transform overwhelming data into meaningful actions with precision and speed.
                </p>

                {/* Desktop Version: 2 rows of 3 columns grid with GSAP Morphing */}
                <div className="hidden md:flex flex-col gap-6 w-full relative">

                    {/* Row 1: Morphing Pills to Cards */}
                    <div className="grid grid-cols-3 gap-6 text-left w-full items-stretch justify-center relative">

                        {/* Card 1: Smart Campaign Builder */}
                        <div className="w-full h-[260px] flex items-center justify-center relative">
                            <div className="gsap-bobber-1 w-full h-full flex items-center justify-center relative">
                                <div className="gsap-card-1 mx-auto relative flex flex-col justify-between overflow-hidden border">
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-1 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Smart Campaign Builder
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-1 opacity-0 w-full h-full flex flex-col justify-between pointer-events-none">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                                <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                                    Smart Campaign Builder
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                                <Megaphone size={22} />
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-base leading-relaxed font-light mt-6">
                                            Create AI-powered workflows and automate customer journeys with intelligent triggers and predictive insights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Real-Time AI Insights */}
                        <div className="w-full h-[260px] flex items-center justify-center relative">
                            <div className="gsap-bobber-2 w-full h-full flex items-center justify-center relative">
                                <div className="gsap-card-2 mx-auto relative flex flex-col justify-between overflow-hidden border">
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-2 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Real-Time AI Insights
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-2 opacity-0 w-full h-full flex flex-col justify-between pointer-events-none">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                                <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                                    Real-Time AI Insights
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                                <Gauge size={22} />
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-base leading-relaxed font-light mt-6">
                                            Monitor conversations as they happen, predict drop-off triggers, and optimize system workflows instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Data Driven Decision Making */}
                        <div className="w-full h-[260px] flex items-center justify-center relative">
                            <div className="gsap-bobber-3 w-full h-full flex items-center justify-center relative">
                                <div className="gsap-card-3 mx-auto relative flex flex-col justify-between overflow-hidden border">
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-3 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Data Driven Decision Making
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-3 opacity-0 w-full h-full flex flex-col justify-between pointer-events-none">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                                <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                                    Data Driven Decisions
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                                <BarChart3 size={22} />
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-base leading-relaxed font-light mt-6">
                                            Turn historical customer interaction logs into clear business strategies with zero configuration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Row 2: Bottom 3 sliding up cards */}
                    <div className="grid grid-cols-3 gap-6 text-left w-full mt-6">

                        {/* Card 4: Behavioral Intelligence */}
                        <div className="gsap-bottom-card relative rounded-3xl bg-[#181818] border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6FC5FE]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[260px]">
                            <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                        <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                            Behavioral Intelligence
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                        <Brain size={22} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    Track user clicks, page visits, and response delays to dynamically adapt AI chat agents on the fly.
                                </p>
                            </div>
                        </div>

                        {/* Card 5: Perfect Timing */}
                        <div className="gsap-bottom-card relative rounded-3xl bg-[#181818] border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6FC5FE]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[260px]">
                            <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                        <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                            Perfect Timing
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                        <Clock size={22} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    Trigger automated lead nurturing follow-ups exactly when a visitor is most active on your app.
                                </p>
                            </div>
                        </div>

                        {/* Card 6: Omnichannel Sync */}
                        <div className="gsap-bottom-card relative rounded-3xl bg-[#181818] border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6FC5FE]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[260px]">
                            <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                <div className="flex items-start justify-between w-full">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-[3px] h-10 bg-[#3b82f6] rounded-full" />
                                        <h3 className="text-white text-xl font-bold leading-tight max-w-[180px]">
                                            Omnichannel Sync
                                        </h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                        <Signal size={22} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    Unify chat logs from WhatsApp, SMS, Web, and Email into a single consolidated interface automatically.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile Version: Stacked list of 6 clean feature cards (no pinning) */}
                <div className="grid grid-cols-1 gap-6 text-left md:hidden w-full">

                    {/* Card 1 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Smart Campaign Builder
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <Megaphone size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Create AI-powered workflows and automate customer journeys with intelligent triggers and predictive insights.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Real-Time AI Insights
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <Gauge size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Monitor conversations as they happen, predict drop-off triggers, and optimize system workflows instantly.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Data Driven Decisions
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <BarChart3 size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Turn historical customer interaction logs into clear business strategies with zero configuration.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Behavioral Intelligence
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <Brain size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Track user clicks, page visits, and response delays to dynamically adapt AI chat agents on the fly.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Perfect Timing
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <Clock size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Trigger automated lead nurturing follow-ups exactly when a visitor is most active on your app.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="gsap-mobile-card relative rounded-2xl bg-[#181818] border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                        <div className="flex items-start justify-between w-full mb-6">
                            <div className="flex gap-3 items-center">
                                <div className="w-[3px] h-8 bg-[#3b82f6] rounded-full" />
                                <h3 className="text-white text-lg font-bold leading-tight">
                                    Omnichannel Sync
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3b82f6]">
                                <Signal size={18} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Unify chat logs from WhatsApp, SMS, Web, and Email into a single consolidated interface automatically.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AdvancedAISection;
