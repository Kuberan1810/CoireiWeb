import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ai1 from "../../../../../../assets/images/products/ai1.png";
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

      // Animation Sequence
      tl.to(".am-hero-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".am-hero-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".am-hero-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".am-hero-card", { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
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
            className="am-hero-title opacity-0 text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Grow Every Customer <br />
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

        {/* Right Column */}
        <div 
          className="am-hero-card opacity-0 w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg3}
            loading="eager"
            alt=""
            className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Inner Card Container */}
          <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-10">
            <div className="w-full h-full flex items-center justify-center p-1">
              <img
                src={ai1}
                className="w-full h-full object-cover rounded-[10px] "
                alt="Customer success dashboard"
                loading="eager"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
