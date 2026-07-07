import React from "react";
import logoSvg from "../../../../../assets/images/CI-follei/logo.svg";

const BetterExperienceSection: React.FC = () => {
    return (
        <section className="w-full bg-[#FFFFFF] GlobalPadding overflow-hidden">
            <div className="flex flex-col gap-16 lg:gap-24">
                
                {/* Top: Header */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
                    <div className="flex flex-col items-start text-left">
                        {/* Pill */}
                        <div data-ns-animate className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                                <span>AI Support Engine</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="mb-0 flex flex-col gap-2">
                            <h2 
                                data-ns-animate 
                                data-delay="0.1" 
                                className="text-[#0A0E29] font-medium  tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]"
                            >
                                Every Customer Issue Ends
                            </h2>
                            <h2 
                                data-ns-animate 
                                data-delay="0.2" 
                                className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent font-medium  tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]"
                            >
                                With A Better Experience
                            </h2>
                        </div>
                    </div>
                    
                    {/* Right Subheading */}
                    <div className="flex items-center">
                        <p 
                            data-ns-animate 
                            data-delay="0.3" 
                            className="text-[#5A5A5C] font-normal  text-[15px] md:text-[16px] leading-[140%] md:leading-[28.8px]  lg:pt-8"
                        >
                            The Support Worker combines customer history, business knowledge, and AI reasoning to resolve issues faster, strengthen customer relationships, and continuously improve every support interaction.
                        </p>
                    </div>
                </div>

                {/* Bottom: Visual Diagram */}
                {/* On mobile, this stacks vertically with horizontal pills. On desktop, it is 450px tall with absolute positioning for arrows and elements. */}
                <div data-ns-animate data-delay="0.4" className="relative w-full h-auto md:h-[450px] flex flex-col md:block items-center mt-8 gap-8 md:gap-0">
                    
                    {/* SVG Connecting Arrows */}
                    <div className="absolute inset-0 z-0 hidden md:block">
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 450" className="overflow-visible pointer-events-none">
                            <defs>
                                {/* Sleeker Arrowhead marker */}
                                <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                    <path d="M 1 1 L 10 6 L 1 11" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </marker>
                            </defs>
                            
                            {/* Straight Dashed Lines pointing to the pills */}
                            <line x1="20%" y1="50%" x2="80%" y2="15%" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
                            <line x1="22%" y1="50%" x2="80%" y2="50%" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
                            <line x1="20%" y1="50%" x2="80%" y2="85%" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead)" />
                        </svg>
                    </div>

                    {/* Left: AI Logo with Concentric Circles */}
                    {/* Centered on mobile and scaled down (scale-[0.65]). Absolute on left on desktop. */}
                    <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center scale-[0.65] md:scale-100 w-[200px] h-[200px] -mt-10 mb-0 md:my-0">
                        {/* Reduced size and opacity of the gradient background 'borders' */}
                        <div className="absolute w-[170px] h-[170px] rounded-full opacity-60" style={{ background: 'linear-gradient(90deg, #FFCCCC 0%, #CDD9FB 100%)' }}></div>
                        <div className="absolute w-[160px] h-[160px] rounded-full transform rotate-[45deg] opacity-60" style={{ background: 'linear-gradient(90deg, #FFCCCC 0%, #CDD9FB 100%)' }}></div>
                        <div className="absolute w-[150px] h-[150px] rounded-full bg-[#FFFFFF]"></div>
                        <div className="relative w-[140px] h-[140px] rounded-full flex items-center justify-center z-20">
                            <img src={logoSvg} alt="AI Support Engine Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Mobile Vertical Connecting Lines */}
                    <div className="block md:hidden flex justify-center w-full max-w-[340px] h-[60px] z-0 -mt-2 mb-2">
                        <svg width="100%" height="100%" viewBox="0 0 300 60" preserveAspectRatio="none" className="overflow-visible pointer-events-none">
                            <defs>
                                <marker id="arrowhead-mobile" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                    <path d="M 1 1 L 10 6 L 1 11" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </marker>
                            </defs>
                            {/* Line to Resolve (Left) */}
                            <path d="M 150 0 Q 150 30 50 60" fill="none" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead-mobile)" />
                            
                            {/* Line to Assist (Middle) */}
                            <path d="M 150 0 L 150 60" fill="none" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead-mobile)" />
                            
                            {/* Line to Improve (Right) */}
                            <path d="M 150 0 Q 150 30 250 60" fill="none" stroke="#000000" strokeWidth="1.5" strokeDasharray="6 6" markerEnd="url(#arrowhead-mobile)" />
                        </svg>
                    </div>

                    {/* Right: The 3 Action Pills as Message Boxes */}
                    {/* Horizontal row on mobile, vertical stack on right on desktop. */}
                    <div className="relative md:absolute md:right-0 md:top-0 md:bottom-0 w-full md:w-[220px] flex flex-row md:flex-col justify-center md:justify-between z-10 gap-3 md:gap-0 mt-2 md:mt-0 flex-wrap">
                        
                        {/* Resolve */}
                        <div className="bg-[#F0F4FF] rounded-r-[24px] md:rounded-r-[32px] rounded-tl-[24px] md:rounded-tl-[32px] rounded-bl-[4px] md:rounded-bl-[6px] px-4 md:px-6 flex items-center justify-center shadow-sm w-auto md:w-full h-[48px] md:h-[72px] flex-1 md:flex-none">
                            <span className="text-[#000000] font-medium  text-center w-full text-[15px] md:text-[22px] leading-[120%]">Resolve</span>
                        </div>
                        
                        {/* Assist */}
                        <div className="bg-[#F0F4FF] rounded-r-[24px] md:rounded-r-[32px] rounded-tl-[24px] md:rounded-tl-[32px] rounded-bl-[4px] md:rounded-bl-[6px] px-4 md:px-6 flex items-center justify-center shadow-sm w-auto md:w-full h-[48px] md:h-[72px] flex-1 md:flex-none">
                            <span className="text-[#000000] font-medium  text-center w-full text-[15px] md:text-[22px] leading-[120%]">Assist</span>
                        </div>
                        
                        {/* Improve */}
                        <div className="bg-[#F0F4FF] rounded-r-[24px] md:rounded-r-[32px] rounded-tl-[24px] md:rounded-tl-[32px] rounded-bl-[4px] md:rounded-bl-[6px] px-4 md:px-6 flex items-center justify-center shadow-sm w-auto md:w-full h-[48px] md:h-[72px] flex-1 md:flex-none">
                            <span className="text-[#000000] font-medium  text-center w-full text-[15px] md:text-[22px] leading-[120%]">Improve</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BetterExperienceSection;
