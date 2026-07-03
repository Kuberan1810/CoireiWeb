import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  RefreshCw, 
  CalendarCheck 
} from 'lucide-react';

const roadmapData = [
  {
    icon: <Mail className="w-[20px] h-[20px] text-white transition-colors duration-300" strokeWidth={1.5} />,
    title: "Lead Inbox",
    desc: "Captures and organizes inquiries from every customer channel."
  },
  {
    icon: <MessageSquare className="w-[20px] h-[20px] text-white transition-colors duration-300" strokeWidth={1.5} />, 
    title: "Conversations",
    desc: "Engages prospects with, personalized responses."
  },
  {
    icon: <RefreshCw className="w-[20px] h-[20px] text-white transition-colors duration-300" strokeWidth={1.5} />, 
    title: "Follow-Ups",
    desc: "Automatically reconnects with and undecided prospects."
  },
  {
    icon: <CalendarCheck className="w-[20px] h-[20px] text-white transition-colors duration-300" strokeWidth={1.5} />, 
    title: "Sales Coordination",
    desc: "Books meetings and customer context to the sales team."
  }
];

const PipelineManagement: React.FC = () => {
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
      className="relative w-full py-16 md:py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        {/* 1. Capsule Badge */}
        <div className="mb-6 flex justify-center">
            <div
                className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-white border border-[#004370]/30 text-[#004370] font-medium text-[16px] font-instrument-sans"
                style={{
                    borderRadius: '10px',
                    overflow: 'visible'
                }}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                <span className="tracking-wide">
                    Pipeline Management
                </span>
            </div>
        </div>

        {/* 2. Heading */}
        <h2 className="text-[#04032E] text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center font-instrument-sans">
            Every Conversation Moves <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Toward A Decision
            </span>
        </h2>

        {/* 3. Subheading */}
        <p className="text-[#5A5A5C] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-20 text-center font-instrument-sans">
            The SDR Worker keeps conversations active through intelligent follow-ups, timely reminders, and personalized engagement until every opportunity reaches its outcome.
        </p>

        {/* Roadmap Animation Box */}
        <div className="w-full relative mt-4">
          {/* PROGRESS LINE */}
          <div className="absolute lg:top-[28px] top-[28px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-130px)] lg:h-[1px] bg-slate-200 z-0">
            <motion.div 
              style={{ 
                scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
                scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
                originX: 0,
                originY: 0
              }}
              className="absolute inset-0 bg-[#004370] shadow-[0_0_15px_rgba(0,67,112,0.4)] h-px lg:h-0.5"
            />
          </div>

          {/* ROADMAP ITEMS */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0 w-full">
            {roadmapData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:w-1/4 group px-4">
                
                {/* ICON BOX */}
                <div 
                  data-ns-animate
                  data-offset="80"
                  data-delay={index * 0.1}
                  className="w-[56px] h-[56px] rounded-[12px] bg-[#004370] border border-[#004370]/10 flex items-center justify-center mb-8 shadow-md relative z-20 transition-all duration-300 group-hover:bg-[#1079B7] group-hover:border-[#1079B7]/40"
                >
                  {item.icon}
                </div>

                {/* TEXT CONTENT */}
                <div
                  data-ns-animate
                  data-offset="80"
                  data-delay={(index * 0.1) + 0.05}
                  className="w-full flex flex-col items-center"
                >
                  <h3 className="text-[20px] font-bold text-[#004370] mb-3 tracking-tight group-hover:text-[#1079B7] transition-colors duration-300 font-instrument-sans">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#5A5A5C] leading-[1.5] font-light max-w-[240px] font-instrument-sans">
                    {item.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PipelineManagement;