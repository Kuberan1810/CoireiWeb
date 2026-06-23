import React from "react";
import { Phone, MessageSquare, Mail, TrendingUp, Rocket, CreditCard, Network, Sparkles } from "lucide-react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

// Register plugin only if we are using the local bundler fallback
if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    innerRef: React.RefObject<HTMLDivElement | null>;
}

const Card: React.FC<CardProps> = ({ title, description, icon, innerRef }) => {
    return (
        <div 
            ref={innerRef}
            style={{ opacity: 0, willChange: "transform, opacity" }}
            className="w-full transform-gpu [backface-visibility:hidden]"
        >
            <div className="w-full min-h-[180px] bg-[#161616]/60 backdrop-blur-xl border border-white/10 rounded-[20px] p-5 flex flex-col justify-between hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex justify-between items-start gap-3">
                    <h3 className="text-white text-base sm:text-[18px] font-medium tracking-tight leading-tight max-w-[180px]">
                        {title}
                    </h3>
                    <div className="w-9 h-9 shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        {icon}
                    </div>
                </div>
                <p className="text-white/60 text-[13px] sm:text-[14px] leading-relaxed mt-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export const OmnichannelSection: React.FC = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const card1 = React.useRef<HTMLDivElement>(null);
    const card2 = React.useRef<HTMLDivElement>(null);
    const card3 = React.useRef<HTMLDivElement>(null);
    const card4 = React.useRef<HTMLDivElement>(null);
    const card5 = React.useRef<HTMLDivElement>(null);
    const card6 = React.useRef<HTMLDivElement>(null);
    const card7 = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const isDesktop = window.innerWidth >= 1024;

        const ctx = gsap.context(() => {
            if (isDesktop) {
                // Pin the section and animate cards as scrub progress moves
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "+=1200", // Length of pinning scroll distance
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                });

                // Radial outwards expansion from the center text block
                tl.fromTo(card1.current, { x: 300, y: 200, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card2.current, { x: -300, y: 200, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card3.current, { x: 400, y: 0, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card4.current, { x: -400, y: 0, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card5.current, { x: 300, y: -200, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card6.current, { x: 0, y: -300, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0)
                  .fromTo(card7.current, { x: -300, y: -200, scale: 0.1, opacity: 0 }, { x: 0, y: 0, scale: 1, opacity: 1, force3D: true, ease: "power2.out" }, 0);
            } else {
                // Mobile: Normal scroll-trigger reveal (no pinning for better mobile UX)
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 30%",
                        scrub: true,
                    }
                });

                const cards = [card1, card2, card3, card4, card5, card6, card7];
                cards.forEach((card) => {
                    if (card.current) {
                        tl.fromTo(card.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, force3D: true, ease: "power2.out" }, 0);
                    }
                });
            }
        }, section);

        // Refresh triggers on mounting to calculate heights correctly
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section 
            ref={sectionRef} 
            id="omnichannel-section" 
            className="relative w-full lg:h-screen lg:min-h-[660px] py-20 lg:pt-[90px] lg:pb-[30px] px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616] flex items-center justify-center"
        >
            {/* Background decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-transparent rounded-full blur-[160px] pointer-events-none z-0" />
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
                    
                    {/* Row 1 Left - AI Voice Calls */}
                    <div className="col-span-1 lg:col-start-3 lg:col-span-4 lg:row-start-1">
                        <Card 
                            title="AI Voice Calls" 
                            description="Seamless outbound and inbound voice interactions powered by natural synthesis."
                            icon={<Phone size={18} />}
                            innerRef={card1}
                        />
                    </div>
 
                    {/* Row 1 Right - WhatsApp Automation */}
                    <div className="col-span-1 lg:col-start-7 lg:col-span-4 lg:row-start-1">
                        <Card 
                            title="WhatsApp Automation" 
                            description="Scalable official WhatsApp API integrations for mass personalized engagement."
                            icon={<MessageSquare size={18} />}
                            innerRef={card2}
                        />
                    </div>
 
                    {/* Row 2 Left - Smart Email */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-2">
                        <Card 
                            title="Smart Email" 
                            description="Dynamically generated email responses that actually sound like your best reps."
                            icon={<Mail size={18} />}
                            innerRef={card3}
                        />
                    </div>
 
                    {/* Row 2 Center - Central Text Block */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] mb-3">
                            <Sparkles size={14} className="text-[#3B82F6]" />
                            <span className="text-[11px] font-medium text-white/80 uppercase tracking-widest">
                                Omnichannel AI Communication
                            </span>
                        </div>
 
                        {/* Title */}
                        <h2 className="text-[#E3E3E0] text-2xl sm:text-3xl md:text-[32px] font-medium leading-[1.2] mb-2 tracking-tight max-w-xs mx-auto">
                            Every tool you need, supercharged.
                        </h2>
 
                        {/* Subtitle */}
                        <p className="text-white/50 text-[13px] sm:text-[14px] leading-relaxed font-light max-w-[280px]">
                            The most complete AI suite for modern enterprises.
                        </p>
                    </div>
 
                    {/* Row 2 Right - Customer Retention */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-2">
                        <Card 
                            title="Customer Retention" 
                            description="AI-driven churn prediction and automated win-back sequences."
                            icon={<TrendingUp size={18} />}
                            innerRef={card4}
                        />
                    </div>
 
                    {/* Row 3 Left - Smart Onboarding */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-3">
                        <Card 
                            title="Smart Onboarding" 
                            description="Guided, personalized user journeys that ensure long term product adoption."
                            icon={<Rocket size={18} />}
                            innerRef={card5}
                        />
                    </div>
 
                    {/* Row 3 Center - Upsell & Cross-Sell */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-3">
                        <Card 
                            title="Upsell & Cross-Sell" 
                            description="Machine learning identifies the perfect moment for higher-tier offers."
                            icon={<CreditCard size={18} />}
                            innerRef={card6}
                        />
                    </div>
 
                    {/* Row 3 Right - Unified Workflow */}
                    <div className="col-span-1 lg:col-span-4 lg:row-start-3">
                        <Card 
                            title="Unified Workflow" 
                            description="A drag-and-drop canvas to orchestrate every channel from one map."
                            icon={<Network size={18} />}
                            innerRef={card7}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OmnichannelSection;
