import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useInView } from "framer-motion";

const StepCard = ({ step, index }: { step: any, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    // Card is "active" when its top crosses the center of the viewport
    const isInView = useInView(cardRef, { margin: "0px 0px -50% 0px" });

    return (
        <div 
            ref={cardRef}
            data-ns-animate 
            data-delay={0.2 + (index * 0.1)}
            className="relative bg-[#F0F4FF] rounded-xl p-8 md:p-10 flex flex-col w-full"
        >
            {/* Circle Node on Timeline */}
            <div 
                className={`absolute -left-[45px] md:-left-[71px] top-[40px] w-[24px] h-[24px] rounded-full flex items-center justify-center z-20 transition-colors duration-300 ${
                    isInView 
                        ? 'bg-[#1C99ED] border-[2px] border-[#1C99ED]' 
                        : 'bg-[#FFFFFF] border-[2px] border-[#CBD5E1]'
                }`}
            >
                {/* Tick mark */}
                <Check 
                    className={`text-white w-[14px] h-[14px] transition-opacity duration-300 ${isInView ? 'opacity-100' : 'opacity-0'}`} 
                    strokeWidth={4} 
                />
            </div>
            
            <span className="text-[#004370] font-medium mb-3 md:mb-4 text-[40px] md:text-[48px] leading-[1.2] tracking-tight">
                {step.num}
            </span>
            
            <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[20px] md:text-[22px] leading-[1.3]">
                {step.title}
            </h3>
            
            <p className="text-[#5A5A5C] font-normal mb-6 md:mb-8 text-[14px] md:text-[15px] leading-[1.4]">
                {step.description}
            </p>
            
            <div className="flex flex-row items-center flex-wrap gap-2 md:gap-3 mt-auto">
                {step.tags.map((tag: string) => (
                    <span 
                        key={tag} 
                        className="bg-[#FFFFFF] px-3 py-1.5 md:px-4 md:py-2 rounded-md font-normal text-[#5A5A5C] text-center text-[12px] md:text-[14px] leading-none whitespace-nowrap"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const ProactiveResolutionSection: React.FC = () => {
    const steps = [
        {
            id: 1,
            num: "01",
            title: "Healthy Experience",
            description: "Customers actively engage with your products, adopt new features, and maintain a strong support health score.",
            tags: ["Active Usage", "High Adoption", "Healthy Score"]
        },
        {
            id: 2,
            num: "02",
            title: "Early Warning Signals",
            description: "Follei detects changes in customer behavior, reduced engagement, and recurring support patterns before they become critical.",
            tags: ["Reduced Activity", "Higher Risk", "Warning Signals"]
        },
        {
            id: 3,
            num: "03",
            title: "Critical Attention",
            description: "Multiple risk indicators suggest the customer requires immediate action to prevent dissatisfaction or potential churn.",
            tags: ["Repeated Issues", "High Risk", "Escalated Cases"]
        },
        {
            id: 4,
            num: "04",
            title: "AI Recovery Actions",
            description: "The Support Worker automatically recommends the next best actions, initiates proactive outreach, and escalates complex cases when needed.",
            tags: ["AI Recommendations", "Human Escalation"]
        }
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section className="w-full bg-[#FFFFFF] py-20 md:py-24 px-6 sm:px-10 md:px-15 lg:px-20 border-t border-[#E8E8E8]/50">
            <div className="max-w-[1390px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24">
                
                {/* Left: Sticky Content */}
                <div className="relative">
                    <div className="lg:sticky lg:top-32 flex flex-col items-start text-left">
                        {/* Pill */}
                        <div data-ns-animate className="mb-4 md:mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[14px] md:text-[16px] text-[#000000]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                                <span>Proactive Support</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="mb-4 md:mb-6">
                            <h2 
                                data-ns-animate 
                                data-delay="0.1" 
                                className="text-[#0A0E29] font-medium font-sans tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]"
                            >
                                Resolve Issues Before
                            </h2>
                            <h2 
                                data-ns-animate 
                                data-delay="0.2" 
                                className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent font-medium font-sans tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]"
                            >
                                They Become Problems
                            </h2>
                        </div>

                        {/* Subheading */}
                        <p 
                            data-ns-animate 
                            data-delay="0.3" 
                            className="text-[#5A5A5C] font-normal font-sans text-[15px] md:text-[16px] leading-[140%] md:leading-[1.6] max-w-lg"
                        >
                            Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context ensuring no lead is ever left waiting.
                        </p>
                    </div>
                </div>

                {/* Right: Scrollable Stepper */}
                <div className="relative w-full flex" ref={containerRef}>
                    
                    {/* Vertical Line indicator */}
                    <div className="absolute left-[13px] md:left-[17px] top-10 bottom-10 w-[5px] bg-[#F1F5F9] z-0 rounded-full overflow-hidden">
                        {/* Animated blue line that grows on scroll */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-full bg-[#1C99ED]"
                            style={{ 
                                scaleY: scrollYProgress, 
                                transformOrigin: 'top' 
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-10 w-full z-10 pl-12 md:pl-20">
                        {steps.map((step, index) => (
                            <StepCard key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProactiveResolutionSection;
