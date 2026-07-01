import React, { useState, useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

// Image Imports
import folleihomescreen from "../../../../assets/images/products/folleinewdashboard.svg";
import knowledgeSystemImg from "../../../../assets/images/products/understand.svg";
import aiWorkforceImg from "../../../../assets/images/products/execute.svg";
import learningEngineImg from "../../../../assets/images/products/learningengine.svg";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

const tabData = [
    {
        id: "connect",
        title: "Connect",
        description: "Bring together your CRM, emails, WhatsApp, ERP, and customer conversations one intelligence layer.",
        graphic: folleihomescreen
    },
    {
        id: "understand",
        title: "Understand",
        description: "Follei learns your business context, customer behavior, pricing models, policies, and workflows automatically.",
        graphic: knowledgeSystemImg
    },
    {
        id: "execute",
        title: "Execute",
        description: "AI workers qualify leads, answer customers, schedule meetings, collect payments, and manage customer success.",
        graphic: aiWorkforceImg
    },
    {
        id: "improve",
        title: "Improve",
        description: "every interaction becomes a learning signal, helping Follei continuously optimize performance and outcomes.",
        graphic: learningEngineImg
    }
];

export const FolleiPlatformSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("connect");
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const scrollTriggerRef = useRef<any>(null);

    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 1024px)",
                isMobile: "(max-width: 1023px)"
            }, (context) => {
                const { isDesktop } = context.conditions as { isDesktop: boolean };

                // Entrance animation for content
                const entranceTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });

                entranceTimeline.fromTo(container.querySelector(".gsap-badge"),
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );

                entranceTimeline.fromTo(container.querySelector(".gsap-heading"),
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                );

                entranceTimeline.fromTo(container.querySelector(".gsap-subheading"),
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                );

                entranceTimeline.fromTo(container.querySelector(".gsap-image-showcase"),
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.4"
                );

                entranceTimeline.fromTo(container.querySelectorAll(".gsap-tab-item"),
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                    "-=0.5"
                );

                if (isDesktop) {
                    let activeIndex = 0;

                    const st = ScrollTrigger.create({
                        trigger: container,
                        start: "top 80px",
                        end: "+=2400",
                        pin: true,
                        scrub: 1.5,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            let index = Math.floor(progress * 4);
                            if (index > 3) index = 3;
                            if (index < 0) index = 0;

                            if (index !== activeIndex) {
                                activeIndex = index;
                                setActiveTab(tabData[index].id);
                            }

                            // Update progress lines
                            const lines = container.querySelectorAll(".gsap-tab-line-fill");
                            lines.forEach((line, i) => {
                                let lineProgress = 0;
                                if (i < index) {
                                    lineProgress = 1;
                                } else if (i === index) {
                                    lineProgress = (progress - i * 0.25) / 0.25;
                                } else {
                                    lineProgress = 0;
                                }
                                lineProgress = Math.max(0, Math.min(1, lineProgress));
                                gsap.set(line, { scaleX: lineProgress, transformOrigin: "left center" });
                            });
                        }
                    });

                    scrollTriggerRef.current = st;
                } else {
                    // Clean up inline styles for mobile to ensure CSS classes work correctly
                    const lines = container.querySelectorAll(".gsap-tab-line-fill");
                    lines.forEach((line) => {
                        gsap.set(line, { clearProps: "transform" });
                    });
                    scrollTriggerRef.current = null;
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const handleTabClick = (tabId: string) => {
        const index = tabData.findIndex(t => t.id === tabId);
        if (index === -1) return;

        const st = scrollTriggerRef.current;
        if (st) {
            const startScroll = st.start;
            const scrollDistance = 2400; // matching the end: "+=2400"
            const targetScroll = startScroll + index * (scrollDistance / 4) + 10;
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth"
            });
        } else {
            setActiveTab(tabId);
        }
    };

    return (
        <section ref={sectionRef} className="relative w-full lg:h-[calc(100vh-80px)] py-8 lg:py-6 px-6 sm:px-10 md:px-15 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FFF7F0] flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glow */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1079B7]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full h-full mx-auto relative z-10 flex flex-col justify-start items-center gap-6 ">
                {/* Top Header Area */}
                <div className="flex flex-col items-center">
                    {/* Badge with exact Figma styling from Overview */}
                    <div className="gsap-badge mb-3 flex justify-center">
                        <div 
                            style={{
                                borderWidth: '0.5px',
                                borderColor: '#004370',
                                borderRadius: '10px',
                                paddingTop: '4px',
                                paddingBottom: '4px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                gap: '10px'
                            }}
                            className="inline-flex items-center bg-white border"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
                            <span className="text-xs font-medium text-[#0A0E29]">The Follei Platform</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="gsap-heading text-[#0A0E29] text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-medium tracking-tight leading-[1.2] mb-2 max-w-4xl mx-auto">
                        From Business Knowledge to <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Business Growth</span>
                    </h2>

                    {/* Subheading */}
                    <p className="gsap-subheading text-[#475569] text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-normal leading-relaxed">
                        Connect your business once. Follei learns how your company operates, identifies opportunities, deploys AI workers, and continuously improves outcomes across the customer lifecycle.
                    </p>
                </div>

                <div className="w-full flex items-center justify-center">
                    <div ref={imageContainerRef} className="gsap-image-showcase w-full max-w-[740px] aspect-[16/10] rounded-2xl border border-slate-200 bg-slate-50/30 overflow-hidden shadow-xl p-2 relative">
                        {/* Invisible spacer image to maintain responsive height naturally */}
                        <img
                            src={tabData[0].graphic}
                            alt="spacer"
                            className="w-full h-auto opacity-0 pointer-events-none select-none mx-auto object-contain"
                        />
                        
                        {tabData.map((tab) => {
                            const isVisible = tab.id === activeTab;
                            return (
                                <img
                                    key={tab.id}
                                    src={tab.graphic}
                                    alt={tab.title}
                                    className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl object-contain shadow-inner transition-all duration-500 ease-in-out ${
                                        isVisible ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Interactive Grid Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full mx-auto text-left">
                    {tabData.map((tab) => {
                        const isActive = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className="gsap-tab-item flex flex-col items-start focus:outline-none group text-left w-full cursor-pointer"
                            >
                                {/* Top status indicator line */}
                                <div className="relative h-[2px] w-full mb-3 bg-slate-200 group-hover:bg-slate-300 overflow-hidden">
                                    <div 
                                        className={`gsap-tab-line-fill absolute top-0 left-0 h-full w-full bg-[#0A0E29] transition-transform duration-300 origin-left ${
                                            isActive ? "scale-x-100" : "scale-x-0"
                                        }`} 
                                    />
                                </div>
                                
                                {/* Title */}
                                <h3 className={`text-base lg:text-lg font-semibold mb-1 transition-colors duration-300 ${isActive ? "text-[#0A0E29]" : "text-[#94A3B8] group-hover:text-slate-500"}`}>
                                    {tab.title}
                                </h3>
                                
                                {/* Description */}
                                <p className={`text-xs leading-relaxed transition-colors duration-300 ${isActive ? "text-[#475569]" : "text-[#94A3B8]/80 group-hover:text-slate-400 font-light"}`}>
                                    {tab.description}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FolleiPlatformSection;
