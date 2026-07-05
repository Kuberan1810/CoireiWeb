import React from "react";
import { motion } from "framer-motion";
import cj1Img from "../../../../../../assets/images/products/CJ 1.png";

export const RelationshipsSection: React.FC = () => {
  const [isJourneyHovered, setIsJourneyHovered] = React.useState(false);

  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-8 lg:py-10 flex justify-center bg-white">
      <div className="w-full flex flex-col items-center">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">

          <h2 
            data-ns-animate="true" data-delay="0.1"
            className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Smarter Customer Success, <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Stronger Relationships
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">

          {/* Card 1: Customer Journey */}
          <div 
            data-ns-animate="true" data-delay="0.2"
            className="flex flex-col items-end">
            <div className="w-full max-w-[539px] lg:h-[600px] bg-[#FDFDFD] rounded-[10px] pt-[80px] pb-[112px] px-10 flex flex-col justify-between text-left relative">
              {/* Header  */}
              <img src={cj1Img} alt="Customer Journey Header" className="w-full h-auto mb-4 select-none pointer-events-none" />

              <div className="grid grid-cols-4 gap-4 w-full flex-1 items-center">
                {Array.from({ length: 12 }).map((_, index) => {
                  const hoverColors = [
                    "hover:bg-[#F59E0B]", //yellow
                    "hover:bg-[#0097DC]", //blue
                    "hover:bg-[#F59E0B]",
                    "hover:bg-[#0097DC]",
                  ];
                  const hoverColor = hoverColors[index % hoverColors.length];

                  return (
                    <motion.div
                      key={index}
                      className={`w-full aspect-[1/1.05] bg-[#EAEAEA] rounded-2xl flex items-center justify-center select-none transition-colors duration-300 ${hoverColor}`}
                      style={{ cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l16 11-7 1 4 7-3 1-4-7-6 5z' fill='%23111111' stroke='%23ffffff' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E"), auto` }}
                      initial={{ scale: 0.98 }}
                      animate={
                        isJourneyHovered
                          ? { scale: [0.98, 1.05, 0.98] }
                          : { scale: 0.98 }
                      }
                      transition={{
                        duration: 2.5,
                        repeat: isJourneyHovered ? Infinity : 0,
                        delay: isJourneyHovered ? index * 0.15 : 0,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-[20%] aspect-square bg-white rounded-full shadow-sm" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* <div className="flex gap-4 justify-start items-center w-full max-w-[539px] ml-8 mt-12">
              <span
                onMouseEnter={() => setIsJourneyHovered(true)}
                onMouseLeave={() => setIsJourneyHovered(false)}
                className="px-8 py-6 rounded-[14px] text-[16px] font-medium bg-[#000215] text-white select-none cursor-pointer transition-all duration-300 hover:bg-[#202235] hover:shadow-lg"
              >
                Success Journey
              </span>
              <span
                className="px-8 py-6 rounded-[14px] text-[16px] font-medium text-[#878787] select-none cursor-pointer transition-all duration-300 hover:bg-[#F5F5F5] hover:text-[#04032E]"
              >
                Engagement Insights
              </span>
            </div> */}

          </div>

          {/* Card 2: Monitoring Customer Health */}
          <div 
            data-ns-animate="true" data-delay="0.3"
            className="flex flex-col items-start">
            <div className="w-full max-w-[539px] lg:h-[600px] bg-transparent rounded-[10px] pt-[80px] pb-[112px] px-10 flex flex-col justify-between text-left relative">

              <div className="w-full max-w-[448.74px] aspect-[448.74/446.9] bg-gradient-to-b from-[#F5F5F5] to-[#FDFDFD] border border-slate-200/80 rounded-[24px] px-3.5 py-6 shadow-sm flex flex-col justify-between text-left relative">
                {/* Header Capsule -*/}
                <div className="w-full bg-[#E8E8E8] rounded-[12px] h-[48px] flex items-center relative overflow-hidden mb-3">
                  <motion.div
                    animate={{
                      width: ["0%", "100%", "100%", "100%", "0%", "0%"],
                      backgroundColor: [
                        "rgba(255, 42, 42, 0.2)",
                        "rgba(255, 42, 42, 0.2)",
                        "rgba(209, 250, 223, 1)",
                        "rgba(209, 250, 223, 1)",
                        "rgba(255, 42, 42, 0)",
                        "rgba(255, 42, 42, 0.2)"
                      ]
                    }}
                    transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.75, 0.78, 0.9375, 0.96, 1] }}
                    className="absolute left-0 top-0 bottom-0 rounded-[12px] z-0"
                  />
                  <div className="absolute inset-0 flex items-center w-full pointer-events-none z-10">
                    <motion.span
                      animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
                      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.75, 0.78, 0.9375, 0.96, 1] }}
                      className="text-[#04032E] font-medium text-sm absolute left-8"
                    >
                      Monitoring Customer Health...
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.75, 0.78, 0.9375, 0.96, 1] }}
                      className="text-[#039855] font-medium text-sm absolute w-full left-0 text-center"
                    >
                      Completed
                    </motion.span>
                  </div>
                </div>

                <div className="w-full flex-1 bg-gradient-to-b from-[#EFEFEF] to-[#FDFDFD] border border-[#E6E6E6]/60 rounded-[20px] p-6 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">

                  <motion.div
                    animate={{
                      top: ["0%", "92%", "0%", "92%", "0%", "0%", "0%", "0%"],
                      opacity: [1, 1, 1, 1, 1, 0, 0, 1]
                    }}
                    transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.1875, 0.375, 0.5625, 0.75, 0.78, 0.9375, 1] }}
                    className="absolute left-4 right-4 h-[25.55px] bg-[#D82B2B]/15 rounded-[50%] blur-[1px] pointer-events-none z-10"
                  />

                  <div className="relative mt-1">
                    <p className="text-[#5A5A5C] text-[14px] leading-[1.6]">
                      Amet tincidunt quam et vitae. Sagittis amet <br />
                      <span className="relative inline-block w-full">
                        quam integer rhoncus habitasse a.......
                      </span>
                    </p>
                  </div>
                  <div className="space-y-3 mb-1 w-full relative py-1 z-0">
                    <div className="flex justify-between gap-4 w-full relative z-0">
                      <motion.div
                        animate={{ backgroundColor: ["#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#FF2A2A", "#EFEFEF", "#EFEFEF"] }}
                        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.05, 0.1, 0.4, 0.45, 0.5, 0.75, 0.78, 0.9375, 0.96, 1] }}
                        className="w-[35%] h-[8px] rounded-full"
                      />
                      <div className="w-[60%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    </div>
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full relative z-0" />
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full relative z-0" />
                    <div className="flex justify-between gap-4 w-full relative z-0">
                      <div className="w-[65%] h-[8px] bg-[#EFEFEF] rounded-full" />
                      <motion.div
                        animate={{ backgroundColor: ["#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#FF2A2A", "#EFEFEF", "#EFEFEF"] }}
                        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.15, 0.2, 0.5, 0.55, 0.6, 0.75, 0.78, 0.9375, 0.96, 1] }}
                        className="w-[30%] h-[8px] rounded-full"
                      />
                    </div>
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full relative z-0" />
                    <div className="w-full h-[8px] bg-[#EFEFEF] rounded-full relative z-0" />
                    <div className="w-[85%] h-[8px] bg-[#EFEFEF] rounded-full relative z-0" />
                    <div className="flex justify-between gap-4 w-full relative z-0">
                      <motion.div
                        animate={{ backgroundColor: ["#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#EFEFEF", "#EFEFEF", "#FF2A2A", "#FF2A2A", "#EFEFEF", "#EFEFEF"] }}
                        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, times: [0, 0.25, 0.3, 0.6, 0.65, 0.7, 0.75, 0.78, 0.9375, 0.96, 1] }}
                        className="w-[25%] h-[8px] rounded-full"
                      />
                      <div className="w-[70%] h-[8px] bg-[#EFEFEF] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* <div className="flex gap-4 justify-start items-center w-full max-w-[448.74px] mt-8">
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium bg-[#000215] text-white select-none cursor-default">
                AI Guidance
              </span>
              <span className="px-8 py-6 rounded-[14px] text-[16px] font-medium text-[#878787] select-none cursor-default">
                Health Analysis
              </span>
            </div> */}

          </div>
        </div>
      </div>


    </section >
  );
};

export default RelationshipsSection;
