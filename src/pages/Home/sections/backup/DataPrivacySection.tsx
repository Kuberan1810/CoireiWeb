import { useNavigate } from "react-router-dom";

export const DataPrivacySection = () => {
    const navigate = useNavigate();
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20 flex justify-center">
            <div
                data-ns-animate
                data-offset="80"
                className="w-full max-w-[1380px]  bg-linear-to-b from-[#292929] to-[#161616] backdrop-blur-xl border border-white/10 rounded-[20px] px-8 flex flex-col items-center justify-center text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            >
                <h2
                    data-ns-animate
                    data-delay="0.1"
                    data-offset="80"
                    className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-medium text-white leading-tight mb-4"
                >
                    Your execution data stays yours. Always.
                </h2>

                <div className="max-w-2xl space-y-2">
                    <p
                        data-ns-animate
                        data-delay="0.2"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] font-light"
                    >
                        Agents operate only within permissions you define.
                    </p>
                    <p
                        data-ns-animate
                        data-delay="0.3"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] font-light"
                    >
                        No training on your data. Ever. Control over analytics and telemetry.
                    </p>
                    <p
                        data-ns-animate
                        data-delay="0.4"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] font-light"
                    >
                        BYO-LLM and zero-data-retention modes available for enterprise
                    </p>
                </div>

                <div
                    data-ns-animate
                    data-delay="0.5"
                    data-offset="80"
                    className="mt-6"
                >
                    <button 
                        type="button"
                        onClick={() => navigate("/privacy")}
                        className="cursor-pointer px-6 py-3 border border-white/20 rounded-lg text-white text-[14px] sm:text-[16px] transition-colors hover:bg-white hover:text-black"
                    >
                        Learn more about data and privacy
                    </button>
                </div>
            </div>
        </section>
    );
};
