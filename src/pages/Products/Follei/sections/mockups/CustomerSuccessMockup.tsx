import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CustomerSuccessMockup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Initial States
      gsap.set(".user-research-title", { opacity: 0, x: -20 });
      gsap.set(".user-research-badge", { opacity: 0, scale: 0.8 });
      gsap.set(".research-col", { opacity: 0, y: 20 });
      gsap.set(".research-bar-fill", { scaleX: 0 });
      gsap.set(".research-bar-right", { opacity: 0 });

      // Animation Sequence
      tl.to(".user-research-title", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" })
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
          onUpdate: function() {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="solution-inner-card-wrapper floating-dashboard relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-8 scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
      <div className="w-[120%] sm:w-full bg-[#F6F7F9] rounded-[24px] shadow-2xl flex flex-col p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
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
            <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
              <span>0%</span>
              <span className="absolute left-[83%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
              <span>100%</span>
            </div>
            <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
              <div className="h-full w-[83%] relative bg-gray-200 rounded-l-full overflow-hidden">
                  <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#FF8D80] to-[#FFB84C] origin-left scale-x-0"></div>
              </div>
              <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
              <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#F6D365]"></div>
            </div>
            <div className="mt-auto">
              <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                <span className="research-counter" data-target="83">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
              </div>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                Users often struggle to fully comprehend the detailed credit score analytics provided.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="research-col opacity-0 flex flex-col">
            <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
              <span>0%</span>
              <span className="absolute left-[58%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
              <span>100%</span>
            </div>
            <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
              <div className="h-full w-[58%] relative bg-gray-200 rounded-l-full overflow-hidden">
                  <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#F9D423] to-[#A1D352] origin-left scale-x-0"></div>
              </div>
              <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
              <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#56CCF2]"></div>
            </div>
            <div className="mt-auto">
              <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                <span className="research-counter" data-target="58">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
              </div>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                Many users requested additional guidance for tracking and improving their credit scores.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="research-col opacity-0 flex flex-col">
            <div className="flex justify-between text-[#8E93A6] text-[9px] sm:text-[10px] font-bold mb-1 relative px-1">
              <span>0%</span>
              <span className="absolute left-[47%] -translate-x-1/2 text-gray-400 text-[8px] sm:text-[10px]">▼</span>
              <span>100%</span>
            </div>
            <div className="w-full h-6 sm:h-7 flex items-center mb-6 relative">
              <div className="h-full w-[47%] relative bg-gray-200 rounded-l-full overflow-hidden">
                  <div className="research-bar-fill absolute inset-0 bg-gradient-to-r from-[#56CCF2] to-[#38E0B5] origin-left scale-x-0"></div>
              </div>
              <div className="w-[1.5px] h-[120%] bg-gray-300 mx-[1.5px] z-10"></div>
              <div className="research-bar-right h-full flex-1 rounded-r-full bg-[#A8E063]"></div>
            </div>
            <div className="mt-auto">
              <div className="text-[48px] sm:text-[56px] lg:text-[64px] font-light text-[#222] leading-none mb-3 tracking-tighter">
                <span className="research-counter" data-target="47">0</span><span className="text-3xl sm:text-4xl lg:text-[40px] text-gray-400 font-normal">%</span>
              </div>
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#8E93A6] leading-snug pr-2">
                Many users requested additional guidance for tracking and improving their credit scores.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
