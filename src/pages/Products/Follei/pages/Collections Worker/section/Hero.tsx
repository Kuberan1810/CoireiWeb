import React from "react";
import folleiLogo from "../../../../../../assets/images/products/folleilogo.svg";
import bg5 from "../../../../../../assets/images/products/bg5.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white ">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Collections Worker</span>
          </div>

          {/* Title */}
          <h1 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Turn Outstanding Payments <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Into Revenue
            </span>
          </h1>


          {/* Description */}
          <p className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            Deliver instant, context-aware support across every customer touchpoint. The Support Worker understands every conversation, accesses complete business knowledge, and resolves issues faster with AI-powered assistance.Deliver instant, context-aware support across every customer touchpoint. The Support Worker understands every conversation, accesses complete business knowledge, and resolves issues faster with AI-powered assistance.          </p>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg5}
            loading="lazy"
            alt=""
            className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Inner Dashboard Mockup */}
          <div className="relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-10">
            <div className="bg-white w-full max-w-[480px] aspect-[2/1] rounded-[16px] shadow-lg flex items-center justify-between px-3 sm:px-6 relative overflow-hidden">

              {/* Left Card */}
              <div className="w-[110px] sm:w-[135px] h-[60px] sm:h-[68px] flex-shrink-0 rounded-[4px] border-[1.5px] border-[#BDE0FF] bg-white flex flex-col justify-center gap-1.5 p-2 sm:p-2.5 relative z-10 shadow-sm">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-0.5 h-3 bg-[#3B82F6]"></div>
                  <span className="text-[7px] sm:text-[9px] text-[#3B82F6] font-medium tracking-wide">Type here ......</span>
                </div>
                <div className="w-[95%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
                <div className="w-[95%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
                <div className="w-[85%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
              </div>

              {/* Connector 1 */}
              <div className="flex-1 h-[2px] relative z-0 -mx-1 flex">
                <div className="flex-1 h-full bg-[#E2E8F0]"></div>
                <div className="w-[16px] h-full bg-gradient-to-r from-[#E2E8F0] to-[#3B82F6]"></div>
              </div>

              {/* Center Circle */}
              <div className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex-shrink-0 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
                <div
                  className="absolute w-[80%] h-[80%] flex items-start justify-center"
                  style={{
                    transform: 'rotate(-146.51deg)'
                  }}
                >
                  <div
                    className="w-full h-1/2 rounded-t-full bg-gradient-to-b from-[#78A9FF] to-[#B1CBFF]"
                  />
                </div>

                {/* Inner Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#0D389F] flex items-center justify-center shadow-[0_4px_12px_rgba(26,86,219,0.3)] relative z-10">
                  <img src={folleiLogo} alt="Follei Logo" className="w-7 h-7 object-contain" />
                </div>
              </div>

              {/* Connector 2  */}
              <div className="flex-1 h-[80px] sm:h-[100px] relative z-0 -mx-1 flex items-center">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="25%" stopColor="#E2E8F0" />
                      <stop offset="75%" stopColor="#E2E8F0" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 50 L 100 15" stroke="url(#lineGrad)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                  <path d="M 0 50 L 100 85" stroke="url(#lineGrad)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Right Card */}
              <div className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] flex-shrink-0 rounded-[8px] bg-[#EBF5C8] flex flex-col overflow-hidden relative z-10 shadow-sm border-[1.5px] border-[#B3D465]">
                {/* Card Header */}
                <div className="h-[28%] bg-[#B3D465] flex items-center px-2.5 gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-white/80"></div>
                  <div className="w-8 h-1.5 rounded-full bg-white/80"></div>
                </div>
                {/* Card Body */}
                <div className="flex-1 p-2 sm:p-2.5">
                  <div className="w-full h-full rounded-[4px] bg-[#D7EAA1]/50 border border-[#B3D465]/30"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
