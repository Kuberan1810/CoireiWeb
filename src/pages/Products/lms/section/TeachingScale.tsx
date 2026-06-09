import React from 'react';
import laptopDashboardMockup from "../../../../assets/images/products/laptop_dashboard_mockup.png";

interface ScaleCard {
  image: string;
  title: string;
  description: string;
}

const cardsData: ScaleCard[] = [
  {
    image: laptopDashboardMockup,
    title: "Your data stays yours. Always.",
    description: "We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your organization."
  },
  {
    image: laptopDashboardMockup,
    title: "Your data stays yours. Always.",
    description: "We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your organization."
  },
  {
    image: laptopDashboardMockup,
    title: "Your data stays yours. Always.",
    description: "We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your organization."
  },
  {
    image: laptopDashboardMockup,
    title: "Your data stays yours. Always.",
    description: "We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your organization."
  }
];

const TeachingScale: React.FC = () => {
  return (
    <section className="relative text-white bg-[#161616] py-20 lg:py-28 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 
            data-ns-animate
            className="text-[36px] md:text-[48px] lg:text-[60px] font-medium leading-[1.1] text-white tracking-tight font-instrument-sans"
          >
            Teaching should scale.<br />
            Not stay manual.
          </h2>
        </div>

        {/* 4-Column Responsive Grid */}
        <div 
          data-ns-animate
          data-delay="0.15"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8"
        >
          {cardsData.map((card, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col gap-6"
            >
              {/* Image Container with premium shadow and rounded corner styles matching mockup */}
              <div className="relative rounded-[24px] w-full overflow-hidden bg-[#1E1E1E] border border-white/5 shadow-2xl aspect-[4/3] flex items-center justify-center cursor-pointer hover:border-white/10 hover:bg-[#252525]/90 transition-all duration-500">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
              </div>

              {/* Text contents: Title and Description */}
              <div className="flex flex-col gap-3 px-1 transition-all duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-lg lg:text-[22px] font-medium text-white leading-tight font-instrument-sans">
                  {card.title}
                </h3>
                <p className="text-[14px] lg:text-[15px] text-zinc-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachingScale;
