import { useNavigate } from "react-router-dom";

const CTASection = () => {

  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 mx-6 sm:mx-10 md:mx-15">
      <div className="relative overflow-hidden rounded-3xl bg-gray-100 backdrop-blur-3xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

        {/* CONTENT */}
        <div className="relative z-10 p-8 md:p-14 lg:p-20">
          <div className="max-w-3xl">
            {/* TAG */}
            <div
              data-ns-animate
              data-offset="40"
              className="inline-block mb-6"
            >


              <p
                data-ns-animate
                data-offset="80"
                className="backdrop-blur-md border border-black/20 rounded-xl p-2 max-w-fit text-base text-gray-600 mx-auto sm:mx-0 mb-2.5 bg-gray-50"
              >
                Try it now
              </p>
            </div>

            {/* HEADING */}
            <h2
              data-ns-animate
              data-delay="0.2"
              data-offset="80"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626] mb-4 leading-tight"
            >
              Ready to Execute Smarter?
            </h2>

            {/* DESCRIPTION */}
            <p
              data-ns-animate
              data-delay="0.4"
              data-offset="60"
              className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Start building and shipping software in a unified execution environment.
              Whether you’re a startup or an enterprise, Execa keeps execution fast, visible, and controlled.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  navigate("/resources/contact")
                }}
                className="cursor-pointer px-5 py-3 rounded-lg text-white bg-[#fe7500] font-medium hover:bg-[#e76e0a] transition-all duration-300  flex justify-center w-full sm:w-fit"
              >
                Get started
              </button>
              <button
                onClick={() => {
                  navigate("/contact-sales")
                }}
                className="cursor-pointer px-5 py-3 rounded-lg text-[#252525] bg-white font-medium border border-black/60 hover:bg-gray-100 transition-all duration-300 flex justify-center w-full sm:w-fit"
              >
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
              h-full object-contain opacity-90
              max-w-[260px] md:max-w-[340px] lg:max-w-[440px]
            "
          />
        </div>

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68b992249e86e93016c426b7_gradient-cta.avif"
            className="w-full h-full object-cover rounded-3xl opacity-10"
            alt=""
          />
        </div>

      </div>
    </section>
  );
};

export default CTASection;
