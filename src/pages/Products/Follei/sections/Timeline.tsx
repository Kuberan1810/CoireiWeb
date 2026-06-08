import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Move, 
  Zap, 
  Atom, 
  Rocket, 
  Waypoints, 
  LineChart 
} from 'lucide-react';
import coireiLogo from "../../../../assets/images/products/coirei-logo.svg";

const timelineData = [
  {
    left: {
      icon: <Move className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "Drag & Drop Builder",
      description: "Intuitive visual interface to map complex customer journeys without writing a single line of code."
    },
    right: {
      icon: <Zap className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "AI Trigger Logic",
      description: "Move beyond simple if-this-then-that. Use natural language processing to trigger actions based on intent."
    }
  },
  {
    left: {
      icon: <Atom className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "Omnichannel Automation",
      description: "Sync experiences across WhatsApp, Email, Voice, and SMS for a unified brand presence."
    },
    right: {
      icon: <Rocket className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "Real-Time Workflow Actions",
      description: "Instant reaction speeds. Trigger notifications or backend processes the millisecond a user interacts."
    }
  },
  {
    left: {
      icon: <Waypoints className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "Smart Customer Routing",
      description: "Dynamically route leads to the right department based on profile score and AI segmentation."
    },
    right: {
      icon: <LineChart className="w-[36px] h-[36px] text-[#6FC5FE]" strokeWidth={1.5} />,
      title: "Workflow Analytics",
      description: "Deep-dive into conversion funnels and identify bottlenecks with high-fidelity visualization."
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

  return (
    <section ref={containerRef} className="relative w-full py-20 lg:py-20 px-6 overflow-x-hidden font-inter-sans">
      
      {/* CENTRAL LINE */}
      <div className="absolute left-1/2 top-20 lg:top-40 bottom-20 lg:bottom-40 w-[9px] bg-[#161616] border border-white/5 rounded-full -translate-x-1/2 z-0">
        <motion.div 
          style={{ scaleY, originY: 0 }} 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#004370] to-[#4488B7] shadow-[0_1px_12px_rgba(0,67,112,0.5)] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* RESPONSIVE ATOM / LOGO */}
        <div 
          data-ns-animate
          data-offset="80"
          className="flex justify-center mb-20 lg:mb-40 relative z-30"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-[#131315]/95 border border-[#004370]/50 flex items-center justify-center shadow-[0_0_40px_rgba(0,67,112,0.3)]">
            <img 
              src={coireiLogo} 
              alt="Coirei Logo" 
              className="w-[80%] h-[80%] object-contain transition-all duration-700 hover:rotate-[360deg] hover:scale-110 cursor-pointer" 
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>
        </div>

        {/* SPACING */}
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
  const tiltAngle = side === 'left' ? -5 : 5;
  
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
          className="flex flex-col items-center text-center p-[32px] w-full h-full rounded-[24px] border border-[#004370]/40 bg-[#131315]/95 shadow-[0_0_30px_rgba(0,67,112,0.1)] relative z-10 hover:border-[#6FC5FE]/30 transition-colors duration-300"
        >
          <div className="w-[72px] h-[72px] rounded-full bg-black/40 flex items-center justify-center mb-6 border border-[#004370]/60 shadow-[inset_0_0_15px_rgba(0,67,112,0.4)]">
            {item.icon}
          </div>

          <h4 className="text-[22px] font-medium text-zinc-100 mb-4 tracking-tight leading-tight">
            {item.title}
          </h4>

          <p className="text-[16px] font-light text-zinc-400 leading-relaxed max-w-[400px]">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
