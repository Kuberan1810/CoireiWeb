const ContactContent = () => {
    return (
        <section className="px-6 sm:px-10 md:px-15 py-10 md:py-20">
            <div>

                {/* HEADING */}
                <div 
                  data-ns-animate 
                  data-offset="80"
                >
                    <h2 className="text-white lg:text-[64px] md:text-5xl text-[32px] leading-10 sm:leading-14  md:leading-tight mb-8 md:mb-6 max-sm:mb-5">
                        Why teams choose <br />
                        <span className="text-[#FC7C04]">Coirei</span>
                    </h2>
                </div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-sm:gap-6">
                    <div 
                      data-ns-animate 
                      data-delay="0.1" 
                      data-offset="40"
                    >
                        <h4 className=" lg:text-3xl  sm:text-2xl text-xl text-white/80 mb-4 md:mb-3">
                            Execution at scale
                        </h4>
                        <p className="md:text-lg text-base  text-white/60 leading-7 md:leading-6">
                            Coirei unifies planning, development, validation, and deployment into a single execution system, reducing handoffs and operational overhead.
                        </p>
                    </div>

                    <div 
                      data-ns-animate 
                      data-delay="0.2" 
                      data-offset="40"
                    >
                        <h4 className="lg:text-3xl  sm:text-2xl text-xl  text-white/80 mb-4 md:mb-3">
                            Built for real workflows
                        </h4>
                        <p className="md:text-lg text-base  text-white/60 leading-7 md:leading-6">
                            From cloud-native development to background CI/CD and human-governed AI, Coirei supports how modern teams actually ship software.
                        </p>
                    </div>

                    <div 
                      data-ns-animate 
                      data-delay="0.3" 
                      data-offset="40"
                    >
                        <h4 className=" lg:text-3xl  sm:text-2xl text-xl  text-white/80 mb-4 md:mb-3">
                            Enterprise-ready by design
                        </h4>
                        <p className="md:text-lg text-base   text-white/60 leading-7 md:leading-6">
                            Clear ownership, role-based access, audit trails, and governance are built into every layer of the platform.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactContent;
