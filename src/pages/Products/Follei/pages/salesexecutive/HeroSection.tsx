import React from "react";
import salesExecHeadImg from "../../../../../assets/images/products/salesexechead.svg";

export const HeroSection: React.FC = () => {
    return (
        <section className="w-full px-6 sm:px-10 md:px-15 pt-[50px] flex justify-center bg-white">
            <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-34 items-center">
                {/* Left Column: Text Content */}
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                    {/* Premium Capsule Badge */}
                    <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider relative">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Sales executive Worker</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-4xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6">
                        Close More Deals With
                        <span className="bg-gradient-to-r from-[#1079B7] to-[#004370] bg-clip-text text-transparent"> Intelligent</span>{" "}
                        <span className="bg-gradient-to-r from-[#8E2884] via-[#5960DF] to-[#004370] bg-clip-text text-transparent"> Sales Execution</span>
                    </h1>

                    {/* Description */}
                    <p
                        data-ns-animate="true"
                        data-delay="0.3"
                        style={{
                            fontSize: '20px',
                            letterSpacing: '0px',
                            lineHeight: '26px',
                            color: '#5A5A5C'
                        }}
                        className="font-normal mb-8 max-w-xl animate-fade-in"
                    >
                        The Sales Executive Worker guides prospects through every stage of the buying journey—delivering personalized product demonstrations, answering complex questions, handling objections, generating proposals, and accelerating deal progression with complete business intelligence.
                    </p>
                </div>

                {/* Right Column: Graphic Display */}
                <div data-ns-animate="true" data-delay="0.4" data-direction="left" className="lg:col-span-7 flex items-center justify-end relative">
                    <div className="w-full max-w-[780px] rounded-[24px] border border-black/[0.05] overflow-hidden relative group bg-white">
                        <div className="absolute inset-0 bg-transparent transition-colors duration-300 pointer-events-none" />
                        <img
                            src={salesExecHeadImg}
                            alt="Sales Executive Dashboard Mockup"
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
