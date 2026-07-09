import React, { useLayoutEffect, useRef } from "react";
import bg3 from "../../../../../../assets/images/products/bg3.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set(".cs-hero-tag", { opacity: 0, y: 20 });
      gsap.set(".cs-hero-title", { opacity: 0, y: 40 });
      gsap.set(".cs-hero-desc", { opacity: 0, y: 20 });
      gsap.set(".cs-hero-card", { scale: 0.8, opacity: 0, y: 40 });

      gsap.set(".user-research-title", { opacity: 0, x: -20 });
      gsap.set(".user-research-badge", { opacity: 0, scale: 0.8 });
      gsap.set(".research-col", { opacity: 0, y: 20 });
      gsap.set(".research-bar-fill", { scaleX: 0 });
      gsap.set(".research-bar-right", { opacity: 0 });

      // Animation Sequence
      tl.to(".cs-hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".cs-hero-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".cs-hero-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".cs-hero-card", { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .to(".user-research-title", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .to(".user-research-badge", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.4")
        .to(".research-col", { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }, "-=0.3")
        .to(".research-bar-fill", { scaleX: 1, duration: 1.5, ease: "power3.out", stagger: 0.15 }, "-=0.5")
        .to(".research-bar-right", { opacity: 1, duration: 0.5, stagger: 0.15 }, "-=1.3");

      // Counters
      const counters = gsap.utils.toArray(".research-counter") as HTMLElement[];
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        tl.to(counter, {
          innerHTML: target,
          duration: 1.5,
          ease: "power3.out",
          snap: { innerHTML: 1 },
          onUpdate: function () {
            counter.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
          }
        }, "-=1.5");
      });

      // Continuous floating animation
      gsap.to(".floating-dashboard", {
        y: -10,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-8">
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer-bar {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="cs-hero-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Customer Success Worker</span>
          </div>

          {/* Title */}
          <h1
            className="cs-hero-title opacity-0 text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Helping Every Customer <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Achieve Long-Term Success
            </span>
          </h1>


          {/* Description */}
          <p
            className="cs-hero-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The Customer Success Worker proactively guides onboarding, drives product adoption, monitors customer health, identifies growth opportunities, and strengthens every customer relationship through intelligent, continuous engagement.
          </p>
        </div>

        {/* Right Column */}
        <div
          className="cs-hero-card opacity-0 w-full lg:w-1/2 min-h-[460px] sm:aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg3}
            loading="eager"
            alt=""
            className="image-cover absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Inner Card Container */}
          <div className="solution-inner-card-wrapper floating-dashboard relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="w-full bg-[#F6F7F9] rounded-[24px] shadow-2xl flex flex-col p-6 sm:p-8 lg:p-10 relative overflow-hidden">

              {/* Header */}
              <div className="flex justify-between items-center mb-10 sm:mb-14">
                <h3 className="user-research-title opacity-0 text-[#111111] text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight leading-none">Customer Success</h3>
                <div className="user-research-badge opacity-0 bg-[#B4F481] text-[#222222] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-[6px]">
                  3 Section
                </div>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 h-full">

                {/* Column 1 */}
                <div className="research-col opacity-0 flex flex-col">
                  {/* Gauge Header */}
                  <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
                    <span>0%</span>
                    <span className="absolute left-[83%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
                    <span>100%</span>
                  </div>
                  {/* Split Bar */}
                  <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
                    <div className="h-full w-[83%] relative bg-gray-200 rounded-l-full overflow-hidden">
                        <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#FF8D80] to-[#FFB84C] origin-left scale-x-0 overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
                    <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#F6D365]"></div>
                  </div>
                  {/* Percentage & Description */}
                  <div className="mt-auto">
                    <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                      <span className="research-counter" data-target="83">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                      Personalized onboarding to accelerate customer success.
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="research-col opacity-0 flex flex-col">
                  {/* Gauge Header */}
                  <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
                    <span>0%</span>
                    <span className="absolute left-[58%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
                    <span>100%</span>
                  </div>
                  {/* Split Bar */}
                  <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
                    <div className="h-full w-[58%] relative bg-gray-200 rounded-l-full overflow-hidden">
                        <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#F9D423] to-[#A1D352] origin-left scale-x-0 overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
                    <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#56CCF2]"></div>
                  </div>
                  {/* Percentage & Description */}
                  <div className="mt-auto">
                    <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                      <span className="research-counter" data-target="58">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                      Drive feature adoption and maximize product value.
                    </p>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="research-col opacity-0 flex flex-col">
                  {/* Gauge Header */}
                  <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
                    <span>0%</span>
                    <span className="absolute left-[47%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
                    <span>100%</span>
                  </div>
                  {/* Split Bar */}
                  <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
                    <div className="h-full w-[47%] relative bg-gray-200 rounded-l-full overflow-hidden">
                        <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#56CCF2] to-[#38E0B5] origin-left scale-x-0 overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-shimmer-bar bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                        </div>
                    </div>
                    <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
                    <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#A8E063]"></div>
                  </div>
                  {/* Percentage & Description */}
                  <div className="mt-auto">
                    <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                      <span className="research-counter" data-target="47">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                      Monitor customer health and build lasting relationships.
                    </p>
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

export default HeroSection;
