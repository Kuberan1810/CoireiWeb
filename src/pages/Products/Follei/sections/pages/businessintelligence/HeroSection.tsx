import React from "react";
import businessIntelligenceImg from "../../../../../../assets/images/products/businessintelligence2.svg";

export const HeroSection: React.FC = () => {
    return (
        <section className="w-full px-6 sm:px-10 md:px-15 py-12 flex justify-center">
            <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">

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
                                Business Intelligence
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 data-ns-animate="true" data-delay="0.2" className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-6">
                        The Foundation of Every AI Worker
                    </h1>

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
                        Before Follei can sell, support, or engage customers, it must first understand your business. Business Intelligence transforms disconnected information into a unified digital understanding of your organization.
                    </p>
                </div>

                {/* Right Column: Graphic Display */}
                <div data-ns-animate="true" data-delay="0.4" data-direction="left" className="lg:col-span-7 flex items-center justify-center relative">
                    <div className="w-full rounded-[24px] border border-white/8 overflow-hidden shadow-2xl relative group">
                        <div className="absolute inset-0 bg-transparent transition-colors duration-300 pointer-events-none" />
                        <img
                            src={businessIntelligenceImg}
                            alt="Business Intelligence Process Map"
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
