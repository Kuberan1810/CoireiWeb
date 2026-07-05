import React from "react";
import { UserCircle2, BotMessageSquare, Search, ArrowLeftRight } from "lucide-react";

// Image Imports from assets/images/products (using similar ones to the design)
import unifiedResolutionImg from "../../../../../assets/images/CI-follei/righttop.svg";
import workflowImg from "../../../../../assets/images/CI-follei/leftbootm.svg";

interface CardData {
    id: number;
    title: string;
    description: string;
    graphic?: string;
    icon: React.ComponentType<any>;
}

const row1Cards: CardData[] = [
    {
        id: 0,
        title: "Context-Aware Support",
        description: "Every support request begins with complete customer context, including previous conversations, account history, products, and recent activities—enabling faster and more accurate resolutions.",
        icon: UserCircle2,
    },
    {
        id: 1,
        title: "Unified Resolution Engine",
        description: "The Support Worker combines customer history, business knowledge, product documentation, support policies, previous tickets, and AI reasoning into one intelligent resolution engine.",
        graphic: unifiedResolutionImg,
        icon: BotMessageSquare,
    }
];

const row2Cards: CardData[] = [
    {
        id: 2,
        title: "Intelligent Resolution Workflow",
        description: "Every issue follows an intelligent workflow—from understanding the request to retrieving knowledge, resolving the issue, and confirming customer satisfaction.",
        graphic: workflowImg,
        icon: Search,
    },
    {
        id: 3,
        title: "Smart Escalation",
        description: "When human expertise is required, the Support Worker transfers the case with complete conversation history, issue analysis, and recommended next actions.",
        icon: ArrowLeftRight,
    }
];

const IntelligentSupportSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 px-6 sm:px-10 md:px-15 lg:px-20 bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
            
            <div className=" relative z-10 flex flex-col items-center gap-12">
                
                {/* Header Area */}
                <div className="flex flex-col items-center">
                    {/* Pill */}
                    <div data-ns-animate className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Support Intelligence</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-4 text-center">
                        <h2 
                            data-ns-animate 
                            data-delay="0.1" 
                            className="text-[#0A0E29] font-medium text-[36px] md:text-[48px] lg:text-[52px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-1px]"
                        >
                            Intelligent Support That
                        </h2>
                        <h2 
                            data-ns-animate 
                            data-delay="0.2" 
                            className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent font-medium text-[36px] md:text-[48px] lg:text-[52px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-1px]"
                        >
                            Never Stops
                        </h2>
                    </div>

                    {/* Subheading */}
                    <p 
                        data-ns-animate 
                        data-delay="0.3" 
                        className="text-[#5A5A5C] font-normal max-w-4xl mx-auto text-[15px] md:text-[16px] leading-[140%] md:leading-[1.6]"
                    >
                        The Support Worker understands every customer interaction, resolves issues with complete business context, and continuously improves support quality through AI-powered assistance.
                    </p>
                </div>

                {/* Cards Container - Bento Grid */}
                <div className="w-full bg-[#F2F2F2] border border-[#E8E8E8] rounded-[10px] p-[15px] flex flex-col gap-[25px]">
                    
                    {/* Row 1 */}
                    <div
                        data-ns-animate
                        data-delay="0.4"
                        className="flex flex-col md:flex-row gap-[25px] w-full"
                    >
                        {row1Cards.map((card) => (
                            <div
                                key={card.id}
                                className={`w-full border border-slate-100 bg-[#FFFFFF] p-[24px] md:p-[30px] flex flex-col justify-between text-left h-auto min-h-[280px] md:min-h-[320px] rounded-[10px] relative overflow-hidden ${card.graphic ? "md:flex-[2.1_1_0%]" : "md:flex-[1_1_0%]"}`}
                            >
                                <div className="flex flex-col justify-start gap-3 md:gap-4 w-full h-full">
                                    
                                    {/* Top Text Content */}
                                    <div className="flex flex-col w-full">
                                        <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-[8px] bg-[#004370] text-[#FFFFFF] flex items-center justify-center mb-[16px] md:mb-[20px]">
                                            <card.icon className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                                        </div>
                                        <div>
                                            <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[20px] md:text-[22px] leading-[1.3]">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#5A5A5C] font-normal text-[14px] md:text-[15px] leading-[1.4]">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Graphic Content */}
                                    {card.graphic && (
                                        <div className="w-full flex items-end justify-center mt-6">
                                            <img
                                                src={card.graphic}
                                                alt={card.title}
                                                className="w-full h-auto object-contain object-bottom"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div
                        data-ns-animate
                        data-delay="0.5"
                        className="flex flex-col md:flex-row gap-[25px] w-full"
                    >
                        {row2Cards.map((card) => (
                            <div
                                key={card.id}
                                className={`w-full border border-slate-100 bg-[#FFFFFF] p-[24px] md:p-[30px] flex flex-col justify-between text-left h-auto min-h-[280px] md:min-h-[320px] rounded-[10px] relative overflow-hidden ${card.graphic ? "md:flex-[2.1_1_0%]" : "md:flex-[1_1_0%]"}`}
                            >
                                <div className="flex flex-col justify-start gap-3 md:gap-4 w-full h-full">
                                    
                                    {/* Top Text Content */}
                                    <div className="flex flex-col w-full">
                                        <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-[8px] bg-[#004370] text-[#FFFFFF] flex items-center justify-center mb-[16px] md:mb-[20px]">
                                            <card.icon className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
                                        </div>
                                        <div>
                                            <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[20px] md:text-[22px] leading-[1.3]">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#5A5A5C] font-normal text-[14px] md:text-[15px] leading-[1.4]">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Graphic Content */}
                                    {card.graphic && (
                                        <div className="w-full flex items-end justify-center mt-6">
                                            <img
                                                src={card.graphic}
                                                alt={card.title}
                                                className="w-full h-auto object-contain object-bottom"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IntelligentSupportSection;
