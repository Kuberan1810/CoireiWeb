import { Bot, Clock, Brain, Signal, Bolt } from "lucide-react";

const Features = () => {
    return (
        <section className=" flex flex-col items-center justify-center text-center mx-6 sm:mx-10 md:mx-15 pb-20 pt-40">
            <p
                data-ns-animate
                data-offset="80"
                className="text-[#B5B4B2] text-lg sm:text-xl mb-16 font-light opacity-80"
            >
                Trusted by modern teams building smarter engagement systems
            </p>

            {/* Features Badge */}
            <div
                data-ns-animate
                data-offset="80"
                data-delay="0.2"
                className="mb-10"
            >
                <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                    <div className="w-5 h-5 flex items-center justify-center text-[#B5B4B2]">
                        <Bolt size={24} />
                    </div>
                    <span className="text-[16px] font-medium text-[#B5B4B2]">Features</span>
                </div>
            </div>

            {/* Heading */}
            <h2
                data-ns-animate
                data-offset="80"
                className="text-[#E3E3E0] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium leading-[1.1] mb-8 max-w-4xl mx-auto"
            >
                Never Miss a Lead Again <br /> with AI Follow ups
            </h2>

            {/* Subtext */}
            <p
                data-ns-animate
                data-offset="80"
                data-delay="0.3"
                className="text-[#B5B4B2] text-lg sm:text-xl max-w-3xl leading-relaxed mx-auto font-light mb-20"
            >
                Turn every interaction into a conversion. Your AI agent understands user intent, tracks behavior, and sends the right message at the perfect moment automatically.
            </p>

            {/* FEATURE GRID */}
            <div className="flex flex-col gap-8 w-full ">

                {/* FIRST ROW */}
                <div className="flex flex-col lg:flex-row gap-[30px] items-stretch">

                    {/* Smart Follow ups */}
                    <div
                        data-ns-animate
                        data-direction="right"
                        data-offset="80"
                        data-delay="0.4"
                        className="w-full flex-1  h-auto bg-[#292929] border border-white/10 rounded-[20px] pt-[30px] pb-[30px] px-[34px] text-left flex flex-col"
                    >
                        <div className="mb-[32px]">
                            <div className="inline-flex items-center gap-[10px] p-[10px] rounded-[60px] bg-white/10 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] w-[80px] h-[80px] justify-center">
                                <Bot size={44} className="text-white/80" />
                            </div>
                        </div>
                        <h3 className="text-white text-[24px] font-medium ">Smart Follow ups</h3>
                        <div className="h-full ">
                            <p className="text-[#FFFFFF]/60  text-[20px] leading-[1.2]  mt-5 ">
                                AI automatically sends personalized messages based on user behavior, actions, and intent so no lead goes cold.
                            </p>
                        </div>
                    </div>

                    {/* Perfect Timing */}
                    <div
                        data-ns-animate
                        data-direction="left"
                        data-offset="80"
                        data-delay="0.5"
                        className="w-full lg:flex-2 h-auto  bg-[#292929] border border-white/10 rounded-[20px] pt-[30px] pb-[30px] px-[34px] text-left flex flex-col"
                    >
                        <div className="mb-[32px]">
                            <div className="w-[80px] h-[80px] rounded-[60px] bg-white/10 border border-white/10 flex items-center justify-center text-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-[10px]">
                                <Clock size={44} />
                            </div>
                        </div>
                        <h3 className="text-white text-2xl font-semibold ">Perfect Timing</h3>
                         <div className="h-full ">
                            <p className=" text-[#FFFFFF]/60  text-[20px] leading-[1.2]  mt-5">
                                Trigger follow-ups at the exact right moment using real-time signals to maximize engagement and conversions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className="flex flex-col lg:flex-row gap-[30px] items-stretch justify-center">

                    {/* Behavior Intelligence */}
                    <div
                        data-ns-animate
                        data-direction="right"
                        data-offset="80"
                        data-delay="0.6"
                        className="flex-2  h-auto bg-[#292929] border border-white/10 rounded-[20px] pt-[30px] pb-[30px] px-[34px] text-left flex flex-col"
                    >
                        <div className="mb-[32px]">
                            <div className="w-[80px] h-[80px] rounded-[60px] bg-white/[0.051] border border-white/10 flex items-center justify-center text-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-[10px]">
                                <Brain size={44} />
                            </div>
                        </div>
                        <h3 className="text-white text-2xl font-semibold ">Behavior Intelligence</h3>
                         <div className="h-full ">
                            <p className=" text-[#FFFFFF]/60  text-[20px] leading-[1.2]  mt-5">
                                Track clicks, visits, and interactions to deeply understand user intent and dynamically adapt messaging.
                            </p>
                        </div>
                    </div>

                    {/* Multi Channel Reach */}
                    <div
                        data-ns-animate
                        data-direction="left"
                        data-offset="80"
                        data-delay="0.7"
                        className="flex-1 bg-[#292929] h-auto border border-white/10 rounded-[20px] pt-[30px] pb-[30px] px-[34px] text-left flex flex-col"
                    >
                        <div className="mb-[32px]">
                            <div className="w-[80px] h-[80px] rounded-[60px] bg-white/[0.051] border border-white/10 flex items-center justify-center text-white/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-[10px]">
                                <Signal size={44} />
                            </div>
                        </div>
                        <h3 className="text-white text-2xl font-semibold ">Multi Channel Reach</h3>
                         <div className="h-full ">
                            <p className=" text-[#FFFFFF]/60  text-[20px] leading-[1.2]  mt-5">
                                Connect with users across email, WhatsApp, SMS, or calls wherever they are most active.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;