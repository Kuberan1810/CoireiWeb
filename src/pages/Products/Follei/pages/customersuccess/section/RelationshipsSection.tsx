import React from "react";
import cjImg from "../../../../../../assets/images/products/CJ.png";
import cj1Img from "../../../../../../assets/images/products/CJ 1.png";

export const RelationshipsSection: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-8 lg:py-10 flex justify-center bg-white">
      <div className="w-full flex flex-col items-center">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">

          <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Smarter Customer Success, <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Stronger Relationships
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">

          {/* Card 1: Customer Journey */}
          <div className="flex flex-col items-end">
            <div className="w-full max-w-[539px] lg:h-[600px] bg-[#FDFDFD] rounded-[10px] pt-[80px] pb-[112px] px-10 flex flex-col justify-between text-left relative">
              {/* Header  */}
              <img src={cj1Img} alt="Customer Journey Header" className="w-full h-auto mb-4 select-none pointer-events-none" />

              <div className="grid grid-cols-4 gap-4 w-full flex-1 items-center">
                {Array.from({ length: 12 }).map((_, index) => (
                  <img
                    key={index}
                    src={cjImg}
                    alt="Journey node"
                    className="w-full h-auto object-contain rounded-lg select-none pointer-events-none"
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-start items-center w-full max-w-[539px] ml-8 mt-12">
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium bg-[#000215] text-white select-none cursor-default">
                Success Journey
              </span>
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium text-[#878787] select-none cursor-default">
                Engagement Insights
              </span>
            </div>

          </div>

          {/* Card 2: Monitoring Customer Health */}
          <div className="flex flex-col items-start">
            <div className="w-full max-w-[539px] lg:h-[600px] bg-transparent rounded-[10px] pt-[80px] pb-[112px] px-10 flex flex-col justify-between text-left relative">

              <div className="w-full max-w-[448.74px] aspect-[448.74/446.9] bg-gradient-to-b from-[#F5F5F5] to-[#FDFDFD] border border-slate-200/80 rounded-[24px] px-3.5 py-6 shadow-sm flex flex-col justify-between text-left relative">
                {/* Header Capsule */}
                <div className="w-full bg-[#E8E8E8] rounded-[12px] py-3.5 px-6 flex items-center relative text-left overflow-hidden mb-3">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF2A2A]/20 rounded-l-[12px]" />
                  <span className="text-[#04032E] font-medium text-sm pl-2">Monitoring Customer Health...</span>
                </div>

                <div className="w-full flex-1 bg-gradient-to-b from-[#EFEFEF] to-[#FDFDFD] border border-[#E6E6E6]/60 rounded-[20px] p-6 shadow-sm flex flex-col justify-between text-left">
                  <div className="relative mt-1">
                    <p className="text-[#5A5A5C] text-[14px] leading-[1.6]">
                      Amet tincidunt quam et vitae. Sagittis amet <br />
                      <span className="relative inline-block w-full">
                        quam integer rhoncus habitasse a.......
                        <span className="absolute -inset-x-2 bottom-0 h-[25.55px] bg-[#D82B2B]/15 rounded-[50%] blur-[1px] pointer-events-none" />
                      </span>
                    </p>
                  </div>
                  <div className="space-y-3 mb-1 w-full">
                    <div className="flex justify-between gap-4 w-full">
                      <div className="w-[35%] h-[8px] bg-[#EFEFEF] rounded-full" />
                      <div className="w-[60%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    </div>
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full" />
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full" />
                    <div className="flex justify-between gap-4 w-full">
                      <div className="w-[65%] h-[8px] bg-[#EFEFEF] rounded-full" />
                      <div className="w-[30%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    </div>
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full" />
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full" />
                    <div className="w-[85%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    <div className="flex justify-between gap-4 w-full">
                      <div className="w-[25%] h-[8px] bg-[#EFEFEF] rounded-full" />
                      <div className="w-[70%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex gap-4 justify-start items-center w-full max-w-[448.74px] mt-8">
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium bg-[#000215] text-white select-none cursor-default">
                AI Guidance
              </span>
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium text-[#878787] select-none cursor-default">
                Health Analysis
              </span>
            </div>

          </div>
        </div>
      </div>


    </section >
  );
};

export default RelationshipsSection;
