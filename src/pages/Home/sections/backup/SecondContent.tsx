const SecondContent = () => {
    return (
        <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-15 py-12 sm:py-16 md:py-20">
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-15">

                {/* HEADING */}
                <div>
                    <h2
                        data-ns-animate
                        data-offset="80"
                        data-direction="up"
                        className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[55px] font-normal leading-[1.35] sm:leading-[1.4] md:leading-[1.4] text-white max-w-[671px]"
                    >
                        <span
                            data-ns-animate
                            data-delay="0.1"
                            data-offset="80"
                            data-direction="up"
                            className="text-[#FF8800]"
                        >
                            Private and Secure
                        </span>
                        <br />
                        Transparency and control at every touchpoint.
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 lg:gap-7.5">

                    {/* LEFT CARD */}
                    <div
                        data-ns-animate
                        data-delay="0.2"
                        data-offset="80"
                        data-direction="up"
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold leading-[1.35] sm:leading-[40px] text-white mb-3 sm:mb-4">
                            Complete Control
                        </h2>
                        <p className="w-full max-w-md font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-relaxed text-[#B5B4B2]">
                            Control exactly how much autonomy agents have, from approving every step to allowing full autonomy. Configurable at the individual and enterprise level.
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div
                        data-ns-animate
                        data-delay="0.3"
                        data-offset="80"
                        data-direction="up"
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold leading-[1.35] sm:leading-[40px] text-white mb-3 sm:mb-4">
                            Your data, secure and private
                        </h2>
                        <p className="w-full max-w-[675px] font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-relaxed text-[#B5B4B2]">
                            Your code, workflows, and execution history are never used to train external models. You control data retention, analytics and telemetry (one-click disable), model access and routing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecondContent;