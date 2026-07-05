import  { useState } from 'react';

const Velei = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative w-full h-full flex flex-col min-h-[400px] overflow-hidden bg-[#f0f4f8] rounded-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[80px] opacity-80 bg-[rgba(180,210,255,0.6)]"></div>
                <div className="absolute top-[20%] left-[-20%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-80 bg-[rgba(255,200,220,0.5)]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] opacity-80 bg-[rgba(255,240,180,0.5)]"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full blur-[80px] opacity-80 bg-[rgba(200,240,210,0.5)]"></div>
            </div>

            {/* App Container */}
            <main className="relative z-10 flex-1 flex justify-center p-4 sm:p-8">
                <div className="w-full max-w-[720px] bg-[#f3f3f3] rounded-[32px] p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] border border-white/40 flex flex-col gap-6">
                    {/* Header */}
                    <header className="flex items-center">
                        <button className="flex items-center gap-2 text-[#1a1a1a] text-[14px] font-medium px-2 py-1 -ml-2 rounded-[8px] hover:bg-black/5 transition-colors">
                            <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>new-job</span>
                            <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </header>

                    {/* Prompt Box */}
                    <section className="flex flex-col rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <div className="bg-white p-4 rounded-t-[16px] flex flex-col gap-3">
                            <input
                                type="text"
                                className="w-full border-none outline-none text-[15px] text-[#1a1a1a] bg-transparent placeholder-[#8e8e8e]"
                                placeholder="Search jobs suitable for you"
                                aria-label="Prompt input"
                            />

                            <div className="flex justify-between items-center">
                                <button className="flex items-center gap-1.5 text-[#5e5e5e] text-[13px] px-2 py-1 -ml-2 rounded-[8px] hover:bg-black/5 hover:text-[#1a1a1a] transition-colors">
                                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    <span>Velei - 3.5 Flash</span>
                                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>

                                <button className="w-7 h-7 rounded-full bg-[#e5e5e5] text-[#5e5e5e] flex items-center justify-center hover:bg-[#d4d4d8] hover:text-[#1a1a1a] transition-colors">
                                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                        <line x1="12" y1="19" x2="12" y2="23"></line>
                                        <line x1="8" y1="23" x2="16" y2="23"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <footer className="bg-[#e5e5e5] px-4 py-2 rounded-b-[16px] flex items-center gap-4">
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-1.5 text-[#5e5e5e] text-[13px] px-2 py-1 -ml-2 rounded-[8px] hover:bg-black/5 hover:text-[#1a1a1a] transition-colors"
                                >
                                    <svg className="w-[14px] h-[14px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 14V2"></path>
                                        <path d="M4 9c3 0 5-1 5-4V2"></path>
                                        <path d="M7 4l2-2 2 2"></path>
                                    </svg>
                                    <span>New Workspace</span>
                                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-[calc(100%+4px)] left-0 bg-[#f8f8f8] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.05)] p-1 min-w-[160px] flex flex-col z-10 border border-black/10">
                                        <button className="flex items-center gap-2 w-full px-3 py-2 text-[13px] text-[#1a1a1a] rounded-[6px] hover:bg-black/5 justify-start transition-colors">
                                            <svg className="w-[14px] h-[14px] text-[#5e5e5e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                                <line x1="12" y1="17" x2="12" y2="21"></line>
                                            </svg>
                                            <span>Remote</span>
                                        </button>
                                        <button className="flex items-center gap-2 w-full px-3 py-2 text-[13px] text-[#1a1a1a] rounded-[6px] hover:bg-black/5 justify-start transition-colors">
                                            <svg className="w-[14px] h-[14px] text-[#5e5e5e]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 14V2"></path>
                                                <path d="M4 9c3 0 5-1 5-4V2"></path>
                                                <path d="M7 4l2-2 2 2"></path>
                                            </svg>
                                            <span>Hybrid</span>
                                        </button>
                                        <button className="flex items-center gap-2 w-full px-3 py-2 text-[13px] text-[#1a1a1a] rounded-[6px] hover:bg-black/5 justify-start transition-colors">
                                            <svg className="w-[14px] h-[14px] text-[#5e5e5e]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 14V2"></path>
                                                <path d="M4 9c3 0 5-1 5-4V2"></path>
                                                <path d="M7 4l2-2 2 2"></path>
                                            </svg>
                                            <span>On-site</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button className="flex items-center gap-1.5 text-[#5e5e5e] text-[13px] px-2 py-1 -ml-2 rounded-[8px] hover:bg-black/5 hover:text-[#1a1a1a] transition-colors">
                                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="6" y1="3" x2="6" y2="15"></line>
                                    <circle cx="18" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                                </svg>
                                <span>main</span>
                                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </footer>
                    </section>
                </div>
            </main>

         
        </div>
    );
};

export default Velei;
