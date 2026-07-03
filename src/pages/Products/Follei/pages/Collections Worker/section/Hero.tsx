import React from "react";
import a13 from "../../../../../../assets/images/products/a13.png";
import bg3 from "../../../../../../assets/images/products/bg3.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-15 py-10 flex justify-center bg-white mt-8">
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[71px] items-center justify-between min-h-[481px] group">

        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
          {/* Badge Pill */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
            <span>Customer Success Worker</span>
          </div>

          {/* Title */}
          <h1 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
            Helping Every Customer <br />
            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
              Achieve Long-Term Success
            </span>
          </h1>


          {/* Description */}
          <p className="text-[#5A5A5C] text-sm sm:text-[22px] font-normal leading-relaxed">
            The Customer Success Worker proactively guides onboarding, drives product adoption, monitors customer health, identifies growth opportunities, and strengthens every customer relationship through intelligent, continuous engagement.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 aspect-[1.5/1] bg-[#090C15] rounded-[10px] relative overflow-hidden flex flex-col justify-center items-center transition-all duration-500 group-hover:border-emerald-500/20">
          {/* Background Image */}
          <img
            src={bg3}
            loading="lazy"
            alt=""
            className="image-cover absolute inset-0 w-full h-[390px] object-cover opacity-30 transition-transform duration-700 "
          />

          {/* Inner Card Container */}
          <div className="solution-inner-card-wrapper relative z-10 w-full h-full flex justify-center items-center p-6">
            <div className="w-full h-full flex items-center justify-center p-1">
              <img
                src={a13}
                className="w-full h-full object-cover rounded-[10px] "
                alt="Customer success dashboard"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
