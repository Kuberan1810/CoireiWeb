import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import analytic from "../../../../../../assets/images/products/analyticsbg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const AccountAnalytics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      const counters = gsap.utils.toArray(".counter-num") as HTMLElement[];
      counters.forEach((counter) => {
        const targetStr = counter.getAttribute("data-target") || "0";
        const isFloat = targetStr.includes(".");
        const target = parseFloat(targetStr);
        
        ScrollTrigger.create({
          trigger: ".analytic-cards-container",
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2.5,
              ease: "power3.out",
              snap: { innerHTML: isFloat ? 0.1 : 1 },
              onUpdate: function() {
                if (isFloat) {
                  counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                }
              }
            });
          }
        });
      });
      
      // Animate the cards themselves
      gsap.from(".analytic-card", {
        scrollTrigger: {
          trigger: ".analytic-cards-container",
          start: "top 85%",
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const progressBars = [
    { id: "01", shortTitle: "Account Health", subTitle: "Relationship Strength", percentage: 83, label: "/HEALTH" },
    { id: "02", shortTitle: "Expansion Potential", subTitle: "Growth Opportunity", percentage: 50, label: "/EXPANSION" },
    { id: "03", shortTitle: "Executive Engagement", subTitle: "Strategic Alignment", percentage: 66, label: "/ENGAGEMENT" }
  ];

  return (

    <section className="w-full GlobalPadding flex justify-center bg-white">

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
              <span>Account Analytics</span>
            </div>

            {/* Title */}
            <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Measure Every Relationship. <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Grow Every Account.
              </span>
            </h2>

            {/* Description */}
            <p data-ns-animate="true" data-delay="0.3" className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              The Account Manager Worker continuously tracks account health, expansion opportunities, customer engagement, and executive relationships—providing complete visibility into every strategic account.
            </p>
          </div>

          {/* Right Column */}
          <div data-ns-animate="true" data-delay="0.4" className="w-full lg:w-1/2 lg:min-h-[460px] bg-[#090C15] rounded-[20px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 shadow-xl border border-gray-800">
            {/* Background Image */}
            <img
              src={analytic}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-[460px] object-cover opacity-30 transition-transform duration-700 "
            />

            {/* Inner Card Container */}
            <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6 sm:p-10">
              <div className="w-full max-w-[480px] analytic-cards-container">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Metric 1 */}
                  <div className="analytic-card bg-white rounded-[20px] shadow-lg p-5 sm:p-6 flex flex-col items-start justify-between text-left relative group hover:-translate-y-1 transition-transform duration-300 h-full">
                    <span className="text-[#8E93A6] text-[9px] sm:text-[10px] font-bold tracking-wider mb-2 leading-tight uppercase">TOTAL RENEWALS DUE</span>
                    <span className="text-[#04032E] text-3xl sm:text-[38px] font-bold mb-2 counter-num" data-target="245">0</span>
                    <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[6px] mt-auto">+12.4%</span>
                  </div>
                  {/* Metric 2 */}
                  <div className="analytic-card bg-white rounded-[20px] shadow-lg p-5 sm:p-6 flex flex-col items-start justify-between text-left relative group hover:-translate-y-1 transition-transform duration-300 h-full">
                    <span className="text-[#8E93A6] text-[9px] sm:text-[10px] font-bold tracking-wider mb-2 leading-tight uppercase">DUE THIS WEEK</span>
                    <span className="text-[#04032E] text-3xl sm:text-[38px] font-bold mb-2 counter-num" data-target="12">0</span>
                    <span className="bg-[#EEEDFC] text-[#6B5AED] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[6px] mt-auto">Urgent</span>
                  </div>
                  {/* Metric 3 */}
                  <div className="analytic-card bg-white rounded-[20px] shadow-lg p-5 sm:p-6 flex flex-col items-start justify-between text-left relative group hover:-translate-y-1 transition-transform duration-300 h-full">
                    <span className="text-[#8E93A6] text-[9px] sm:text-[10px] font-bold tracking-wider mb-2 leading-tight uppercase">RENEWAL REVENUE</span>
                    <div className="flex items-baseline text-[#04032E] text-3xl sm:text-[38px] font-bold mb-2">
                       <span className="text-xl sm:text-2xl mr-1">₹</span><span className="counter-num" data-target="4.2">0</span><span className="text-xl sm:text-2xl ml-0.5">M</span>
                    </div>
                    <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[6px] mt-auto">Target</span>
                  </div>
                  {/* Metric 4 */}
                  <div className="analytic-card bg-white rounded-[20px] shadow-lg p-5 sm:p-6 flex flex-col items-start justify-between text-left relative group hover:-translate-y-1 transition-transform duration-300 h-full">
                    <span className="text-[#8E93A6] text-[9px] sm:text-[10px] font-bold tracking-wider mb-2 leading-tight uppercase">CHURN RISK</span>
                    <span className="text-[#04032E] text-3xl sm:text-[38px] font-bold mb-2 counter-num" data-target="8">0</span>
                    <span className="bg-[#FFEBEE] text-[#C62828] text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-[6px] mt-auto">Risk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full mt-4 border-[0.5px] border-[#626262] bg-[#F0F4FF]">
          {progressBars.map((bar, idx) => (
            <div
              key={idx}
              className="relative w-full h-[50px] sm:h-[60px] md:h-[68px] border-b-[0.5px] border-[#626262] last:border-b-0"
            >
              {/* Background Label */}
              <div className="absolute inset-0 hidden sm:flex items-end justify-end px-4 sm:px-6 pb-1.5 z-0">
                <span className="text-[#5A5A5C] text-[10px] sm:text-xs tracking-[0.1em] uppercase">
                  {bar.label}
                </span>
              </div>

              {/* Percentage Badge  */}
              <div className="absolute right-4 top-0 h-full flex items-center z-20 sm:hidden">
                <span className="bg-white text-[#004370] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                  +{bar.percentage}%
                </span>
              </div>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${bar.percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
                className="absolute top-0 left-0 h-full bg-[#91C1F8] overflow-hidden z-10"
              >
                {/* Responsive text layout */}
                <div className="absolute left-4 sm:left-8 h-full flex items-center text-white text-sm md:text-[24px] font-medium tracking-wide pr-0 sm:pr-28">
                  <span className="whitespace-nowrap">{bar.id}/  {bar.shortTitle}</span>
                  <span className="hidden sm:inline whitespace-nowrap">&nbsp;— {bar.subTitle}</span>
                </div>

                {/* Percentage Badge */}
                <div className="absolute right-4 h-full flex items-center hidden sm:flex">
                  <span className="bg-white text-[#004370] text-xs sm:text-[22px] font-medium p-2 rounded-full">
                    +{bar.percentage}%
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccountAnalytics;
