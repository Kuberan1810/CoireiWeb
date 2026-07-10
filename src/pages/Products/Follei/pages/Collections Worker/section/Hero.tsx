import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import folleiLogo from "../../../../../../assets/images/products/folleinew.svg";
import bg5 from "../../../../../../assets/images/products/bg5.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set(".cw-hero-tag", { opacity: 0, y: 20 });
      gsap.set(".cw-hero-title", { opacity: 0, y: 40 });
      gsap.set(".cw-hero-desc", { opacity: 0, y: 20 });
      gsap.set(".cw-hero-card", { scale: 0.8, opacity: 0, y: 40 });

      // Animation Sequence
      tl.to(".cw-hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".cw-hero-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".cw-hero-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".cw-hero-card", { scale: 1, opacity: 1, y: 0, duration: 0, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-18">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between ">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="cw-hero-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Collections Worker</span>
          </div>

          {/* Title */}
          <h1 className="cw-hero-title opacity-0 text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Turn Outstanding Payments <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Into Revenue
            </span>
          </h1>


          {/* Description */}
          <p className="cw-hero-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The Collections Worker proactively monitors invoices, automates payment follow-ups, resolves billing inquiries, and recovers outstanding revenue through intelligent, context-aware communication while preserving trusted customer relationships.
          </p>
        </div>

        {/* Right Column */}
        <div className="cw-hero-card opacity-0 w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg5}
            loading="eager"
            alt=""
            className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Style definition */}
          <style>{`
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
          `}</style>

          {/* Inner Dashboard Mockup */}
          <div className="relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-10">
            <div className="bg-white w-full h-full rounded-[16px] shadow-lg flex items-center justify-between px-2 sm:px-6 relative overflow-hidden">

              {/* Left Card */}
              <div className="w-[80px] sm:w-[135px] h-[50px] sm:h-[68px] flex-shrink-0 rounded-[4px] border-[1.5px] border-[#BDE0FF] bg-white flex flex-col justify-center gap-1.5 p-1.5 sm:p-2.5 relative z-10 shadow-sm">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                  <div className="w-0.5 h-2 sm:h-3 bg-[#3B82F6]"></div>
                  <span className="text-[6px] sm:text-[9px] text-[#3B82F6] font-medium tracking-wide flex items-center">
                    {typedText || "Type here ......"}
                    {(phase === "idle" || phase === "typing") && (
                      <span className="inline-block w-[1.5px] h-[8px] bg-[#3B82F6] ml-0.5 cursor-blink">|</span>
                    )}
                  </span>
                </div>
                <div className={`w-[95%] h-[1.5px] sm:h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
                <div className={`w-[95%] h-[1.5px] sm:h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
                <div className={`w-[85%] h-[1.5px] sm:h-[2.5px] rounded-full ${(phase === "sending" || phase === "processing") ? "animate-shimmer-blue" : "bg-[#BDE0FF]"}`}></div>
              </div>

              {/* Connector 1 */}
              <div className="flex-1 h-[2px] relative z-0 -mx-1 flex items-center justify-start">
                <div className="flex-1 h-full bg-[#E2E8F0] relative">
                  {phase === "sending" && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6] animate-flow-right" />
                  )}
                </div>
                <div className="w-[8px] sm:w-[16px] h-full bg-gradient-to-r from-[#E2E8F0] to-[#3B82F6]"></div>
              </div>

              {/* Center Circle */}
              <div className="w-[50px] h-[50px] sm:w-[88px] sm:h-[88px] flex-shrink-0 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E2E8F0]">
                {/* Spinning Gradient Background */}
                <div
                  className={`absolute w-full h-full rounded-full ${
                    (phase === "processing" || phase === "sending" || phase === "revealed") 
                      ? 'animate-[spin_1s_linear_infinite]' 
                      : 'animate-[spin_3s_linear_infinite]'
                  }`}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(120, 169, 255, 0.2) 40%, rgba(59, 130, 246, 0.8) 100%)'
                  }}
                />

                {/* Inner Logo */}
                <div className="w-6 h-6 sm:w-[46px] sm:h-[46px] rounded-full bg-white flex items-center justify-center relative z-10 shadow-sm">
                  <img src={folleiLogo} alt="Follei Logo" className="w-3.5 h-3.5 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>

              {/* Connector 2  */}
              <div className="flex-1 h-[40px] sm:h-[100px] relative z-0 -mx-1 flex items-center">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="25%" stopColor="#E2E8F0" />
                      <stop offset="75%" stopColor="#E2E8F0" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 50 L 100 15"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 0 50 L 100 85"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />

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

              {/* Right Card */}
              <div className="w-[65px] sm:w-[110px] h-[65px] sm:h-[110px] flex-shrink-0 rounded-[8px] bg-[#EBF5C8] flex flex-col overflow-hidden relative z-10 shadow-sm border-[1.5px] border-[#B3D465]">
                {/* Card Header */}
                <div className="h-[28%] bg-[#B3D465] flex items-center px-1.5 sm:px-2.5 gap-1 sm:gap-1.5">
                  {phase === "revealed" ? (
                    <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[5px] sm:text-[8px] text-white font-bold">✓</div>
                  ) : (
                    <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-white/80"></div>
                  )}
                  <div className="w-5 sm:w-8 h-1 sm:h-1.5 rounded-full bg-white/80"></div>
                </div>
                {/* Card Body */}
                <div className="flex-1 p-1.5 sm:p-2 flex flex-col gap-1 sm:gap-1.5 justify-center">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
