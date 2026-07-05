import { useNavigate } from "react-router-dom";


function NewHero() {
    const navigate = useNavigate();

    return (
        <section className="mt-32 sm:mt-40 mb-10 md:mb-5 mx-6 sm:mx-10 md:mx-15">

            <div className="flex flex-col items-center text-center">
                <h1
                    data-ns-animate
                    data-offset="80"

                    className="text-[#E3E3E0] text-3xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.1] mb-6 max-w-5xl"
                >
                    Transform Business with AI-Powered Solutions & Custom AI Development
                </h1>

                <div
                    data-ns-animate
                    data-delay="0.1"
                    data-offset="80"
                    className="text-[#B5B4B2] text-base sm:text-lg lg:text-xl max-w-3xl mb-10 space-y-4"
                >
                    <p>
                        At Coirei, we turn business ideas into digital success through AI powered solutions. From AI agent development and customized business applications to advanced digital platforms.
                    </p>

                </div>


                <div
                    data-ns-animate
                    data-delay="0.2"
                    data-offset="80"
                    className="flex justify-center gap-4"
                >
                    {/* <button 
                        onClick={() => navigate("/products")}
                        className="text-[#252525] py-2.5 px-6 bg-[#FAF9F6] rounded-md font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer sm:text-base text-[14px]"
                    >
                        Explore Products
                    </button> */}


                    <button 

                        onClick={() => navigate("/contactsales")}
                        className="text-[#252525] py-2.5 px-6 bg-[#FAF9F6] rounded-md font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer sm:text-base text-[14px]"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NewHero;