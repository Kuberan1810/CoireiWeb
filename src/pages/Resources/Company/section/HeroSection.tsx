const HeroSection = () => {
  return (
    <section className="relative mt-32 sm:mt-36 lg:mt-48 mb-16 md:mb-24 overflow-hidden">
      {/* Subtle background glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-10 md:px-15">
        <div className="flex flex-col items-center lg:justify-center justify-center">
          <p 
            data-ns-animate 
            data-offset="40" 
            className="text-white/60 uppercase tracking-[0.2em] text-xs sm:text-sm mb-6 font-medium"
          >
            Our Mission
          </p>
          <h1 
            data-ns-animate 
            data-delay="0.2" 
            data-offset="80" 
            className="text-[#E3E3E0] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-center max-w-[1000px] font-medium leading-[1.1] tracking-tight"
          >
            We’re building the platform for <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/90 to-white/50">agentic software execution</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
