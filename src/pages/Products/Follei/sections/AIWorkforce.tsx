
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";
// import bgImage from "../../../../assets/images/products/bg.png";
import ai1 from "../../../../assets/images/products/ai1.png";
import ai2 from "../../../../assets/images/products/ai2.png";
import ai3 from "../../../../assets/images/products/a13.png";
import ai4 from "../../../../assets/images/products/ai4.png";
import bg1 from "../../../../assets/images/products/bg1.png";
import bg2 from "../../../../assets/images/products/bg2.jpg";
import bg3 from "../../../../assets/images/products/bg3.jpg";
import bg4 from "../../../../assets/images/products/bg4.jpg";

import bg5 from "../../../../assets/images/products/bg5.jpg";
import bg6 from "../../../../assets/images/products/bg6.jpg";
import SalesExecutiveAnimation from "./salesExecutiveAnimation";


import folleiLogo from "../../../../assets/images/products/folleinew.svg";
import { CustomerSuccessMockup } from "./mockups/CustomerSuccessMockup";
import { AccountManagerMockup } from "./mockups/AccountManagerMockup";
import {
  ChevronRight,
  Search,
  Check,
  RefreshCw
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
  localGsap.registerPlugin(ScrollTrigger);
}

interface AgentCard {
  id: string;
  badgeText: string;
  badgeBg: string;
  badgeTextClass: string;
  title: string;
  description: string;
  hoverBorder: string;
  mockupTitle: string;
  mockupBg: string;
  mockup: React.ReactNode;
  bgImage: string;
  link: string;
}


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

const CollectionsWorkerMockup: React.FC = () => {
  const [phase, setPhase] = useState<"idle" | "typing" | "sending" | "processing" | "revealed">("idle");
  const [typedText, setTypedText] = useState("");

  const targetText = "Overdue invoice #4081. Send reminder.";

  useEffect(() => {
    let active = true;

    const runLoop = async () => {
      while (active) {
        // 1. Idle phase
        setPhase("idle");
        setTypedText("");
        await new Promise((r) => setTimeout(r, 1000));
        if (!active) break;

        // 2. Typing phase
        setPhase("typing");
        for (let i = 0; i <= targetText.length; i++) {
          if (!active) return;
          setTypedText(targetText.slice(0, i));
          await new Promise((r) => setTimeout(r, 50 + Math.random() * 40));
        }
        await new Promise((r) => setTimeout(r, 800));
        if (!active) break;

        // 3. Sending phase
        setPhase("sending");
        await new Promise((r) => setTimeout(r, 1500));
        if (!active) break;

        // 4. Processing phase
        setPhase("processing");
        await new Promise((r) => setTimeout(r, 2200));
        if (!active) break;

        // 5. Revealed phase
        setPhase("revealed");
        await new Promise((r) => setTimeout(r, 4000));
      }
    };

    runLoop();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center scale-[0.55] sm:scale-[0.7] md:scale-90 lg:scale-100 origin-center">
      <div className="bg-white h-full w-full rounded-[16px] shadow-[0_0_10px_rgba(160,160,160,0.2)] border border-slate-200/50 flex items-center justify-between px-3 sm:px-6 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">

        {/* Left Card */}
        <div className="w-[110px] sm:w-[135px] h-[60px] sm:h-[68px] flex-shrink-0 rounded-[4px] border-[1.5px] border-[#BDE0FF] bg-white flex flex-col justify-center gap-1.5 p-2 sm:p-2.5 relative z-10 shadow-sm">
          <div className="flex items-center gap-1.5 mb-0.5">
            <div className="w-0.5 h-3 bg-[#3B82F6]"></div>
            <span className="text-[7px] sm:text-[9px] text-[#3B82F6] font-medium tracking-wide flex items-center">
              {typedText || "Type here ......"}
              {(phase === "idle" || phase === "typing") && (
                <span className="inline-block w-[1.5px] h-[8px] bg-[#3B82F6] ml-0.5 cursor-blink">|</span>
              )}
            </span>
          </div>
          <div className={`w-[95%] h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
          <div className={`w-[95%] h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
          <div className={`w-[85%] h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
        </div>

        {/* Connector 1 */}
        <div className="flex-1 h-[2px] relative z-0 -mx-1 flex items-center justify-start">
          <div className="flex-1 h-full bg-[#E2E8F0] relative">
            {phase === "sending" && (
              <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6] animate-flow-right" />
            )}
          </div>
          <div className="w-[16px] h-full bg-gradient-to-r from-[#E2E8F0] to-[#3B82F6]"></div>
        </div>

        {/* Center Circle */}
        <div className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex-shrink-0 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
          <div
            className="absolute w-[80%] h-[80%] flex items-start justify-center"
            style={{
              transform: 'rotate(-146.51deg)',
              animation: (phase === "processing" || phase === "sending" || phase === "revealed")
                ? 'spin-slow 6s linear infinite'
                : 'spin-slow 20s linear infinite'
            }}
          >
            <div
              className="w-full h-1/2 rounded-t-full bg-gradient-to-b from-[#78A9FF] to-[#B1CBFF]"
            />
          </div>

          {/* Inner Logo */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#0D389F] flex items-center justify-center shadow-[0_4px_12px_rgba(26,86,219,0.3)] relative z-10">
            <img src={folleiLogo} alt="Follei Logo" className="w-7 h-7 object-contain" />
          </div>
        </div>

        {/* Connector 2 */}
        <div className="flex-1 h-[80px] sm:h-[100px] relative z-0 -mx-1 flex items-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="25%" stopColor="#E2E8F0" />
                <stop offset="75%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path d="M 0 50 L 100 15" stroke="url(#lineGrad)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            <path d="M 0 50 L 100 85" stroke="url(#lineGrad)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />

            {/* Flowing Dot 1 */}
            {phase === "processing" && (
              <circle r="4" fill="#3B82F6" className="shadow-[0_0_8px_#3B82F6]">
                <animate attributeName="cx" from="0" to="100" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="50" to="15" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Flowing Dot 2 */}
            {phase === "processing" && (
              <circle r="4" fill="#3B82F6" className="shadow-[0_0_8px_#3B82F6]">
                <animate attributeName="cx" from="0" to="100" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="cy" from="50" to="85" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>
        </div>

        {/* Right Card*/}
        <div className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] flex-shrink-0 rounded-[8px] bg-[#EBF5C8] flex flex-col overflow-hidden relative z-10 shadow-sm border-[1.5px] border-[#B3D465]">
          {/* Card Header */}
          <div className="h-[28%] bg-[#B3D465] flex items-center px-2.5 gap-1.5">
            {phase === "revealed" ? (
              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[5px] sm:text-[8px] text-white font-bold">✓</div>
            ) : (
              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-white/80"></div>
            )}
            <div className="w-8 h-1.5 rounded-full bg-white/80"></div>
          </div>
          {/* Card Body */}
          <div className="flex-1 p-2 sm:p-2.5 flex flex-col gap-1 sm:gap-1.5 justify-center">
            {phase === "revealed" ? (
              <div className="w-full h-full flex flex-col justify-center items-start text-left gap-0.5 sm:gap-1 text-[#4D7C0F]">
                <span className="text-[5px] sm:text-[9px] font-bold leading-tight">Reminder Sent!</span>
                <span className="text-[4px] sm:text-[7px] font-medium leading-none text-[#5B6D26]">Client Paid: $4,081</span>
              </div>
            ) : phase === "processing" ? (
              <>
                <div className="w-[60%] h-[3px] sm:h-[6px] rounded-full animate-shimmer" />
                <div className="w-full h-[2px] sm:h-[4px] rounded-full animate-shimmer" />
                <div className="w-[85%] h-[2px] sm:h-[4px] rounded-full animate-shimmer" />
              </>
            ) : (
              <>
                <div className="w-[60%] h-[3px] sm:h-[6px] bg-[#D7EAA1] rounded-full" />
                <div className="w-full h-[2px] sm:h-[4px] bg-[#D7EAA1] rounded-full" />
                <div className="w-[85%] h-[2px] sm:h-[4px] bg-[#D7EAA1] rounded-full" />
              </>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

const agents: AgentCard[] = [
  {
    id: "sdr",
    badgeText: "• SDR Worker",
    badgeBg: "bg-sky-50 border-sky-100",
    badgeTextClass: "text-sky-700",
    title: "Every Lead Starts With The Right Conversation",
    description: "Qualify faster. Nurture smarter. Close sooner. Our AI agents engage prospects with context-aware conversations that answer questions, build trust, and schedule the next step automatically.",
    hoverBorder: "group-hover:border-sky-500/20",
    mockupTitle: "follei-sdr-instance-1",
    mockupBg: "bg-transparent",
    bgImage: bg1,
    link: "/products/follei/sdr-worker",
    mockup: (
      <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
        <div
          className="h-full w-full shrink-0 border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between p-5 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            backgroundColor: '#FFFFFF',
          }}
        >
          <div className="absolute top-4 left-5 flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>

          {/* Left column - Tasks */}
          <div className="flex flex-col gap-3 pl-2.5 text-left justify-center h-full mt-4">
            <div className="text-slate-800 font-extrabold text-[15px] tracking-wide shrink-0">Tasks :</div>
            <div className="flex flex-col gap-3 font-medium text-xs text-slate-500">
              <AnimatedTaskItem text="Automate" stepIndex={0} />
              <AnimatedTaskItem text="Reduce" stepIndex={1} />
              <AnimatedTaskItem text="Improve" stepIndex={2} />
            </div>
          </div>

          {/* Right column */}
          <div
            className="w-[243px] h-[224px] border-[1.1px] border-slate-200/60 rounded-[21.12px] shadow-sm relative flex flex-col justify-center px-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.51)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Search size={14} className="absolute top-4 right-4 text-slate-400" strokeWidth={2} />

            {/* Blocks */}
            <div className="flex flex-col gap-4 pt-2">
              {/* Nurturing Row */}
              <motion.div
                className="flex items-center gap-3"
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
                className="flex items-center gap-3"
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
    )
  },
  {
    id: "sales",
    badgeText: "• Sales Executive",
    badgeBg: "bg-violet-50 border-violet-100",
    badgeTextClass: "text-violet-700",
    title: "Turn Interest Into Revenue",
    description: "Don't let deals stall. Our AI Sales Executive presents compelling solutions, handles objections before they derail conversations, generates proposals on demand, and accelerates every deal to close.",
    hoverBorder: "group-hover:border-violet-500/20",
    mockupTitle: "sales-exec-agent-main",
    mockupBg: "bg-white",
    bgImage: bg2,
    link: "/products/follei/sales-executive",
    mockup: < SalesExecutiveAnimation />

  },
  {
    id: "cs",
    badgeText: "• Customer Success",
    badgeBg: "bg-emerald-50 border-emerald-100",
    badgeTextClass: "text-emerald-700",
    title: "Keep Customers Growing",
    description: "Turn every customer into a long-term success story. Our AI Customer Success agent streamlines onboarding, accelerates product adoption, strengthens relationships, and uncovers growth opportunities that improve retention and renewals.",
    hoverBorder: "group-hover:border-emerald-500/20",
    mockupTitle: "cs-health-insights",
    mockupBg: "bg-slate-900",
    bgImage: bg3,
    link: "/products/follei/customer-success",
    mockup: (
      <div className="w-full h-full bg-slate-900 rounded-[20px] overflow-hidden">
        <CustomerSuccessMockup />
      </div>
    )
  },
  {
    id: "support",
    badgeText: "• Support Worker",
    badgeBg: "bg-indigo-50 border-indigo-100",
    badgeTextClass: "text-indigo-700",
    title: "Resolve Every Customer Request Faster",
    description: "Your customers expect instant support. Our AI Support Worker delivers it—answering questions immediately, resolving issues efficiently, organizing tickets intelligently, and knowing when human expertise is needed.",
    hoverBorder: "group-hover:border-indigo-500/20",
    mockupTitle: "support-routing-core",
    mockupBg: "bg-white",
    bgImage: bg6,
    link: "/products/follei/support-worker",
    mockup: <img src={ai4} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Support dashboard" />
  },
  {
    id: "operations",
    badgeText: "• Collections Worker",
    badgeBg: "bg-amber-50 border-amber-100",
    badgeTextClass: "text-amber-700",
    title: "Recover Revenue Without Friction",
    description: "Collect faster, keep customers happier. Our AI automates reminders tactfully, pursues unpaid invoices professionally, handles collections conversations with finesse, and ensures renewals never get forgotten.",
    hoverBorder: "group-hover:border-amber-500/20",
    mockupTitle: "ops-revenue-billing",
    mockupBg: "bg-transparent",
    bgImage: bg5,
    link: "/products/follei/collections-worker",
    mockup: <CollectionsWorkerMockup />
  },
  {
    id: "account",
    badgeText: "• Account Manager",
    badgeBg: "bg-rose-50 border-rose-100",
    badgeTextClass: "text-rose-700",
    title: "Grow Every Customer Relationship",
    description: "Don't leave expansion revenue untapped. Our AI Account Manager spots growth opportunities early, builds stronger executive relationships, and guides strategic next steps for sustainable account expansion.",
    hoverBorder: "group-hover:border-rose-500/20",
    mockupTitle: "account-growth-matrix",
    mockupBg: "bg-slate-900",
    bgImage: bg4,
    link: "/products/follei/account-manager",
    mockup: (
      <div className="w-full h-full bg-slate-900 rounded-[20px] overflow-hidden">
        <AccountManagerMockup />
      </div>
    )
  }
];

const waveStyles = `
  @keyframes waveBounce {
    0%, 100% { transform: translateY(0); }
    30% { transform: translateY(-8px); }
  }
  .btn-wave-text:hover .wave-char {
    animation: waveBounce 0.6s ease-in-out;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor-blink {
    animation: blink 0.8s infinite;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    background: linear-gradient(90deg, rgba(215,234,161,0.5) 25%, rgba(235,245,200,0.8) 50%, rgba(215,234,161,0.5) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.2s infinite linear;
  }
  .animate-shimmer-blue {
    background: linear-gradient(90deg, rgba(189,224,255,0.6) 25%, rgba(235,245,255,0.9) 50%, rgba(189,224,255,0.6) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.2s infinite linear;
  }
  @keyframes flowRight {
    0% { left: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
  .animate-flow-right {
    animation: flowRight 1.5s ease-in-out infinite;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: -40;
    }
  }
  .animate-dash {
    stroke-dasharray: 8, 12;
    animation: dash 1s linear infinite;
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export const AIWorkforce: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Prevent FOUC (blinking) when navigating back by showing the section only after GSAP is ready
      gsap.set(sectionRef.current, { visibility: "visible" });

      // Title and header reveal animation
      gsap.fromTo(
        ".section-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 80%",
          },
        }
      );

      const mm = gsap.matchMedia();

      // Smooth scroll animation for all devices
      mm.add("all", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".solution-item");

        cards.forEach((card) => {
          // Animate inner contents ultra smoothly one by one (staggered) inside the card when it enters
          const textContents = card.querySelectorAll(".solution-icon, .solution-title, .solution-text, .solution-icon-link");
          const imgWrapper = card.querySelector(".solution-image-wrapper");

          gsap.fromTo(
            textContents,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2, // increased stagger for smoother flow
              duration: 1.5, // much smoother and slower
              ease: "power3.out",
              delay: 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );

          if (imgWrapper) {
            gsap.fromTo(
              imgWrapper,
              { opacity: 0, scale: 0.95, y: 30 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.8,
                ease: "power3.out",
                delay: 0.3,
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-solution relative w-full bg-white GlobalPadding" style={{ visibility: "hidden" }}>
      <style>{waveStyles}</style>
      <div ref={containerRef} className="w-layout-blockcontainer container w-container mx-auto ">
        {/* Section Header */}
        <div className="section-header text-center max-w-4xl mx-auto mb-16 md:mb-20 flex flex-col items-center shrink-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>AI Workforce</span>
          </div>


          {/* Heading */}
          <div className="solution-title-wrapper">
            <h2 className="section-title text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Meet Your <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                AI Workforce
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-[#5A5A5C] text-sm sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-2xl mt-2">
            Six specialized AI workers collaborate across every stage of the customer lifecycle—automating conversations, accelerating decisions, and driving measurable business outcomes.
          </p>
        </div>

        {/* Stacked Cards Wrapper */}
        <div ref={cardsWrapperRef} className="solution-list relative w-full flex flex-col pb-10 lg:pb-32">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className={`solution-item relative md:sticky md:top-[100px] lg:top-[120px] group w-full min-h-[481px] rounded-[20px] p-6 sm:p-8 lg:p-[50px] flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between bg-[#F1F1F1] ${index === agents.length - 1 ? 'mb-0' : 'mb-8 md:mb-[100px]'}`}
              style={{ zIndex: index }}
            >
              <div className="solution-content w-full lg:w-1/2 flex flex-col items-start text-left">
                <div className="solution-icon">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000] bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                    <span>{agent.badgeText.replace("• ", "")}</span>

                  </div>
                </div>
                <div className="solution-title text-[#000000] text-2xl sm:text-3xl lg:text-[35px] font-medium tracking-tight leading-[1.2] mt-6 mb-6">
                  {agent.title}
                </div>
                <div className="w-full h-[1px] bg-[#ADADAD] mb-6" />
                <p className="solution-text text-[#5A5A5C] text-sm sm:text-[20px] font-normal leading-relaxed">
                  {agent.description}
                </p>

                <button
                  onClick={() => navigate(agent.link)}
                  className="btn-wave-text solution-icon-link mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-[#004370] text-white font-medium text-[16px] hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg group/btn bg-gradient-to-b from-[#004C7F] to-[#00365A]"
                >
                  <span className="flex items-center">
                    {"View More".split("").map((char, i) => (
                      <span
                        key={i}
                        className="wave-char inline-block"
                        style={{ animationDelay: `${i * 0.03}s` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                  <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1 duration-500" />
                </button>

              </div>
              <div className={`solution-image-wrapper w-full lg:w-1/2 aspect-[1.4/1] bg-[#090C15] rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center transition-colors duration-500 ${agent.hoverBorder}`}>
                <img
                  src={agent.bgImage}
                  loading="lazy"
                  alt=""
                  className="image-cover absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6">
                  {agent.id === "sdr" ? (
                    <div className={`w-full h-full rounded-[20px]  flex flex-col overflow-hidden gap-[10px] ${agent.mockupBg}`}>
                      {agent.mockup}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-1">
                      {agent.mockup}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AIWorkforce;