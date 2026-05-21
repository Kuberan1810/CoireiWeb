import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className=" flex flex-col items-center justify-center text-center mx-6 sm:mx-10 md:mx-15 py-20">
            {/* Badge - Styled after Home Hero, aligned left */}
            <div className="w-full flex justify-center mb-12 ">
                <p
                    data-ns-animate
                    data-offset="80"
                    className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit  text-base text-[#959493]"
                >
                    Coirei AI Follow up Agent
                </p>
            </div>



            {/* Title - Centered */}
            <h2
                data-ns-animate
                data-offset="80"
                className="text-[#E3E3E0] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium leading-[1.1] mb-8 max-w-5xl mx-auto"
            >
                Turn Conversations Into <br /> Conversions With AI
            </h2>

            {/* Description - Centered */}
            <p
                data-ns-animate
                data-delay="0.1"
                data-offset="80"
                className="text-[#B5B4B2] text-lg sm:text-xl max-w-3xl mb-12 leading-relaxed mx-auto font-light"
            >
                Track user behavior, understand intent, and automatically follow up at the perfect moment powered by intelligent AI agents.
            </p>

            {/* CTA Button - Centered */}
            <div
                data-ns-animate
                data-delay="0.2"
                data-offset="80"
                className="mx-auto"
            >
                <button className="group relative flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-full text-white text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] cursor-pointer">
                    <span>Start Free Trial</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1"> <ArrowRight/></span>
                </button>
            </div>

            {/* Visual Interface */}
            {/* <div
                data-ns-animate
                data-delay="0.6"
                className="mt-24 w-full max-w-[1200px] h-auto md:h-[900px] rounded-[16px] bg-linear-to-b from-[#1E1E1E] to-[#161616] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden mx-auto"
            >
                <img
                    src={analyticsDashboard}
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
            </div> */}
        </section>
    );
};

export default Hero;
