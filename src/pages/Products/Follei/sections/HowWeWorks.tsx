import React from "react";

// Image Imports from assets/images/products
import builddiscoveryImg from "../../../../assets/images/products/builddiscovery.svg";
import buildintelligenceImg from "../../../../assets/images/products/buildintelligence.svg";
import deployaiworkersImg from "../../../../assets/images/products/deployaiworkers.svg";
import learnimproveImg from "../../../../assets/images/products/learn&improve.svg";

export const HowWeWorks: React.FC = () => {
    return (
        <section className="relative w-full py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#1079B7]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#8E2884]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center gap-12">

                {/* Header Area */}
                <div data-ns-animate className="flex flex-col items-center">
                    {/* Badge with Figma style from Overview */}
                    <div className="mb-6 flex justify-center">
                        <div
                            style={{
                                borderWidth: '0.5px',
                                borderColor: '#004370',
                                borderRadius: '10px',
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                gap: '10px'
                            }}
                            className="inline-flex items-center bg-white border"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
                            <span className="text-sm font-medium text-[#0A0E29]">How We Work</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#0A0E29] text-3xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
                        From Business Knowledge to <br />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Autonomous Execution</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed text-center">
                        Smart deployments start with listening. Follei combines deep business discovery, intelligent AI activation, and continuous optimization into a structured journey that transforms how your organization operates and grows.
                    </p>
                </div>

                {/* Checkerboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-4">

                    {/* Step-01 Content */}
                    <div data-ns-animate className="md:col-start-1 md:row-start-1 order-1 flex flex-col">
                        <div className="w-full border-[1px] border-[#E3E3E3] bg-[#FFFFFF] p-[20px] flex flex-col justify-start text-left h-[220px] rounded-none shadow-none">
                            <span className="text-sm font-medium text-slate-400 block mb-[50px]">Step-01</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[24px] font-normal leading-[32px] text-[#000000]">Business Discovery</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-light">
                                    We analyze your business, products, build a complete your organization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step-01 Image */}
                    <div data-ns-animate data-delay="0.1" className="md:col-start-2 md:row-start-1 order-2 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            <img
                                src={builddiscoveryImg}
                                alt="Business Discovery"
                                className="max-h-[160px] w-auto object-contain transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step-02 Image */}
                    <div data-ns-animate data-delay="0.1" className="md:col-start-1 md:row-start-2 order-4 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            <img
                                src={buildintelligenceImg}
                                alt="Build Intelligence"
                                className="max-h-[160px] w-auto object-contain transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step-02 Content */}
                    <div data-ns-animate data-delay="0.2" className="md:col-start-2 md:row-start-2 order-3 flex flex-col">
                        <div className="w-full border-[1px] border-[#E3E3E3] bg-[#FFFFFF] p-[20px] flex flex-col justify-start text-left h-[220px] rounded-none shadow-none">
                            <span className="text-sm font-medium text-slate-400 block mb-[50px]">Step-02</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[24px] font-normal leading-[32px] text-[#000000]">Build Intelligence</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-light">
                                    Business knowledge is connected into a unified every AI decision and interaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step-03 Content */}
                    <div data-ns-animate data-delay="0.2" className="md:col-start-3 md:row-start-1 order-5 flex flex-col">
                        <div className="w-full border-[1px] border-[#E3E3E3] bg-[#FFFFFF] p-[20px] flex flex-col justify-start text-left h-[220px] rounded-none shadow-none">
                            <span className="text-sm font-medium text-slate-400 block mb-[50px]">Step-03</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[24px] font-normal leading-[32px] text-[#000000]">Deploy AI Workers</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-light">
                                    Specialized AI workers are support, customer success, and business operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step-03 Image */}
                    <div data-ns-animate data-delay="0.3" className="md:col-start-3 md:row-start-2 order-6 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            <img
                                src={deployaiworkersImg}
                                alt="Deploy AI Workers"
                                className="max-h-[160px] w-auto object-contain transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step-04 Image */}
                    <div data-ns-animate data-delay="0.3" className="md:col-start-4 md:row-start-1 order-8 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            <img
                                src={learnimproveImg}
                                alt="Learn & Improve"
                                className="max-h-[160px] w-auto object-contain transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Step-04 Content */}
                    <div data-ns-animate data-delay="0.4" className="md:col-start-4 md:row-start-2 order-7 flex flex-col">
                        <div className="w-full border-[1px] border-[#E3E3E3] bg-[#FFFFFF] p-[20px] flex flex-col justify-start text-left h-[220px] rounded-none shadow-none">
                            <span className="text-sm font-medium text-slate-400 block mb-[50px]">Step-04</span>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[24px] font-normal leading-[32px] text-[#000000]">Learn & Improve</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-light">
                                    Every interaction becomes a learning opportunity, helping AI workers outcomes over time.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowWeWorks;