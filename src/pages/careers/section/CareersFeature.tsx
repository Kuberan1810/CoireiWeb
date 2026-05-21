import { Terminal, Rocket, Puzzle } from "lucide-react";

const CareerFeature = () => {
  return (
    <section className="text-white  mb-10 sm:mb-15 md:mb-15 mx-6 sm:mx-10 md:mx-15">
      <div>

        {/* TOP HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mb-12 sm:mb-16 md:mb-20 lg:mb-24" />

        {/* HEADING */}
        <h2 
          data-ns-animate 
          data-offset="80" 
          className="text-center font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-10 sm:mb-12 md:mb-14 lg:mb-15"
        >
          At Coirei, you’ll get to:
        </h2>

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

          {/* COLUMN 1 */}
          <div 
            data-ns-animate 
            data-delay="0.1" 
            data-offset="40" 
            className="flex flex-col items-start text-left px-4 sm:px-8 md:px-12 lg:px-16"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-5 sm:mb-6">
              <Terminal size={22} className="text-white" />
            </div>

            <p className="text-base sm:text-lg text-white/70 md:max-w-full lg:max-w-xs leading-relaxed">
              Work on core infrastructure that defines how modern software is planned, built, and shipped.
            </p>
          </div>

          {/* VERTICAL DIVIDER 1 */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 2 */}
          <div 
            data-ns-animate 
            data-delay="0.2" 
            data-offset="40" 
            className="flex flex-col items-start text-left px-4 sm:px-8 md:px-12 lg:px-16"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-5 sm:mb-6">
              <Rocket size={22} className="text-white" />
            </div>

            <p className="text-base sm:text-lg text-white/70 md:max-w-full lg:max-w-xs leading-relaxed">
              Contribute directly to a growing platform where your work shapes the product used by real teams.
            </p>
          </div>

          {/* VERTICAL DIVIDER 2 */}
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 3 */}
          <div 
            data-ns-animate 
            data-delay="0.3" 
            data-offset="40" 
            className="flex flex-col items-start text-left px-4 sm:px-8 md:px-12 lg:px-16"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-5 sm:mb-6">
              <Puzzle size={22} className="text-white" />
            </div>

            <p className="text-base sm:text-lg text-white/70 md:max-w-full lg:max-w-xs leading-relaxed">
              Be part of a thoughtful, inclusive team that values ownership, clarity, and long-term thinking.
            </p>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mt-12 sm:mt-16 md:mt-20 lg:mt-24" />

      </div>
    </section>
  );
};

export default CareerFeature;
