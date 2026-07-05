import React, { useState, useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

// Image Imports
import group1 from "../../../../assets/images/products/group1.svg";
import group2 from "../../../../assets/images/products/group2.svg";
import group3 from "../../../../assets/images/products/group3.svg";
import group4 from "../../../../assets/images/products/group4.svg";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

const tabData = [
    {
        id: "connect",
        title: "Connect",
        description: "Bring together your CRM, emails, WhatsApp, ERP, and customer conversations one intelligence layer.",
        graphic: group4
    },
    {
        id: "understand",
        title: "Understand",
        description: "Follei learns your business context, customer behavior, pricing models, policies, and workflows automatically.",
        graphic: group2
    },
    {
        id: "execute",
        title: "Execute",
        description: "AI workers qualify leads, answer customers, schedule meetings, collect payments, and manage customer success.",
        graphic: group3
    },
    {
        id: "improve",
        title: "Improve",
        description: "every interaction becomes a learning signal, helping Follei continuously optimize performance and outcomes.",
        graphic: group1
    }
];

export const FolleiPlatformSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("connect");
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Auto-play loop
    useEffect(() => {
        if (isPaused) return;

        const timer = setTimeout(() => {
            setActiveTab(prev => {
                const currentIndex = tabData.findIndex(t => t.id === prev);
                const nextIndex = (currentIndex + 1) % tabData.length;
                return tabData[nextIndex].id;
            });
        }, 4000); // 5 seconds per tab

        return () => clearTimeout(timer);
    }, [activeTab, isPaused]);

    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 1024px)",
                isMobile: "(max-width: 1023px)"
            }, () => {


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
            });
        });

        return () => ctx.revert();
    }, []);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <section ref={sectionRef} className="relative w-full pt-16 pb-20 md:pb-24 lg:pt-24 px-6 sm:px-10 md:px-15 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FFF7F0] flex flex-col items-center justify-start text-center">
            {/* Background Decorative Glow */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1079B7]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className=" relative z-10 flex flex-col justify-start items-center gap-10">
                {/* Top Header Area */}
                <div className="flex flex-col items-center">
                    {/* Badge with exact Figma styling from Overview */}
                    <div className="gsap-badge mb-2 flex justify-center">
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
                    <h2 className="gsap-heading text-[#0A0E29] text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] font-medium tracking-tight leading-[1.1] mb-2 max-w-4xl mx-auto">
                        From Business Knowledge to <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Business Growth</span>
                    </h2>

                    {/* Subheading */}
                    <p className="gsap-subheading text-[#475569] text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-normal leading-relaxed">
                        Intelligence becomes action. Connect your business to Follei once—it learns how you operate, identifies where you can grow, deploys AI workers that truly understand your business, and continuously optimizes every customer interaction.
                    </p>
                </div>

                <div className="w-full relative flex flex-col items-center justify-start pb-2">
                    <div ref={imageContainerRef} className="gsap-image-showcase w-full max-w-7xl aspect-[1200/672] overflow-hidden relative">
                        {/* Invisible spacer image to maintain responsive height naturally */}
                        <img
                            src={tabData[0].graphic}
                            alt="spacer"
                            className="w-full h-full opacity-0 pointer-events-none select-none mx-auto object-contain"
                        />

                        {tabData.map((tab) => {
                            const isVisible = tab.id === activeTab;
                            return (
                                <img
                                    key={tab.id}
                                    src={tab.graphic}
                                    alt={tab.title}
                                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
                                        }`}
                                />
                            );
                        })}
                    </div>

                    {/* Bottom Interactive Grid Tabs */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl w-full mx-auto text-left z-20 relative">
                        {tabData.map((tab) => {
                            const isActive = tab.id === activeTab;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    onMouseEnter={() => {
                                        handleTabClick(tab.id);
                                        setIsPaused(true);
                                    }}
                                    onMouseLeave={() => setIsPaused(false)}
                                    className="gsap-tab-item flex flex-col items-start focus:outline-none group text-left w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                                >
                                    {/* Top status indicator line */}
                                    <div className="relative h-[4px] w-full mb-3 bg-[#1079B720] group-hover:bg-slate-300 overflow-hidden rounded-full">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-[#1079B7] rounded-full"
                                            style={{
                                                width: isActive ? '100%' : '0%',
                                                transition: isActive 
                                                    ? (isPaused ? 'width 0.4s ease-out' : 'width 5s linear')
                                                    : 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-lg lg:text-2xl font-medium mb-1 transition-colors duration-300 ${isActive ? "text-[#0A0E29]" : "text-[#0A0E2950] group-hover:text-slate-500"}`}>
                                        {tab.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-[14px] font-medium leading-relaxed transition-colors duration-300 ${isActive ? "text-[#5A5A5C]" : "text-[#262626]/50 group-hover:text-slate-400 font-light"}`}>
                                        {tab.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FolleiPlatformSection;
