import React from 'react';
import coireiLogo from '../../../../assets/images/Features/coirei-cirlce-logo.png';

const LmsAnalytics: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 font-inter-sans overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.15] font-instrument-sans"
          >
            Powerful Features for <br className="hidden sm:block" /> Modern Learning Management.
          </h2>
        </div>

        {/* Learning Analytics Card */}
        <div className="w-full rounded-[36px] border border-white/5 bg-[#1C1C1C]/40 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-2xl">
          
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col items-start text-left">
            {/* Orange circular icon */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#F66F00]/10 border border-[#F66F00]/20 mb-8 shadow-lg shadow-[#F66F00]/5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F66F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[32px] sm:text-[40px] font-medium text-white tracking-tight leading-tight mb-6 font-instrument-sans">
              Learning Analytics
            </h3>

            {/* Subtitle */}
            <p className="text-zinc-400 text-[16px] sm:text-[18px] leading-relaxed font-light max-w-lg">
              Track student progress, attendance, course completion and performance through real-time insights and reports.
            </p>
          </div>

          {/* Right Diagram Column (Seamless - No nested black background box) */}
          <div className="flex-1 w-full max-w-[550px] aspect-[5/3] relative flex items-center justify-center p-6 overflow-hidden">
  
        <svg
  viewBox="0 0 500 300"
  className="absolute inset-0 w-full h-full pointer-events-none"
  fill="none"
>
  {/* LEFT SIDE */}

  {/* Top */}
  <path d="M 250 110 L 140 110 L 100 70" stroke="#626262" strokeWidth="1" />

  {/* Middle */}
  <path d="M 250 150 L 60 150" stroke="#626262" strokeWidth="1" />

  {/* Bottom */}
  <path d="M 250 190 L 140 190 L 100 230" stroke="#626262" strokeWidth="1" />

  {/* RIGHT SIDE */}

  {/* Top */}
  <path d="M 250 110 L 360 110 L 400 70" stroke="#626262" strokeWidth="1" />

  {/* Middle */}
  <path d="M 250 150 L 440 150" stroke="#626262" strokeWidth="1" />

  {/* Bottom */}
  <path d="M 250 190 L 360 190 L 400 230" stroke="#626262" strokeWidth="1" />
</svg>

            {/* Central Node */}
            <div className="group absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#161616] flex items-center justify-center z-20 cursor-pointer">
              <img src={coireiLogo} alt="Coirei Logo" className="w-full h-full object-contain transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg]" />
            </div>

            {/* Nodes on Left */}
            
            {/* Top Left: Calendar */}
            <div className="absolute left-[20%] top-[23.3%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            {/* Middle Left: Video Camera */}
            <div className="absolute left-[12%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>

            {/* Bottom Left: Dashboard Layout */}
            <div className="absolute left-[20%] top-[76.7%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </div>

            {/* Nodes on Right */}

            {/* Top Right: Profile */}
            <div className="absolute left-[80%] top-[23.3%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            {/* Middle Right: Tablet / Mobile */}
            <div className="absolute left-[88%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>

            {/* Bottom Right: Checklist / Clipboard */}
            <div className="absolute left-[80%] top-[76.7%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <line x1="9" y1="12" x2="10" y2="12" />
                <line x1="14" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="10" y2="16" />
                <line x1="14" y1="16" x2="15" y2="16" />
              </svg>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LmsAnalytics;
