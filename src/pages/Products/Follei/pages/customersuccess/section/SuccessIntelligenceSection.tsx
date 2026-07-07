import React, { useLayoutEffect, useRef, useState } from "react";
import bg6 from "../../../../../../assets/images/products/graphbg.png";
import ScopeChart from "./ScopeChart";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SuccessIntelligenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startChartAnimation, setStartChartAnimation] = useState(false);

  const stats = [
    { value: 95, suffix: "%", label: "Customer Health Score" },
    { value: 24, suffix: "/7", label: "Proactive Customer Engagement" },
    { value: 99, suffix: "%", label: "Guided Onboarding Experience" },
    { value: 95, suffix: "%", label: "Feature Utilization" }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter: () => setStartChartAnimation(true)
        }
      });

      // Animate the opacity of the cards similar to LeadIntelligence
      // Animate the opacity of the cards similar to LeadIntelligence
      gsap.set(".si-stat-card", { opacity: 0, y: 40, scale: 0.95 });
      tl.to(".si-stat-card", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" });

      // Animate the right column (ScopeChart container)
      gsap.set(".si-right-col", { opacity: 0, x: 50 });
      tl.to(".si-right-col", { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=1");

      tl.addLabel("counterStart", "-=0.8");

      const counters = gsap.utils.toArray<HTMLElement>(".si-counter");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        
        tl.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            counter.innerHTML = Math.floor(obj.val).toLocaleString("en-US");
          }
        }, "counterStart");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full GlobalPadding flex justify-center bg-white">
      <div className="w-full flex flex-col group">

        {/* Top Part */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between mb-12">

          {/* Left Column: Content */}
          <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
            {/* Badge Capsule */}
            <div
              data-ns-animate="true" data-delay="0.1"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>Success Intelligence</span>
            </div>

            {/* Title */}
            <h2 
              data-ns-animate="true" data-delay="0.2"
              className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Helping Every Customer <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Grow With Confidence
              </span>
            </h2>

            {/* Description */}
            <p 
              data-ns-animate="true" data-delay="0.3"
              className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context ensuring no lead is ever left waiting.
            </p>
          </div>

          {/* Right Column */}
          <div 
            data-ns-animate="true" data-delay="0.4"
            className="si-right-col w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
            {/* Background Image */}
            <img
              src={bg6}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
            />

            {/* Inner Card Container */}
            <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6">
              <div className="w-full h-full flex items-center justify-center p-1">
                <ScopeChart animate={startChartAnimation} />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-[#D0D0D0] w-full">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="si-stat-card opacity-0 flex flex-col text-left px-4 md:px-12 lg:px-16 py-4">
              <span className="text-3xl sm:text-[60px] text-[#000000] tracking-tight leading-none">
                <span className="si-counter" data-target={stat.value}>0</span>
                {stat.suffix}
              </span>
              <span className="text-xs sm:text-[18px] text-[#5A5A5C] mt-3 font-normal leading-snug whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] bg-[#D0D0D0] mt-8" />

      </div>
    </section>
  );
};

export default SuccessIntelligenceSection;
