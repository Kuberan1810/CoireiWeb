import { Handshake, Activity, BrainCircuit, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const evolutionSteps = [
    {
        id: "Step 01",
        title: "Relationship",
        description: "Every meeting, email, and customer interaction is captured and connected.",
        icon: Handshake
    },
    {
        id: "Step 02",
        title: "Engagement",
        description: "Results are measured against and customer success goals.",
        icon: Activity
    },
    {
        id: "Step 03",
        title: "Insights",
        description: "AI identifies relationship trends, executive priorities.",
        icon: BrainCircuit
    },
    {
        id: "Step 04",
        title: "Recommend",
        description: "Follei recommends the next best action to and accelerate growth.",
        icon: Lightbulb
    },
    {
        id: "Step 05",
        title: "Growth",
        description: "Every insight helps increase customer value, business growth.",
        icon: TrendingUp
    }
];

const AnimatedStep = ({ step, index }: { step: any; index: number }) => {
    const delay = 0.8 + 1.8 * (index / 4);

    return (
        <div className="flex flex-col items-center relative flex-1 min-w-[200px] z-10">
            {/* Pill & Circle container */}
            <div className="relative flex items-center justify-center mb-8">
                {/* Pill Container (Solid white background to hide the global line) */}
                <div
                    className="px-6 py-2 rounded-lg relative z-10 flex items-center justify-center"
                    style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '4px 4px 10px 0px #00000059'
                    }}
                >
                    {/* Gradient background with animated opacity */}
                    <motion.div
                        className="absolute inset-0 rounded-lg z-0"
                        style={{
                            background: 'linear-gradient(90deg, rgba(53, 82, 102, 0.2) 0%, rgba(0, 67, 112, 0.2) 100%)',
                        }}
                        initial={{ opacity: 0.4 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.4 }}
                    />

                    <motion.span
                        className="text-[#004370] relative z-10 font-medium"
                        style={{
                            fontSize: '22px',
                            lineHeight: '120%'
                        }}
                        initial={{ opacity: 0.4 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.4 }}
                    >
                        {step.id}
                    </motion.span>

                    {/* Left Circle Node - touching pill */}
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-[14px] h-[14px] rounded-full z-20"
                        style={{
                            border: '2px solid #0068AD'
                        }}
                        initial={{ backgroundColor: '#FFFFFF' }}
                        whileInView={{ backgroundColor: '#0068AD' }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.3 }}
                    />

                    {/* Right Circle Node - touching pill */}
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-[14px] h-[14px] rounded-full z-20"
                        style={{
                            border: '2px solid #0068AD'
                        }}
                        initial={{ backgroundColor: '#FFFFFF' }}
                        whileInView={{ backgroundColor: '#0068AD' }}
                        viewport={{ once: true }}
                        transition={{ delay, duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Content */}
            <motion.div
                className="flex flex-col items-center text-center max-w-[220px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.max(0, delay - 0.2), duration: 0.5 }}
            >
                <div className="text-[#000000] mb-4">
                    <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3
                    className="text-[#000000] mb-3 font-normal"
                    style={{
                        fontSize: '24px',
                        lineHeight: '120%'
                    }}
                >
                    {step.title}
                </h3>
                <p
                    className="text-[#5A5A5C] font-normal"
                    style={{
                        fontSize: '14px',
                        lineHeight: '120%'
                    }}
                >
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
};

const MobileAnimatedStep = ({ step, index }: { step: any, index: number }) => {
    return (
        <motion.div
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
        >
            {/* Interactive Circle Dot */}
            <div
                className="absolute -left-[40px] top-1.5 w-[14px] h-[14px] rounded-full border-[2px] border-[#0068AD] bg-[#1C99ED] z-10"
            />

            {/* Step Pill */}
            <div
                className="inline-flex items-center justify-center px-5 py-1.5 rounded-lg mb-4 relative overflow-hidden"
                style={{ boxShadow: '2px 2px 8px 0px #00000030', backgroundColor: '#FFFFFF' }}
            >
                <div
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'linear-gradient(90deg, rgba(53, 82, 102, 0.2) 0%, rgba(0, 67, 112, 0.2) 100%)', opacity: 1 }}
                />
                <span className="text-[#004370] relative z-10 font-medium text-[18px]">
                    {step.id}
                </span>
            </div>

            {/* Content */}
            <div>
                <div className="text-[#000000] mb-3 mt-2">
                    <step.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-[#000000] mb-2 font-normal text-[22px] leading-snug">
                    {step.title}
                </h3>
                <p className="text-[#5A5A5C] font-normal text-[15px] leading-relaxed pb-4">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
};

const MobileAccountEvolution = () => {
    return (
        <div className="w-full flex flex-col max-w-[600px] mx-auto mt-4">
            <div className="relative border-l-[2px] border-[#E8E8E8] ml-4 pl-8 py-2">
                {evolutionSteps.map((step, index) => (
                    <MobileAnimatedStep key={step.id} step={step} index={index} />
                ))}
            </div>
        </div>
    );
};

const AccountEvolution = () => {
    return (
        <>
            {/* Desktop View */}
            <section className="hidden md:block w-full bg-[#FFFFFF] relative py-20 sm:py-28 overflow-hidden">
                <div className="w-full flex flex-col items-center justify-center overflow-hidden GlobalPadding">
                    {/* Header Area */}
                    <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
                        <div
                            data-ns-animate="true" data-delay="0.1"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Account Evolution</span>
                        </div>

                        <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
                            Every Customer Relationship <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                                Creates New Opportunities
                            </span>
                        </h2>

                        <p data-ns-animate="true" data-delay="0.3" className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed max-w-3xl">
                            Every customer interaction strengthens account intelligence. Follei continuously learns from engagement, business outcomes, and executive conversations to uncover new growth opportunities.
                        </p>
                    </div>

                    {/* Timeline Container Sliding In */}
                    <motion.div
                        className="relative w-full max-w-[1400px] flex flex-row justify-around items-start pt-10"
                        initial={{ x: "30vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 50, damping: 15, duration: 1 }}
                    >
                        {/* Global Horizontal Progress Bar Track */}
                        <div className="absolute top-[62px] left-[5%] right-[5%] h-[2px] bg-[#E8E8E8] z-0 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-[#1C99ED]"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1.8, ease: "easeInOut" }}
                                style={{
                                    transformOrigin: 'left'
                                }}
                            />
                        </div>

                        {evolutionSteps.map((step, index) => (
                            <AnimatedStep key={step.id} step={step} index={index} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile View */}
            <section className="block md:hidden w-full bg-[#FFFFFF] relative py-16 GlobalPadding">
                <div className="w-full flex flex-col items-center justify-center">
                    {/* Header Area */}
                    <div className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center">
                        {/* Badge Capsule */}
                        <div
                            data-ns-animate="true" data-delay="0.1"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Account Evolution</span>
                        </div>

                        {/* Title */}
                        <h2 data-ns-animate="true" data-delay="0.2" className="text-[#04032E] text-[30px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
                            Every Customer Relationship <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                                Creates New Opportunities
                            </span>
                        </h2>

                        {/* Subheading */}
                        <p data-ns-animate="true" data-delay="0.3" className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed max-w-3xl">
                            Every customer interaction strengthens account intelligence. Follei continuously learns from engagement, business outcomes, and executive conversations to uncover new growth opportunities.
                        </p>
                    </div>

                    <MobileAccountEvolution />
                </div>
            </section>
        </>
    );
};

export default AccountEvolution;