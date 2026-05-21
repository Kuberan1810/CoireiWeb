import bg_img_1 from "../../../assets/images/services/service-banner.jpg";
import bg_img_2 from "../../../assets/images/services/hero_img_2.png";

const ServicesHero = () => {
    return (
        <section>
            <div className="relative w-full rounded-sm overflow-hidden pt-28 sm:pt-40 md:pt-48 lg:pt-50">

                {/* Background Image */}
                <img
                    src={bg_img_1}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                />

                {/* Right Overlay Image */}
                <div 
                    data-ns-animate 
                    data-direction="right" 
                    data-offset="100" 
                    className="absolute inset-y-0 right-0 hidden md:flex w-[45%] lg:w-[40%] items-center justify-end pr-6 lg:pr-10"
                >
                    <img src={bg_img_2} alt="" className="object-contain max-h-[80%] lg:max-h-full" />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-1 py-16 sm:py-20 flex items-center px-5 sm:px-10 lg:px-14">
                    <div className="max-w-xl">

                        <h1 
                            data-ns-animate 
                            data-offset="100" 
                            className="text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-5xl leading-tight"
                        >
                            Where Creativity Meets <br />
                            Cutting-Edge Technology
                        </h1>

                        <p 
                            data-ns-animate 
                            data-delay="0.2" 
                            data-offset="60" 
                            className="mt-5 sm:mt-7 text-white/60 text-base sm:text-lg md:text-xl leading-relaxed w-full sm:w-[90%] lg:w-140"
                        >
                            Talk to our team about advanced capabilities, team collaboration
                            features, and enterprise-scale execution support.
                        </p>

                        <button 
                            data-ns-animate 
                            data-delay="0.4" 
                            data-offset="40" 
                            className="mt-6 sm:mt-7 px-6 py-2 rounded-3xl border border-white/30 text-white text-base sm:text-lg lg:text-xl hover:bg-white/90 hover:text-black transition backdrop-blur-3xl shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]"
                        >
                            Explore more
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
