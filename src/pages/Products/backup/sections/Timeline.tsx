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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className="relative w-full py-20 px-6 overflow-x-hidden font-inter-sans">

      {/* AI Workflow Automation Header */}
      <div className="w-full flex flex-col items-center text-center pt-8 pb-16 mb-8 relative z-10">
        {/* Pill Badge */}
        <div className="mb-8 flex justify-center">
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
              AI Workflow Automation
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight mb-6 max-w-5xl">
          Build Smarter <span className="text-[#004370]">Customer Journeys</span> With AI
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-light">
          Design intelligent workflows that automate voice calls, WhatsApp chats, emails, onboarding, and customer engagement. Let Follie handle the complexity while you scale the impact.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full">
        {/* CENTRAL LINE */}
        <div className="absolute left-12 lg:left-1/2 top-20 lg:top-40 bottom-20 lg:bottom-40 w-[9px] bg-white  border border-white/5 rounded-full -translate-x-1/2 z-0">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#004370] to-[#4488B7] shadow-[0_1px_12px_rgba(0,67,112,0.5)] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* RESPONSIVE ATOM / LOGO */}
          <div
            data-ns-animate
            data-offset="80"
            className="flex justify-start lg:justify-center pl-0 lg:pl-0 mb-20 lg:mb-40 relative z-30"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-[#131315]/95 border border-[#004370]/50 flex items-center justify-center shadow-[0_0_40px_rgba(0,67,112,0.3)]">
              <img
                src={coireiLogo}
                alt="Coirei Logo"
                className="w-[80%] h-[80%] object-contain transition-all duration-700 hover:rotate-360 hover:scale-110 cursor-pointer"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </div>

          {/* SPACING */}
          <div className="space-y-24 lg:space-y-32">
            {timelineData.map((pair, index) => (
              <TimelineRow key={index} pair={pair} progress={smoothProgress} index={index} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ pair, progress, index, isMobile }: { pair: any, progress: any, index: number, isMobile: boolean }) => {
  const startTrigger = index * 0.25;
  const endTrigger = Math.min(startTrigger + 0.3, 1);

  const leftX = useTransform(progress, [startTrigger, endTrigger], [50, 0]);
  const rightX = useTransform(progress, [startTrigger, endTrigger], [-50, 0]);
  const opacity = useTransform(progress, [startTrigger, endTrigger], [0, 1]);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-24 lg:gap-0 relative z-10">

      {/* Left Card */}
      <div className="w-full lg:w-1/2 flex justify-start lg:justify-end pl-16 lg:pl-0">
        <motion.div
          style={{ x: leftX, opacity }}
          className="w-full flex justify-start lg:justify-end lg:pr-[78px]"
        >
          <Card item={pair.left} side="left" isMobile={isMobile} />
        </motion.div>
      </div>

      <div className="hidden lg:block w-px" />

      {/* Right Card */}
      <div className="w-full lg:w-1/2 flex justify-start lg:justify-start pl-16 lg:pl-0">
        <motion.div
          style={{ x: rightX, opacity }}
          className="w-full flex justify-start lg:justify-start lg:pl-[78px]"
        >
          <Card item={pair.right} side="right" isMobile={isMobile} />
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ item, side, isMobile }: { item: any, side: 'left' | 'right', isMobile: boolean }) => {
  const tiltAngle = isMobile ? 0 : (side === 'left' ? -5 : 5);
  const rotateX = isMobile ? 0 : 5;
  const rotateY = isMobile ? 0 : (side === 'left' ? 8 : -8);

  return (
    <motion.div
      className="w-full max-w-[510px] min-h-[310px] flex relative z-10"
      whileHover={{ scale: isMobile ? 1.0 : 1.02 }}
    >
      <div style={{ perspective: "1000px" }} className="relative w-full h-full group">
        <motion.div
          initial={{ rotateZ: 0 }}
          whileInView={{
            rotateZ: tiltAngle,
            rotateX: rotateX,
            rotateY: rotateY
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
