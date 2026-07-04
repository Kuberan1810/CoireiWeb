import React, { useRef } from "react";
import { Handshake, Activity, BrainCircuit, Lightbulb, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

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

const AnimatedStep = ({ 
    step, 
    index, 
    scrollYProgress
}: { 
    step: any; 
    index: number; 
    scrollYProgress: MotionValue<number>;
}) => {
    // 5 items justified around: we shift them later in the scroll to make room for the slower slide-in
    // Centers are now at 25%, 40%, 55%, 70%, 85%
    const threshold = (index * 0.15) + 0.25;
    
    // Explicit 4-point mappings guarantee the state NEVER reverts after the threshold
    const activeOpacity = useTransform(
        scrollYProgress, 
        [0, Math.max(0, threshold - 0.1), threshold, 1], 
        [0.4, 0.4, 1, 1]
    );
    
    const dotBackground = useTransform(
        scrollYProgress, 
        [0, Math.max(0, threshold - 0.02), Math.min(1, threshold + 0.02), 1], 
        ["#FFFFFF", "#FFFFFF", "#0068AD", "#0068AD"]
    );
    
    const contentOpacity = useTransform(
        scrollYProgress, 
        [0, Math.max(0, threshold - 0.08), Math.min(1, threshold + 0.02), 1], 
        [0, 0, 1, 1]
    );
    
    const contentY = useTransform(
        scrollYProgress, 
        [0, Math.max(0, threshold - 0.08), Math.min(1, threshold + 0.02), 1], 
        [-30, -30, 0, 0]
    );

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
                            opacity: activeOpacity
                        }}
                    />
                    
                    <motion.span 
                        className="text-[#004370] relative z-10"
                        style={{
                            fontWeight: 500,
                            fontSize: '22px',
                            lineHeight: '120%',
                            opacity: activeOpacity
                        }}
                    >
                        {step.id}
                    </motion.span>
                    
                    {/* Left Circle Node - touching pill */}
                    <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 -left-[12px] w-[14px] h-[14px] rounded-full z-20"
                        style={{
                            backgroundColor: dotBackground,
                            border: '2px solid #0068AD'
                        }}
                    />
                    
                    {/* Right Circle Node - touching pill */}
                    <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 -right-[12px] w-[14px] h-[14px] rounded-full z-20"
                        style={{
                            backgroundColor: dotBackground,
                            border: '2px solid #0068AD'
                        }}
                    />
                </div>
            </div>

            {/* Content drops down and fades in */}
            <motion.div 
                className="flex flex-col items-center text-center max-w-[220px]"
                initial={{ opacity: 0, y: -30 }}
                style={{ 
                    opacity: contentOpacity, 
                    y: contentY
                }}
            >
                <div className="text-[#000000] mb-4">
                    <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 
                    className="text-[#000000] mb-3"
                    style={{
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '120%'
                    }}
                >
                    {step.title}
                </h3>
                <p 
                    className="text-[#5A5A5C]"
                    style={{
                        fontWeight: 400,
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

const MobileAccountEvolution = () => {
    // Uses useState to handle accordion interactions natively without scrolling
    const [activeStep, setActiveStep] = React.useState<number | null>(0);

    return (
        <div className="w-full flex flex-col max-w-[600px] mx-auto mt-4">
            <div className="relative border-l-[2px] border-[#E8E8E8] ml-4 pl-8 py-2">
                {evolutionSteps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                        <div 
                            key={step.id} 
                            className="relative mb-10 last:mb-0 cursor-pointer group" 
                            onClick={() => setActiveStep(isActive ? null : index)}
                        >
                            {/* Interactive Circle Dot */}
                            <div 
                                className={`absolute -left-[40px] top-1.5 w-[14px] h-[14px] rounded-full border-[2px] border-[#0068AD] transition-colors duration-300 z-10 ${isActive ? 'bg-[#1C99ED]' : 'bg-[#FFFFFF]'}`} 
                            />
                            
                            {/* Step Pill */}
                            <div 
                                className="inline-flex items-center justify-center px-5 py-1.5 rounded-lg mb-4 relative" 
                                style={{ boxShadow: '2px 2px 8px 0px #00000030', backgroundColor: '#FFFFFF' }}
                            >
                                <div 
                                    className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`} 
                                    style={{ background: 'linear-gradient(90deg, rgba(53, 82, 102, 0.2) 0%, rgba(0, 67, 112, 0.2) 100%)' }} 
                                />
                                <span className={`text-[#004370] relative z-10 font-medium text-[18px] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                    {step.id}
                                </span>
                            </div>

                            {/* Accordion Expandable Content */}
                            <motion.div
                                initial={false}
                                animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                                className="overflow-hidden"
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className="text-[#000000] mb-3 mt-2">
                                    <step.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[#000000] mb-2 font-normal text-[22px] leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-[#5A5A5C] font-normal text-[15px] leading-relaxed pb-4">
                                    {step.description}
                                </p>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const AccountEvolution = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Add physical momentum to the raw scroll value for buttery smooth parallax
    const smoothProgress = useSpring(scrollYProgress, { 
        stiffness: 100, 
        damping: 30, 
        restDelta: 0.001 
    });

    // Slowed down travel distance over 20% of the scroll instead of 12%
    const timelineX = useTransform(smoothProgress, [0, 0.2], ["100vw", "0vw"], { clamp: true });
    const timelineOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1], { clamp: true });

    return (
        <>
            {/* Desktop View with Scroll Animation */}
            <section ref={containerRef} className="hidden md:block w-full bg-[#FFFFFF] relative h-[350vh]">
                
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 sm:px-10 md:px-15 py-8 lg:py-10">
                    {/* Header Area */}
                    <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
                        {/* Badge Capsule */}
                        <div
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Account Evolution</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
                            Every Customer Relationship <br />
                            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                                Creates New Opportunities
                            </span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed max-w-3xl">
                            Every customer interaction strengthens account intelligence. Follei continuously learns from engagement, business outcomes, and executive conversations to uncover new growth opportunities.
                        </p>
                    </div>

                    {/* Timeline Container Sliding In */}
                    <motion.div 
                        className="relative w-full max-w-[1400px] flex flex-row justify-around items-start pt-10"
                        style={{ x: timelineX, opacity: timelineOpacity }}
                    >
                        
                        {/* Global Horizontal Progress Bar Track */}
                        <div className="absolute top-[62px] left-[5%] right-[5%] h-[2px] bg-[#E8E8E8] z-0 overflow-hidden">
                            {/* Animated blue fill line */}
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-full bg-[#1C99ED]"
                                style={{ 
                                    scaleX: smoothProgress, 
                                    transformOrigin: 'left' 
                                }}
                            />
                        </div>

                        {evolutionSteps.map((step, index) => (
                            <AnimatedStep 
                                key={step.id} 
                                step={step} 
                                index={index} 
                                scrollYProgress={smoothProgress}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile View with Vertical Accordion */}
            <section className="block md:hidden w-full bg-[#FFFFFF] relative py-16">
                <div className="w-full flex flex-col items-center justify-center px-6 sm:px-10">
                    {/* Header Area */}
                    <div className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center">
                        {/* Badge Capsule */}
                        <div
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-[0.5px] border-[#004370] rounded-[10px] text-[#000000] font-medium text-[16px] tracking-wider mb-6 relative"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                            <span>Account Evolution</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[#04032E] text-4xl sm:text-[60px] md:text-[52px] font-medium tracking-tight leading-[1.15] mb-6 max-w-none">
                            Every Customer Relationship <br />
                            <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                                Creates New Opportunities
                            </span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-[#5A5A5C] text-base sm:text-[16px] font-normal leading-relaxed max-w-3xl">
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