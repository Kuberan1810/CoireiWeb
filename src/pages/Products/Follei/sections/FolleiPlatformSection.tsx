import React, { useState, useEffect, useRef } from "react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

// Image Imports
import folleihomescreen from "../../../../assets/images/services/folleihomescreen.png";
import knowledgeSystemImg from "../../../../assets/images/products/knowledge system.svg";
import aiWorkforceImg from "../../../../assets/images/products/aiworkforce.svg";
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

            tl.fromTo(container.querySelector(".gsap-image-showcase"),
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );

            tl.fromTo(container.querySelectorAll(".gsap-tab-item"),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                "-=0.5"
            );
        });

        return () => ctx.revert();
    }, []);

    // Animate active image change
    const handleTabClick = (tabId: string) => {
        if (tabId === activeTab) return;
        
        const img = imageContainerRef.current?.querySelector("img");
        if (img) {
            gsap.to(img, {
                opacity: 0,
                scale: 0.98,
                duration: 0.25,
                ease: "power2.inOut",
                onComplete: () => {
                    setActiveTab(tabId);
                    gsap.to(img, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        ease: "power2.out"
                    });
                }
            });
        } else {
            setActiveTab(tabId);
        }
    };

    const currentTab = tabData.find(t => t.id === activeTab) || tabData[0];

    return (
        <section ref={sectionRef} className="relative w-full py-16 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616] flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glow */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                {/* Badge with standard capsule style */}
                <div className="gsap-badge mb-6 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                        <Sparkles size={14} className="text-white/80" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                            The Follei Platform
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="gsap-heading text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 max-w-4xl mx-auto">
                    From Business Knowledge to Business Growth
                </h2>

                {/* Subheading */}
                <p className="gsap-subheading text-white/60 text-base sm:text-lg max-w-4xl mx-auto font-light leading-relaxed mb-8">
                    Connect your business once. Follei learns how your company operates, identifies opportunities, deploys AI workers, and continuously improves outcomes across the customer lifecycle.
                </p>

                {/* Central Image Showcase */}
                <div ref={imageContainerRef} className="gsap-image-showcase w-full max-w-[760px] mx-auto rounded-2xl border border-white/[0.08] bg-[#1a1a1a]/40 overflow-hidden shadow-2xl p-3 mb-10">
                    <img
                        src={currentTab.graphic}
                        alt={currentTab.title}
                        className="w-full h-auto rounded-xl object-cover shadow-inner"
                    />
                </div>

                {/* Interactive Grid Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
                    {tabData.map((tab) => {
                        const isActive = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className="gsap-tab-item flex flex-col items-start focus:outline-none group text-left w-full"
                            >
                                {/* Top status indicator line */}
                                <div className={`h-[2px] w-full mb-4 transition-all duration-300 ${isActive ? "bg-white" : "bg-white/10 group-hover:bg-white/30"}`} />
                                
                                {/* Title */}
                                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                                    {tab.title}
                                </h3>
                                
                                {/* Description */}
                                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-white/75" : "text-white/40 group-hover:text-white/50 font-light"}`}>
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
