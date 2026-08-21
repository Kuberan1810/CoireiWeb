import { useEffect } from "react";
import tasieLogo from "../../../assets/images/homepage/tasie.png";
import folleiLogo from "../../../assets/images/products/folleinew.svg";
import coireiLogo from "../../../assets/images/products/coirei-logo.svg";

const Ecosystem = () => {
    return (
        <section className="relative w-full bg-white py-24 md:py-32 px-6 sm:px-8 md:px-10 lg:px-24">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between" data-ns-animate="true" data-direction="up" data-delay="0.1">
                        <div>
                            <span className="text-[#D33B12] text-[16px] leading-[20.8px] font-normal block mb-4 instrument-sans">
                                Our Ecosystem
                            </span>
                            <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-normal text-[#0E121B] instrument-sans max-w-md mb-6">
                                Products built for intelligent work
                            </h2>
                            <p className="text-[#0E121B] text-[16px] leading-[24px] font-normal instrument-sans max-w-sm">
                                From AI sales to recruitment and secure engineering, Coirei is building the next generation of intelligent business products.
                            </p>
                        </div>
                        
                        <div className="mt-16 lg:mt-32">
                            <p className="text-[#5B6280] text-[15px] leading-[22px] font-normal instrument-sans max-w-xs mb-8">
                                Built by Coirei. <br /> Designed for what's next.
                            </p>
                            
                            <div className="flex items-center gap-6">
                                <div className="flex space-x-4 items-center">
                                    <img className="w-[20px] h-[20px] object-contain" src={tasieLogo} alt="Tasie" />
                                    <img className="w-[20px] h-[20px] object-contain" src={folleiLogo} alt="Follei" />
                                    <img className="w-[20px] h-[20px] object-contain" src={coireiLogo} alt="Coirei" />
                                </div>
                                <div className="w-8 h-[2px] bg-[#E5E7EB]"></div>
                                <span className="text-[#181B25] text-[16px] leading-[20.8px] font-normal instrument-sans">
                                    Tasie · Follei · Velei · CoireiLMS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" data-ns-animate="true" data-direction="up" data-delay="0.3">
                        {/* Card 1: CoireiLMS */}
                        <div className="relative bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden">
                            {/* Background Logo with 2% opacity */}
                            <img src={coireiLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-[0.02] pointer-events-none" />
                            
                            <div className="relative z-10 mb-12">
                                <span className="text-[16px] font-medium text-[#5B6280] instrument-sans">CoireiLMS</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[24px] font-medium text-[#0E121B] leading-tight mb-4 instrument-sans">
                                    AI-Powered Learning Platform
                               </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans leading-[22px]">
                                    A modern platform connecting students, faculty, and administrators.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Follei */}
                        <div className="relative bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden">
                            {/* Background Logo with 2% opacity */}
                            <img src={folleiLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-[0.02] pointer-events-none" />
                            
                            <div className="relative z-10 mb-12">
                                <span className="text-[16px] font-medium text-[#5B6280] instrument-sans">Follei</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[24px] font-medium text-[#0E121B] leading-tight mb-4 instrument-sans">
                                    Autonomous AI Sales Workforce
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans leading-[22px]">
                                    AI agents that manage customer journeys, sales, and engagement.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Tasie */}
                        <div className="relative bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden">
                            {/* Background Logo with 2% opacity */}
                            <img src={tasieLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-[0.02] pointer-events-none" />
                            
                            <div className="relative z-10 mb-12">
                                <span className="text-[16px] font-medium text-[#5B6280] instrument-sans">Tasie</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[24px] font-medium text-[#0E121B] leading-tight mb-4 instrument-sans">
                                    Secure AI Engineering
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans leading-[22px]">
                                    Continuous AI-powered code analysis for secure, reliable software.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Velei */}
                        <div className="relative bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden">
                            {/* Background Logo with 2% opacity */}
                            <img src={coireiLogo} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-[0.02] pointer-events-none" />
                            
                            <div className="relative z-10 mb-12">
                                <span className="text-[16px] font-medium text-[#5B6280] instrument-sans">Velei</span>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[24px] font-medium text-[#0E121B] leading-tight mb-4 instrument-sans">
                                    AI Recruitment
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans leading-[22px]">
                                    Skill-first recruitment powered by autonomous interviews and assessments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
