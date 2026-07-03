import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence, useInView } from "framer-motion";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { Workflow, Smartphone, Settings, Building2 } from "lucide-react";
import FAQSection from "../Home/sections/FAQSection";

// --- Slot machine number reel ---
const DigitReel = ({ digit, delay }: { digit: number; delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const cycles = 5;
    const allDigits = Array.from({ length: cycles * 10 }, (_, i) => i % 10);
    const finalIndex = (cycles - 1) * 10 + digit;
    const yPos = isInView ? -finalIndex * (100 / (cycles * 10)) : 0;
    return (
        <div ref={ref} className="inline-block overflow-hidden relative" style={{ height: "1.1em", verticalAlign: "bottom" }}>
            <motion.div
                initial={{ y: "0%" }}
                animate={isInView ? { y: `${yPos}%` } : { y: "0%" }}
                transition={{ duration: 2.0, ease: [0.15, 0.85, 0.3, 1.0], delay }}
                className="flex flex-col text-center"
            >
                {allDigits.map((num, idx) => (
                    <span key={idx} className="leading-none select-none h-[1.1em] flex items-center justify-center">{num}</span>
                ))}
            </motion.div>
        </div>
    );
};

const JackpotNumber = ({ value }: { value: string }) => {
    const chars = value.split("");
    let digitCount = 0;
    return (
        <span className="inline-flex items-baseline justify-center">
            {chars.map((char, index) => {
                const isDigit = /^[0-9]$/.test(char);
                if (isDigit) {
                    const digitVal = parseInt(char, 10);
                    const delay = digitCount * 0.15;
                    digitCount++;
                    return <DigitReel key={index} digit={digitVal} delay={delay} />;
                } else {
                    return <span key={index} className="leading-none select-none">{char}</span>;
                }
            })}
        </span>
    );
};

const steps = [
    {
        title: "Requirement Mapping",
        topPill: "Team Discovery",
        bottomPill: "Workflow Audit",
        description: "Our analysts sit down with your department heads to document workflows.",
    },
    {
        title: "Architecture Design",
        topPill: "System Blueprint",
        bottomPill: "User Flow",
        description: "We define the database structure and the user journey.",
    },
    {
        title: "Development Sprints",
        topPill: "Rapid Build",
        bottomPill: "Weekly Updates",
        description: "Rapid development with weekly status updates.",
    },
    {
        title: "UAT",
        subtitle: "(User Acceptance Testing)",
        topPill: "QA Testing",
        bottomPill: "Client Review",
        description: "We don't launch until your team is comfortable with the platform.",
    },
    {
        title: "Deployment & Training",
        topPill: "Smooth Launch",
        bottomPill: "Team Training",
        description: "Smooth rollout and comprehensive team documentation.",
    }
];

// Custom Integrations Icon (<···>)
const IntegrationsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        <circle cx="8.5" cy="12" r="1.2" fill="currentColor" />
        <circle cx="15.5" cy="12" r="1.2" fill="currentColor" />
    </svg>
);

// Custom CRM Icon
const CRMIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M6 8h4" />
        <path d="M6 12h8" />
        <path d="M6 16h6" />
    </svg>
);

// Custom Real-time Analytics Icon
const AnalyticsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 12V2" />
        <path d="M12 12h10" />
    </svg>
);

const BusinessAppDetails = () => {
    useScrollAnimations();

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const whyChooseScrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: whyChooseScrollY } = useScroll({
        target: whyChooseScrollRef,
        offset: ["start 85%", "end 20%"]
    });
    const whyChooseXProgress = useTransform(whyChooseScrollY, [0.05, 0.55], [1, 0]);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    // Animate stroke dashoffset from 80% to 0% (20% filled to 100% filled)
    const strokeDashoffset = useTransform(smoothProgress, [0, 1], [1382.3 * 0.8, 0]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = Math.min(Math.floor(latest * steps.length), steps.length - 1);
        setActiveStep(step);
    });

    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-32 pb-20 w-full bg-[#161616] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- HEADER SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full">
                        {/* Main Title */}
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-5xl tracking-tight">
                            <span className="text-[#F67300]">Custom Business Solutions</span> for Business Growth
                        </h1>

                        {/* Subtitle / Description */}
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mb-24 font-light">
                            At Coirei, we don't just build apps; we architect the digital backbone of your business. Custom ERP, CRM, and Enterprise Portals built for scalability and performance.
                        </p>
                    </div>

                    {/* --- WHY COIREI FOR BUSINESS APP SECTION --- */}
                    <div ref={whyChooseScrollRef} className="w-full mb-32 flex flex-col items-center overflow-hidden">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#E3E3E0] text-center mb-16 tracking-tight leading-tight">
                            Why <span className="text-[#F67300]">Coirei</span> for Business App?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {/* Card 1 */}
                            <motion.div
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[20px] p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] group cursor-default"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 0 * -72}%`),
                                    zIndex: 0
                                }}
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#161616] border border-white/10 mb-[53px] group-hover:bg-[#202020] group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <Workflow size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-[53px]">
                                    Automated workflows
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed font-light">
                                    We help you automate everyday tasks, so your team can focus on more strategic work.
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[20px] p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] group cursor-default"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 1 * -72}%`),
                                    zIndex: 1
                                }}
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#161616] border border-white/10 mb-[53px] group-hover:bg-[#202020] group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <AnalyticsIcon />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-[53px]">
                                    Real-time data analytics
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed font-light">
                                    Get instant insights from your data, so you can make smarter decisions on the fly.
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[20px] p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] group cursor-default"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 2 * -72}%`),
                                    zIndex: 2
                                }}
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#161616] border border-white/10 mb-[53px] group-hover:bg-[#202020] group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <IntegrationsIcon />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-[53px]">
                                    Easy integrations
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed font-light">
                                    Our platform plugs right into your existing tools, keeping everything connected and simple.
                                </p>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[20px] p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] group cursor-default"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 3 * -72}%`),
                                    zIndex: 3
                                }}
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#161616] border border-white/10 mb-[53px] group-hover:bg-[#202020] group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <Smartphone size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-[53px]">
                                    Mobile access
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed font-light">
                                    Whether you're in the office or on the move, you can access your business anytime, from any device.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- CORE BUSINESS APPS SECTION --- */}
                    <div className="w-full mb-32 flex flex-col items-center">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#E3E3E0] text-center mb-16 tracking-tight leading-tight">
                            <span className="text-[#F67300]">Coirei Core</span> Custom Business Apps
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {/* App 1: Custom ERPs */}
                            <div
                                data-ns-animate="true" data-delay="0.1"
                                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-[20px] p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-h-[350px] group cursor-default"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mb-8 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <Settings size={28} strokeWidth={1.5} className="animate-spin-slow" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-5">
                                    Custom ERPs
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    Centralized platforms for supply chain, inventory, and operations management.
                                </p>
                            </div>

                            {/* App 2: CRMs */}
                            <div
                                data-ns-animate="true" data-delay="0.2"
                                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-[20px] p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-h-[350px] group cursor-default"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mb-8 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <CRMIcon />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-5">
                                    CRMs
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    Sales-driven tools that integrate with your unique lead funnels and reporting needs.
                                </p>
                            </div>

                            {/* App 3: Enterprise Portals */}
                            <div
                                data-ns-animate="true" data-delay="0.3"
                                className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-[20px] p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-h-[350px] group cursor-default"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mb-8 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300 text-[#F67300]">
                                    <Building2 size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-5">
                                    Enterprise Portals
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    Secure client/vendor dashboards that streamline communication and transparency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- HOW WE WORK SECTION --- */}
                    <div ref={containerRef} className="relative w-full h-[300vh] mb-32">
                        {/* Sticky container */}
                        <div className="sticky top-[20vh] w-full h-fit flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#E3E3E0] text-center mb-10 md:mb-16 tracking-tight leading-tight">
                                How We Work (The Process)
                            </h2>

                            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12 lg:gap-8">
                                {/* Left Side */}
                                <div className="lg:w-1/2 flex justify-center lg:justify-start min-h-[80px] md:min-h-[120px]">
                                    <AnimatePresence mode="wait">
                                        <motion.h3
                                            key={activeStep}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -15 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#E3E3E0] tracking-tight text-center lg:text-left flex flex-col items-center lg:items-start"
                                        >
                                            <span>{steps[activeStep].title}</span>
                                            {steps[activeStep].subtitle && (
                                                <span className="text-xl md:text-2xl text-[#B5B4B2] mt-2 font-normal">
                                                    {steps[activeStep].subtitle}
                                                </span>
                                            )}
                                        </motion.h3>
                                    </AnimatePresence>
                                </div>

                                {/* Right Side (Circle Diagram) */}
                                <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                                    <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] flex items-center justify-center">
                                        {/* SVG Circle for Border */}
                                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 460 460">
                                            {/* Background Circle */}
                                            <circle
                                                cx="230"
                                                cy="230"
                                                r="220"
                                                fill="none"
                                                stroke="#3d2b1f"
                                                strokeWidth="12"
                                            />
                                            {/* Active Segment (Orange) */}
                                            <motion.circle
                                                cx="230"
                                                cy="230"
                                                r="220"
                                                fill="none"
                                                stroke="#FF7A00"
                                                strokeWidth="12"
                                                strokeDasharray="1382.3"
                                                style={{ strokeDashoffset }}
                                            />
                                        </svg>

                                        {/* Inner Content */}
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={activeStep}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12"
                                                >
                                                    {/* Top Pill & Pointer */}
                                                    <div className="absolute top-[22%] md:top-[28%] left-[6%] md:left-[12%] flex items-center gap-1.5 md:gap-3">
                                                        <div className="bg-[#4d3a2d] text-[#E3E3E0] px-3 py-1 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-medium whitespace-nowrap">
                                                            {steps[activeStep].topPill}
                                                        </div>
                                                        <motion.svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="white"
                                                            stroke="#FF7A00"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="w-3.5 h-3.5 md:w-5 md:h-5"
                                                            style={{ rotate: 100 }}
                                                            animate={{
                                                                x: [-0.8, 0.8, -0.8, 0.8, -0.8, 0.8, 0],
                                                                y: [-0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0]
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                repeat: Infinity,
                                                                ease: "linear"
                                                            }}
                                                        >
                                                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                                        </motion.svg>
                                                    </div>

                                                    {/* Center Text */}
                                                    <p className="text-[#E3E3E0] text-[13px] md:text-xl text-center leading-relaxed font-light max-w-[200px] md:max-w-[320px]">
                                                        {steps[activeStep].description}
                                                    </p>

                                                    {/* Bottom Pill & Pointer */}
                                                    <div className="absolute bottom-[18%] md:bottom-[22%] right-[6%] md:right-[12%] flex flex-row-reverse items-center gap-1.5 md:gap-3">
                                                        <div className="bg-[#FF7A00] text-white px-3 py-1 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-medium whitespace-nowrap shadow-[0_0_15px_rgba(255,122,0,0.3)]">
                                                            {steps[activeStep].bottomPill}
                                                        </div>
                                                        <motion.svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="#FF7A00"
                                                            stroke="white"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="w-3.5 h-3.5 md:w-5 md:h-5"
                                                            style={{ rotate: 0 }}
                                                            animate={{
                                                                x: [-0.8, 0.8, -0.8, 0.8, -0.8, 0.8, 0],
                                                                y: [-0.8, 0.8, 0.8, -0.8, -0.8, 0.8, 0]
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                repeat: Infinity,
                                                                ease: "linear"
                                                            }}
                                                        >
                                                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                                        </motion.svg>
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- WHY PARTNER WITH US SECTION --- */}
                <div className="w-full mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto">
                    {/* Left Heading */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <h2 data-ns-animate="true" className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#E3E3E0] tracking-tight leading-none lg:leading-[64px]">
                            Why<br />Partner<br /><span className="text-[#F67300]">with Us</span>
                        </h2>
                    </div>

                    {/* Right Rows List */}
                    <div className="lg:col-span-8 flex flex-col border-b border-white/20 w-full">
                        {/* Row 1 */}
                        <div data-ns-animate="true" data-delay="0.1" className="flex flex-col md:flex-row md:items-start justify-between py-8 border-t border-white/20 gap-4 md:gap-8">
                            <div className="flex items-start md:w-2/5">
                                <span className="border-l-2 border-white h-6 mt-1 self-start shrink-0"></span>
                                <span className="text-white font-mono text-xl leading-none mt-1 ml-3 shrink-0">01</span>
                                <h3 className="text-xl md:text-2xl font-medium text-[#F67300] leading-tight ml-6">
                                    Domain<br />Expertise
                                </h3>
                            </div>
                            <p className="md:w-3/5 text-white/70 text-base leading-relaxed font-light">
                                We understand that every industry has specific data relationships. We translate your manual business logic into efficient automated code.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div data-ns-animate="true" data-delay="0.2" className="flex flex-col md:flex-row md:items-start justify-between py-8 border-t border-white/20 gap-4 md:gap-8">
                            <div className="flex items-start md:w-2/5">
                                <span className="border-l-2 border-white h-6 mt-1 self-start shrink-0"></span>
                                <span className="text-white font-mono text-xl leading-none mt-1 ml-3 shrink-0">02</span>
                                <h3 className="text-xl md:text-2xl font-medium text-[#F67300] leading-tight ml-6">
                                    Ownership<br />& Security
                                </h3>
                            </div>
                            <p className="md:w-3/5 text-white/70 text-base leading-relaxed font-light">
                                Unlike SaaS, your custom software is an asset you own. You control the data, the security protocols, and the roadmap.
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div data-ns-animate="true" data-delay="0.3" className="flex flex-col md:flex-row md:items-start justify-between py-8 border-t border-white/20 gap-4 md:gap-8">
                            <div className="flex items-start md:w-2/5">
                                <span className="border-l-2 border-white h-6 mt-1 self-start shrink-0"></span>
                                <span className="text-white font-mono text-xl leading-none mt-1 ml-3 shrink-0">03</span>
                                <h3 className="text-xl md:text-2xl font-medium text-[#F67300] leading-tight ml-6">
                                    Agile<br />Methodology
                                </h3>
                            </div>
                            <p className="md:w-3/5 text-white/70 text-base leading-relaxed font-light">
                                We build in sprints. You see the product take shape weekly, ensuring we never deviate from your vision.
                            </p>
                        </div>

                        {/* Row 4 */}
                        <div data-ns-animate="true" data-delay="0.4" className="flex flex-col md:flex-row md:items-start justify-between py-8 border-t border-white/20 gap-4 md:gap-8">
                            <div className="flex items-start md:w-2/5">
                                <span className="border-l-2 border-white h-6 mt-1 self-start shrink-0"></span>
                                <span className="text-white font-mono text-xl leading-none mt-1 ml-3 shrink-0">04</span>
                                <h3 className="text-xl md:text-2xl font-medium text-[#F67300] leading-tight ml-6">
                                    Post-Launch<br />Reliability
                                </h3>
                            </div>
                            <p className="md:w-3/5 text-white/70 text-base leading-relaxed font-light">
                                We offer dedicated maintenance and scalable infrastructure support long after the deployment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- PROVEN IMPACT STATS SECTION --- */}
                <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto mb-32">
                    <div className="max-w-6xl mx-auto">
                        <div className="w-full mt-8 text-center">
                            <p data-ns-animate="true" className="text-white text-2xl md:text-3xl font-light tracking-wide">
                                Proven Impact, Measurable Results
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-16 w-full">
                            <div data-ns-animate="true" data-delay="0.1">
                                <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                    <JackpotNumber value="100+" />
                                </h4>
                                <p className="text-white/60 text-base md:text-[18px] font-light">Projects Delivered</p>
                            </div>
                            <div data-ns-animate="true" data-delay="0.2">
                                <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                    <JackpotNumber value="50+" />
                                </h4>
                                <p className="text-white/60 text-base md:text-[18px] font-light">Industries</p>
                            </div>
                            <div data-ns-animate="true" data-delay="0.3">
                                <h4 className="text-5xl md:text-6xl font-normal text-white mb-2">
                                    <JackpotNumber value="99%" />
                                </h4>
                                <p className="text-white/60 text-base md:text-[18px] font-light">Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <FAQSection />
            <Footer />
        </>
    );
};

export default BusinessAppDetails;
