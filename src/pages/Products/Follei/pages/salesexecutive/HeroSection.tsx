import React from "react";
import SalesExecutiveAnimation from "../../sections/salesExecutiveAnimation";
import bg3 from "../../../../../assets/images/products/bg3.jpg";

export const HeroSection: React.FC = () => {
    return (
        <section className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-8">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-34 items-center">
                {/* Left Column: Text Content */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
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
                        className="font-normal mb-8 max-w-3xl animate-fade-in"
                    >
                        The Sales Executive Worker guides prospects through every stage of the buying journey—delivering personalized product demonstrations, answering complex questions, handling objections, generating proposals, and accelerating deal progression with complete business intelligence.
                    </p>
                </div>

                <div data-ns-animate="true" data-delay="0.4" data-direction="left" className="lg:col-span-5 flex items-center justify-end w-full relative">
                    <div
                        className="w-full bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 hover:border-violet-500/20 shadow-2xl">
                        {/* Background Image */}
                        <img
                            src={bg3}
                            loading="eager"
                            alt=""
                            className="image-cover absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 "
                        />

                        {/* Inner Card Container */}
                        <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-8">
                            <SalesExecutiveAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
