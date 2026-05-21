import Banner from "../../../assets/images/contact/cta-banner.png";

const CTABanner = () => {
  return (
    <section className="px-6 sm:px-10 md:px-15 py-10 sm:py-16 md:py-18 lg:py-20">
      <div
        className="relative w-full rounded-xl sm:rounded-2xl bg-center bg-cover overflow-hidden py-20 sm:py-24 md:py-32 lg:py-50"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div 
            data-ns-animate 
            data-offset="100" 
            data-duration="1.2" 
            className="max-w-5xl"
          >
            <h2 className="text-xl sm:text-3xl lg:text-[48px] text-white/60 mb-3 sm:mb-4">
              Download Coirei
            </h2>

            <p className="text-xl sm:text-4xl lg:text-5xl text-white/90 leading-tight">
              The Execution Platform for Agent-Assisted Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
