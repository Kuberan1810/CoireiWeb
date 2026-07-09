import React from "react";

// Image Imports
import productExpertiseImg from "../../../../../assets/images/products/productexpertise.svg";
import intelligentRecsImg from "../../../../../assets/images/products/intelligentrecs.svg";
import objectionIntelligenceImg from "../../../../../assets/images/products/objectintelligence.svg";
import proposalGenerationImg from "../../../../../assets/images/products/proposalgeneration.svg";
import commercialGuidanceImg from "../../../../../assets/images/products/commercialguidance.svg";
import dealProgressionImg from "../../../../../assets/images/products/dealprogression.svg";
import folleiLogo from "../../../../../assets/images/products/folleinew.svg";

export const SalesExecutionSection: React.FC = () => {
    return (
        <section className="relative w-full GlobalPadding overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="w-full mx-auto relative z-10 max-w-[1400px]">

                {/* Section Header */}
                <div data-ns-animate="true" data-delay="0" className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
                    {/* Premium Capsule Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                        <span>Sales Execution</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#04032E] text-4xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-3xl text-center">
                        Every Sales Conversation Drives <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                            Confident Decisions
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-[#5A5A5C] text-sm sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-2xl mt-2 text-center">
                        The Sales Executive Worker combines business intelligence, product expertise, commercial insights, and AI reasoning to guide every customer from product interest to purchase confidence.
                    </p>
                </div>

                {/* Main Interactive Diagram Container */}
                <div className="relative w-full">

                    {/* Connector Lines & Center Node Container (Desktop Only) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[16.6%] right-[16.6%] h-[260px] pointer-events-none hidden lg:block z-0">
                        {/* Top U-shape connection line */}
                        <div className="absolute left-0 right-0 top-0 h-[90px] border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-dashed border-blue-400/60 rounded-b-3xl animate-pulse drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]" />

                        {/* Bottom inverted U-shape connection line */}
                        <div className="absolute left-0 right-0 bottom-0 h-[90px] border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-dashed border-blue-400/60 rounded-t-3xl animate-pulse drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]" />

                        {/* Center vertical dashed line (runs full height) */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l-[1.5px] border-dashed border-blue-400/60 animate-pulse drop-shadow-[0_0_2px_rgba(96,165,250,0.4)]" />

                        {/* Glowing Center Logo Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                            {/* Outer Gradient Circle (reduced to 120x120) */}
                            <div className="w-[120px] h-[120px] flex items-center justify-center relative">
                                {/* Outer Gradient Circle (opacity-40) */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFCCCC] to-[#CDD9FB] opacity-40 shadow-[0_4px_20px_rgba(0,0,0,0.03)]" />

                                {/* Inner Logo Container */}
                                <div className="w-[84px] h-[84px] rounded-full shadow-[0_10px_35px_rgba(0,67,112,0.15)] flex items-center justify-center relative z-10">
                                    <img
                                        src={folleiLogo}
                                        alt="Follei Logo Symbol"
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-x-16 lg:gap-y-[260px] relative z-10">

                        {/* ================= TOP ROW ================= */}

                        {/* Card 1: Product Expertise */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.1"
                            className="w-full bg-[#F1F1F1] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Product Expertise
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Explain products, features, capabilities, and business features, capabilities, and value with complete confidence.
                                </p>
                            </div>
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={productExpertiseImg}
                                    alt="Product Expertise Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 2: Intelligent Recommendations */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.2"
                            className="w-full bg-[#F1F1F1] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Intelligent Recommendations
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Recommend the right solution based on customer goals, industry requirements, and business challenges.
                                </p>
                            </div>
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={intelligentRecsImg}
                                    alt="Intelligent Recommendations Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 3: Objection Intelligence */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.3"
                            className="w-full bg-[#F1F1F1] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Objection Intelligence
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Respond to pricing, implementation, ROI, and competitor questions with accurate business context.
                                </p>
                            </div>
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={objectionIntelligenceImg}
                                    alt="Objection Intelligence Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>


                        {/* ================= BOTTOM ROW ================= */}

                        {/* Card 4: Proposal Generation */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.4"
                            className="w-full bg-[#F0F4FF] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300 lg:mt-0"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Proposal Generation
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Generate personalized proposals with pricing, timelines, deliverables, and commercial terms in seconds.
                                </p>
                            </div>
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={proposalGenerationImg}
                                    alt="Proposal Generation Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 5: Commercial Guidance (HTML/CSS Interactive Bar Graph Mockup) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.5"
                            className="w-full bg-[#F0F4FF] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Commercial Guidance
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Guide customers through pricing options, implementation plans, and purchasing decisions.
                                </p>
                            </div>

                            {/* SVG Graphic */}
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={commercialGuidanceImg}
                                    alt="Commercial Guidance Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Card 6: Deal Progression (HTML/CSS Interactive Funnel Mockup) */}
                        <div
                            data-ns-animate="true"
                            data-delay="0.6"
                            className="w-full bg-[#F0F4FF] border border-[#EBEBEF] rounded-[24px] p-6 flex flex-col justify-between text-center min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-[#04032E] text-xl md:text-[22px] font-medium mb-3">
                                    Deal Progression
                                </h3>
                                <p className="text-sm text-[#5A5A5C] leading-relaxed font-normal max-w-sm mx-auto">
                                    Track every opportunity, recommend next actions, and move deals toward successful closure.
                                </p>
                            </div>

                            {/* SVG Graphic */}
                            <div className="w-full rounded-[16px] overflow-hidden border border-black/[0.05] shadow-inner bg-[#1A1A24]">
                                <img
                                    src={dealProgressionImg}
                                    alt="Deal Progression Mockup"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};
