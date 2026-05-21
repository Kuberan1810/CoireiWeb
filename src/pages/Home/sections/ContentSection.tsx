import { useNavigate } from "react-router-dom";

const ContentSection = () => {
    const navigate = useNavigate();
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-10">

                {/* LEFT */}
                <div className="w-full lg:w-1/2">
                    <h2 data-ns-animate data-offset="80" data-direction="up" className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-6xl text-[#E3E3E0] max-w-110 leading-tight">
                        Your execution data stays yours. Always.
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-1/2">
                    <p data-ns-animate data-delay="0.1" data-offset="80" data-direction="up" className="text-[18px] sm:text-[20px] md:text-2xl text-white max-w-152 mb-6 sm:mb-8 font-medium">
                        Agents operate only within permissions you define.
                    </p>

                    <p data-ns-animate data-delay="0.2" data-offset="80" data-direction="up" className="text-[18px] sm:text-[20px] md:text-2xl text-white max-w-152 mb-6 sm:mb-7.5 font-medium">
                        No training on your data. Ever. Control over analytics and telemetry. BYO-LLM and zero-data-retention modes available for enterprise.
                    </p>

                    <button 
                        onClick={() => navigate("/resources/privacy")}
                        data-ns-animate data-delay="0.3" data-offset="80" data-direction="up" className="text-white py-2.5 px-4 bg-[#292929] rounded font-semibold border border-white/10 hover:bg-white hover:text-[#292929] transition-all duration-500 ease-out cursor-pointer sm:text-base text-[13px]"
                    >
                        Learn more about data and privacy
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ContentSection;
