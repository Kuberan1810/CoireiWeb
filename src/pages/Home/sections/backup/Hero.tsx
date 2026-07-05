// import CodingImg from "../../../../src/assets/images/homepage/coirei_coding.png"
import BackCoding from "../../../../../src/assets/images/homepage/coireimg.png";
import CollaborateFeature from "../Animation/ColabrationCard";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="mt-32 sm:mt-36 lg:mt-40 mb-10 md:mb-20">
            <div className="px-6 sm:px-10 md:px-15">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* LEFT CONTENT */}
                    <div className="w-full xl:max-w-xl sm:text-start text-center">

                        {/* Badge */}
                        <p
                            data-ns-animate
                            data-offset="80"
                            className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit text-base text-[#959493] mx-auto sm:mx-0 mb-2.5"
                        >
                            Orca AI
                        </p>

                        {/* Title */}
                        <h1
                            data-ns-animate
                            data-offset="80"
                            className="text-[#E3E3E0] text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-5"
                        >
                            Execution, Reimagined.
                        </h1>

                        {/* Description */}
                        <p
                            data-ns-animate
                            data-delay="0.1"
                            data-offset="80"
                            className="text-[#B5B4B2] text-base sm:text-lg lg:text-xl max-w-2xl mb-8"
                        >
                            The AI-native execution platform where software teams plan, build,
                            collaborate, test, deploy, and document software inside one
                            intelligent execution system.
                        </p>

                        {/* Buttons */}
                        <div
                            data-ns-animate
                            data-delay="0.2"
                            data-offset="80"
                            className="flex justify-center sm:justify-start gap-4"
                        >
                            <button
                                onClick={() => navigate("/contact-sales")}
                                className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer sm:text-base text-[13px]"
                            >
                                Request Early Access
                            </button>

                            <button
                                onClick={() => navigate("/features")}
                                className="text-white py-2.5 px-4 bg-[#292929] rounded font-semibold border border-white/10 hover:bg-white hover:text-[#292929] transition-all duration-500 ease-out cursor-pointer sm:text-base text-[13px]"
                            >
                                Explore the Platform
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div
                        data-ns-animate
                        data-direction="right"
                        data-offset="80"
                        className="relative h-80 sm:h-130 lg:h-full xl:h-130 rounded-2xl overflow-hidden max-w-full"
                    >
                        {/* Background Image */}
                        <img
                            src={BackCoding}
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Glass Card */}
                        <div className="relative z-1 h-full flex items-end justify-center px-6 pt-6">
                            <div className="max-w-2xl w-full">
                                <CollaborateFeature />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
