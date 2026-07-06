import React from "react";
import { motion } from "framer-motion";
import stats from "../../../../../../assets/images/products/accountAnalytics.svg";
import analytic from "../../../../../../assets/images/products/analyticsbg.jpg";

export const AccountAnalytics: React.FC = () => {
  const progressBars = [
    { id: "01", title: "Account Health — Relationship Strength", percentage: 83, label: "/HEALTH" },
    { id: "02", title: "Expansion Potential — Growth Opportunity", percentage: 50, label: "/EXPANSION" },
    { id: "03", title: "Executive Engagement — Strategic Alignment", percentage: 66, label: "/ENGAGEMENT" }
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
            <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Measure Every Relationship. <br />
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
          <div data-ns-animate="true" data-delay="0.4" className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
            {/* Background Image */}
            <img
              src={analytic}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
            />

            {/* Inner Card Container */}
            <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center ">
              <div className="w-full h-full flex items-center justify-center p-10">
                <img
                  src={stats}
                  className="w-full h-full object-cover rounded-[10px] "
                  alt="Success Intelligence graph"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Progress Bars Section */}
        <div className="w-full mt-4 border-[0.5px] border-[#626262] bg-[#F0F4FF]">
          {progressBars.map((bar, idx) => (
            <div
              key={idx}
              className="relative w-full h-[50px] sm:h-[60px] md:h-[68px] border-b-[0.5px] border-[#626262] last:border-b-0"
            >
              {/* Background Label */}
              <div className="absolute inset-0 flex items-end justify-end px-4 sm:px-6 pb-1.5 z-0">
                <span className="text-[#5A5A5C] text-[10px] sm:text-xs tracking-[0.1em] uppercase">
                  {bar.label}
                </span>
              </div>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${bar.percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="absolute top-0 left-0 h-full bg-[#91C1F8] overflow-hidden z-10"
              >
                <div className="absolute left-4 sm:left-8 h-full flex items-center whitespace-nowrap text-white text-sm md:text-[24px] font-medium tracking-wide">
                  {bar.id}/  {bar.title}
                </div>
                <div className="absolute right-4 h-full flex items-center">
                  <span className="bg-white text-[#004370] text-xs sm:text-[22px] font-medium p-2 rounded-full ">
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
