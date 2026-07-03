import React, { useLayoutEffect, useRef } from "react";
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


import folleiLogo from "../../../../assets/images/products/folleilogo.svg";
import {

  Users as 
  Search,
} from "lucide-react";

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
}

const agents: AgentCard[] = [
  {
    id: "sdr",
    badgeText: "• SDR Worker",
    badgeBg: "bg-sky-50 border-sky-100",
    badgeTextClass: "text-sky-700",
    title: "Every Lead Starts With The Right Conversation",
    description: "Automatically qualify leads, nurture prospects, answer discovery questions, and schedule meetings using intelligent, context-aware conversations.",
    hoverBorder: "group-hover:border-sky-500/20",
    mockupTitle: "follei-sdr-instance-1",
    mockupBg: "bg-transparent",
    bgImage: bg1,
    mockup: (
      <div
        className="w-[461px] h-[265px] border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between p-5 relative z-10 transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="absolute top-4 left-5 flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#5960DF]" />
        </div>

        {/* Left column - Tasks */}
        <div className="flex flex-col gap-3 pl-2.5 text-left justify-center h-full mt-4">
          <div className="text-slate-800 font-extrabold text-[15px] tracking-wide shrink-0">Tasks :</div>
          <div className="flex flex-col gap-3 font-medium text-xs text-slate-500">
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <span className="text-[#9C9C9C] text-[16px]">✓</span>
              <span>Automate</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <span className="text-[#9C9C9C] text-[16px]">✓</span>
              <span>Reduce</span>
            </div>
            <div className="flex items-center gap-2 hover:text-slate-800 transition-colors">
              <span className="text-[#9C9C9C] text-[16px]">✓</span>
              <span>Improve</span>
            </div>
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
            <div className="flex items-center gap-3">
              <div
                className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #5960DF 0%, #F8CBC0 33%, #D7B5C6 66%, #5960DF 100%)'
                }}
              />
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-bold text-slate-800 leading-tight">Nurturing</span>
                <span className="text-[10px] text-slate-400 leading-none mt-1">Automated</span>
              </div>
            </div>

            {/* Meetings Row */}
            <div className="flex items-center gap-3">
              <div
                className="w-[55px] h-[55px] rounded-[10.56px] shrink-0 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #5960DF 0%, #F8CBC0 33%, #D7B5C6 66%, #5960DF 100%)'
                }}
              />
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-bold text-slate-800 leading-tight">Meetings</span>
                <span className="text-[10px] text-slate-400 leading-none mt-1">Syncing data</span>
              </div>
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
    description: "Present products, address objections, generate proposals, and guide every opportunity through the sales pipeline with confidence.",
    hoverBorder: "group-hover:border-violet-500/20",
    mockupTitle: "sales-exec-agent-main",
    mockupBg: "bg-white",
    bgImage: bg2,
    mockup: <img src={ai2} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Sales dashboard" />
  },
  {
    id: "cs",
    badgeText: "• Customer Success",
    badgeBg: "bg-emerald-50 border-emerald-100",
    badgeTextClass: "text-emerald-700",
    title: "Keep Customers Growing",
    description: "Drive onboarding, improve product adoption, strengthen customer relationships, and prepare accounts for successful renewals.",
    hoverBorder: "group-hover:border-emerald-500/20",
    mockupTitle: "cs-health-insights",
    mockupBg: "bg-slate-900",
    bgImage: bg3,
    mockup: <img src={ai3} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Customer success dashboard" />
  },
  {
    id: "support",
    badgeText: "• Support Worker",
    badgeBg: "bg-indigo-50 border-indigo-100",
    badgeTextClass: "text-indigo-700",
    title: "Resolve Every Customer Request Faster",
    description: "Provide instant answers, resolve support issues, manage tickets intelligently, and escalate complex cases when needed.",
    hoverBorder: "group-hover:border-indigo-500/20",
    mockupTitle: "support-routing-core",
    mockupBg: "bg-white",
    bgImage: bg6,
    mockup: <img src={ai4} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Support dashboard" />
  },
  {
    id: "operations",
    badgeText: "• Collections Worker",
    badgeBg: "bg-amber-50 border-amber-100",
    badgeTextClass: "text-amber-700",
    title: "Recover Revenue Without Friction",
    description: "Automate payment reminders, invoice follow-ups, collection conversations, and renewal notifications across every channel.",
    hoverBorder: "group-hover:border-amber-500/20",
    mockupTitle: "ops-revenue-billing",
    mockupBg: "bg-transparent",
    bgImage: bg5,
    mockup: (
      <div
        className="w-[520px] h-[208px] border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between px-8 py-5 relative z-10 transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          backgroundColor: '#FDFDFD'
        }}
      >
        {/* Connector lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 520 208" fill="none">
          =          <line x1="172" y1="104" x2="236" y2="104" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="204" cy="104" r="3" fill="#38BDF8" />
          <line x1="284" y1="104" x2="378" y2="104" stroke="#84CC16" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="331" cy="104" r="3" fill="#84CC16" />
        </svg>

        {/* Left Card - Collections Worker */}
        <div className="w-[140px] h-[90px] bg-white border border-sky-100 rounded-lg shadow-sm p-3 flex flex-col justify-between z-20">
          <div className="flex items-center gap-1 bg-sky-50 text-[7px] font-bold text-sky-600 px-1.5 py-0.5 rounded-full w-fit">
            <span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
            Collections Worker
          </div>

          <div className="flex flex-col gap-1.5 mt-1">
            <div className="h-1.5 w-20 bg-sky-100/60 rounded" />
            <div className="h-1.5 w-12 bg-sky-100/60 rounded" />
            <div className="h-1.5 w-16 bg-sky-100/60 rounded" />
          </div>
        </div>

        <div className="w-12 h-12 rounded-full bg-white border border-sky-200 flex items-center justify-center shadow-md relative z-20">
          <img src={folleiLogo} className="w-6 h-6 object-contain rounded-full" alt="Follei" />
        </div>

        <div className="w-[110px] h-[90px] bg-[#F7FEE7] border border-[#D9F99D] rounded-lg shadow-sm overflow-hidden flex flex-col justify-between z-20">
          {/* Green Header Bar */}
          <div className="h-3.5 bg-[#A3E635] w-full flex-shrink-0" />

          {/* Body */}
          <div className="flex-1 p-2 flex flex-col justify-between">
            <div className="flex flex-col gap-1 mt-0.5">
              <div className="h-1.5 w-14 bg-[#84CC16]/20 rounded" />
              <div className="h-1.5 w-10 bg-[#84CC16]/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "account",
    badgeText: "• Account Manager",
    badgeBg: "bg-rose-50 border-rose-100",
    badgeTextClass: "text-rose-700",
    title: "Grow Every Customer Relationship",
    description: "Identify expansion opportunities, strengthen executive relationships, and recommend the next best actions for long-term growth.",
    hoverBorder: "group-hover:border-rose-500/20",
    mockupTitle: "account-growth-matrix",
    mockupBg: "bg-slate-900",
    bgImage: bg4,
    mockup: <img src={ai1} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Account growth dashboard" />
  }
];

export const AIWorkforce: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

      // Card reveals - If not desktop width, use simple scroll trigger
      if (window.innerWidth < 1024) {
        const items = gsap.utils.toArray<HTMLElement>(".solution-item");
        items.forEach((item) => {
          gsap.fromTo(item, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%" } });
        });
        return;
      }

      // Desktop Pinned Animation (Step by step)
      const cards = gsap.utils.toArray<HTMLElement>(".solution-item");
      if (cards.length === 0) return;

      const totalCards = cards.length;

      // Faster, distinct animations for text vs image on the first card
      const firstCardText = cards[0].querySelectorAll(".solution-icon, .solution-title, .solution-text, .solution-icon-link");
      const firstCardImg = cards[0].querySelector(".solution-image-wrapper");

      gsap.fromTo(
        firstCardText,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 75%",
          },
        }
      );

      if (firstCardImg) {
        gsap.fromTo(
          firstCardImg,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 75%",
            },
          }
        );
      }

      // Reset initial card locations for subsequent cards
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { y: 650, opacity: 1 });

          // Initial state for inner contents of subsequent cards
          const innerText = card.querySelectorAll(".solution-icon, .solution-title, .solution-text, .solution-icon-link");
          const innerImg = card.querySelector(".solution-image-wrapper");
          gsap.set(innerText, { opacity: 0, y: 30 });
          if (innerImg) gsap.set(innerImg, { opacity: 0, scale: 0.95 });
        } else {
          gsap.set(card, { y: 0, opacity: 1 });
        }
        gsap.set(card, {
          zIndex: totalCards - index
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsWrapperRef.current,
          start: "top 15%",
          end: "+=3200",
          pin: true,
          pinSpacing: true,
          scrub: 1.5,
        }
      });

      for (let i = 1; i < cards.length; i++) {
        tl.set(cards[i], { zIndex: totalCards + i }, `step-${i}`);

        // Animate previous card scaling down 
        tl.to(cards[i - 1], {
          scale: 0.95,
          y: -20,
          opacity: 1,
          duration: 6,
          ease: "power1.out"
        }, `step-${i}`);

        // Simultaneously animate the new card sliding up
        tl.to(cards[i], {
          y: 0,
          opacity: 1,
          duration: 6,
          ease: "power1.out"
        }, `step-${i}`);

        // Animate the inner contents smoothly WITHIN the scrubbed timeline
        // Reduced duration and stagger to make the animation fast and snappy!
        const textContents = cards[i].querySelectorAll(".solution-icon, .solution-title, .solution-text, .solution-icon-link");
        const imgWrapper = cards[i].querySelector(".solution-image-wrapper");

        tl.to(textContents, {
          opacity: 1,
          y: 0,
          duration: 8, // Slowed down text duration
          stagger: 2,  // Slower stagger between text items
          ease: "power2.out"
        }, `step-${i}+=1.5`);

        if (imgWrapper) {
          tl.to(imgWrapper, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
          }, `step-${i}+=1.5`);
        }

        // Pause to hold the current card in view
        tl.to({}, { duration: 4 });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-solution relative w-full bg-white py-16 lg:py-24">
      <div className="section-space">
        <div ref={containerRef} className="w-layout-blockcontainer container w-container mx-auto px-6 sm:px-10 md:px-15 max-w-[1300px]">
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
                Meet Your Autonomous <br />
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
          <div ref={cardsWrapperRef} className="solution-list relative w-full max-w-[1300px] h-[550px] sm:h-[520px] lg:h-[481px] flex flex-col gap-12 lg:block">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="solution-item relative lg:absolute left-0 lg:top-[20px] mt-10 lg:mt-0 group w-full min-h-[481px] rounded-[20px] p-6 sm:p-8 lg:p-[50px] flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between bg-[#F1F1F1]"
              >
                <div className="solution-content w-full lg:w-1/2 flex flex-col items-start text-left">
                  <div className="solution-icon">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[0.5px] border-[#004370] font-medium text-[16px] text-[#000000]">
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
                  <div className="solution-icon-link mt-8" style={{ backgroundColor: "transparent" }}>
                    <div className="solution-icon-wrapper">
                      {/* Placeholder for link arrow if needed */}
                    </div>
                    <div className="solution-hover-background"></div>
                  </div>
                </div>
                <div className={`solution-image-wrapper w-full lg:w-1/2 aspect-[1.4/1] bg-[#090C15] rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 ${agent.hoverBorder}`}>
                  <img
                    src={agent.bgImage}
                    loading="lazy"
                    alt=""
                    className="image-cover absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6">
                    {agent.id === "sdr" ? (
                      <div className={`w-full h-full rounded-[20px] p-5 flex flex-col overflow-hidden gap-[10px] ${agent.mockupBg}`}>
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
      </div>
    </section>
  );
};

export default AIWorkforce;