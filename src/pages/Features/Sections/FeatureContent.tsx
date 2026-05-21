import React from "react";

const WorksFlow: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 mx-6 sm:mx-10 md:mx-15 flex items-center justify-center">
      <div
        data-ns-animate
        data-offset="100"
        data-duration="1.2"
        className="relative group px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16
                   max-w-full md:max-w-350
                   text-white/90
                   rounded-xl
                   border border-white/20
                   backdrop-blur-2xl
                   transition-all duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.01))",
        }}
      >
        {/* Glass highlight layer */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#29292910] to-transparent opacity-40" />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[88px]
                         font-semibold text-center leading-tight text-white/90">
            Monitor, Analyze, and Secure Software Execution in Real Time{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#FFE6C8] to-[#E76E0A]">
              Powered by AI
            </span>
          </h2>
        </div>

        {/* CORNER BORDERS */}
        <span className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-white/70" />
        <span className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-white/70" />
        <span className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-white/70" />
        <span className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-white/70" />
      </div>
    </section>
  );
};

export default WorksFlow;
