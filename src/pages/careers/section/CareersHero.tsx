import image1 from "../../../assets/images/Careers/img_1.avif"
import image2 from "../../../assets/images/Careers/img_2.avif"

const CareersHero = () => {
  return (
    <section className="text-white mt-30 sm:mt-32 md:mt-40 lg:mt-50 mb-10 sm:mb-20 md:mb-25 mx-6 sm:mx-10 md:mx-15">
      <div>

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 mb-10 sm:mb-14 lg:mb-16">

          {/* LEFT BIG TEXT */}
          <h1 
            data-ns-animate 
            data-direction="left" 
            data-offset="80" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-full lg:max-w-3xl"
          >
            Build the future of <br />
            agent-assisted software execution
          </h1>

          {/* RIGHT SMALL TEXT */}
          <div 
            data-ns-animate 
            data-direction="right" 
            data-offset="80" 
            className="max-w-full sm:max-w-md lg:max-w-sm"
          >
            <p className="text-white/70 mb-4 sm:mb-5 lg:mb-6 text-base sm:text-lg">
              At Coirei, we build systems that connect planning, code, pipelines, and AI into one execution fabric.
              Join us in shaping how teams build and ship software at scale.
            </p>

            {/* BUTTON */}
            <button
              className="
                text-[#252525] py-2 sm:py-2.5 px-3 sm:px-3.75 bg-[#FAF9F6]
                rounded font-semibold text-sm sm:text-base
                hover:bg-[#1E1E1E] hover:text-white
                transition-all duration-500 ease-out cursor-pointer"
            >
              See open roles
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* IMAGE 1 */}
          <div 
            data-ns-animate 
            data-offset="100" 
            className="overflow-hidden"
          >
            <img
              src={image1}
              className="rounded-xl w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover grayscale"
            />
          </div>

          {/* IMAGE 2 */}
          <div 
            data-ns-animate 
            data-delay="0.2" 
            data-offset="100" 
            className="overflow-hidden"
          >
            <img
              src={image2}
              alt="Team meeting"
              className="rounded-xl w-full h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-cover grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersHero;
