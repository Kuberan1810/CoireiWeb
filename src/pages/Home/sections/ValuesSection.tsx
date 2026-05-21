import { ShieldCheck, Award, Handshake } from "lucide-react";

const ValuesSection = () => {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">

            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4">
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"

                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[22px] whitespace-nowrap shrink-0">
                    Why Work with Coirei? 
                </div>
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-l from-[#161616] to-white" />
            </div>
            <div className="flex flex-col gap-10">

                {/* ITEM 1 - Data security & privacy */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    className=""
                >
                    <div className="space-y-4">
                        <h3 className="text-[#E3E3E0] text-[24px] sm:text-[28px] font-medium">
                            Data security & privacy
                        </h3>
                        <p className="text-[#B5B4B2] text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed max-w-4xl">
                            Our AI system is built with industry-leading encryption and strict access controls to keep your data safe. We comply with top security standards, ensuring confidentiality and trust at every step
                        </p>
                    </div>
                </div>

                {/* ITEM 2 - 100% excellence */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    data-delay="0.1"
                    className=""
                >
                    <div className="space-y-4">
                        <h3 className="text-[#E3E3E0] text-[24px] sm:text-[28px] font-medium">
                            100% excellence
                        </h3>
                        <p className="text-[#B5B4B2] text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed max-w-4xl">
                            We are committed to delivering maximum result in every solution we provide. Our precision, innovation, and dedication ensure the highest quality in every project.
                        </p>
                    </div>
                </div>

                {/* ITEM 3 - Reliable Long-Term Partnership */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    data-delay="0.2"
                    className=""
                >
                    <div className="space-y-4">
                        <h3 className="text-[#E3E3E0] text-[24px] sm:text-[28px] font-medium">
                            Reliable Long-Term Partnership
                        </h3>
                        <p className="text-[#B5B4B2] text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed max-w-4xl">
                            Our team is dedicated to building lasting relationships, supporting your growth every step of the way. We invest in your success, ensuring a partnership that stands the test of time.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ValuesSection;
