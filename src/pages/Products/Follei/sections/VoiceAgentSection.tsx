import React from 'react';
import Lottie from 'lottie-react';
import { CheckSquare, Zap, Activity, MessageSquare, Sparkles } from 'lucide-react';

const ROBO_LOTTIE_URL = "https://cdn.prod.website-files.com/69108ccf43c3987ea965e960/6930eade4c8d752651faf61b_robo%20head%203.json";

const VoiceAgentSection: React.FC = () => {
    const [roboData, setRoboData] = React.useState<any>(null);

    React.useEffect(() => {
        // Load center robo head animation
        fetch(ROBO_LOTTIE_URL)
            .then(res => res.json())
            .then(data => setRoboData(data))
            .catch(err => console.error("Failed to load robo animation", err));
    }, []);

    return (
        <section className="relative w-full py-20 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616]">
            {/* Background decorative glows */}
            <div className="absolute top-10 left-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Robot Animation */}
                    <div className="lg:col-span-5 flex items-center justify-center relative min-h-[300px]">
                        <div className="w-full max-w-[320px] aspect-square flex items-center justify-center overflow-visible z-10">
                            {roboData && (
                                <Lottie
                                    animationData={roboData}
                                    loop={true}
                                    className="w-full h-full scale-110 sm:scale-125 transform-gpu"
                                />
                            )}
                        </div>
                    </div>
 
                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        
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
                                AI Chatbot
                            </span>
                        </div>

                        {/* Heading with exact styling */}
                        <h2 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-1">
                            Elevate support.
                        </h2>
                        <h2 className="text-[#004370] text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-6">
                            Automate sales.
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
                            Engage visitors with an intelligent chatbot that does more than just answer questions. Follei qualifies leads, books meetings, and handles support tickets in real-time, providing immediate value to your customers.
                        </p>

                        {/* Capabilities Header */}
                        <h3 className="text-[#6FC5FE]/90 font-semibold text-lg tracking-wider uppercase mb-6">
                            Capabilities
                        </h3>

                        {/* Capabilities Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full">
                            
                            {/* Lead Qualification */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <CheckSquare size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Lead Qualification
                                </span>
                            </div>

                            {/* Instant Setup */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <Zap size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Instant Setup
                                </span>
                            </div>

                            {/* Human Handoff */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <Activity size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    Human Handoff
                                </span>
                            </div>

                            {/* 24/7 AI Support */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FC5FE] group-hover:text-blue-400 group-hover:border-[#6FC5FE]/30 transition-all duration-300 shrink-0">
                                    <MessageSquare size={20} />
                                </div>
                                <span className="text-white/80 font-medium tracking-wide text-[13px] sm:text-[14px] uppercase group-hover:text-white transition-colors duration-300">
                                    24/7 AI Support
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default VoiceAgentSection;
