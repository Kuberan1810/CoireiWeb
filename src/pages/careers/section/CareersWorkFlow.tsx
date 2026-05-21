import { Check } from "lucide-react";
import workflow_img from "../../../assets/images/Careers/workflow_img.avif";
import Workflow_img_2 from "../../../assets/images/Careers/workflow_img2.avif";
import workflow_img_3 from "../../../assets/images/Careers/workflow_img3.avif";
import workflow_img_4 from "../../../assets/images/Careers/workflow_img4.avif";

/* Reusable Check Icon – correct size & position */
const CheckIcon = () => (
  <div className="flex items-start pt-1.5 shrink-0">
    <div className="w-5 h-5 rounded-full bg-[#E5E5E5] flex items-center justify-center">
      <Check size={12} strokeWidth={2.5} className="text-black" />
    </div>
  </div>
);

const CareersWorkFlow = () => {
  return (
    <section className="text-white mx-6 sm:mx-10 md:mx-15 py-10 sm:py-12 md:py-14">
      <div>


        {/* LEFT COLUMN */}
        <div 
          data-ns-animate 
          data-offset="80"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium">
            How we work
          </h2>

          <p className="text-[#CECBCB] text-sm sm:text-base lg:text-[18px] mb-8 sm:mb-10 lg:mb-12 max-w-xl">
            We’re deliberate about how we build, both our product and our team.
            Our principles are designed to support clarity, ownership, and long-term impact.
          </p>

          <div className="flex justify-start lg:justify-end mb-8 sm:mb-10 lg:mb-12">
            <button
              className="text-[#252525] py-2 sm:py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold
                hover:bg-[#1E1E1E] hover:text-white transition-all duration-500 ease-out"
            >
              See open roles
            </button>
          </div>
        </div>

        {/* TOP GRID */}
        <div 
          data-ns-animate 
          data-offset="100" 
          className="max-w-350 mx-auto  pb-36"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 lg:gap-y-24 gap-y-10 ">

            {/* LEFT COLUMN */}
            <div className="space-y-12">
              <div>
                <div className="flex gap-4">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Product-led by execution
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We make decisions based on how they improve real execution for users,
                      not just features or trends.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/20 mt-6" />
              </div>

              <div>
                <div className="flex gap-4">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Pragmatic by default
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We prioritize clear reasoning, practical outcomes, and simplicity
                      over hierarchy or process for its own sake.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/20 mt-6" />
              </div>

              <div className="flex gap-4">
                <CheckIcon />
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Built by practitioners
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We build and use Coirei ourselves, learning directly from real workflows
                    as we improve the platform.
                  </p>
                 

                </div>
              </div>
              <div className="h-px bg-white/20 mt-6 lg:hidden visible" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-12">
              <div>
                <div className="flex gap-4">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Inclusive by design
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We believe strong systems are built by teams with diverse
                      backgrounds, perspectives, and experiences.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/20 mt-6" />
              </div>

              <div className="flex gap-4">
                <CheckIcon />
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Distributed & focused
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We are a remote-first team that values asynchronous communication,
                    deep work, and thoughtful written context.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* IMAGES – 2x2 FROM MOBILE, OLD LG POSITION SAFE */}
        <div 
          data-ns-animate 
          data-offset="100" 
          className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_2fr] gap-6 sm:gap-8 h-auto lg:h-[630px]"
        >
          {/* IMAGE 1 */}
          <img
            src={workflow_img}
            className="self-start rounded-xl object-cover w-full grayscale h-auto lg:h-[387px]"
          />

          {/* IMAGE 2 */}
          <img
            data-ns-animate
            data-delay="0.2"
            src={Workflow_img_2}
            className="self-end rounded-xl object-cover w-full grayscale mt-0 mb:mb-35 h-auto lg:h-[200px]"
          />

          {/* IMAGE 3 */}
          <img
            data-ns-animate
            data-delay="0.3"
            src={workflow_img_3}
            className="rounded-xl object-cover w-full grayscale mt-0 md:mt-30 h-auto lg:h-[200px]"
          />

          {/* IMAGE 4 */}
          <img
            data-ns-animate
            data-delay="0.4"
            src={workflow_img_4}
            className="self-end rounded-xl object-cover w-full grayscale h-auto lg:h-[387px]"
          />
        </div>



        {/* BOTTOM LINE */}
        <div className="h-px w-full bg-white/20 mt-16 sm:mt-20 lg:mt-24" />

      </div>
    </section>
  );
};

export default CareersWorkFlow;
