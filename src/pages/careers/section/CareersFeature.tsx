import { Rocket, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Build Meaningful AI Solutions",
        desc: "Work on core infrastructure that defines how modern software is planned, built, and shipped.",
        icon: Rocket
    },
    {
        title: "Collaborate with Great Minds",
        desc: "Contribute directly to a growing platform where your work shapes the product used by real teams.",
        icon: Handshake
    },
    {
        title: "Accelerate Your Career",
        desc: "Be part of a thoughtful, inclusive team that values ownership, clarity, and long-term thinking.",
        icon: TrendingUp
    }
];

const CareersFeature = () => {
    return (
        <section className="w-full max-w-[1600px] GlobalPadding flex flex-col md:flex-row gap-16 md:gap-8 bg-[#FFFFFF]">

            {/* Left Column: Heading and Subtext */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-1/2 flex flex-col items-start pt-10"
            >
                <h2 className="font-medium text-[40px] md:text-[52px] leading-[1.2] md:leading-[62.4px] text-[#000000] mb-6 tracking-normal">
                    At <span className="text-[#F67300]">Coirei</span>, You'll Get To
                </h2>
                <p className="font-normal text-[16px]  md:text-[18px] leading-[1.5] md:leading-[29.25px] text-[#4F4F4F] max-w-[500px]">
                    Join a team where innovation meets opportunity. Build AI-powered products, collaborate with talented professionals, and make an impact through meaningful work.
                </p>
            </motion.div>

            {/* Right Column: Cards Stack */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="w-full md:w-1/2 flex flex-col gap-6"
            >
                {features.map((feature, index) => {
                    const yOffset = index === 0 ? 0 : index === 1 ? -130 : -260;
                    const zIndex = 30 - (index * 10);
                    const opacityStart = index === 0 ? 0.6 : index === 1 ? 0.35 : 0.15;
                    const scaleStart = index === 0 ? 0.98 : index === 1 ? 0.94 : 0.90;

                    return (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: yOffset, opacity: opacityStart, scale: scaleStart },
                                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7 + (index * 0.05), ease: "easeOut" } }
                            }}
                            className="relative"
                            style={{ zIndex }}
                        >
                            <div
                                className="bg-[#F3F4F7] rounded-[16px] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center w-full"
                                style={{ border: "0.5px solid #93939320" }}
                            >
                                {/* Icon Container */}
                                <div
                                    className="rounded-[24px] p-[1.5px] shrink-0"
                                    style={{ background: "linear-gradient(145deg, #5960DF 36.85%, #F8CBC0 69.28%)" }}
                                >
                                    {/* Layer 2: White Background */}
                                    <div className="rounded-[22.5px] bg-white p-2 sm:p-3">
                                        {/* Layer 3: Soft Purple Icon Background */}
                                        <div
                                            className="rounded-[14px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center"
                                            style={{
                                                background: "linear-gradient(0deg, rgba(89, 96, 223, 0.08), rgba(89, 96, 223, 0.08)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)"
                                            }}
                                        >
                                            <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: "#5A6FD8", strokeWidth: 1.5 }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col w-full">
                                    <h3 className="font-normal text-[22px] sm:text-[30.72px] leading-[1.2] sm:leading-[38.4px] tracking-[-1.54px] text-[#000000] pb-3">
                                        {feature.title}
                                    </h3>
                                    <div className="w-full border-b-[0.5px] border-[#000000]" />
                                    <p className="font-normal text-[16px] sm:text-[18.43px] leading-[1.5] sm:leading-[26.11px] text-[#000000] pt-4">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

        </section>
    );
};

export default CareersFeature;
