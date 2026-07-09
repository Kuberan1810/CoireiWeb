


import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, 
  Snowflake, 
  SearchCode, 
  Trophy 
} from 'lucide-react';

const roadmapData = [
  {
    icon: <GraduationCap style={{ width: '28px', height: '23px' }} className="text-[#04032E]" />,
    title: "Learn",
    desc: "Deliver structured and engaging learning content."
  },
  {
    icon: <Snowflake style={{ width: '28px', height: '23px' }} className="text-[#04032E]" />, 
    title: "Organize ",
    desc: "Manage courses and users efficiently"
  },
  {
    icon: <SearchCode style={{ width: '28px', height: '23px' }} className="text-[#04032E]" />, 
    title: "Track",
    desc: "Monitor progress and performance in real time"
  },
  {
    icon: <Trophy style={{ width: '28px', height: '23px' }} className="text-[#04032E]" />, 
    title: "Improve",
    desc: "Continuously enhance learning outcomes."
  }
];

const LmsRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full GlobalPadding "
    >
      <div className=" relative">
        
        {/* PROGRESS LINE: Adjusted top to match new 80px box center (40px) */}
        <div className="absolute lg:top-[40px] top-[40px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-180px)] lg:h-[1px] bg-[#E9ECFF] z-0">
          <motion.div 
            style={{ 
              scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
              scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
              originX: 0,
              originY: 0
            }}
            className="absolute inset-0 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] h-full"
          />
        </div>

        {/* ROADMAP ITEMS */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0">
          {roadmapData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:w-3/4 group">
              
              {/* ICON BOX: 80x80, Radius 12px, Border 1px */}
              <div 
                data-ns-animate
                data-offset="80"
                data-delay={index * 0.1}
                className="w-[80px] h-[80px] rounded-[12px] bg-[#FAFAFA] border border-[#E9ECFF] flex items-center justify-center mb-8 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] relative z-20 transition-colors duration-500"
              >
                {item.icon}
              </div>

              {/* TEXT CONTENT: Width 182px, Height 76px */}
              <div
                data-ns-animate
                data-offset="80"
                data-delay={(index * 0.1) + 0.05}
                className="w-[250px] min-h-[76px] flex flex-col items-center "
              >
                <h3 className="text-[20px] font-medium text-[#04032E] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-base text-[#5A5A5C] leading-[1.4] font-medium">
                  {item.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LmsRoadmap;