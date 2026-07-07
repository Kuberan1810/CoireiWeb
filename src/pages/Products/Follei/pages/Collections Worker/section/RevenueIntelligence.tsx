import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bg6 from "../../../../../../assets/images/products/revenuebg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const RevenueIntelligence: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 86, suffix: "%", label: "Payment Recovery Rate" },
    { value: "24/7", suffix: "", label: "Automated Collections" },
    { value: 90, suffix: "%", label: "On-Time Payment Success" },
    { value: 3.17, suffix: "x", label: "Faster Revenue Recovery" }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left content and bottom stats timeline 
      const tlLeft = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.set(".revenue-intell-tag", { opacity: 0, y: 20 });
      gsap.set(".revenue-intell-title", { opacity: 0, y: 40 });
      gsap.set(".revenue-intell-desc", { opacity: 0, y: 20 });
      gsap.set(".revenue-intell-stat-card", { opacity: 0, y: 40, scale: 0.95 });

      tlLeft.to(".revenue-intell-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".revenue-intell-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".revenue-intell-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".revenue-intell-stat-card", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }, "-=0.4");

      // 2. Right card timeline 
      const tlRight = gsap.timeline({
        scrollTrigger: {
          trigger: ".revenue-intell-right-card",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      gsap.set(".revenue-intell-right-card", { scale: 0.8, opacity: 0, y: 40 });
      gsap.set(".revenue-bar-may, .revenue-bar-apr", { scaleY: 0, transformOrigin: "bottom" });

      tlRight.to(".revenue-intell-right-card", { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
        .to(".revenue-bar-may, .revenue-bar-apr", { scaleY: 1, duration: 2.2, stagger: 0.12, ease: "power3.out" }, "-=0.8");

      tlRight.addLabel("counterStart", "-=0.8");

      const counters = gsap.utils.toArray<HTMLElement>(".revenue-intell-counter");
      counters.forEach((counter) => {
        const targetAttr = counter.getAttribute("data-target") || "0";
        if (targetAttr.includes("/")) {
          counter.innerHTML = targetAttr;
          return;
        }
        const target = parseFloat(targetAttr);
        if (isNaN(target)) {
          counter.innerHTML = targetAttr;
          return;
        }
        const obj = { val: 0 };
        tlRight.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (target % 1 === 0) {
              counter.innerHTML = Math.floor(obj.val).toString();
            } else {
              counter.innerHTML = obj.val.toFixed(2);
            }
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
              className="revenue-intell-tag opacity-0 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>Revenue Intelligence</span>
            </div>

            {/* Title */}
            <h2 className="revenue-intell-title opacity-0 text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Recover Revenue With <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Complete Confidence
              </span>
            </h2>

            {/* Description */}
            <p className="revenue-intell-desc opacity-0 text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              The Collections Worker continuously monitors invoices, payment behavior, renewal schedules, and customer history to recover revenue faster through intelligent, personalized follow-ups while preserving strong customer relationships.
            </p>
          </div>

          {/* Right Column */}
          <div className="revenue-intell-right-card opacity-0 w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-sky-500/20">
            {/* Background Image */}
            <img
              src={bg6}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700"
            />

            <div className="relative z-10 w-full h-full flex justify-center items-center p-2 sm:p-4">
              <div className="relative w-full h-full flex items-center justify-center scale-[0.95] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 origin-center">

                {/*  Net Revenue Panel */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute left-[0%] top-[5%] w-[30%] sm:w-[25%] bg-white border border-slate-100/90 rounded-[12px] sm:rounded-[20px] p-2 sm:p-4 shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300 z-30 flex flex-col text-left justify-between"
                  style={{ aspectRatio: "1.2/1" }}
                >
                  {/* Header Row */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#EBFDF5] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-[5px] sm:text-[10px] font-semibold text-[#14182C] tracking-tight">Net Revenue</span>
                  </div>

                  {/* Value */}
                  <div className="mt-1 sm:mt-3">
                    <span className="text-[9px] sm:text-[18px] md:text-[20px] font-bold text-[#14182C] tracking-tight block">
                      ₹ <span className="revenue-intell-counter" data-target="2.18">0.00</span>M
                    </span>
                  </div>

                  {/* Growth info */}
                  <div className="flex gap-1 sm:gap-2 items-start mt-1 sm:mt-2">
                    <div className="flex flex-col items-center justify-center text-left shrink-0">
                      <span className="text-[3px] sm:text-[7px] text-[#10B981] leading-none">▲</span>
                      <span className="text-[4px] sm:text-[9px] font-bold text-[#10B981] leading-none mt-0.5">10.3%</span>
                    </div>
                    <div className="flex flex-col text-[#878FAA] text-[3.5px] sm:text-[7.5px] font-medium leading-tight">
                      <span>vs Apr 1- Apr 30,</span>
                      <span>2026</span>
                    </div>
                  </div>
                </motion.div>

                {/* Net Revenue Over Time Graph */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-[48%] sm:w-[48%] bg-white border border-slate-100/90 rounded-[12px] sm:rounded-[20px] p-2 sm:p-4 shadow-2xl z-20 flex flex-col justify-between text-left"
                  style={{ aspectRatio: "1.45/1" }}
                >
                  {/* Top Header & Legends */}
                  <div className="flex flex-col gap-1 sm:gap-2 mb-1 sm:mb-2 pb-1 sm:pb-2 border-b border-slate-100">
                    <span className="text-[6px] sm:text-[12px] font-bold text-[#14182C] leading-none">Net Revenue Over Time</span>
                    <div className="flex gap-2 sm:gap-4 items-center mt-0.5">
                      <div className="flex items-center gap-0.5 sm:gap-1.5">
                        <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-[1.5px] bg-[#BDE0FF] block shrink-0" />
                        <span className="text-[3.5px] sm:text-[7.5px] font-medium text-slate-500 whitespace-nowrap">May 1 – May 31, 2026</span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1.5">
                        <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-[1.5px] bg-[#004370] block shrink-0" />
                        <span className="text-[3.5px] sm:text-[7.5px] font-medium text-slate-500 whitespace-nowrap">Apr 1 – Apr 30, 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Graph Grid & Grouped Bars */}
                  <div className="flex gap-1.5 sm:gap-3 flex-1 mt-1 sm:mt-2 items-stretch h-[40px] sm:h-[90px]">
                    {/* Y-axis Labels */}
                    <div className="flex flex-col justify-between text-right text-[3.5px] sm:text-[7.5px] text-slate-400 font-bold pb-2 sm:pb-3.5 shrink-0">
                      <span>₹150K</span>
                      <span>₹100K</span>
                      <span>₹50K</span>
                      <span>₹0</span>
                    </div>

                    {/* Main chart grid area */}
                    <div className="flex-1 relative flex flex-col justify-between items-stretch">
                      {/* Horizontal dotted grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2 sm:pb-3.5">
                        <div className="border-b border-dashed border-slate-100 w-full h-0"></div>
                        <div className="border-b border-dashed border-slate-100 w-full h-0"></div>
                        <div className="border-b border-dashed border-slate-100 w-full h-0"></div>
                        <div className="border-b border-slate-200 w-full h-0"></div>
                      </div>

                      {/* Grouped bar charts and X-axis labels */}
                      <div className="absolute inset-x-0 top-0 bottom-0 flex justify-between items-end px-1 sm:px-3">
                        {[
                          { label: "May 1", val1: 26, val2: 35 },
                          { label: "May 8", val1: 41, val2: 61 },
                          { label: "May 15", val1: 57, val2: 80 },
                          { label: "May 22", val1: 46, val2: 67 },
                          { label: "May 29", val1: 59, val2: 89 }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1 sm:gap-1.5 h-full justify-end">
                            {/* Bar pairs */}
                            <div className="flex items-end gap-[1.5px] sm:gap-1 h-full pb-2 sm:pb-3.5">
                              <div
                                style={{ height: `${item.val1}%` }}
                                className="revenue-bar-may w-[3px] sm:w-[8px] bg-[#BDE0FF] rounded-t-[0.5px] sm:rounded-t-[1.5px] origin-bottom"
                              />
                              <div
                                style={{ height: `${item.val2}%` }}
                                className="revenue-bar-apr w-[3px] sm:w-[8px] bg-[#004370] rounded-t-[0.5px] sm:rounded-t-[1.5px] origin-bottom"
                              />
                            </div>
                            <span className="text-[3px] sm:text-[6.5px] font-bold text-slate-400 absolute bottom-0">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Total Sales Panel*/}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute right-[0%] bottom-[5%] w-[30%] sm:w-[25%] bg-white border border-slate-100/90 rounded-[12px] sm:rounded-[20px] p-2 sm:p-4 shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300 z-10 flex flex-col text-left justify-between"
                  style={{ aspectRatio: "1.2/1" }}
                >
                  {/* Header Row */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-[5px] sm:text-[10px] font-semibold text-[#14182C] tracking-tight">Total Sales</span>
                  </div>

                  {/* Value */}
                  <div className="mt-1 sm:mt-3">
                    <span className="text-[9px] sm:text-[18px] md:text-[20px] font-bold text-[#14182C] tracking-tight block">
                      ₹ <span className="revenue-intell-counter" data-target="2.45">0.00</span>M
                    </span>
                  </div>

                  {/* Growth info */}
                  <div className="flex gap-1 sm:gap-2 items-start mt-1 sm:mt-2">
                    <div className="flex flex-col items-center justify-center text-left shrink-0">
                      <span className="text-[3px] sm:text-[7px] text-[#10B981] leading-none">▲</span>
                      <span className="text-[4px] sm:text-[9px] font-bold text-[#10B981] leading-none mt-0.5">12.6%</span>
                    </div>
                    <div className="flex flex-col text-[#878FAA] text-[3.5px] sm:text-[7.5px] font-medium leading-tight">
                      <span>vs Apr 1- Apr 30,</span>
                      <span>2025</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-[#D0D0D0] w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="revenue-intell-stat-card opacity-0 flex flex-col text-left px-4 md:px-12 lg:px-16 py-4">
              <span className="text-3xl sm:text-[60px] text-[#000000] tracking-tight leading-none">
                <span className="revenue-intell-counter" data-target={stat.value}>0</span>
                {stat.suffix}
              </span>
              <span className="text-xs sm:text-[18px] text-[#5A5A5C] mt-3 font-normal leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-[2px] bg-[#D0D0D0] mt-8" />

      </div>
    </section>
  );
};

export default RevenueIntelligence;