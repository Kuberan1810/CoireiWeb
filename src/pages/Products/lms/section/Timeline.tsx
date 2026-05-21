

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Bot, 
  Globe, 
  Repeat, 
  BrainCircuit, 
  Atom 
} from 'lucide-react';

const timelineData = [
  {
    left: {
      icon: <Target className="w-[44px] h-[44px] text-white" />,
      title: "Structured Learning Paths",
      description: "Deliver organized learning journeys designed for better understanding and progression."
    },
    right: {
      icon: <TrendingUp className="w-[44px] h-[44px] text-white" />,
      title: "Real-Time Progress Intelligence",
      description: "Track engagement, performance metrics, and completion rates with powerful dashboards."
    }
  },
  {
    left: {
      icon: <Bot className="w-[44px] h-[44px] text-white" />,
      title: "Smart Course Management",
      description: "Create, manage, and organize courses efficiently within a centralized system."
    },
    right: {
      icon: <Globe className="w-[44px] h-[44px] text-white" />,
      title: "Scalable Learning Systems",
      description: "Support growing learners, courses, and content with a flexible and scalable LMS architecture."
    }
  },
  {
    left: {
      icon: <Repeat className="w-[44px] h-[44px] text-white" />,
      title: "Continuous Learning Optimization",
      description: "Enhance learning quality through feedback, tracking, and structured improvements."
    },
    right: {
      icon: <BrainCircuit className="w-[44px] h-[44px] text-white" />,
      title: "Data Driven Intelligence",
      description: "Use deep analytics and insights to refine learning strategies over time."
    }
  }
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleY = smoothProgress;
  const indicatorY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-20 lg:py-20 px-6 overflow-x-hidden font-inter-sans">
      
      {/* CENTRAL LINE: Placed at z-0 to stay behind cards on mobile */}
      <div className="absolute left-1/2 top-20 lg:top-40 bottom-20 lg:bottom-40 w-[1px] bg-zinc-900 -translate-x-1/2 z-0">
        <motion.div 
          style={{ scaleY, originY: 0 }} 
          className="absolute top-0 left-0 w-full h-full bg-zinc-700"
        />
        <motion.div 
          style={{ top: indicatorY }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-24 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] z-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* RESPONSIVE ATOM: Smaller on mobile (size 64), Larger on Desktop (size 92) */}
        <div 
          data-ns-animate
          data-offset="80"
          className="flex justify-center mb-20 lg:mb-40 relative z-30"
        >
          <div className="rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 lg:p-10">
            {/* Mobile: Hidden on lg screen (hidden lg:block), Desktop: Hidden on small screen */}
            <Atom size={64} className="block lg:hidden animate-[spin_15s_linear_infinite] text-zinc-200" />
            <Atom size={92} className="hidden lg:block animate-[spin_15s_linear_infinite] text-zinc-200" />
          </div>
        </div>

        {/* SPACING: Increased vertical gap on mobile (gap-24) for cleaner line visibility */}
        <div className="space-y-24 lg:space-y-32">
          {timelineData.map((pair, index) => (
            <TimelineRow key={index} pair={pair} progress={smoothProgress} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ pair, progress, index }: { pair: any, progress: any, index: number }) => {
  const startTrigger = index * 0.25;
  const endTrigger = Math.min(startTrigger + 0.3, 1);
  
  const leftX = useTransform(progress, [startTrigger, endTrigger], [50, 0]);
  const rightX = useTransform(progress, [startTrigger, endTrigger], [-50, 0]);
  const opacity = useTransform(progress, [startTrigger, endTrigger], [0, 1]);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-24 lg:gap-0 relative z-10">
      
      {/* Left Card */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <motion.div 
          style={{ x: leftX, opacity }} 
          className="w-full flex justify-center lg:justify-end lg:pr-[78px]"
        >
          <Card item={pair.left} side="left" />
        </motion.div>
      </div>

      <div className="hidden lg:block w-[1px]" />

      {/* Right Card */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <motion.div 
          style={{ x: rightX, opacity }} 
          className="w-full flex justify-center lg:justify-start lg:pl-[78px]"
        >
          <Card item={pair.right} side="right" />
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ item, side }: { item: any, side: 'left' | 'right' }) => {
  const tiltAngle = side === 'left' ? -10 : 10;
  
  return (
    <motion.div 
      className="w-full max-w-[510px] min-h-[310px] flex relative z-10"
      whileHover={{ scale: 1.02 }}
    >
      <div style={{ perspective: "1000px" }} className="relative w-full h-full group">
        <motion.div 
          initial={{ rotateZ: 0 }}
          whileInView={{ 
            rotateZ: tiltAngle, 
            rotateX: 5, 
            rotateY: side === 'left' ? 8 : -8 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          /* Card Background is solid #0a0a0a to block the line behind it */
          className="flex flex-col items-center text-center p-[24px] w-full h-full rounded-[20px] border border-zinc-800 bg-[#292929] shadow-2xl relative z-10"
        >
          <div className="w-[80px] h-[80px] rounded-full bg-zinc-800 flex items-center justify-center mb-8 border border-zinc-700/30">
            {item.icon}
          </div>

          <h4 className="text-[24px] font-medium text-zinc-100 mb-4 tracking-tight leading-tight">
            {item.title}
          </h4>

          <p className="text-[18px] font-medium text-zinc-500 leading-relaxed max-w-[420px]">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;