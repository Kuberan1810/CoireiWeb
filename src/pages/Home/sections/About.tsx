

import TypewriterHeading from "../../../component/TypewriterHeading";

const About = () => {
    return (
        <section className="relative w-full GlobalPadding bg-[#FAFAFC]">

            {/* Blurred Background Layer (Matches Vector 41 in Figma) */}
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[400px] bg-[#B1BBFF50] opacity-100 blur-[1000px] rounded-full pointer-events-none -rotate-12"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 items-start justify-between">

                {/* Left Column: Heading */}
                <div className="w-full md:w-1/2 shrink-0 pt-2" data-ns-animate="true" data-direction="up" data-delay="0.1">
                    <h2 className="text-[30px] sm:text-[40px] md:text-[52px] font-semibold text-[#14182C] leading-[1.1] tracking-tight min-h-[70px] sm:min-h-[114px]">
                        <TypewriterHeading text={"Not features.\nFull AI ecosystems."} />
                    </h2>
                </div>

                {/* Right Column: Paragraphs */}
                <div className="w-full md:w-1/2 flex flex-col gap-8 text-sm sm:text-base md:text-lg leading-[1.75] text-[#5B6280] font-normal" data-ns-animate="true" data-direction="up" data-delay="0.3">
                    <p>
                        COIREI is an AI-first product company building <span className="text-[#14182C] font-medium">enterprise-ready intelligent systems</span> that automate complex business operations  not isolated features, but complete ecosystems where specialized AI agents collaborate on end-to-end workflows.
                    </p>
                    <p>
                        Every product is scalable, secure, and multilingual by design  built for startups, institutions, enterprises, and government organizations alike.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;