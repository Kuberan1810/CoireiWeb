import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const InsightsCTASection = () => {
    // Height percentages for the 6 bars in the chart
    const chartBars = [
        { height: '35%', isActive: false },
        { height: '55%', isActive: false },
        { height: '75%', isActive: false },
        { height: '95%', isActive: true }, // Highlighted active bar
        { height: '60%', isActive: false },
        { height: '45%', isActive: false }
    ];

    return (
        <section className="relative w-full py-20 lg:py-28 px-6 sm:px-10 md:px-15 overflow-hidden bg-[#161616]">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Insights Panel Card */}
                <div className="w-full mb-28">
                    {/* Dark Pill Header */}
                    <div 
                        style={{
                            backgroundColor: 'rgba(28, 43, 60, 0.4)',
                        }}
                        className="w-full min-h-[98px] border-b border-white/10 rounded-[45px] px-[32px] py-[29px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-14"
                    >
                        <h3 className="text-xl sm:text-2xl md:text-[25px] font-medium text-zinc-100 tracking-tight leading-tight">
                            Real-Time Insights Powered By AI
                        </h3>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-zinc-400 tracking-wider uppercase shrink-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                            </span>
                            Live Data
                        </div>
                    </div>

                    {/* Stats & Chart Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Stats & Description */}
                        <div className="lg:col-span-6 flex flex-col gap-8">
                            <div className="grid grid-cols-2 gap-6 sm:gap-8">
                                <div className="flex flex-col gap-2">
                                    <span 
                                        style={{ 
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0px'
                                        }}
                                        className="text-white uppercase"
                                    >
                                        Automated Resolution
                                    </span>
                                    <span 
                                        style={{ 
                                            fontWeight: 400,
                                            fontSize: '36px',
                                            lineHeight: '40px',
                                            letterSpacing: '0px',
                                            color: '#004370'
                                        }}
                                    >
                                        94.2%
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span 
                                        style={{ 
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0px'
                                        }}
                                        className="text-white uppercase"
                                    >
                                        Avg. Response Time
                                    </span>
                                    <span 
                                        style={{ 
                                            fontWeight: 400,
                                            fontSize: '36px',
                                            lineHeight: '40px',
                                            letterSpacing: '0px',
                                            color: '#004370'
                                        }}
                                    >
                                        1.2s
                                    </span>
                                </div>
                            </div>
                            <p 
                                style={{ 
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    letterSpacing: '0px'
                                }}
                                className="text-white max-w-xl"
                            >
                                Our analytics engine doesn't just show charts; it identifies bottlenecks and suggests workflow improvements automatically.
                            </p>
                        </div>

                        {/* Minimalist Bar Chart */}
                        <div className="lg:col-span-6 flex items-end justify-end gap-[8px] h-[200px] sm:h-[240px] w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
                            {chartBars.map((bar, index) => (
                                <div key={index} className="w-full max-w-[62.67px] h-full flex items-end">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: bar.height }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                                        style={
                                            bar.isActive
                                                ? {
                                                      backgroundColor: '#004370',
                                                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                                                  }
                                                : {
                                                      backgroundColor: 'rgba(16, 79, 122, 0.3)',
                                                  }
                                        }
                                        className={`w-full rounded-t-[2px] transition-colors duration-300 ${
                                            bar.isActive
                                                ? ''
                                                : 'border-t border-[#004370] hover:bg-[rgba(16,79,122,0.45)]'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Workflow Automation Section */}
                <div className="w-full flex flex-col items-center text-center pt-16 pb-16 mb-8 relative z-10">
                    {/* Pill Badge with Default Capsule Style */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Sparkles size={14} className="text-[#004370]" />
                        <span className="text-zinc-300 text-xs sm:text-sm font-medium tracking-wide">
                            AI Workflow Automation
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight mb-6 max-w-5xl">
                        Build Smarter <span className="text-[#004370]">Customer Journeys</span> With AI
                    </h2>

                    {/* Description */}
                    <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-light">
                        Design intelligent workflows that automate voice calls, WhatsApp chats, emails, onboarding, and customer engagement. Let Follie handle the complexity while you scale the impact.
                    </p>
                </div>

                {/* Bottom CTA Banner */}
                <div className="w-full flex flex-col items-center text-center pt-12 pb-8">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-none mb-10 max-w-4xl">
                        Transform Communication With AI
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <button className="w-full sm:w-auto h-[66px] pt-[20.5px] pb-[21.5px] px-10 rounded-[20px] bg-[#004370] hover:bg-[#00558f] text-white font-semibold transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide cursor-pointer flex items-center justify-center">
                            Start Building
                        </button>
                        <button className="w-full sm:w-auto h-[66px] pt-[20.5px] pb-[21.5px] px-10 rounded-[20px] bg-[#0f141c]/80 hover:bg-[#161d27] text-zinc-100 font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide cursor-pointer flex items-center justify-center">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsCTASection;
