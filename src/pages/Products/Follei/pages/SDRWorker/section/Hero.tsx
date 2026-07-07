import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import bg1 from "../../../../../../assets/images/products/bg1.png";
import { Search, Check, RefreshCw } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const AnimatedTaskItem = ({ text, stepIndex }: { text: string, stepIndex: number }) => {
  const [visible, setVisible] = React.useState(false);
  const [status, setStatus] = React.useState<"sync" | "tick">("sync");

  React.useEffect(() => {
    let appearTimer: ReturnType<typeof setTimeout>;
    let tickTimer: ReturnType<typeof setTimeout>;
    let cycleInterval: ReturnType<typeof setInterval>;

    const startCycle = () => {
      setVisible(false);
      setStatus("sync");
      
      appearTimer = setTimeout(() => {
        setVisible(true);
        tickTimer = setTimeout(() => {
          setStatus("tick");
        }, 1200); 
      }, stepIndex * 1200);
    };

    const initialDelay = setTimeout(() => {
      startCycle();
      cycleInterval = setInterval(startCycle, 7000);
    }, 2500);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(appearTimer);
      clearTimeout(tickTimer);
      clearInterval(cycleInterval);
    };
  }, [stepIndex]);

  return (
    <div className={`flex items-center gap-2 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}>
      <div className="w-[16px] h-[16px] flex items-center justify-center text-[#9C9C9C]">
        {status === "sync" ? (
          <RefreshCw size={14} className="animate-spin text-sky-500" />
        ) : (
          <Check size={16} className="text-[#9C9C9C]" />
        )}
      </div>
      <span className="hover:text-slate-800 transition-colors">{text}</span>
    </div>
  );
};

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set(".sdr-hero-tag", { opacity: 0, y: 20 });
      gsap.set(".sdr-hero-title", { opacity: 0, y: 40 });
      gsap.set(".sdr-hero-desc", { opacity: 0, y: 20 });
      gsap.set(".sdr-hero-card", { scale: 0.8, opacity: 0, y: 40 });

      // Animation Sequence (Exactly matching main Hero.tsx)
      tl.to(".sdr-hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".sdr-hero-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".sdr-hero-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".sdr-hero-card", { scale: 1, opacity: 1, y: 0, duration: 0, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-8">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="sdr-hero-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>SDR Worker</span>
          </div>

          {/* Title */}
          <h1 className="sdr-hero-title opacity-0 text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Every Lead Starts With
            <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              The Right Conversation
            </span>
          </h1>

          {/* Description */}
          <p className="sdr-hero-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The SDR Worker engages every prospect with intelligent conversations, qualifies buying intent, nurtures relationships, and schedules meetings automatically—helping your sales team focus on closing deals instead of chasing leads.          </p>
        </div>

        {/* Right Column */}
        <div className="sdr-hero-card opacity-0 w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-sky-500/20">
          {/* Background Image */}
          <img
            src={bg1}
            loading="eager"
            alt=""
            className="sdr-hero-bg-img image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700"
          />

          {/* Inner Card Container  */}
          <div className="relative z-10 w-full h-full flex justify-center items-center p-10">
            <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
              <div
                className="sdr-hero-inner-card w-full h-full shrink-0 border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between p-5 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="absolute top-4 left-5 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>

                {/* Left column - Tasks */}
                <div className="flex flex-col gap-3 pl-2.5 text-left justify-center h-full mt-4 flex-1">
                  <div className="text-slate-800 font-extrabold text-[15px] tracking-wide shrink-0">Tasks :</div>
                  <div className="flex flex-col gap-3 font-medium text-xs text-slate-500">
                    <AnimatedTaskItem text="Automate" stepIndex={0} />
                    <AnimatedTaskItem text="Reduce" stepIndex={1} />
                    <AnimatedTaskItem text="Improve" stepIndex={2} />
                  </div>
                </div>

                {/* Right column */}
                <div
                  className="flex-1 p-5 border-[1.1px] border-slate-200/60 rounded-[21.12px] shadow-sm relative flex flex-col justify-center px-4 "
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.51)', backdropFilter: 'blur(10px)' }}
                >
                  <Search size={14} className="absolute top-4 right-4 text-slate-400" strokeWidth={2} />

                  {/* Blocks */}
                  <div className="flex flex-col gap-4 pt-2 w-full">
                    {/* Nurturing Row */}
                    <motion.div 
                      className="flex items-center gap-3 flex-1 w-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                        style={{ background: 'linear-gradient(to right, #5960DF, #F8CBC0, #D7B5C6, #5960DF)', backgroundSize: '300% 100%' }}
                        animate={{ backgroundPosition: ['100% 0%', '0% 0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[14px] font-bold text-slate-800 leading-tight">Nurturing</span>
                        <span className="text-[10px] text-slate-400 leading-none mt-1">Automated</span>
                      </div>
                    </motion.div>

                    {/* Meetings Row */}
                    <motion.div 
                      className="flex items-center gap-3 w-full flex-1"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                        style={{ background: 'linear-gradient(to right, #5960DF, #F8CBC0, #D7B5C6, #5960DF)', backgroundSize: '300% 100%' }}
                        animate={{ backgroundPosition: ['100% 0%', '0% 0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[14px] font-bold text-slate-800 leading-tight">Meetings</span>
                        <span className="text-[10px] text-slate-400 leading-none mt-1">Syncing data</span>
                      </div>
                    </motion.div>
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
