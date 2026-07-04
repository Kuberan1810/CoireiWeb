import React from "react";
import successImg from "../../../../../../assets/images/products/success.png";
import bg6 from "../../../../../../assets/images/products/bg6.jpg";

export const RevenueIntelligence: React.FC = () => {
  const stats = [
    { value: "95%", label: "Customer Health Score" },
    { value: "24/7", label: "Proactive Customer Engagement" },
    { value: "99%", label: "Guided Onboarding Experience" },
    { value: "95%", label: "Feature Utilization" }
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
              <span>Success Intelligence</span>
            </div>

            {/* Title */}
            <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
              Helping Every Customer <br />
              <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                Grow With Confidence
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
              Every website form, email, WhatsApp message, voice call, or live chat is handled instantly by the SDR Worker. Every response is personalized using your products, pricing, business policies, and customer context ensuring no lead is ever left waiting.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
            {/* Background Image */}
            <img
              src={bg6}
              loading="lazy"
              alt=""
              className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
            />

            {/* Inner Card Container */}
            <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6">
              <div className="w-full h-full flex items-center justify-center p-1">
                <img
                  src={successImg}
                  className="w-full h-full object-cover rounded-[10px] "
                  alt="Success Intelligence graph"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-[#D0D0D0] w-full">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col text-left px-4 md:px-12 lg:px-16 py-4">
              <span className="text-3xl sm:text-[60px] text-[#000000] tracking-tight leading-none">{stat.value}</span>
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
