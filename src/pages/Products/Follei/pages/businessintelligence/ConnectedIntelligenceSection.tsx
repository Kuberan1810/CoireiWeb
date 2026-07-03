import React, { useEffect, useRef } from "react";
import { BookOpen, Boxes, User, Settings } from "lucide-react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

const ConnectedItems = [
    {
        title: "Knowledge & Policies",
        description: "Connects documents, SOPs, policies, FAQs, and company knowledge.",
        icon: BookOpen,
    },
    {
        title: "Products & Services",
        description: "Learns your offerings, features, pricing, and value propositions.",
        icon: Boxes,
    },
    {
        title: "Customers & Conversations",
        description: "Understands customer needs, interactions, buying signals, and engagement patterns.",
        icon: User,
    },
    {
        title: "Processes & Operations",
        description: "Maps sales, support, onboarding, collections, and operational workflows.",
        icon: Settings,
    },
];

export const ConnectedIntelligenceSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 1024px)",
                isMobile: "(max-width: 1023px)"
            }, (context) => {
                const { isDesktop } = context.conditions as { isDesktop: boolean };

                if (isDesktop) {
                    const cards = section.querySelectorAll(".gsap-stacked-card");

                    // Set initial styling for the stacked state
                    // All cards positioned at y=0, smaller scales and opacity=0 except Card 0
                    cards.forEach((card, idx) => {
                        if (idx > 0) {
                            gsap.set(card, {
                                y: 0,
                                scale: 0.95 - (idx * 0.03),
                                opacity: 0,
                                zIndex: 10 - idx,
                                transformOrigin: "center top",
                            });
                        } else {
                            gsap.set(card, {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                zIndex: 10,
                                transformOrigin: "center top",
                            });
                        }
                    });

                    // GSAP timeline that pins Section 2 and spreads cards out step-by-step
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top 15%",
                            end: "+=120%", // Scroll distance for pinning
                            scrub: true,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        }
                    });

                    // Animate cards one by one from stacked y=0 to vertical offset (idx * 160px)
                    cards.forEach((card, idx) => {
                        if (idx > 0) {
                            tl.to(card, {
                                y: idx * 160,
                                scale: 1,
                                opacity: 1,
                                duration: 1,
                                ease: "power2.inOut",
                            }, (idx - 1) * 0.85); // Stagger step triggers
                        }
                    });
                } else {
                    // Mobile Fallback: Simple Scroll Trigger reveal batch
                    const cards = section.querySelectorAll(".gsap-stacked-card");
                    gsap.set(cards, { opacity: 0, y: 30 });
                    ScrollTrigger.batch(cards, {
                        onEnter: (elements) => {
                            gsap.to(elements, {
                                opacity: 1,
                                y: 0,
                                stagger: 0.15,
                                ease: "power2.out",
                                duration: 0.6,
                                overwrite: "auto"
                            });
                        },
                        start: "top 90%"
                    });
                }
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-12 flex justify-center bg-[#161616]">
            <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Text Content */}
                <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-32">

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
                                Connected Intelligence
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 data-ns-animate="true" data-delay="0.2" className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-6">
                        A Complete Understanding of Your Business
                    </h2>

                    {/* Description with exact styling */}
                    <p
                        data-ns-animate="true"
                        data-delay="0.3"
                        style={{
                            fontSize: '20px',
                            letterSpacing: '0px',
                            lineHeight: '26px',
                            color: 'rgba(212, 228, 250, 0.9)',
                        }}
                        className="font-normal mb-8 max-w-xl animate-fade-in"
                    >
                        Follei continuously learns from every source of information to build a living understanding of your products, customers, operations, and business knowledge.
                    </p>
                </div>

                {/* Right Column: 4 Category Cards List (Stacked to revealed list animation) */}
                <div className="lg:col-span-7 relative w-full h-[650px] lg:h-[660px]">
                    {ConnectedItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={idx}
                                className="gsap-stacked-card w-full lg:absolute lg:top-0 lg:left-0 flex items-center gap-6 py-6 border-b border-white/10 h-[160px] bg-[#161616]"
                            >
                                {/* Icon Wrapper (w-20 h-20, no bg, size 40) */}
                                <div className="shrink-0 w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:border-[#3b82f6]/30">
                                    <IconComponent size={40} className="text-[#E3E3E0]" />
                                </div>

                                {/* Content */}
                                <div className="grow flex flex-col text-left justify-start">
                                    <h3 className="text-white text-xl font-medium tracking-tight mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-[15px] leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
