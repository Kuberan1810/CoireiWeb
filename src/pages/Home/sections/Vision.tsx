import vmBgImg from "../../../assets/images/homepage/V&M BG.png";
import vmCardImg from "../../../assets/images/homepage/v&M.jpg";

const Vision = () => {
    return (
        <section className="w-full GlobalPadding bg-white text-neutral-900 overflow-hidden">
            <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">

                {/* Top Two-Column Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

                    {/* Left Column: Heading & Introduction */}
                    <div data-ns-animate className="lg:col-span-6 flex flex-col justify-center">
                        <span className="inline-block text-[#D33B12] text-sm sm:text-[16px] tracking-wide mb-3 sm:mb-4">
                            Vision & Mission
                        </span>
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#0E121B] leading-[1.15] tracking-tight mb-4 sm:mb-6 min-h-[75px] sm:min-h-[96px]">
                            Building the future of intelligent business.
                        </h2>
                        <p className="text-[#0E121B] text-sm sm:text-base md:text-[16px] leading-relaxed max-w-lg font-normal">
                            Coirei is focused on creating practical, secure, and scalable AI systems that help organizations automate, innovate, and grow.
                        </p>
                    </div>

                    {/* Right Column: Gradient Card with Inner Ecosystem Graphic */}
                    <div
                        data-ns-animate
                        data-delay="0.15"
                        className="lg:col-span-6 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[590px] min-h-[320px] sm:min-h-[380px] md:min-h-[430px] rounded-[16px] sm:rounded-[12px] overflow-hidden shadow-sm flex items-center justify-center p-4 sm:p-7 md:p-8">
                            {/* Vibrant Gradient Background */}
                            <img
                                src={vmBgImg}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                            />

                            {/* Inner White Card Graphic */}
                            <div className="relative z-10 w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white">
                                <img
                                    src={vmCardImg}
                                    alt="Coirei Ecosystem"
                                    className="w-full h-auto object-contain block"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Vision & Mission Rows */}
                <div className="w-full flex flex-col pt-4 sm:pt-6">

                    {/* Vision Row */}
                    <div
                        data-ns-animate
                        data-delay="0.1"
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 sm:py-8 border-b border-neutral-200/80"
                    >
                        <div className="md:col-span-5">
                            <span className="text-[#D33B12] text-xs sm:text-sm tracking-wide">
                                Vision
                            </span>
                            <h3 className="text-lg sm:text-[24px] text-[#0E121B] mt-1">
                                Global AI Leadership
                            </h3>
                        </div>
                        <div className="md:col-span-7 ml-20">
                            <p className="text-[#0E121B] text-sm sm:text-[16px] leading-relaxed font-normal">
                                To become a global leader in enterprise AI, building intelligent products that transform how organizations sell, learn, hire, and build software.
                            </p>
                        </div>
                    </div>

                    {/* Mission Row */}
                    <div
                        data-ns-animate
                        data-delay="0.2"
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 sm:py-8 border-b border-neutral-200/80"
                    >
                        <div className="md:col-span-5">
                            <span className="text-[#D33B12] text-xs sm:text-sm tracking-wide">
                                Mission
                            </span>
                            <h3 className="text-lg sm:text-[24px] text-[#0E121B] mt-1">
                                Practical AI for Business
                            </h3>
                        </div>
                        <div className="md:col-span-7 ml-20">
                            <p className="text-[#0E121B] text-sm sm:text-[16px] leading-relaxed font-normal">
                                To empower organizations with secure, scalable AI ecosystems that solve real-world problems and drive operational excellence.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
};

export default Vision;
