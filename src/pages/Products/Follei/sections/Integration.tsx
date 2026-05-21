import coireiLogo from "../../../../assets/images/products/coirei-logo.svg";

const Integration = () => {
    return (
        <section className="min-h-screen flex flex-col items-center text-center mx-6 sm:mx-10 md:mx-15 pt-50 pb-40 overflow-hidden mt-20">
            <style>{`
                @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes reverse-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .animate-orbit {
                    animation: orbit var(--duration, 20s) linear infinite;
                }
                .animate-reverse-orbit {
                    animation: reverse-orbit var(--duration, 20s) linear infinite;
                }
            `}</style>

            {/* Badge */}
            <div
                data-ns-animate
                data-offset="80"
                className="mb-10 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            >
                <div className="w-5 h-5 flex items-center justify-center text-white/70">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </div>
                <span className="text-[15px] font-medium text-white/90">Integration</span>
            </div>

            {/* Heading */}
            <h2
                data-ns-animate
                data-offset="80"
                data-delay="0.1"
                className="text-[#E3E3E0] text-[40px] sm:text-[48px] md:text-[56px] font-medium leading-[1.1] mb-6 max-w-4xl mx-auto"
            >
                Seamless AI Follow-ups Across <br /> Every Platform
            </h2>

            {/* Subtext */}
            <p
                data-ns-animate
                data-offset="80"
                data-delay="0.2"
                className="text-[#B5B4B2] text-lg max-w-3xl leading-relaxed mx-auto font-light mb-24"
            >
                Connect your tools, track user behavior everywhere, and trigger intelligent follow-ups across all channels without writing a single line of code.
            </p>

            {/* THE ORBIT VISUAL */}
            <div className="relative w-full max-w-[900px] aspect-square flex items-center justify-center mb-32 scale-[0.4] sm:scale-[0.6] md:scale-[0.75] lg:scale-100 transition-transform duration-500">

                {/* Ring 4 — outer, 900px, icons orbit on this, 111px gap from ring 3 */}
                <div className="absolute rounded-full border-4 border-[#FF7B00]/15 w-[900px] h-[900px] hidden md:block"></div>
                {/* Ring 3 — 678px, 45px gap from ring 2 */}
                <div className="absolute rounded-full border-4 border-[#FF7B00]/15 w-[678px] h-[678px] hidden md:block"></div>
                {/* Ring 2 — 590px, 45px gap from ring 1 */}
                <div className="absolute rounded-full border-4 border-[#FF7B00]/15 w-[590px] h-[590px] "></div>
                {/* Ring 1 — innermost, 500px */}
                <div className="absolute rounded-full border-4 border-[#FF7B00]/15 w-[500px] h-[500px]"></div>

                {/* Center Logo*/}
                <div className="relative z-10 w-[340px] h-[340px] flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(194,96,26,0.3)] bg-[#C2601A]/10 mix-blend-screen"></div>
                    <img
                        src={coireiLogo}
                        alt="Coirei Logo"
                        className="w-full h-full object-contain relative z-10"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                </div>

                {/* Uniformly orbiting icons (Pentagon layout) */}
                <div className="absolute inset-0 animate-orbit z-20" style={{ "--duration": "30s" } as any}>

                    {/* Phone — top (0 deg) */}
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-reverse-orbit" style={{ "--duration": "30s" } as any}>
                            <div className="w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-[#1C1C1C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/10 p-[16px] sm:p-[24px] md:p-[32px]">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Cart — top right (72 deg) */}
                    <div className="absolute top-[34.5%] left-[97.5%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-reverse-orbit" style={{ "--duration": "30s" } as any}>
                            <div className="w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-[#1C1C1C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/10 p-[16px] sm:p-[24px] md:p-[32px]">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Message — bottom right (144 deg) */}
                    <div className="absolute top-[90.5%] left-[79.4%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-reverse-orbit" style={{ "--duration": "30s" } as any}>
                            <div className="w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-[#1C1C1C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/10 p-[16px] sm:p-[24px] md:p-[32px]">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Mail — bottom left (216 deg) */}
                    <div className="absolute top-[90.5%] left-[20.6%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-reverse-orbit" style={{ "--duration": "30s" } as any}>
                            <div className="w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-[#1C1C1C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/10 p-[16px] sm:p-[24px] md:p-[32px]">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Web — top left (288 deg) */}
                    <div className="absolute top-[34.5%] left-[2.5%] -translate-x-1/2 -translate-y-1/2">
                        <div className="animate-reverse-orbit" style={{ "--duration": "30s" } as any}>
                            <div className="w-[64px] h-[64px] sm:w-[96px] sm:h-[96px] md:w-[120px] md:h-[120px] rounded-full bg-[#1C1C1C] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/10 p-[16px] sm:p-[24px] md:p-[32px]">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SUMMARY CARD */}
            <div
                data-ns-animate
                data-offset="80"
                className="w-full  rounded-[48px] relative overflow-hidden mb-20"
                style={{
                    background: 'linear-gradient(135deg, rgba(40,40,40,0.85) 0%, rgba(20,20,20,0.95) 40%, rgba(10,10,10,0.98) 100%)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px_60px -15px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,255,255,0.06)',
                }}
            >
                {/* Silver gradient — top left */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle at top left, rgba(220,225,230,0.18) 0%, transparent 70%)' }}></div>
                {/* Silver gradient — bottom right */}
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(220,225,230,0.15) 0%, transparent 70%)' }}></div>
                {/* Top shimmer */}
                <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}></div>

                <div className="relative z-10 w-full mx-auto max-w-4xl py-12 px-6 sm:py-[90px] sm:px-[90px] text-center flex flex-col gap-[32px]">
                    <h3 className="text-white text-[32px] sm:text-[48px] md:text-[56px] font-medium leading-[1.1]">
                        Your AI Agent Works Everywhere Your Users Are
                    </h3>
                    <p className="text-[#B5B4B2] text-lg sm:text-xl leading-relaxed font-light mx-auto max-w-3xl">
                        From website visits to messaging apps, your AI captures signals, analyzes intent, and responds instantly creating a unified follow-up system.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Integration;