import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bg6 from "../../../../../../assets/images/products/revenuebg.jpg";
import revenueImg from "../../../../../../assets/images/products/revenue.png";
import revenue1Img from "../../../../../../assets/images/products/revenue1.png";
import analyticsImg from "../../../../../../assets/images/products/revenueIntell.png";

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.set(".revenue-intell-tag", { opacity: 0, y: 20 });
      gsap.set(".revenue-intell-title", { opacity: 0, y: 40 });
      gsap.set(".revenue-intell-desc", { opacity: 0, y: 20 });
      gsap.set(".revenue-intell-right-card", { scale: 0.8, opacity: 0, y: 40 });
      gsap.set(".revenue-intell-stat-card", { opacity: 0, y: 40, scale: 0.95 });

      tl.to(".revenue-intell-tag", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(".revenue-intell-title", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".revenue-intell-desc", { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(".revenue-intell-right-card", { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3")
        .to(".revenue-intell-stat-card", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }, "-=1");

      tl.addLabel("counterStart", "-=0.8");

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
        tl.to(obj, {
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
            <h2 className="revenue-intell-title opacity-0 text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
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

            <div className="relative z-10 w-full h-full flex justify-center items-center p-4 sm:p-6">
              <div className="relative w-full h-full flex items-center justify-center scale-[0.65] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 origin-center">
                <img
                  src={revenueImg}
                  className="absolute left-[0%] top-[8%] w-[24%] h-auto rounded-[8px] shadow-[0_12px_24px_rgba(0,0,0,0.4)] border border-white/10 hover:scale-105 transition-transform duration-300 z-30"
                  alt="Net Revenue"
                />

                <img
                  src={analyticsImg}
                  className="absolute w-[50%] h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] shadow-2xl border border-white/5 opacity-90 z-20"
                  alt="Analytics Dashboard"
                />

                <img
                  src={revenue1Img}
                  className="absolute right-[0%] bottom-[8%] w-[24%] h-auto rounded-[8px] shadow-[0_12px_24px_rgba(0,0,0,0.4)] border border-white/10 hover:scale-105 transition-transform duration-300 z-10"
                  alt="Total Sales"
                />
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