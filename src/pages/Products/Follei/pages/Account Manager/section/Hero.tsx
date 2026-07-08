import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import bg3 from "../../../../../../assets/images/products/bg3.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set(".am-hero-tag", { opacity: 0, y: 20 });
      gsap.set(".am-hero-title", { opacity: 0, y: 40 });
      gsap.set(".am-hero-desc", { opacity: 0, y: 20 });
      gsap.set(".am-hero-card", { scale: 0.8, opacity: 0, y: 40 });
      gsap.set(".graph-bar", { height: 0 });
      gsap.set(".graph-tag", { opacity: 0, y: 10 });
      gsap.set(".graph-widget", { opacity: 0, y: 20 });
      gsap.set(".goals-widget", { opacity: 0, y: 20 });

      // Animation Sequence
      tl.to(".am-hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".am-hero-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".am-hero-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".am-hero-card", { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .to(".graph-bar", { height: (i, el) => el.dataset.h, duration: 2.2, ease: "power2.out", stagger: 0.2 }, "-=0.2")
        .to(".graph-tag", { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }, "-=1.8")
        .to(".graph-widget", { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.5)", stagger: 0.2 }, "-=1.2")
        .to(".goals-widget", { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=1.0");

      // Continuous floating animation
      gsap.to(".floating-dashboard", {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white pt-[200px]">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="am-hero-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Account Manager</span>
          </div>

          {/* Title */}
          <h1 
            className="am-hero-title opacity-0 text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Grow Every Customer <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Relationship Intelligently
            </span>
          </h1>

          {/* Description */}
          <p 
            className="am-hero-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The Account Manager Worker continuously strengthens customer relationships, identifies expansion opportunities, manages executive communication, and drives long-term account growth through AI-powered business intelligence.
          </p>
        </div>

        <div 
          className="am-hero-card opacity-0 w-full lg:w-1/2 min-h-[380px] sm:min-h-0 sm:aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg3}
            loading="eager"
            alt=""
            className="image-cover absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Inner Card Container */}
          <div className="solution-inner-card-wrapper floating-dashboard relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6 lg:p-10">
            {/* Custom Dashboard UI (Image Replication) */}
            <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[24px] relative shadow-lg flex flex-col justify-end px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-4 sm:pb-8 overflow-hidden">
              
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Horizontal Chart Guide Lines */}
              <div className="absolute inset-x-0 bottom-4 sm:bottom-12 top-16 sm:top-24 flex flex-col justify-between z-0 pointer-events-none px-4 sm:px-8">
                  <div className="w-full h-[1px] bg-gray-100"></div>
                  <div className="w-full h-[1px] bg-gray-100"></div>
                  <div className="w-full h-[1px] bg-gray-100"></div>
                  <div className="w-full h-[1px] bg-gray-100"></div>
              </div>

              {/* Top-Right Widget (Goals!) */}
              <div className="goals-widget opacity-0 absolute top-3 right-3 sm:top-6 sm:right-6 z-30 scale-75 sm:scale-100 origin-top-right">
                <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-1.5 px-3 flex items-center gap-2 border border-gray-50">
                  <div className="bg-[#EEEDFC] rounded-md p-1.5">
                    <svg className="w-3.5 h-3.5 text-[#6B5AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <span className="text-[#6B5AED] text-sm font-medium">Goals!</span>
                </div>
              </div>

              {/* Top-Left Widget (List with Follei AI) */}
              <div className="graph-widget opacity-0 absolute top-3 left-3 sm:top-6 sm:left-6 z-30 scale-75 sm:scale-100 origin-top-left">
                <div className="bg-white rounded-xl shadow-lg p-2.5 flex flex-col gap-1.5 w-36 border border-gray-100">
                  <div className="w-full h-6 bg-gray-50 rounded-md flex items-center px-2.5 border border-gray-100">
                    <div className="w-6 h-[3px] bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="w-full h-7 bg-[#EEEDFC] rounded-md flex items-center justify-between px-2.5 border border-[#6B5AED]/20 relative">
                    <div className="w-6 h-[3px] bg-[#6B5AED] rounded-full"></div>
                    <svg className="w-3.5 h-3.5 text-[#6B5AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    
                    {/* Overlapping Card */}
                    <div className="absolute -right-6 -bottom-3 bg-[#6B5AED] rounded-[8px] p-2 shadow-xl w-[72px] border border-white/20">
                      <span className="text-white text-[9px] font-medium block mb-1.5 leading-none">Follei AI</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-[1.5px] bg-white/50 rounded-full"></div>
                        <div className="w-1 h-1 rounded-full bg-white/80"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-6 bg-gray-50 rounded-md flex items-center px-2.5 border border-gray-100 mt-1">
                    <div className="w-6 h-[3px] bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Bar Chart Area */}
              <div className="flex justify-between items-end h-full w-full max-w-[400px] mx-auto gap-2 sm:gap-4 relative z-10 pt-10 sm:pt-16 group/chart">
                
                {/* Bar 1 */}
                <div className="flex flex-col items-center justify-end h-full w-full relative cursor-pointer transition-opacity duration-300 group-hover/chart:opacity-40 hover:!opacity-100">
                  <div className="graph-bar w-full bg-gradient-to-b from-[#F5C8BA] to-transparent rounded-t-[10px] sm:rounded-t-[20px] z-10 relative flex justify-center" data-h="35%">
                    <div className="graph-tag opacity-0 absolute -top-7 sm:-top-10 bg-[#6B5AED] text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-[6px] sm:rounded-[12px] text-[8px] sm:text-sm font-medium whitespace-nowrap shadow-md z-20">Beginner</div>
                  </div>
                </div>

                {/* Bar 2 */}
                <div className="flex flex-col items-center justify-end h-full w-full relative cursor-pointer transition-opacity duration-300 group-hover/chart:opacity-40 hover:!opacity-100">
                  <div className="graph-bar w-full bg-gradient-to-b from-[#F5C8BA] to-transparent rounded-t-[10px] sm:rounded-t-[20px] z-10 relative flex justify-center" data-h="55%">
                    <div className="graph-tag opacity-0 absolute -top-7 sm:-top-10 bg-[#6B5AED] text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-[6px] sm:rounded-[12px] text-[8px] sm:text-sm font-medium whitespace-nowrap shadow-md z-20">Intermediate</div>
                  </div>
                </div>

                {/* Bar 3 */}
                <div className="flex flex-col items-center justify-end h-full w-full relative cursor-pointer transition-opacity duration-300 group-hover/chart:opacity-40 hover:!opacity-100">
                  <div className="graph-bar w-full bg-gradient-to-b from-[#F5C8BA] to-transparent rounded-t-[10px] sm:rounded-t-[20px] z-10 relative flex justify-center" data-h="75%">
                    <div className="graph-tag opacity-0 absolute -top-7 sm:-top-10 bg-[#6B5AED] text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-[6px] sm:rounded-[12px] text-[8px] sm:text-sm font-medium whitespace-nowrap shadow-md z-20">Advanced</div>
                  </div>
                </div>

                {/* Bar 4 */}
                <div className="flex flex-col items-center justify-end h-full w-full relative cursor-pointer transition-opacity duration-300 group-hover/chart:opacity-40 hover:!opacity-100">
                  <div className="graph-bar w-full bg-gradient-to-b from-[#F5C8BA] to-transparent rounded-t-[10px] sm:rounded-t-[20px] z-10 relative flex justify-center" data-h="100%">
                    <div className="graph-tag opacity-0 absolute -top-7 sm:-top-10 bg-[#6B5AED] text-white px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-[6px] sm:rounded-[12px] text-[8px] sm:text-sm font-medium whitespace-nowrap shadow-md z-20">Expert</div>
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
