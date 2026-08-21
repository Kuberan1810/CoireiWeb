import TypewriterHeading from "../../../component/TypewriterHeading";
import bgImage from "../../../assets/images/homepage/bg.jpg";

const row1 = [
  "Human Resources",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Banking & Financial Services",
  "Insurance",
  "Retail & E-commerce",
  "Information Technology"
];

const row2 = [
  "Hospitality",
  "Automotive",
  "Pharmaceuticals",
  "Telecommunications",
  "Energy & Utilities",
  "Large Enterprises",
  "Government",
  "Professional Services",
  "Startups",
  "Small & Medium Businesses"
];

const Industry = () => {
  return (
    <section className="relative w-full GlobalPadding overflow-hidden bg-white text-neutral-900 min-h-[560px] flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, transparent 100%);
        }
        @media (max-width: 768px) {
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, transparent 100%);
          }
        }
        .marquee-container-left {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marqueeLeft 42s linear infinite;
          will-change: transform;
        }
        .marquee-container-right {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marqueeRight 42s linear infinite;
          will-change: transform;
        }
        @media (min-width: 768px) {
          .marquee-container-left {
            gap: 16px;
            animation-duration: 52s;
          }
          .marquee-container-right {
            gap: 16px;
            animation-duration: 52s;
          }
        }
        .marquee-container-left:hover,
        .marquee-container-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Content Header */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto mb-8 sm:mb-10 md:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-10">

          {/* Left Column: Tag & Main Title */}
          <div className="max-w-2xl">
            <span
              data-ns-animate="true"
              className="inline-block text-[#D33B12] text-sm sm:text-[16px] tracking-wide mb-3 sm:mb-4"
            >
              Industries
            </span>
            <h2
              data-ns-animate="true"
              data-delay="0.05"
              className="text-[32px] lg:text-[48px] text-[#111827] leading-[1.15] tracking-tight min-h-[75px] sm:min-h-[96px] md:min-h-[120px]"
            >
              <TypewriterHeading text="Intelligence that fits your industry." />
            </h2>
          </div>

          {/* Right Column: Subtitle Description */}
          <div
            data-ns-animate="true"
            data-delay="0.15"
            className="lg:max-w-[25%] pb-1 sm:pb-2"
          >
            <p className="text-neutral-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
              We engineer AI solutions that adapt to how your industry works, not the other way around.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Container with soft fade gradient edges */}
      <div
        data-ns-animate="true"
        data-delay="0.2"
        className="marquee-mask w-full flex flex-col gap-3 sm:gap-4 md:gap-5 relative z-10 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[90px] h-[177px] bg-[#FAFCF9] z-20"
          style={{ filter: "blur(44px)" }}
        />
        <div
          className="pointer-events-none absolute right-30 top-1/2 -translate-y-1/2 w-[90px] h-[177px] bg-[#FAFCF9] z-20"
          style={{ filter: "blur(44px)" }}
        />

        {/* Row 1 */}
        <div className="w-full overflow-hidden relative flex py-1 mt-8">
          <div className="marquee-container-right">
            {[...row1, ...row1, ...row1, ...row1].map((pill, idx) => (
              <div
                key={`row1-${idx}`}
                className="h-[42px] px-5 sm:px-6 flex items-center justify-center rounded-full bg-[#333333]/20 hover:bg-[#333333]/30 border-[0.2px] border-[#333333]/10 shadow-[inset_4px_4px_4px_rgba(255,255,255,0.26),inset_-4px_-4px_4px_rgba(255,255,255,0.26)] transition-all duration-300 cursor-pointer shrink-0"
              >
                <span className="text-[#333333] text-xs sm:text-sm md:text-[14.5px] font-normal tracking-normal whitespace-nowrap">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden relative flex py-1">
          <div className="marquee-container-left">
            {[...row2, ...row2, ...row2, ...row2].map((pill, idx) => (
              <div
                key={`row2-${idx}`}
                className="h-[42px] px-5 sm:px-6 flex items-center justify-center rounded-full bg-[#333333]/20 hover:bg-[#333333]/30 border-[0.2px] border-[#333333]/10 shadow-[inset_4px_4px_4px_rgba(255,255,255,0.26),inset_-4px_-4px_4px_rgba(255,255,255,0.26)] transition-all duration-300 cursor-pointer shrink-0"
              >
                <span className="text-[#333333] text-xs sm:text-sm md:text-[14.5px] font-normal tracking-normal whitespace-nowrap">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;