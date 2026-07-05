import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

// Image Imports
import businessIntelligenceImg from "../../../../assets/images/products/businessintelligence.svg";
import knowledgeSystemImg from "../../../../assets/images/products/knowledge system.svg";
import revenueIntelligenceImg from "../../../../assets/images/products/revenueintelligence.svg";
import customerIntelligenceImg from "../../../../assets/images/products/customerintelligence.svg";
import aiWorkforceImg from "../../../../assets/images/products/aiworkforce.svg";
import learningEngineImg from "../../../../assets/images/products/learningengine.svg";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

// Register ScrollTrigger plugin unconditionally to ensure it is active on the global GSAP instance
gsap.registerPlugin(ScrollTrigger);

const cardsData = [
    {
        title: "Business Intelligence",
        description: "Learns your business from websites, documents, CRM, ERP, emails, and communication channels.",
        graphic: businessIntelligenceImg
    },
    {
        title: "Knowledge System",
        description: "Creates a unified knowledge layer from products, pricing, policies, and customer interactions.",
        graphic: knowledgeSystemImg
    },
    {
        title: "Revenue Intelligence",
        description: "Identifies buying intent, prioritizes leads, and predicts conversion opportunities.",
        graphic: revenueIntelligenceImg
    },
    {
        title: "Customer Intelligence",
        description: "Identifies buying intent, prioritizes leads, and predicts conversion opportunities.",
        graphic: customerIntelligenceImg
    },
    {
        title: "AI Workforce",
        description: "Deploys AI workers across sales, support, collections, renewals, and customer success.",
        graphic: aiWorkforceImg
    },
    {
        title: "Learning Engine",
        description: "Continuously learns from every interaction to improve decisions and outcomes.",
        graphic: learningEngineImg
    }
];

export const AdvancedAISection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

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
                            scrub: true,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        }
                    });

                    // Initial properties setup for morphing elements
                    gsap.set([card1, card2, card3], {
                        transformOrigin: "center center",
                    });

                    // Card 1: Business Intelligence
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
                            height: "460px",
                            borderRadius: "20px",
                            padding: "0px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            force3D: true,
                            ease: "power2.inOut"
                        },
                        0
                    );

                    // Card 2: Knowledge System
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
                            height: "460px",
                            borderRadius: "20px",
                            padding: "0px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            force3D: true,
                            ease: "power2.inOut"
                        },
                        0
                    );

                    // Card 3: Revenue Intelligence
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
                            height: "460px",
                            borderRadius: "20px",
                            padding: "0px",
                            backgroundColor: "#181818",
                            borderColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(0px)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            force3D: true,
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
                            force3D: true,
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
                                force3D: true,
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
        <section ref={sectionRef} className="relative w-full min-h-screen py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-white  flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                {/* 1. Top Badge */}
                <div className="mb-6 flex justify-center">
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
                            Introducing the Future of AI Automation
                        </span>
                    </div>
                </div>

                {/* 2. Heading */}
                <h2 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 max-w-4xl mx-auto">
                    Where <span className="bg-linear-to-r from-[#3b82f6] to-[#6fc5fe] bg-clip-text text-transparent">advanced AI</span> meets effortless execution.
                </h2>

                {/* 3. Subheading */}
                <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-light mb-16 md:mb-[140px] leading-relaxed">
                    Transform overwhelming data into meaningful actions with precision and speed.
                </p>

                {/* Desktop Version: 2 rows of 3 columns grid with GSAP Morphing */}
                <div className="hidden md:flex flex-col gap-6 w-full relative">

                    {/* Row 1: Morphing Pills to Cards */}
                    <div className="grid grid-cols-3 gap-6 text-left w-full items-stretch justify-center relative">

                        {/* Card 1: Business Intelligence */}
                        <div className="w-full h-[460px] flex items-center justify-center relative">
                            <div className="gsap-bobber-1 w-full h-full flex items-center justify-center relative">
                                <div
                                    onClick={() => navigate('/products/follei/business-intelligence')}
                                    className="gsap-card-1 mx-auto relative flex flex-col overflow-hidden border border-white/5 rounded-[20px] cursor-pointer"
                                >
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-1 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Business Intelligence
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-1 opacity-0 absolute inset-0 flex flex-col pointer-events-none">
                                        <div className="w-full h-full flex flex-col">
                                            {/* Illustration/Graphic Container */}
                                            <div className="w-full h-[280px] overflow-hidden">
                                                <img
                                                    src={businessIntelligenceImg}
                                                    alt="Business Intelligence"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Text block with padding */}
                                            <div className="p-5 flex flex-col justify-start">
                                                <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                                    Business Intelligence
                                                </h3>
                                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                                    Learns your business from websites, documents, CRM, ERP, emails, and communication channels.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Knowledge System */}
                        <div className="w-full h-[460px] flex items-center justify-center relative">
                            <div className="gsap-bobber-2 w-full h-full flex items-center justify-center relative">
                                <div className="gsap-card-2 mx-auto relative flex flex-col overflow-hidden border border-white/5 rounded-[20px]">
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-2 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Knowledge System
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-2 opacity-0 absolute inset-0 flex flex-col pointer-events-none">
                                        <div className="w-full h-full flex flex-col">
                                            {/* Illustration/Graphic Container */}
                                            <div className="w-full h-[280px] overflow-hidden">
                                                <img
                                                    src={knowledgeSystemImg}
                                                    alt="Knowledge System"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Text block with padding */}
                                            <div className="p-5 flex flex-col justify-start">
                                                <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                                    Knowledge System
                                                </h3>
                                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                                    Creates a unified knowledge layer from products, pricing, policies, and customer interactions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Revenue Intelligence */}
                        <div className="w-full h-[460px] flex items-center justify-center relative">
                            <div className="gsap-bobber-3 w-full h-full flex items-center justify-center relative">
                                <div className="gsap-card-3 mx-auto relative flex flex-col overflow-hidden border border-white/5 rounded-[20px]">
                                    {/* Pill content (centered text) */}
                                    <div className="gsap-pill-content-3 absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-white text-[15px] font-medium tracking-wide whitespace-nowrap">
                                            Revenue Intelligence
                                        </span>
                                    </div>

                                    {/* Card content (rich card layout) */}
                                    <div className="gsap-card-content-3 opacity-0 absolute inset-0 flex flex-col pointer-events-none">
                                        <div className="w-full h-full flex flex-col">
                                            {/* Illustration/Graphic Container */}
                                            <div className="w-full h-[280px] overflow-hidden">
                                                <img
                                                    src={revenueIntelligenceImg}
                                                    alt="Revenue Intelligence"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Text block with padding */}
                                            <div className="p-5 flex flex-col justify-start">
                                                <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                                    Revenue Intelligence
                                                </h3>
                                                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                                    Identifies buying intent, prioritizes leads, and predicts conversion opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Row 2: Bottom 3 sliding up cards */}
                    <div className="grid grid-cols-3 gap-6 text-left w-full mt-6">

                        {/* Card 4: Customer Intelligence */}
                        <div className="gsap-bottom-card relative rounded-[20px] bg-[#181818] border border-white/5 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[460px] group">
                            <div className="w-full h-full flex flex-col">
                                {/* Illustration/Graphic Container */}
                                <div className="w-full h-[280px] overflow-hidden">
                                    <img
                                        src={customerIntelligenceImg}
                                        alt="Customer Intelligence"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Text Container */}
                                <div className="p-5 flex flex-col justify-start">
                                    <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                        Customer Intelligence
                                    </h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                        Identifies buying intent, prioritizes leads, and predicts conversion opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5: AI Workforce */}
                        <div className="gsap-bottom-card relative rounded-[20px] bg-[#181818] border border-white/5 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[460px] group">
                            <div className="w-full h-full flex flex-col">
                                {/* Illustration/Graphic Container */}
                                <div className="w-full h-[280px] overflow-hidden">
                                    <img
                                        src={aiWorkforceImg}
                                        alt="AI Workforce"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Text Container */}
                                <div className="p-5 flex flex-col justify-start">
                                    <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                        AI Workforce
                                    </h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                        Deploys AI workers across sales, support, collections, renewals, and customer success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 6: Learning Engine */}
                        <div className="gsap-bottom-card relative rounded-[20px] bg-[#181818] border border-white/5 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[460px] group">
                            <div className="w-full h-full flex flex-col">
                                {/* Illustration/Graphic Container */}
                                <div className="w-full h-[280px] overflow-hidden">
                                    <img
                                        src={learningEngineImg}
                                        alt="Learning Engine"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Text Container */}
                                <div className="p-5 flex flex-col justify-start">
                                    <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mb-2.5 text-left">
                                        Learning Engine
                                    </h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light text-left">
                                        Continuously learns from every interaction to improve decisions and outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile Version: Stacked list of 6 clean feature cards (no pinning) */}
                <div className="grid grid-cols-1 gap-6 text-left md:hidden w-full">
                    {cardsData.map((card, idx) => (
                        <div
                            key={idx}
                            onClick={idx === 0 ? () => navigate('/products/follei/business-intelligence') : undefined}
                            className={`gsap-mobile-card relative rounded-[20px] bg-[#181818] border border-white/5 flex flex-col overflow-hidden shadow-xl ${idx === 0 ? 'cursor-pointer' : ''}`}
                        >
                            <div className="w-full h-[280px] overflow-hidden">
                                <img
                                    src={card.graphic}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5 flex flex-col justify-start">
                                <h3 className="text-white text-lg font-bold leading-tight mb-2.5">
                                    {card.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed font-light">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AdvancedAISection;
