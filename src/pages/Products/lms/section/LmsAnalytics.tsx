import React from 'react';
import coireiLogo from '../../../../assets/images/products/coirei-logo.svg';

const LmsAnalytics: React.FC = () => {
  return (
    <section className="relative GlobalPadding font-inter-sans overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2
            data-ns-animate
            className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-[#04032E] tracking-tight leading-[1.15]  "
          >
            Powerful Features for <br className="hidden sm:block" /> Modern Learning Management.
          </h2>
        </div>

        {/* Learning Analytics Card */}
        <div className="w-full rounded-[36px] border border-[#E9ECFF] bg-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]">

          {/* Left Text Column */}
          <div className="flex-1 flex flex-col items-start text-left">
            {/* Orange circular icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F67300] mb-8 shadow-lg shadow-[#F67300]/20 text-black">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[32px] sm:text-[40px] font-medium text-[#04032E] tracking-tight leading-tight mb-6  ">
              Learning Analytics
            </h3>

            {/* Subtitle */}
            <p className="text-[#5A5A5C] text-[16px] sm:text-[18px] leading-relaxed font-light max-w-lg">
              Track student progress, attendance, course completion and performance through real-time insights and reports.
            </p>
          </div>

          {/* Right Diagram Column */}
          <div className="flex-1 w-full max-w-[764px] aspect-[764/314] relative flex items-center justify-center overflow-hidden bg-transparent">
            <svg
              viewBox="0 0 764 314"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              <defs>
                <radialGradient id="center-circle-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#F8F9FA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E9ECFF" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              {/* LEFT SIDE */}
              {/* Top: from icon (90, 70) to bend (160, 142) to center logo (334, 142) */}
              <path d="M 90 70 L 160 142 L 334 142" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />
              {/* Middle: from icon (45, 157) to center logo (334, 157) */}
              <path d="M 45 157 L 334 157" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />
              {/* Bottom: from icon (90, 244) to bend (160, 172) to center logo (334, 172) */}
              <path d="M 90 244 L 160 172 L 334 172" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />

              {/* RIGHT SIDE */}
              {/* Top: from icon (674, 70) to bend (604, 142) to center logo (430, 142) */}
              <path d="M 674 70 L 604 142 L 430 142" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />
              {/* Middle: from icon (719, 157) to center logo (430, 157) */}
              <path d="M 719 157 L 430 157" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />
              {/* Bottom: from icon (674, 244) to bend (604, 172) to center logo (430, 172) */}
              <path d="M 674 244 L 604 172 L 430 172" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1.5" />

              {/* Outer thin ring Layer (250px diameter -> 125px radius) */}
              <circle cx="382" cy="157" r="125" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1" fill="url(#center-circle-gradient)" />

              {/* Inner thin ring Layer (112px diameter -> 56px radius) */}
              <circle cx="382" cy="157" r="56" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" fill="none" />
            </svg>

            {/* Central Node */}
            <div className="group absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center z-20 cursor-pointer bg-transparent">
              <img src={coireiLogo} alt="Coirei Logo" className="w-20 h-20 object-contain transition-transform duration-1000 ease-in-out group-hover:rotate-[360deg] filter drop-shadow-[0_0_12px_rgba(246,115,0,0.4)]" />
            </div>

            {/* Nodes on Left */}

            {/* Top Left: Calendar */}
            <div className="absolute left-[11.78%] top-[22.29%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            {/* Middle Left: Video Camera */}
            <div className="absolute left-[5.89%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>

            {/* Bottom Left: Dashboard Layout */}
            <div className="absolute left-[11.78%] top-[77.71%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
            </div>

            {/* Nodes on Right */}

            {/* Top Right: Profile */}
            <div className="absolute left-[88.22%] top-[22.29%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            {/* Middle Right: Tablet / Mobile */}
            <div className="absolute left-[94.11%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>

            {/* Bottom Right: Checklist / Clipboard */}
            <div className="absolute left-[88.22%] top-[77.71%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center z-20 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#04032E]">
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
