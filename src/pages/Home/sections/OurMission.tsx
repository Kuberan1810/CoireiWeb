import coireimg from "../../../assets/images/homepage/coireimg.png";

function OurMission() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-15">
            {/* Badge / Pill */}
            <div className="flex items-center w-full mb-12">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white"
                ></div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[22px] mx-4 whitespace-nowrap shrink-0"
                >
                    Our Mission
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white"
                ></div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-14">

                {/* RIGHT VISUAL (Mission Image) */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-6"
                >
                    <img 
                        src={coireimg} 
                        alt="Our Mission" 
                        className="w-full h-auto object-cover shrink-0 rounded-xl" 
                    />
                </div>

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">


                    {/* Title */}
                    <h2
                        data-ns-animate
                        data-offset="80"
                        className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-[#E3E3E0] font-medium leading-[1.2] max-w-2xl"
                    >
                        Your vision meets the <br className="hidden lg:block" />
                        <span className="text-[#F67300]">future of AI.</span>
                    </h2>

                    {/* Paragraphs */}
                    <div className="mt-8 space-y-4 text-[#B5B4B2] text-[16px] md:text-[18px] max-w-lg font-light leading-relaxed">
                        <p data-ns-animate data-delay="0.1" data-offset="80">
                            We help you unlock the full potential of AI, creating custom AI solutions that scale with your business. Whether it’s AI agent development, Gen AI innovations, we deliver intelligent, scalable digital solutions that drive real impact.
                        </p>
                        <p data-ns-animate data-delay="0.2" data-offset="80">
                            Join us on a journey of innovation.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OurMission;
