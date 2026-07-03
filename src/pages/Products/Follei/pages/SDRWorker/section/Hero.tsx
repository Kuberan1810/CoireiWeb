import React from "react";
import bg1 from "../../../../../../assets/images/products/bg1.png";
import { Search } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-8">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>SDR Worker</span>
          </div>

          {/* Title */}
          <h1 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Every Lead Starts With
            <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              The Right Conversation
            </span>
          </h1>


          {/* Description */}
          <p className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The SDR Worker engages every prospect with intelligent conversations, qualifies buying intent, nurtures relationships, and schedules meetings automatically—helping your sales team focus on closing deals instead of chasing leads.          </p>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-sky-500/20">
          {/* Background Image */}
          <img
            src={bg1}
            loading="lazy"
            alt=""
            className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700"
          />

          {/* Inner Card Container  */}
          <div className="relative z-10 w-full h-full flex justify-center items-center p-6">
            <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
              <div
                className="w-[461px] h-[265px] shrink-0 border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between p-5 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="absolute top-4 left-5 flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
                </div>

                {/* Left column - Tasks */}
                <div className="flex flex-col gap-3 pl-2.5 text-left justify-center h-full mt-4">
                  <div className="text-slate-800 font-extrabold text-[15px] tracking-wide shrink-0">Tasks :</div>
                  <div className="flex flex-col gap-3 font-medium text-xs text-slate-500">
                    <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
                      <span className="text-[#9C9C9C] text-[16px]">✓</span>
                      <span>Automate</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
                      <span className="text-[#9C9C9C] text-[16px]">✓</span>
                      <span>Reduce</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
                      <span className="text-[#9C9C9C] text-[16px]">✓</span>
                      <span>Improve</span>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div
                  className="w-[243px] h-[224px] border-[1.1px] border-slate-200/60 rounded-[21.12px] shadow-sm relative flex flex-col justify-center px-4"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.51)', backdropFilter: 'blur(10px)' }}
                >
                  <Search size={14} className="absolute top-4 right-4 text-slate-400" strokeWidth={2} />

                  {/* Blocks */}
                  <div className="flex flex-col gap-4 pt-2">
                    {/* Nurturing Row */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                        style={{ background: 'linear-gradient(135deg, #5960DF 0%, #F8CBC0 33%, #D7B5C6 66%, #5960DF 100%)' }}
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[14px] font-bold text-slate-800 leading-tight">Nurturing</span>
                        <span className="text-[10px] text-slate-400 leading-none mt-1">Automated</span>
                      </div>
                    </div>

                    {/* Meetings Row */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                        style={{ background: 'linear-gradient(135deg, #5960DF 0%, #F8CBC0 33%, #D7B5C6 66%, #5960DF 100%)' }}
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[14px] font-bold text-slate-800 leading-tight">Meetings</span>
                        <span className="text-[10px] text-slate-400 leading-none mt-1">Syncing data</span>
                      </div>
                    </div>
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

export default Hero;
