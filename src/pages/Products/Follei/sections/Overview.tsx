import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import oneAiAgent from '../../../../assets/images/products/folleinewdashboard.svg';

const OverviewSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#FFFFFF]">
            {/* Background decorative glows */}
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-none relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">

                        {/* Badge with exact Figma styling */}
                        <div data-ns-animate className="mb-6 flex justify-start">
                            <div
                                style={{
                                    borderWidth: '0.5px',
                                    borderColor: '#004370',
                                    borderRadius: '10px',
                                    paddingTop: '5px',
                                    paddingBottom: '5px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    gap: '10px'
                                }}
                                className="inline-flex items-center bg-white border"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
                                <span className="text-sm font-medium text-[#0A0E29]">Overview</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1
                            data-ns-animate
                            data-delay="0.1"
                            style={{
                                letterSpacing: '-2.56px',
                                lineHeight: '1.1'
                            }}
                            className="text-[#0A0E29] text-4xl sm:text-5xl md:text-[60px] font-medium tracking-tight mb-1 font-sans"
                        >
                            One AI Agent.
                        </h1>
                        <h1
                            data-ns-animate
                            data-delay="0.2"
                            style={{
                                letterSpacing: '-2.56px',
                                lineHeight: '1.1'
                            }}
                            className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-[60px] font-medium tracking-tight mb-6 font-sans"
                        >
                            Unlimited Growth.
                        </h1>

                        {/* Description with exact styling */}
                        <p
                            data-ns-animate
                            data-delay="0.3"
                            style={{
                                fontSize: '20px',
                                letterSpacing: '0px',
                                lineHeight: '30px',
                                color: '#475569',
                            }}
                            className="font-normal mb-8 max-w-xl animate-fade-in"
                        >
                            From business intelligence to autonomous AI execution, Follei helps organizations operate smarter, respond faster, and grow without limits.
                        </p>

                        {/* CTA Buttons */}
                        <div data-ns-animate data-delay="0.4" className="flex flex-wrap items-center gap-4">
                            <button className="flex items-center justify-center gap-2 w-[179px] h-[60px] bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full font-medium transition-all duration-300 group cursor-pointer text-sm">
                                <span>Book a demo</span>
                                <ChevronRight size={16} className="text-white/70 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button className="flex items-center justify-center gap-2 w-[179px] h-[60px] bg-white hover:bg-slate-50 text-[#1F2A47] rounded-full font-medium transition-all duration-300 border! border-[#1F2A47]/10! cursor-pointer text-sm">
                                <span>Watch video</span>
                                <Play size={14} className="text-[#1F2A47]/40 fill-none" />
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Dashboard Mockup Image */}
                    <div data-ns-animate data-delay="0.2" className="lg:col-span-7 flex items-center justify-center relative order-1 lg:order-2">
                        <div className="w-full rounded-[24px] border border-black/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-transparent pointer-events-none" />
                            <img
                                src={oneAiAgent}
                                alt="Follei Analytics Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
