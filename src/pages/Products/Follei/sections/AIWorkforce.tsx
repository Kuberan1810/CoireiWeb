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

  ChevronRight,
  Users as

    Search,
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
    link: "/products/follei/sdr-worker",
    mockup: (
      <div className="w-full h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
        <div
          className="w-[461px] h-[265px] shrink-0 border border-slate-200/50 rounded-[19.2px] shadow-[0_0_10px_rgba(160,160,160,0.2)] flex items-center justify-between p-5 relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
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
    link: "/products/follei/sales-executive",
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
    link: "/products/follei/customer-success",
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
    link: "/products/follei/support-worker",
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
    link: "/products/follei/collections-worker",
    mockup: (
      <div className="w-full h-full flex items-center justify-center scale-[0.55] sm:scale-[0.7] md:scale-90 lg:scale-100 origin-center">
        <div className="bg-white w-[480px] aspect-[2/1] rounded-[16px] shadow-[0_0_10px_rgba(160,160,160,0.2)] border border-slate-200/50 flex items-center justify-between px-3 sm:px-6 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">

          {/* Left Card */}
          <div className="w-[110px] sm:w-[135px] h-[60px] sm:h-[68px] flex-shrink-0 rounded-[4px] border-[1.5px] border-[#BDE0FF] bg-white flex flex-col justify-center gap-1.5 p-2 sm:p-2.5 relative z-10 shadow-sm">
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-0.5 h-3 bg-[#3B82F6]"></div>
              <span className="text-[7px] sm:text-[9px] text-[#3B82F6] font-medium tracking-wide">Type here ......</span>
            </div>
            <div className="w-[95%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
            <div className="w-[95%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
            <div className="w-[85%] h-[2.5px] bg-[#BDE0FF] rounded-full"></div>
          </div>

          <div className="flex-1 h-[2px] relative z-0 -mx-1 flex">
            <div className="flex-1 h-full bg-[#E2E8F0]"></div>
            <div className="w-[16px] h-full bg-gradient-to-r from-[#E2E8F0] to-[#3B82F6]"></div>
          </div>

          {/* Center Circle */}
          <div className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex-shrink-0 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
            <div
              className="absolute w-[80%] h-[80%] flex items-start justify-center"
              style={{
                transform: 'rotate(-146.51deg)'
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
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
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
            </svg>
          </div>

          {/* Right Card*/}
          <div className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] flex-shrink-0 rounded-[8px] bg-[#EBF5C8] flex flex-col overflow-hidden relative z-10 shadow-sm border-[1.5px] border-[#B3D465]">
            {/* Card Header */}
            <div className="h-[28%] bg-[#B3D465] flex items-center px-2.5 gap-1.5">
              <div className="w-4 h-4 rounded-full bg-white/80"></div>
              <div className="w-8 h-1.5 rounded-full bg-white/80"></div>
            </div>
            {/* Card Body */}
            <div className="flex-1 p-2 sm:p-2.5">
              <div className="w-full h-full rounded-[4px] bg-[#D7EAA1]/50 border border-[#B3D465]/30"></div>
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
    link: "/products/follei/account-manager",
    mockup: <img src={ai1} className="w-full h-full object-cover rounded-[20px] drop-shadow-2xl" alt="Account growth dashboard" />
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

      // Mobile Animations
      mm.add("(max-width: 1023px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".solution-item");
        items.forEach((item) => {
          gsap.fromTo(item, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%" } });
        });
      });

      // Desktop Pinned Animation (Step by step)
      mm.add("(min-width: 1024px)", () => {
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
            stagger: 0.15,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );

        if (firstCardImg) {
          gsap.fromTo(
            firstCardImg,
            { opacity: 0, scale: 0.8, y: 40 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards[0],
                start: "top 80%",
                end: "top 50%",
                scrub: true,
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
            if (innerImg) gsap.set(innerImg, { opacity: 0, scale: 0.8, y: 40 });
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
            end: "+=4500", // increased scroll distance to make it feel less cramped
            pin: true,
            pinSpacing: true,
            scrub: true, // using instant scrub prevents the delay/blink on back navigation
          }
        });

        for (let i = 1; i < cards.length; i++) {
          tl.set(cards[i], { zIndex: totalCards + i }, `step-${i}`);

          // Animate previous card scaling down 
          tl.to(cards[i - 1], {
            scale: 0.95,
            y: -20,
            opacity: 1,
            duration: 8,
            ease: "power2.inOut"
          }, `step-${i}`);

          // Simultaneously animate the new card sliding up
          tl.to(cards[i], {
            y: 0,
            opacity: 1,
            duration: 8,
            ease: "power2.inOut"
          }, `step-${i}`);

          // Animate the inner contents smoothly WITHIN the scrubbed timeline
          const textContents = cards[i].querySelectorAll(".solution-icon, .solution-title, .solution-text, .solution-icon-link");
          const imgWrapper = cards[i].querySelector(".solution-image-wrapper");

          tl.to(textContents, {
            opacity: 1,
            y: 0,
            duration: 6,
            stagger: 1,
            ease: "power2.out"
          }, `step-${i}+=4`);

          if (imgWrapper) {
            tl.to(imgWrapper, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 4,
              ease: "power3.out"
            }, `step-${i}+=4`);
          }

          // Pause to hold the current card in view
          tl.to({}, { duration: 6 });
        }

        // Prevent the scrub animation from playing on mount if the user navigated back
        // We wait for the browser to restore the scroll position, then force the scrub to instantly finish
        const snapScrub = () => {
          if (tl.scrollTrigger) {
            const tween = tl.scrollTrigger.getTween();
            if (tween) tween.progress(1);
          }
        };

        // Check across a few frames to catch the browser's scroll restoration
        requestAnimationFrame(snapScrub);
        setTimeout(snapScrub, 50);
        setTimeout(snapScrub, 150);
        setTimeout(snapScrub, 300);

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-solution relative w-full bg-white py-16 lg:py-24" style={{ visibility: "hidden" }}>
      <style>{waveStyles}</style>
      <div ref={containerRef} className="w-layout-blockcontainer container w-container mx-auto px-6 sm:px-10 md:px-15 ">
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
        <div ref={cardsWrapperRef} className="solution-list relative w-full h-auto lg:h-[481px] flex flex-col gap-12 lg:block pb-10 lg:pb-0">
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

    </section>
  );
};

export default AIWorkforce;