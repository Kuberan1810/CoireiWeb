import React from 'react';
import { MessageSquare, Brain, TrendingUp, Network, Sparkles } from 'lucide-react';
import oneAiAgent from '../../../../assets/images/products/oneaiagent.png';

const OverviewSection: React.FC = () => {
    return (
        <section className="relative w-full py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616]">
            {/* Background decorative glows */}
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">
                        
                        {/* Badge with gradient glow border and exact styling */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Sparkles size={14} className="text-white/80" />
                            <span 
                                style={{ 
                                    fontSize: '15.5px', 
                                    lineHeight: '25.6px',
                                    letterSpacing: '0px'
                                }} 
                                className="font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                            >
                                Overview
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-1">
                            One AI Agent.
                        </h2>
                        <h2 className="text-[#004370] text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-6">
                            Unlimited Growth.
                        </h2>

                        {/* Description with exact styling */}
                        <p 
                            style={{ 
                                fontSize: '20px', 
                                letterSpacing: '0px',
                                lineHeight: '26px', 
                                color: 'rgba(212, 228, 250, 0.9)',
                            }} 
                            className="font-normal mb-8 max-w-xl animate-fade-in"
                        >
                            Disconnected systems create missed opportunities. Follei combines AI conversations, customer intelligence, and automated follow-ups into a single ecosystem designed to convert more leads and drive predictable growth.
                        </p>

                        {/* Capabilities Header */}
                        <h3 className="text-[#6FC5FE]/90 font-semibold text-lg tracking-wider uppercase mb-6">
                            Capabilities
                        </h3>

                        {/* Capabilities Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full">
                            
                            {/* AI Follow-ups */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <MessageSquare size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    AI Follow-ups
                                </span>
                            </div>

                            {/* Customer Intelligence */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <Brain size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Customer Intelligence
                                </span>
                            </div>

                            {/* Real-time Analytics */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <TrendingUp size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Real-time Analytics
                                </span>
                            </div>

                            {/* Workflow Automation */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <Network size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Workflow Automation
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Right Column: Dashboard Mockup Image */}
                    <div className="lg:col-span-7 flex items-center justify-center relative order-1 lg:order-2">
                        <div className="w-full rounded-[24px] border border-white/[0.08] overflow-hidden shadow-2xl relative group">
                            <div className="absolute inset-0 bg-transparent transition-colors duration-300 pointer-events-none" />
                            <img 
                                src={oneAiAgent} 
                                alt="Follei Analytics Dashboard" 
                                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
