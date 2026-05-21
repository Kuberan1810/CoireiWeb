import { useNavigate } from "react-router-dom";

const CTASection = () => {

  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 mx-6 sm:mx-10 md:mx-15">
      <div className="relative overflow-hidden rounded-3xl bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]">

        {/* CONTENT */}
        <div className="relative z-10 p-8 md:p-14 lg:p-20">
          <div className="max-w-3xl">
            {/* TAG */}
            <div 
              data-ns-animate 
              data-offset="40" 
              className="inline-block mb-6"
            >
              <div className="px-4 py-1 rounded-full bg-black/0 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]">
                <span className="text-sm font-medium text-white">Try it now</span>
              </div>
            </div>

            {/* HEADING */}
            <h2 
              data-ns-animate 
              data-delay="0.2" 
              data-offset="80" 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
            >
              Ready to Execute Smarter?
            </h2>

            {/* DESCRIPTION */}
            <p 
              data-ns-animate 
              data-delay="0.4" 
              data-offset="60" 
              className="text-base md:text-lg text-[#d4d4d3] mb-8 leading-relaxed"
            >
              Start building and shipping software in a unified execution environment.
              Whether you’re a startup or an enterprise, Execa keeps execution fast, visible, and controlled.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 ">
              <button
                onClick={() => {
                  navigate("/resources/contact")
              }}
                className="cursor-pointer px-5 py-3 rounded-lg text-white/90 border border-white/20 backdrop-blur-3xl hover:backdrop-blur-2xl shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] flex justify-center w-full sm:w-fit hover:shadow-[inset_5px_5px_12px_rgba(255,255,255,0.10)]">
                Get started
              </button>
              <button
                onClick={() => {
                  navigate("/contact-sales")
                }}
                className="cursor-pointer px-5 py-3 rounded-lg text-white/90 border border-white/20 backdrop-blur-3xl hover:backdrop-blur-2xl shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] flex justify-center w-full sm:w-fit hover:shadow-[inset_5px_5px_12px_rgba(255,255,255,0.10)]">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* ILLUSTRATION */}
        <div 
          data-ns-animate 
          data-direction="right" 
          data-offset="120" 
          className="
          pointer-events-none absolute right-0 top-0 h-full
          
          /* 75–540 : NO OVERLAP */
          hidden min-[541px]:block
          
          /* Tablet */
          md:translate-x-8 md:scale-[0.9]
          
          /* Desktop */
          lg:translate-x-0 lg:scale-100
        ">
          <img
            src="https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68c2e24929cdeec56539717c_illustration-cta.svg"
            alt=""
            className="
              h-full object-contain opacity-80
              max-w-[260px] md:max-w-[340px] lg:max-w-[440px]
            "
          />
        </div>

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68b992249e86e93016c426b7_gradient-cta.avif"
            className="w-full h-full object-cover rounded-3xl opacity-25"
            alt=""
          />
        </div>

      </div>
    </section>
  );
};

export default CTASection;
