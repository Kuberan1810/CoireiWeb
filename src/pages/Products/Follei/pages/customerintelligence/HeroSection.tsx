import React from 'react';
import heroImg from '../../../../../assets/images/CI-follei/hero-img.svg';

const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full pt-[200px] pb-20 px-6 sm:px-10 md:px-15 lg:px-20 bg-white">
            <div className="max-w-[1390px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left Content */}
                <div data-ns-animate className="flex flex-col items-start">
                    
                    {/* Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000] mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                        <span>Support Worker</span>
                    </div>

                    {/* Heading */}
                    <div className="mb-6">
                        <h1 
                            className="text-[#0A0E29] font-medium font-sans block text-[40px] md:text-[48px] lg:text-[52px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-1px]"
                        >
                            Resolve Every Customer
                        </h1>
                        <h1 
                            className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent font-medium font-sans block text-[40px] md:text-[48px] lg:text-[52px] leading-[1.2] md:leading-[1.1] tracking-tight md:tracking-[-1px]"
                        >
                            Issue With Intelligence
                        </h1>
                    </div>

                    {/* Paragraph */}
                    <p 
                        className="text-[#5A5A5C] font-normal font-sans text-[16px] md:text-[18px] leading-[140%] md:leading-[1.6]"
                    >
                        Deliver instant, context-aware support across every customer touchpoint. The Support Worker understands every conversation, accesses complete business knowledge, and resolves issues faster with AI-powered assistance.
                    </p>
                </div>

                {/* Right Image */}
                <div data-ns-animate data-direction="left" data-delay="0.2" className="flex justify-center lg:justify-end w-full">
                    <img 
                        src={heroImg} 
                        alt="Support Worker Dashboard" 
                        className="w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
