import React from "react";
import { Box, Target, DollarSign, Puzzle, Bot } from "lucide-react";

import productIntelligenceImg from "../../../../../assets/images/products/productintelligence.svg";
import smartRecommendationImg from "../../../../../assets/images/products/smartrecommendation.svg";
import proposalIntelligenceImg from "../../../../../assets/images/products/proposalntelligence.svg";
import dealContextImg from "../../../../../assets/images/products/dealcontext.svg";

export const SalesIntelligenceSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="w-full mx-auto px-6 sm:px-10 md:px-15 relative z-10 max-w-[1300px]">
                
                {/* Section Header */}
                <div data-ns-animate="true" data-delay="0" className="text-center max-w-4xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                        <span>Sales Intelligence</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none text-center">
                        Every Customer Receives The <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                            Right Solution
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-[#5A5A5C] text-sm sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-2xl mt-2 text-center">
                        The Sales Executive Worker combines product knowledge, pricing intelligence, customer requirements, and business context to recommend the right solution, answer complex questions, and confidently progress every opportunity toward a successful deal.
                    </p>
                </div>

                {/* Main Cards Grid Container */}
                <div className="w-full bg-[#F2F2F2] rounded-[20px] p-[24px] grid grid-cols-1 md:grid-cols-6 gap-[24px]">
                    
                    {/* Card 1: Product Intelligence */}
                    <div 
                        data-ns-animate="true" 
                        data-delay="0.1" 
                        className="md:col-span-2 w-full border border-slate-100 bg-[#FFFFFF] p-[24px] flex flex-col justify-between text-left min-h-[380px] rounded-[20px]"
                    >
                        <div>
                            <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                                Product Intelligence
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Understands every product, feature, capability, and value proposition to deliver accurate and personalized recommendations.
                            </p>
                        </div>
                        <div className="w-full h-44 flex items-center justify-center mt-6">
                            <img 
                                src={productIntelligenceImg} 
                                alt="Product Intelligence" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2: Smart Recommendations */}
                    <div 
                        data-ns-animate="true" 
                        data-delay="0.2" 
                        className="md:col-span-2 w-full border border-slate-100 bg-[#FFFFFF] p-[24px] flex flex-col justify-between text-left min-h-[380px] rounded-[20px]"
                    >
                        <div>
                            <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                                Smart Recommendations
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Matches customer goals, industry requirements, and business challenges with the most suitable products and solutions.
                            </p>
                        </div>
                        <div className="w-full h-44 flex items-center justify-center mt-6">
                            <img 
                                src={smartRecommendationImg} 
                                alt="Smart Recommendations" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 3: Proposal Intelligence */}
                    <div 
                        data-ns-animate="true" 
                        data-delay="0.3" 
                        className="md:col-span-2 w-full border border-slate-100 bg-[#FFFFFF] p-[24px] flex flex-col justify-between text-left min-h-[380px] rounded-[20px]"
                    >
                        <div>
                            <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                                Proposal Intelligence
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Builds personalized pricing, commercial proposals, and solution recommendations using complete business context.
                            </p>
                        </div>
                        <div className="w-full h-44 flex items-center justify-center mt-6">
                            <img 
                                src={proposalIntelligenceImg} 
                                alt="Proposal Intelligence" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 4: Solution Intelligence */}
                    <div 
                        data-ns-animate="true" 
                        data-delay="0.4" 
                        className="md:col-span-4 w-full border border-slate-100 bg-[#FFFFFF] p-[24px] flex flex-col justify-between text-left min-h-[340px] rounded-[20px]"
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                                Solution Intelligence
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Every recommendation is backed by connected business intelligence. The Sales Executive Worker evaluates customer requirements, products, pricing, competitive positioning, implementation considerations, and commercial terms before presenting the most relevant solution.
                            </p>
                        </div>
                        
                        {/* Horizontal Pipeline Workflow Graphic */}
                        <div className="mt-10 flex items-center justify-between w-full max-w-[620px] mx-auto relative py-6">
                            {/* Linking Line */}
                            <div className="absolute left-[36px] right-[36px] top-[48px] h-[1px] bg-slate-300 z-0" />
                            
                            {/* Products */}
                            <div className="flex flex-col items-center gap-3 z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#004370] flex items-center justify-center text-white shadow-sm">
                                    <Box className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#04032E] font-medium">Products</span>
                            </div>

                            {/* Customer Needs */}
                            <div className="flex flex-col items-center gap-3 z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#004370] flex items-center justify-center text-white shadow-sm">
                                    <Target className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#04032E] font-medium">Customer Needs</span>
                            </div>

                            {/* Pricing */}
                            <div className="flex flex-col items-center gap-3 z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#004370] flex items-center justify-center text-white shadow-sm">
                                    <DollarSign className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#04032E] font-medium">Pricing</span>
                            </div>

                            {/* Business Value */}
                            <div className="flex flex-col items-center gap-3 z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#004370] flex items-center justify-center text-white shadow-sm">
                                    <Puzzle className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#04032E] font-medium">Business Value</span>
                            </div>

                            {/* Sales Executive */}
                            <div className="flex flex-col items-center gap-3 z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#004370] flex items-center justify-center text-white shadow-sm">
                                    <Bot className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <span className="text-xs sm:text-sm text-[#04032E] font-medium">Sales Executive</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Deal Context */}
                    <div 
                        data-ns-animate="true" 
                        data-delay="0.5" 
                        className="md:col-span-2 w-full border border-slate-100 bg-[#FFFFFF] p-[24px] flex flex-col justify-between text-left min-h-[340px] rounded-[20px]"
                    >
                        <div>
                            <h3 className="text-xl md:text-[22px] font-normal leading-[28px] text-black mb-3">
                                Deal Context
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">
                                Maintains complete customer history, proposal discussions, and conversation context throughout the sales journey.
                            </p>
                        </div>
                        <div className="w-full h-44 flex items-center justify-center mt-6">
                            <img 
                                src={dealContextImg} 
                                alt="Deal Context" 
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
