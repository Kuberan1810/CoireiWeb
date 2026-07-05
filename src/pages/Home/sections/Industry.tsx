
const row1 = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Banking & Financial Services",
  "Insurance",
  "Retail & E-commerce",
  "Information Technology",
  "Human Resources",
  "Logistics & Supply Chain"
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
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-black text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-container-left {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marqueeLeft 50s linear infinite;
        }
        .marquee-container-right {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marqueeRight 50s linear infinite;
        }
        .marquee-container-left:hover,
        .marquee-container-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="GlobalPadding relative z-10 ">
        {/* Heading */}
        <h2
          data-ns-animate="true"
          data-delay="0.1"
          data-offset="50"
          className="text-4xl md:text-[60px] font-medium tracking-tight text-white leading-[1.2]"
        >
          Intelligent systems adapted to your industry's own workflow.
        </h2>
      </div>

      {/* Marquee Rows */}
      <div className="w-full flex flex-col gap-4 md:gap-5 relative z-10 overflow-hidden">
        <div className="w-full overflow-hidden relative flex py-1">
          <div className="marquee-container-right">
            {[...row1, ...row1, ...row1, ...row1].map((pill, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 cursor-default shrink-0 shadow-[inset_0_3px_4px_rgba(255,255,255,0.25)]"
              >
                <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden relative flex py-1">
          <div className="marquee-container-left">
            {[...row2, ...row2, ...row2, ...row2].map((pill, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 cursor-default shrink-0 shadow-[inset_0_3px_4px_rgba(255,255,255,0.25)]"
              >
                <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
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