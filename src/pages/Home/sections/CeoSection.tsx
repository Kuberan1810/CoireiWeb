import { useNavigate } from "react-router-dom";
import Ceo from "../../../assets/images/homepage/Ceo-img.png";  

export const CeoSection = () => {
    const navigate = useNavigate();
    return (
        <section className="mx-4 sm:mx-8 md:mx-15 lg:mx-20 pt-6 pb-8 sm:pt-8 sm:pb-14 md:pt-8 md:pb-20">
            <div>

                {/* HEADING */}
                <h2 
                    data-ns-animate
                    data-offset="80"
                    data-direction="up"
                    className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-16 tracking-tight leading-tight md:leading-[68px]"
                >
                    Meet our <span className="text-[#F67300]">CEO</span>
                </h2>


                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 lg:gap-24 max-w-6xl mx-auto">


                    {/* IMAGE */}
                    <div
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        data-direction="up"
                        className="flex flex-col items-center space-y-5 md:shrink-0"
                    >
                        <img
                            src={Ceo}
                            alt="CEO"
                            className="w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] rounded-xl"
                        />

                        <p className="text-white font-medium text-[17px] text-center whitespace-nowrap">Naveen kumar S <br></br>Coirei, CEO</p>

                    </div>

                    {/* QUOTE */}
                    <div className="max-w-3xl flex flex-col text-center md:text-left">
                        <p
                            data-ns-animate
                            data-delay="0.2"
                            data-offset="80"
                            data-direction="up"
                            className="text-[18px] sm:text-[22px] md:text-[26px] instrument-sans lg:text-[32px] xl:text-[29px] font-normal italic text-[#E3E3E0] "
                        >
                            "The future isn't about better AI suggestions.
                        </p>
                        <p
                            data-ns-animate
                            data-delay="0.3"
                            data-offset="80"
                            data-direction="up"
                            className="text-[18px] sm:text-[22px] md:text-[26px] instrument-sans lg:text-[32px] xl:text-[29px] font-normal italic text-[#E3E3E0] leading-snug sm:leading-snug"
                        >
                            It's about systems that can execute, verify, and adapt on their own without losing trust."
                        </p>
                     
                        <button 
                            onClick={() => navigate("/contactsales")}
                            className="text-[#252525] py-2 px-5 bg-[#FAF9F6] rounded-md font-semibold border border-transparent hover:bg-[#F67300] hover:text-white hover:border-[#F67300] transition-all duration-500 ease-out cursor-pointer text-xs sm:text-sm w-fit mt-12"
                        >
                            Talk to Expert
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};