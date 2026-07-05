

const Cta = () => {
    return (
        <section className="w-full  flex flex-col items-center justify-center bg-white GlobalPadding">

            <div data-ns-animate className="flex items-center gap-2 mb-6">
                <span className="text-[#0D9488] font-light text-[12.5px] leading-[20px] tracking-[1.75px] uppercase">
                    — READY TO BUILD THE FUTURE WITH AI?
                </span>
            </div>

            <h2 data-ns-animate data-delay="0.1" className="font-semibold text-[32px] md:text-[42px] leading-[1.2] md:leading-[68px] tracking-[1px] text-center text-[#14182C] max-w-[800px] mb-12">
                Deploy enterprise AI, build a custom <br className="hidden md:block" /> platform, or train your workforce <br className="hidden md:block" /> COIREI is ready to partner with you.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full transition-all duration-1000 delay-300 ease-out transform" >
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-[#FC7C04] hover:bg-[#E07104] text-white px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer"
                >
                    Explore Our Products <span> </span>
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-transparent hover:bg-gray-50 text-[#14182C] border! border-[#E5E5E5]! px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer"
                >
                    Partner With Us
                </button>
            </div>
        </section>
    );
};

export default Cta;