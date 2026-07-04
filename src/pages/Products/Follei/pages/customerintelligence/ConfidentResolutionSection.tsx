import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ConfidentResolutionSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Animation tracks the h-[300vh] container.
    // It starts exactly when the container reaches 15vh from the top,
    // which is the exact moment the `sticky top-[15vh]` element pins!
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 15vh", "end end"]
    });

    // The line draws from 0 to 1 over the scroll. Capped at 0.7 to finish smoothly and guarantee the final step completes before unpinning.
    const pathLength = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

    // Opacities for each step based on the line drawing progress
    // Step 1: x=0 (0%) -> scroll 0 to 0.1
    const step1Opacity = useTransform(scrollYProgress, [0, 0.05], [0.3, 1]);
    // Step 2: x=250 (25%) -> scroll ~0.175
    const step2Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0.3, 1]);
    // Step 3: x=500 (50%) -> scroll ~0.35
    const step3Opacity = useTransform(scrollYProgress, [0.30, 0.40], [0.3, 1]);
    // Step 4: x=750 (75%) -> scroll ~0.525
    const step4Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0.3, 1]);

    return (
        <section className="relative w-full bg-[#FFFFFF] border-t border-[#E8E8E8]/50">
            
            {/* Header Area - Scrolls normally! Will never get cut off by pinning. */}
            <div className="w-full pt-16 md:pt-20 pb-8 md:pb-10 px-6 sm:px-10 md:px-15 lg:px-20 flex justify-center">
                <div className="max-w-[1390px] w-full flex flex-col items-center">
                    {/* Pill */}
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[14px] md:text-[16px] text-[#000000]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Support Workflow</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-4 text-center">
                        <h2 className="text-[#0A0E29] font-medium tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]">
                            From Customer Issues To
                        </h2>
                        <h2 className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent font-medium tracking-tight text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1]">
                            Confident Resolution
                        </h2>
                    </div>

                    {/* Subheading */}
                    <p className="text-[#5A5A5C] font-normal text-center max-w-4xl mx-auto text-[16px] leading-[140%] md:leading-[25.6px]">
                        Every support request is intelligently analyzed, prioritized, resolved, and continuously optimized—ensuring faster resolutions, happier customers, and stronger long-term relationships.
                    </p>
                </div>
            </div>

            {/* Scroll-jacking Container - ONLY pins the steps grid on desktop! */}
            <div ref={containerRef} className="w-full h-auto md:h-[300vh] relative">
                
                {/* 
                    Pinned Steps Grid 
                    top-[15vh] ensures the entire 450px grid fits perfectly on the screen when it pins on desktop.
                */}
                <div className="relative md:sticky top-0 md:top-[15vh] w-full px-6 sm:px-10 md:px-15 lg:px-20 pb-12">
                    {/* 4 Column Curved Timeline UI */}
                    <div className="w-full relative h-auto md:h-[450px]">
                        
                        {/* SVG Curved Path Background - Hidden on mobile! */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-10">
                            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 450" className="overflow-visible relative z-10">
                                {/* 
                                    Smooth S-Curve over 450px height:
                                    - Starts at y=350
                                    - Smooth transition to y=150
                                */}
                                <motion.path 
                                    d="M 0,350 L 150,350 C 400,350 400,150 650,150 L 1000,150" 
                                    fill="none" 
                                    stroke="#1C99ED" 
                                    strokeWidth="3"
                                    style={{ pathLength }}
                                />
                            </svg>
                            
                            {/* Circle Nodes - Mathematically perfectly placed for the new 450px height curve y(x) */}
                            {/* x=0 -> y=350 (77.7%) */}
                            <div className="absolute w-[24px] h-[24px] bg-white border-[5px] border-[#0068AD] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: '0%', top: '77.7%' }}></div>
                            
                            {/* x=250 -> y=337.5 (75%) - moved down to accurately intersect curve */}
                            <div className="absolute w-[24px] h-[24px] bg-white border-[5px] border-[#0068AD] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: '25%', top: '75%' }}></div>
                            
                            {/* x=500 -> y=183.5 (40.8%) */}
                            <div className="absolute w-[24px] h-[24px] bg-white border-[5px] border-[#0068AD] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '40.8%' }}></div>
                            
                            {/* x=750 -> y=150 (33.3%) */}
                            <div className="absolute w-[24px] h-[24px] bg-white border-[5px] border-[#0068AD] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: '75%', top: '33.3%' }}></div>
                            
                            {/* x=1000 -> y=150 (33.3%) */}
                            <div className="absolute w-[24px] h-[24px] bg-white border-[5px] border-[#0068AD] rounded-full z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: '100%', top: '33.3%' }}></div>
                        </div>

                        {/* Columns Wrapper - Stacks naturally on mobile with gaps, forms a 4-col grid on desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 w-full h-auto md:h-[450px] relative z-0 md:border-l md:border-r border-[#969696]/40">
                            
                            {/* Column 1 */}
                            <motion.div 
                                style={{ opacity: step1Opacity }} 
                                className="flex flex-col text-left px-0 md:px-8 border-b border-[#969696]/40 md:border-b-0 md:border-r h-auto md:h-[450px] justify-start pt-4 md:pt-12 pb-6 md:pb-0"
                            >
                                <span className="text-[#1C99ED] font-medium block mb-2 md:mb-4 text-[20px] md:text-[24px] leading-[120%]">Step 01</span>
                                <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[26px] md:text-[32px] leading-[120%]">Capture</h3>
                                <p className="text-[#5A5A5C] font-normal max-w-full md:max-w-[250px] text-[15px] md:text-[16px] leading-[140%]">
                                    Receive support requests from every connected customer channel.
                                </p>
                            </motion.div>

                            {/* Column 2 */}
                            <motion.div 
                                style={{ opacity: step2Opacity }} 
                                className="flex flex-col text-left px-0 md:px-8 border-b border-[#969696]/40 md:border-b-0 md:border-r h-auto md:h-[450px] justify-start pt-4 md:pt-12 pb-6 md:pb-0"
                            >
                                <span className="text-[#1C99ED] font-medium block mb-2 md:mb-4 text-[20px] md:text-[24px] leading-[120%]">Step 02</span>
                                <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[26px] md:text-[32px] leading-[120%]">Analyze</h3>
                                <p className="text-[#5A5A5C] font-normal max-w-full md:max-w-[250px] text-[15px] md:text-[16px] leading-[140%]">
                                    Understand customer intent, issue severity, and business context instantly.
                                </p>
                            </motion.div>

                            {/* Column 3 */}
                            <motion.div 
                                style={{ opacity: step3Opacity }} 
                                className="flex flex-col text-left px-0 md:px-8 border-b border-[#969696]/40 md:border-b-0 md:border-r h-auto md:h-[450px] justify-start pt-4 md:pt-[220px] pb-6 md:pb-0"
                            >
                                <span className="text-[#1C99ED] font-medium block mb-2 md:mb-4 text-[20px] md:text-[24px] leading-[120%]">Step 03</span>
                                <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[26px] md:text-[32px] leading-[120%]">Resolve</h3>
                                <p className="text-[#5A5A5C] font-normal max-w-full md:max-w-[250px] text-[15px] md:text-[16px] leading-[140%]">
                                    Provide accurate resolutions using AI-powered knowledge and intelligent workflows.
                                </p>
                            </motion.div>

                            {/* Column 4 */}
                            <motion.div 
                                style={{ opacity: step4Opacity }} 
                                className="flex flex-col text-left px-0 md:px-8 h-auto md:h-[450px] justify-start pt-4 md:pt-[220px] pb-6 md:pb-0"
                            >
                                <span className="text-[#1C99ED] font-medium block mb-2 md:mb-4 text-[20px] md:text-[24px] leading-[120%]">Step 04</span>
                                <h3 className="text-[#000000] font-medium mb-2 md:mb-3 text-[26px] md:text-[32px] leading-[120%]">Learn</h3>
                                <p className="text-[#5A5A5C] font-normal max-w-full md:max-w-[250px] text-[15px] md:text-[16px] leading-[140%]">
                                    Every interaction strengthens the Support Worker, improving future resolutions automatically.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConfidentResolutionSection;
