import React, { useState } from "react";
import { Sparkles, X, Check } from "lucide-react";
import "../../../../App.css";
import switch1 from "../../../../assets/images/products/switch1.svg";
import switch2 from "../../../../assets/images/products/switch2.svg";

export const PlatformTransformation: React.FC = () => {
    const [activeState, setActiveState] = useState<'before' | 'after'>('before');
    const isAfter = activeState === 'after';

    const handleToggle = () => {
        setActiveState(prev => prev === 'before' ? 'after' : 'before');
    };


    return (
        <section className="relative w-full pt-28 pb-4 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616] flex flex-col items-center">


            <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] mb-6">
                    <Sparkles size={13} className="text-[#3B82F6]" />
                    <span className="text-[11px] font-semibold text-white/80 uppercase tracking-[0.15em]">
                        Platform Transformation
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-[#E3E3E0] text-center text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight leading-[1.15] mb-28 max-w-3xl">
                    From Reactive <span className="text-[#3B82F6] bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Operations</span> To Autonomous Growth
                </h2>

                {/* Switch Card Container Outer Wrapper */}
                <div className="w-full flex justify-center relative pt-[24px]">

                    {/* --- MAIN SWITCH CARD (700x488 as per Figma) --- */}
                    <div
                        className={`w-full max-w-[800px] min-h-[488px] relative border rounded-[30px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out flex flex-col justify-center overflow-visible ${isAfter
                            ? 'bg-[#18252D] border-[#DDE5ED]'
                            : 'bg-[#262626] border-[#DDE5ED]'
                            }`}
                    >


                        {/* BEFORE FOLLEI Tab (Left) */}
                        <div
                            onClick={() => setActiveState('before')}
                            className={`absolute bottom-full right-1/2 mr-[75px] translate-y-[1px] w-[130px] h-[50px] flex items-center justify-end pr-4 cursor-pointer rounded-br-[20px] select-none transition-all duration-500 border-r ${!isAfter
                                ? 'border-[#DDE5ED] text-white'
                                : 'border-[#DDE5ED]/20 text-white/30 hover:text-white/60'
                                }`}
                        >
                            <span className="text-xs sm:text-[16px] font-semibold tracking-wider transition-colors duration-300">
                                Before follei
                            </span>
                        </div>

                        {/* Dial Container (Center Overlay) */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[65px] w-[130px] h-[160px] z-20 select-none overflow-visible cursor-pointer" onClick={handleToggle}>
                            <img
                                src={switch1}
                                alt="Switch Dial Before"
                                className={`absolute inset-0 w-[130px] h-[160px] transition-opacity duration-500 ease-in-out ${isAfter ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <img
                                src={switch2}
                                alt="Switch Dial After"
                                className={`absolute inset-0 w-[130px] h-[160px] transition-opacity duration-500 ease-in-out ${isAfter ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {/* AFTER FOLLEI Tab (Right) */}
                        <div
                            onClick={() => setActiveState('after')}
                            className={`absolute bottom-full left-1/2 ml-[75px] translate-y-[1px] w-[130px] h-[50px] flex items-center justify-start pl-4 cursor-pointer rounded-bl-[20px] select-none transition-all duration-500 border-l ${isAfter
                                ? 'border-[#DDE5ED] text-white'
                                : 'border-[#DDE5ED]/20 text-white/30 hover:text-white/60'
                                }`}
                        >
                            <span className="text-xs sm:text-[16px] font-semibold tracking-wider transition-colors duration-300">
                                After Follei
                            </span>
                        </div>

                        {/* Interactive Content Area with cross-slide transition */}
                        <div className="relative w-full flex-1 flex flex-col justify-center py-4">

                            {/* BEFORE CONTENT */}
                            <div
                                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center transition-all duration-500 ease-in-out ${isAfter
                                    ? 'opacity-0 translate-x-[-30px] pointer-events-none absolute'
                                    : 'opacity-100 translate-x-0'
                                    }`}
                            >
                                {/* Left Side Copy */}
                                <div className="md:col-span-7 flex flex-col justify-center">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight mb-6 leading-tight">
                                        Challenges of managing investments today
                                    </h3>
                                    <ul className="space-y-4 text-white/70 text-sm sm:text-[14.5px] leading-relaxed">
                                        <li className="flex items-start gap-3">
                                            <X size={16} className="text-red-500 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Knowledge scattered across documents, systems, and teams</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X size={16} className="text-red-500 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Leads are followed up inconsistently</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X size={16} className="text-red-500 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Customer conversations lack context</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X size={16} className="text-red-500 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Decisions are based on incomplete information</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <X size={16} className="text-red-500 shrink-0 mt-1" strokeWidth={3} />
                                            <span>revenue opportunities are missed</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Side Metrics */}
                                <div className="md:col-span-5 flex flex-col items-center md:items-end gap-5">
                                    <div className="w-[224px] h-[103px] bg-[#FF0D0D]/5 border-t border-t-[#FF0D0D]/30 rounded-[20px] p-5 flex flex-col justify-center gap-[6px] transition-all duration-300">
                                        <span className="text-white text-[32px] font-bold leading-none">
                                            68%
                                        </span>
                                        <span className="text-white/60 text-[15px] font-normal leading-tight">
                                            Lost Revenue Visibility
                                        </span>
                                    </div>
                                    <div className="w-[224px] h-[103px] bg-[#FF0D0D]/5 border-t border-t-[#FF0D0D]/30 rounded-[20px] p-5 flex flex-col justify-center gap-[6px] transition-all duration-300">
                                        <span className="text-white text-[32px] font-bold leading-none">
                                            55%
                                        </span>
                                        <span className="text-white/60 text-[15px] font-normal leading-tight">
                                            Process Dependency
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* AFTER CONTENT */}
                            <div
                                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center transition-all duration-500 ease-in-out ${isAfter
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-[30px] pointer-events-none absolute'
                                    }`}
                            >
                                {/* Left Side Copy */}
                                <div className="md:col-span-7 flex flex-col justify-center">
                                    <h3 className="text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight mb-6 leading-tight">
                                        Smarter way to manage your investments
                                    </h3>
                                    <ul className="space-y-4 text-white/85 text-sm sm:text-[14.5px] leading-relaxed">
                                        <li className="flex items-start gap-3">
                                            <Check size={16} className="text-emerald-400 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Unified business knowledge across every system</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check size={16} className="text-emerald-400 shrink-0 mt-1" strokeWidth={3} />
                                            <span>AI workers engage customers automatically</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check size={16} className="text-emerald-400 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Revenue opportunities identified in real time</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check size={16} className="text-emerald-400 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Faster support, onboarding, and collections</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check size={16} className="text-emerald-400 shrink-0 mt-1" strokeWidth={3} />
                                            <span>Customer context preserved across all channels</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Side Metrics */}
                                <div className="md:col-span-5 flex flex-col items-center md:items-end gap-[16px]">
                                    <div className="w-[224px] h-[103px] bg-[#10B981]/10 border-t border-t-[#10B981]/30 rounded-[20px] p-5 flex flex-col justify-center gap-[6px] transition-all duration-300">
                                        <span className="text-white text-[32px] font-bold leading-none">
                                            3X Faster
                                        </span>
                                        <span className="text-white/60 text-[15px] font-normal leading-tight">
                                            Customer Engagement
                                        </span>
                                    </div>
                                    <div className="w-[224px] h-[103px] bg-[#10B981]/10 border-t border-t-[#10B981]/30 rounded-[20px] p-5 flex flex-col justify-center gap-[6px] transition-all duration-300">
                                        <span className="text-white text-[32px] font-bold leading-none">
                                            24/7
                                        </span>
                                        <span className="text-white/60 text-[15px] font-normal leading-tight">
                                            Autonomous Execution
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformTransformation;
