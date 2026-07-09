import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Boxes,
  CircleUser,
  BookOpen,
  Brain
} from 'lucide-react';

const roadmapData = [
  {
    icon: <Boxes className="w-[32px] h-[32px] text-zinc-100 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />,
    title: "Products",
    desc: "Follei learns your offerings, features, and value propositions."
  },
  {
    icon: <CircleUser className="w-[32px] h-[32px] text-zinc-100 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />,
    title: "Customers",
    desc: "Understands customer segments, needs, and buying behavior."
  },
  {
    icon: <BookOpen className="w-[32px] h-[32px] text-zinc-100 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />,
    title: "Knowledge",
    desc: "Connects pricing, documents, and business processes."
  },
  {
    icon: <Brain className="w-[32px] h-[32px] text-zinc-100 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />,
    title: "Intelligence",
    desc: "Transforms everything into a unified business brain for AI workers."
  }
];

export const BusinessImpactSection: React.FC = () => {
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
      className="relative w-full GlobalPadding bg-white "
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        {/* 1. Capsule Badge */}
        <div className="mb-6 flex justify-center">
          <div
            className="inline-flex items-center justify-center gap-2 px-[13px] py-[7px] bg-[#24292C]/20 border border-white/10 text-white select-none relative"
            style={{
              boxShadow: `
                        inset 0 3px 4px rgba(255, 255, 255, 0.2), 
                        inset 0 -3px 4px rgba(255, 255, 255, 0.2)
                    `,
              borderRadius: '2px',
              overflow: 'visible'
            }}
          >
            {/* Top-Right Corner Line */}
            <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t border-r border-white/40 pointer-events-none" />
            {/* Bottom-Left Corner Line */}
            <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b border-l border-white/40 pointer-events-none" />

            <span className="text-sm tracking-wide text-white">
              Business Impact
            </span>
          </div>
        </div>

        {/* 2. Heading */}
        <h2 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.15] mb-4 text-center">
          How Follei Builds Business Intelligence
        </h2>

        {/* 3. Subheading */}
        <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-20 text-center">
          Transforming disconnected business information into a connected intelligence layer that powers every AI worker.
        </p>

        {/* Roadmap Animation Box */}
        <div className="w-full relative px-0 md:px-12 mt-4">
          {/* PROGRESS LINE */}
          <div className="absolute lg:top-[40px] top-[40px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-180px)] lg:h-[1px] bg-zinc-800 z-0">
            <motion.div
              style={{
                scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
                scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
                originX: 0,
                originY: 0
              }}
              className="absolute inset-0 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] h-full"
            />
          </div>

          {/* ROADMAP ITEMS */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0 w-full">
            {roadmapData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:w-1/4 group px-4">

                {/* ICON BOX: 80x80, Radius 12px, Border 1px */}
                <div
                  data-ns-animate
                  data-offset="80"
                  data-delay={index * 0.1}
                  className="w-[80px] h-[80px] rounded-[16px] bg-[#1a1a1a] border border-zinc-800/80 flex items-center justify-center mb-8 shadow-2xl relative z-20 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-[#202022]"
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
                  <h3 className="text-[20px] font-medium text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/60 leading-[1.5] font-light max-w-[240px]">
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
