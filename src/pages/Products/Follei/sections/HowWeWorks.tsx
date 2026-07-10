import React from "react";

import layer1Img from "../../../../assets/images/homepage/layer1.svg";
import layer2Img from "../../../../assets/images/homepage/layer2.svg";
import layer3Img from "../../../../assets/images/homepage/layer3.svg";
import folleilogoImg from "../../../../assets/images/products/folleinew.svg";
import useScrollReveal from "../../../../hooks/useScrollReveal"
import ringSvg from "../../../../assets/images/products/ring.svg";
import ring1Svg from "../../../../assets/images/products/ring1.svg";
import ring2Svg from "../../../../assets/images/products/ring2.svg";
import ring3Svg from "../../../../assets/images/products/ring3.svg";

export const HowWeWorks: React.FC = () => {
    const { ref: stackRef, isVisible } = useScrollReveal(0.2);

    return (
        <section className="relative w-full GlobalPadding overflow-hidden bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
            <style>{`
                @keyframes idle-levitate {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .animate-idle-levitate {
                    animation: idle-levitate 4s ease-in-out infinite;
                }
            `}</style>
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
                            <div className="relative w-full h-[160px] flex items-center justify-center animate-idle-levitate" style={{ animationDelay: '0s' }}>
                                <style>{`
                                    @keyframes float-layer {
                                        0%, 100% { transform: translateY(0px); }
                                        50% { transform: translateY(-8px); }
                                    }
                                    .animate-float-1 { animation: float-layer 10s ease-in-out infinite; }
                                    .animate-float-2 { animation: float-layer 10s ease-in-out 1s infinite; }
                                    .animate-float-3 { animation: float-layer 10s ease-in-out 0.8s infinite; }
                                    .animate-float-logo { animation: float-layer 10s ease-in-out 1s infinite; }
                                `}</style>
                                <div ref={stackRef} className="absolute w-[80%] flex justify-center z-0 transition-transform duration-[1500ms] delay-[200ms] ease-in-out" style={{ transform: isVisible ? "translateY(20px)" : "translateY(45px)" }}>
                                    <img src={layer3Img} alt="Layer 1" className="max-h-[160px] object-contain animate-float-1" />
                                </div>
                                <div className="absolute w-[80%] flex justify-center z-10 transition-transform duration-[1500ms] delay-[200ms] ease-in-out" style={{ transform: "translateY(0px)" }}>
                                    <img src={layer2Img} alt="Layer 2" className="max-h-[160px] object-contain animate-float-2" />
                                </div>
                                <div className="absolute w-[80%] flex justify-center z-20 transition-transform duration-[1500ms] delay-[200ms] ease-in-out" style={{ transform: isVisible ? "translateY(-20px)" : "translateY(-45px)" }}>
                                    <img src={layer1Img} alt="Layer 3" className="max-h-[160px] object-contain animate-float-3" />
                                </div>
                                <div className="absolute w-[20%] flex justify-center z-30 transition-transform duration-[1500ms] delay-[200ms] ease-in-out" style={{ transform: isVisible ? "translateY(-29px)" : "translateY(-70px)" }}>
                                    <img src={folleilogoImg} alt="Follei Logo" className="max-h-[60px] object-contain animate-float-logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step-02 Image */}
                    <div data-ns-animate data-delay="0.1" className="md:col-start-1 md:row-start-2 order-4 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center animate-idle-levitate" style={{ animationDelay: '1s' }}>
                                <div className="relative flex flex-col items-center scale-[0.65] md:scale-[0.7] transform-origin-center w-[300px]">
                                    
                                    {/* Top Card (AI Agent) */}
                                    <div className="bg-[#E5E5E5] p-[10px] rounded-[28px] shadow-sm z-20">
                                        <div className="bg-white rounded-[20px] w-[260px] p-[14px] shadow-sm flex items-center justify-between">
                                            <div className="flex gap-3">
                                                <div className="flex flex-col items-start gap-1">
                                                    <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center overflow-hidden border-[0.5px] border-[#E3E3E3]">
                                                        <img src={folleilogoImg} className="w-[90%] h-[90%] object-contain" alt="Follei Logo" />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-black leading-tight mt-1">AI Agent</span>
                                                    <span className="text-[10px] text-slate-400 font-medium">Oct 30</span>
                                                </div>
                                                {/* Skeleton Lines */}
                                                <div className="flex flex-col gap-3 justify-center ml-1 mt-1">
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="w-[30px] h-[3px] bg-slate-300 rounded-full" />
                                                        <div className="w-[60px] h-[3px] bg-slate-100 rounded-full" />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="w-[30px] h-[3px] bg-slate-300 rounded-full" />
                                                        <div className="w-[60px] h-[3px] bg-slate-100 rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Gradient Box */}
                                            <div className="w-[65px] h-[85px] rounded-[16px] bg-gradient-to-br from-[#0F172A] via-[#3B82F6] to-[#06B6D4] shadow-inner" />
                                        </div>
                                    </div>

                                    {/* Connectors & Middle Pill */}
                                    <div className="relative flex flex-col items-center w-full h-[50px] z-10">
                                        {/* Top vertical line */}
                                        <div className="w-[1px] h-[25px] bg-[#D1D5DB]" />
                                        {/* Split curves (Bracket facing down) */}
                                        <div className="w-[170px] h-[25px] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-[#D1D5DB] rounded-t-[16px]" />
                                        
                                        {/* The Blue Glow Pill (Centered on T-junction) */}
                                        <div className="absolute top-[25px] -translate-y-1/2 w-[80px] h-[26px] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] flex items-center justify-center shadow-[0_4px_15px_rgba(59,130,246,0.5)] z-20">
                                            <div className="w-3 h-[2px] bg-white rounded-full shadow-[0_0_8px_white]" />
                                        </div>
                                    </div>

                                    {/* Bottom Card (Activity) */}
                                    <div className="bg-[#E5E5E5] p-[10px] rounded-[28px] shadow-sm z-20">
                                        <div className="bg-white rounded-[20px] w-[260px] p-[16px] shadow-sm flex flex-col gap-4">
                                            <span className="text-[13px] font-bold text-black">Activity</span>
                                            
                                            {/* Row 1: Message */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 text-blue-500">
                                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                                                    </div>
                                                    <div className="w-[2px] h-[18px] bg-slate-100" />
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="w-[30px] h-[3px] bg-slate-300 rounded-full" />
                                                        <div className="w-[65px] h-[3px] bg-slate-100 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="px-3 py-1 border-[1px] border-blue-200 rounded-full text-[9px] text-blue-500 font-medium">In Progress</div>
                                            </div>

                                            {/* Row 2: WhatsApp/Phone */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 text-green-500">
                                                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.73.44 3.35 1.2 4.75L2 22l5.44-1.14C8.75 21.57 10.32 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.3 14.1c-.2.6-.9 1.1-1.5 1.2-.5.1-1.2.2-3.4-1.2-2.7-1.7-4.4-4.5-4.5-4.7-.2-.2-1.1-1.4-1.1-2.7s.7-2 1-2.2c.2-.2.5-.3.8-.3s.5 0 .7.6c.3.7.8 1.9.9 2.1.1.2.1.4 0 .6s-.2.3-.4.6c-.2.2-.4.4-.5.6-.2.2-.4.4-.1.8.3.5.7.9 1.1 1.3.5.4 1 .8 1.5 1 .4.2.7.2.9-.1.2-.3.7-.9.9-1.2.2-.3.5-.2.8-.1s1.8.8 2.1 1c.3.2.5.3.6.4.1.2.1.6 0 1.2z"/></svg>
                                                    </div>
                                                    <div className="w-[2px] h-[18px] bg-slate-100" />
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="w-[24px] h-[3px] bg-slate-300 rounded-full" />
                                                        <div className="w-[50px] h-[3px] bg-slate-100 rounded-full" />
                                                    </div>
                                                </div>
                                                <div className="px-4 py-1 border-[1px] border-slate-200 rounded-full text-[9px] text-slate-400 font-medium">Done</div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
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
                            
                            {/* Circular UI Container */}
                            <div className="relative w-full max-w-[210px] h-[180px] flex items-center justify-center animate-idle-levitate" style={{ animationDelay: '0.5s' }}>
                                
                                {/* Ring 3: Outer */}
                                <div className="absolute w-[210px] h-[210px]" style={{ animation: 'spin 20s linear infinite' }}>
                                    <div className="absolute inset-0 rounded-full border-[1.5px] border-[#5960DF]/20 bg-gradient-to-b from-[#5960DF]/5 to-transparent"></div>
                                    {/* Node 1: Left Outer */}
                                    <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E3E3E3]/50" style={{ animation: 'spin 20s linear infinite reverse' }}>
                                            <img src={ring1Svg} alt="Ring 1" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                    {/* Node 4: Right Outer */}
                                    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E3E3E3]/50" style={{ animation: 'spin 20s linear infinite reverse' }}>
                                            <img src={ring2Svg} alt="Ring 2" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Ring 2: Middle (145.8px diameter for 43.65px gap) */}
                                <div className="absolute w-[145.8px] h-[145.8px]" style={{ animation: 'spin 15s linear infinite reverse' }}>
                                    <div className="absolute inset-0 rounded-full border-[1.5px] border-[#5960DF]/30 bg-gradient-to-b from-[#5960DF]/10 to-transparent"></div>
                                    {/* Node 2: Left Inner */}
                                    <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E3E3E3]/50" style={{ animation: 'spin 15s linear infinite' }}>
                                            <img src={ring3Svg} alt="Ring 3" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                    {/* Node 3: Right Inner */}
                                    <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E3E3E3]/50" style={{ animation: 'spin 15s linear infinite' }}>
                                            <img src={ringSvg} alt="Ring" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                </div>

                                {/* Ring 1: Inner (122.4px diameter for 31.95px gap) */}
                                <div className="absolute w-[122.4px] h-[122.4px]">
                                    <div className="absolute inset-0 rounded-full border-[1.5px] border-[#5960DF]/50 bg-gradient-to-b from-[#5960DF]/15 to-transparent" style={{ animation: 'spin 10s linear infinite' }}></div>
                                    {/* Top/Bottom Dots on Inner Ring */}
                                    <div className="absolute left-1/2 -top-[3px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5960DF] border-[1px] border-white z-10" />
                                    <div className="absolute left-1/2 -bottom-[3px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5960DF] border-[1px] border-white z-10" />
                                </div>

                                {/* Center Icon (58.5px) */}
                                <div className="absolute w-[58.5px] h-[58.5px] rounded-full z-10 flex items-center justify-center overflow-hidden bg-white">
                                    <img src={folleilogoImg} alt="Follei Center" className="w-full h-full object-contain scale-110" />
                                </div>

                                {/* Connecting Bracket to Pill */}
                                <svg className="absolute top-[calc(50%+61.2px)] w-[80px] h-[23.4px] z-0" viewBox="0 0 80 23.4" fill="none">
                                    <path d="M40 0 v5 Q40 12, 20 12 T5 23.4 M40 0 v5 Q40 12, 60 12 T75 23.4" stroke="#5960DF" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                                </svg>

                                {/* Bottom Pill (Top is 84.6px from center = 29.25 + 55.35) */}
                                <div className="absolute top-[calc(50%+84.6px)] bg-white rounded-full px-3 py-1 shadow-md border border-[#E3E3E3]/80 z-30">
                                    <span className="text-[9px] font-medium text-[#475569]">Intelligence layer</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Step-04 Image */}
                    <div data-ns-animate data-delay="0.3" className="md:col-start-4 md:row-start-1 order-8 flex flex-col">
                        <div className="w-full border-[0.2px] border-[#E3E3E3]/30 bg-[#FFFFFF] p-[20px] flex items-center justify-center h-[220px] rounded-none shadow-none overflow-hidden">
                            
                            {/* Bar Chart UI Component */}
                            <div className="relative w-full h-[160px] flex items-end justify-center gap-3 animate-idle-levitate" style={{ animationDelay: '1.5s' }}>
                                <style>{`
                                    @keyframes bar-height {
                                        0%, 100% { height: var(--base-h); }
                                        50% { height: calc(var(--base-h) * 0.93); }
                                    }
                                    .bar-animate {
                                        animation: bar-height var(--speed) ease-in-out infinite var(--delay);
                                    }
                                `}</style>

                                {/* Bar 1 */}
                                <div className="relative w-[24px] h-full">
                                    <div className="absolute bottom-0 w-full bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '30%', '--speed': '2.5s', '--delay': '0s' } as React.CSSProperties} />
                                </div>

                                {/* Bar 2 */}
                                <div className="w-[24px] bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '35%', '--speed': '3s', '--delay': '0.5s' } as React.CSSProperties} />

                                {/* Bar 3 */}
                                <div className="w-[24px] bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '45%', '--speed': '2.8s', '--delay': '1s' } as React.CSSProperties} />

                                {/* Bar 4 (Active/Highlighted) */}
                                <div className="relative h-full flex items-end justify-center z-20">
                                    {/* Background glow pill */}
                                    <div className="absolute w-[40px] h-[95%] bottom-0 bg-white shadow-[0_4px_20px_rgba(89,96,223,0.15)] rounded-full -z-10" />
                                    
                                    {/* The Solid Blue Bar */}
                                    <div className="w-[24px] bg-[#5960DF] rounded-full bar-animate relative" style={{ '--base-h': '80%', '--speed': '3.2s', '--delay': '0.2s' } as React.CSSProperties}>
                                        {/* Text Label - anchored to the top of the bar so it rides up and down! */}
                                        <div className="absolute top-0 -translate-y-1/2 left-[calc(100%+10px)] whitespace-nowrap">
                                            <span className="text-[#5960DF] text-[13px] font-medium tracking-wide">1 Week Avg</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bar 5 */}
                                <div className="w-[24px] bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '60%', '--speed': '2.6s', '--delay': '0.8s' } as React.CSSProperties} />

                                {/* Bar 6 */}
                                <div className="w-[24px] bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '40%', '--speed': '3.5s', '--delay': '0.4s' } as React.CSSProperties} />

                                {/* Bar 7 */}
                                <div className="w-[24px] bg-[#5960DF]/40 rounded-full bar-animate" style={{ '--base-h': '25%', '--speed': '2.9s', '--delay': '0.7s' } as React.CSSProperties} />
                            </div>

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