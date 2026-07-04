import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import revenueIntellImg from "../../../../../../assets/images/products/revenueIntell.png";
import revenueImg from "../../../../../../assets/images/products/revenue.png";
import revenue1Img from "../../../../../../assets/images/products/revenue1.png";
import bgrevenue from "../../../../../../assets/images/products/revenuebg.jpg";

const AnimatedNumber = ({ end, decimals = 0, suffix = "" }: { end: number, decimals?: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, end, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, count, end]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export const RevenueIntelligence: React.FC = () => {
  const stats = [
    { end: 86, suffix: "%", decimals: 0, label: "Payment Recovery Rate" },
    { end: 24, suffix: "/7", decimals: 0, label: "Automated Collections" },
    { end: 90, suffix: "%", decimals: 0, label: "On-Time Payment Success" },
    { end: 3.17, suffix: "x", decimals: 2, label: "Faster Revenue Recovery" }
  ];

  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-8 lg:py-10 flex justify-center bg-white">
      <div className="w-full flex flex-col group">

        {/* Top Part */}
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between mb-12">

          {/* Left Column: Content */}
          <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
            {/* Badge Capsule */}
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
              <span>Revenue Intelligence</span>
            </div>

            {/* Title */}
            <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Recover Revenue With
              <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Complete Confidence
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              The Collections Worker continuously monitors invoices, payment behavior, renewal schedules, and customer history to recover revenue faster through intelligent, personalized follow-ups while preserving strong customer relationships.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
            {/* Background Image */}
            <img
              src={bgrevenue}
              loading="lazy"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700"
            />

            {/* Inner Cards Container */}
            <div className="relative z-10 w-full h-full p-6">

              {/* Left Stat Card */}
              <div className="absolute top-[18%] left-[4%] w-[23%] z-30 shadow-2xl rounded-[10px] overflow-hidden">
                <img
                  src={revenueImg}
                  className="w-full h-auto object-contain"
                  alt="Net Revenue"
                />
              </div>

              {/* Center Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] z-20 shadow-2xl rounded-[10px] overflow-hidden">
                <img
                  src={revenueIntellImg}
                  className="w-full h-auto object-contain"
                  alt="Revenue Intelligence graph"
                />
              </div>

              {/* Right Stat Card */}
              <div className="absolute bottom-[18%] right-[4%] w-[23%] z-30 shadow-2xl rounded-[10px] overflow-hidden">
                <img
                  src={revenue1Img}
                  className="w-full h-auto object-contain"
                  alt="Total Sales"
                />
              </div>

            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-[#D0D0D0] w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col text-left px-4 md:px-12 lg:px-16 py-4">
              <span className="text-3xl sm:text-[60px] text-[#000000] tracking-tight leading-none">
                <AnimatedNumber end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
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

export default RevenueIntelligence;
