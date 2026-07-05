import React from "react";
import { Zap, Target, MessageSquare, TrendingUp } from "lucide-react";

export const WhyItMattersSection: React.FC = () => {
    return (
        <section className="w-full px-6 sm:px-10 md:px-15 pt-4 pb-24 flex justify-center bg-white ">
            <div className="w-full max-w-[1300px] flex flex-col items-center">

                {/* Premium Capsule Badge */}
                <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
                    <div
                        className="inline-flex items-center justify-center gap-2 px-[13px] py-[7px] bg-[#24292C]/20 border border-white/10 text-white select-none relative"
                        style={{
                            boxShadow: `
                                inset 0 3px 4px rgba(255, 255, 255, 0.2), 
                                inset 0 -3px 4px rgba(255, 255, 255, 0.2)
                            `,
                            borderRadius: '2px',
                            overflow: 'visible'
                        }}
                    >
                        {/* Top-Right Corner Line */}
                        <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-white/40 pointer-events-none" />
                        {/* Bottom-Left Corner Line */}
                        <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-white/40 pointer-events-none" />

                        <span className="text-sm tracking-wide text-white">
                            Why It Matters
                        </span>
                    </div>
                </div>

                {/* Heading & Subheading */}
                <h2 data-ns-animate="true" data-delay="0.2" className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center max-w-4xl">
                    Why Business Intelligence Matters
                </h2>
                <p data-ns-animate="true" data-delay="0.3" className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16 text-center">
                    A deeper understanding of your business enables every AI worker to perform with<br className="hidden md:block" /> greater speed, accuracy, and consistency.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1: Faster Onboarding */}
                    <div
                        data-ns-animate="true"
                        data-delay="0.4"
                        className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300 group-hover:border-[#3b82f6]/30 bg-white  shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                            <Zap size={24} className="text-[#E3E3E0] group-hover:text-[#3b82f6] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                            Faster Onboarding
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                            AI workers understand your business from day one, reducing setup and training time.
                        </p>
                    </div>

                    {/* Card 2: Better Decisions */}
                    <div
                        data-ns-animate="true"
                        data-delay="0.5"
                        className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300 group-hover:border-[#3b82f6]/30 bg-white  shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                            <Target size={24} className="text-[#E3E3E0] group-hover:text-[#3b82f6] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                            Better Decisions
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                            Every action is guided by business context, customer history, and organizational knowledge.
                        </p>
                    </div>

                    {/* Card 3: Consistent Responses */}
                    <div
                        data-ns-animate="true"
                        data-delay="0.6"
                        className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300 group-hover:border-[#3b82f6]/30 bg-white  shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                            <MessageSquare size={24} className="text-[#E3E3E0] group-hover:text-[#3b82f6] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                            Consistent Responses
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                            Deliver accurate and consistent customer interactions across every channel.
                        </p>
                    </div>

                    {/* Card 4: Scalable Growth */}
                    <div
                        data-ns-animate="true"
                        data-delay="0.7"
                        className="w-full rounded-[24px] border border-white/8 bg-[#1a1a1a]/40 p-8 flex flex-col items-center text-center group transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300 group-hover:border-[#3b82f6]/30 bg-white  shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)]">
                            <TrendingUp size={24} className="text-[#E3E3E0] group-hover:text-[#3b82f6] transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                            Scalable Growth
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                            Deploy additional AI workers instantly without retraining or operational overhead.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
