import imageFile from "../../..//assets/images/homepage/team-missing.png";

function ProblemSection() {
    return (
        <section className="px-6 sm:px-10 md:px-15 py-16 md:py-20">
            <div>

                {/* TOP SECTION */}
                <div className="flex flex-col justify-center items-center mb-14 md:mb-22 text-center">
                    <p data-ns-animate data-offset="80" className="backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base text-[#959493] mb-5">
                        Why Orca AI Exist?
                    </p>

                    <h2 data-ns-animate data-offset="80" className="leading-tight text-[#E3E3E0] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] max-w-5xl">
                        Modern teams don’t fail at coding.
                        <br className="hidden sm:block" />
                        They fail at execution.
                    </h2>
                </div>

                {/* BOTTOM SECTION */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2">
                        <h2 data-ns-animate data-offset="80" className="text-[#E3E3E0] max-w-fit lg:max-w-md text-[32px] sm:text-[40px] md:text-[48px] mb-5">
                            Execution breaks When:
                        </h2>

                        <ul className="list-disc pl-5 sm:pl-6">
                            <li data-ns-animate data-delay="0.1" data-offset="80" className="text-[#B5B4B2] text-[18px] sm:text-[20px] md:text-[24px] mb-2">
                                Decisions live in meetings, not in code
                            </li>
                            <li data-ns-animate data-delay="0.15" data-offset="80" className="text-[#B5B4B2] text-[18px] sm:text-[20px] md:text-[24px] mb-2">
                                Context gets lost between commits and discussions
                            </li>
                            <li data-ns-animate data-delay="0.2" data-offset="80" className="text-[#B5B4B2] text-[18px] sm:text-[20px] md:text-[24px] mb-2">
                                Collaboration creates noise instead of momentum
                            </li>
                            <li data-ns-animate data-delay="0.25" data-offset="80" className="text-[#B5B4B2] text-[18px] sm:text-[20px] md:text-[24px] mb-6">
                                Documentation is written after the fact, if at all
                            </li>
                        </ul>

                        <div data-ns-animate data-delay="0.6" data-offset="80" className="inline-flex items-center rounded-md bg-[#2b2b2b] px-3 py-1 text-sm sm:text-[16px] text-gray-300">
                            The Result is
                            <span className="mx-1 text-orange-400 font-medium tracking-wider">
                                <span className="relative top-px">b</span>
                                <span className="relative -top-px">r</span>
                                <span className="relative top-0.5">o</span>
                                <span className="relative -top-px">k</span>
                                <span className="relative top-px">e</span>
                                <span className="relative -top-0.5">n</span>
                            </span>
                            flow.
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div data-ns-animate data-direction="right" data-offset="80" className="w-full lg:w-[570px] h-auto">
                        <img className="w-full h-auto rounded-2xl object-cover" src={imageFile} alt="Execution problem illustration" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProblemSection;
