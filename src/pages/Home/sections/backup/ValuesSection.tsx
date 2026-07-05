import { ShieldCheck, Award, Handshake } from "lucide-react";

const ValuesSection = () => {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">

            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[22px] whitespace-nowrap shrink-0">
                    Why Work with Coirei? 
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16 max-w-7xl mx-auto">

                {/* ITEM 1 - Data security & privacy */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    className="bg-[#29292980] border border-white/15 rounded-[20px] p-6 hover:bg-[#323232] hover:border-white/25 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col items-center text-center justify-center gap-5 group min-h-[300px]"
                    style={{
                        boxShadow: "0 -20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                    }}
                >
                    <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                        <ShieldCheck size={80} strokeWidth={0.5} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#E3E3E0] text-[20px] sm:text-[22px] font-semibold">
                            Data security & privacy
                        </h3>
                        <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] font-light leading-relaxed">
                            Our AI system is built with industry-leading encryption and strict access controls to keep your data safe. We comply with top security standards, ensuring confidentiality and trust at every step.
                        </p>
                    </div>
                </div>

                {/* ITEM 2 - 100% excellence */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    data-delay="0.1"
                    className="bg-[#29292980] border border-white/15 rounded-[20px] p-6 hover:bg-[#323232] hover:border-white/25 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col items-center text-center justify-center gap-5 group min-h-[300px]"
                    style={{
                        boxShadow: "0 -20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                    }}
                >
                    <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                        <Award size={80} strokeWidth={0.5} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#E3E3E0] text-[20px] sm:text-[22px] font-semibold">
                            100% excellence
                        </h3>
                        <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] font-light leading-relaxed">
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
                    className="bg-[#29292980] border border-white/15 rounded-[20px] p-6 hover:bg-[#323232] hover:border-white/25 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col items-center text-center justify-center gap-5 group min-h-[300px]"
                    style={{
                        boxShadow: "0 -20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                    }}
                >
                    <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                        <Handshake size={80} strokeWidth={0.5} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#E3E3E0] text-[20px] sm:text-[22px] font-semibold">
                            Reliable Long-Term Partnership
                        </h3>
                        <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] font-light leading-relaxed">
                            Our team is dedicated to building lasting relationships, supporting your growth every step of the way. We invest in your success, ensuring a partnership that stands the test of time.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ValuesSection;
