// @ts-nocheck
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import TestimonialSection from "../Home/sections/Testimonal";
import { FileText, RefreshCw, GitFork, TrendingUp, Workflow, ShieldCheck, Cpu, Sliders, Handshake, Wrench, Plug, Bot, BarChart3, Receipt, Hospital, Scan, Factory } from "lucide-react";
import coireiLogo from "../../assets/images/products/coirei-logo.svg";
import aboutusservice from "../../assets/images/services/aboutusservice.png";

const countryCodes = [
    { flagUrl: "https://flagcdn.com/w20/in.png", code: "+91", alt: "India" },
    { flagUrl: "https://flagcdn.com/w20/us.png", code: "+1", alt: "USA" },
    { flagUrl: "https://flagcdn.com/w20/gb.png", code: "+44", alt: "UK" },
    { flagUrl: "https://flagcdn.com/w20/ae.png", code: "+971", alt: "UAE" },
    { flagUrl: "https://flagcdn.com/w20/sg.png", code: "+65", alt: "Singapore" },
];

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

const ProcessAutomation = () => {
    useScrollAnimations();
    const navigate = useNavigate();

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

    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [countryOpen, setCountryOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = () => {
        console.log({
            ...formData,
            countryCode: selectedCountry.code,
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setCountryOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-32 pb-6 w-full bg-white ">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- HEADER HERO SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full">
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
                            Streamline Your Business with <span className="text-[#F67300]">Automation & Integration</span>
                        </h1>
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-24 font-light">
                            Unlock efficiency by automating key processes and integrating your business systems seamlessly.
                        </p>
                    </div>

                    {/* --- WHAT WE DO FOR YOU SECTION --- */}
                    <div className="flex flex-col items-center text-center w-full mb-16">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] tracking-tight mb-16">
                            What we do for you?
                        </h2>

                        {/* HIGH-FIDELITY GRID LAYOUT */}
                        <div data-ns-animate="true" className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl border border-[#5D5D5D] bg-transparent text-white overflow-hidden ">

                            {/* Cell 1: Automate Repetitive Tasks */}
                            <div className="p-8 md:p-12 border-b md:border-r border-[#5D5D5D] flex flex-col justify-between items-start text-left min-h-[380px] hover:bg-white/5 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110">
                                    <FileText size={24} className="text-[#F67300]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-[#E3E3E0] mb-4 tracking-tight group-hover:text-[#F67300] transition-colors">
                                        Automate Repetitive Tasks
                                    </h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light">
                                        We streamline your daily operations by eliminating manual processes. This frees your team to focus on high-value tasks.
                                    </p>
                                </div>
                            </div>

                            {/* Cell 2: Middle Column (Spans 2 rows) */}
                            <div className="row-span-2 border-b md:border-b-0 md:border-r border-[#5D5D5D] bg-linear-to-b from-[#FF7700]/15 via-black/40 to-black p-8 md:p-12 flex flex-col justify-between items-center text-center min-h-[500px] md:min-h-[760px] group">
                                {/* Center Coirei Logo */}
                                <div className="w-full flex items-center justify-center py-6 mt-4 relative">
                                    <div className="absolute w-[200px] h-[200px] rounded-full shadow-[0_0_50px_rgba(246,115,0,0.15)] bg-[#F67300]/5 mix-blend-screen animate-pulse"></div>
                                    <img
                                        src={coireiLogo}
                                        alt="Coirei Logo"
                                        className="w-[200px] h-[200px] object-contain relative z-10 transition-transform duration-700 group-hover:rotate-360"
                                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                                    />
                                </div>
                                {/* Customize Workflows */}
                                <div className="flex flex-col items-center w-full">
                                    <div className="w-14 h-14 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                                        <Workflow size={24} className="text-[#F67300]" />
                                    </div>
                                    <h3 className="text-2xl font-medium text-[#E3E3E0] mb-4 tracking-tight group-hover:text-[#F67300] transition-colors">
                                        Customize Workflows
                                    </h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light max-w-sm">
                                        We tailor workflows to fit your exact business needs, ensuring that every process aligns with your goals.
                                    </p>
                                </div>
                            </div>
                            {/* Cell 3: Synchronize Data Across Platforms */}
                            <div className="p-8 md:p-12 border-b border-[#5D5D5D] flex flex-col justify-between items-start text-left min-h-[380px] hover:bg-white/5 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110">
                                    <RefreshCw size={24} className="text-[#F67300]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-[#E3E3E0] mb-4 tracking-tight group-hover:text-[#F67300] transition-colors">
                                        Synchronize Data Across Platforms
                                    </h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light">
                                        We ensure your data is up-to-date across all tools, reducing errors and enabling real-time decision-making.
                                    </p>
                                </div>
                            </div>

                            {/* Cell 4: Integrate CRM and ERP Systems */}
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#5D5D5D] flex flex-col justify-between items-start text-left min-h-[380px] hover:bg-white/5 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110">
                                    <GitFork size={24} className="text-[#F67300]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-[#E3E3E0] mb-4 tracking-tight group-hover:text-[#F67300] transition-colors">
                                        Integrate CRM and ERP Systems
                                    </h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light">
                                        We connect your key business systems, ensuring data flows smoothly between departments. This creates a unified, reliable data environment.
                                    </p>
                                </div>
                            </div>

                            {/* Cell 5: Provide Real-Time Analytics */}
                            <div className="p-8 md:p-12 flex flex-col justify-between items-start text-left min-h-[380px] hover:bg-white/5 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110">
                                    <TrendingUp size={24} className="text-[#F67300]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium text-[#E3E3E0] mb-4 tracking-tight group-hover:text-[#F67300] transition-colors">
                                        Provide Real-Time Analytics
                                    </h3>
                                    <p className="text-white/70 text-base leading-relaxed font-light">
                                        We deliver instant insights from your data, helping you make informed decisions quickly. Our dashboards keep you updated with the latest performance metrics.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- WHY CHOOSE US SECTION --- */}
                    <div ref={whyChooseScrollRef} className="w-full mt-24">
                        <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                            Why Choose <span className="text-[#F67300]">Coirei</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 md:px-0">
                            {/* Card 1 */}
                            <motion.div
                                data-ns-animate="true" data-delay="0.1"
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] justify-start group"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 0 * -72}%`),
                                    zIndex: 0
                                }}
                            >
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                    <Sliders size={28} strokeWidth={1.5} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 tracking-tight">
                                    Custom-Fit Strategies
                                </h3>
                                <p className="text-white/50 text-[14px] leading-relaxed font-light px-2">
                                    We design custom automation and integration solutions that fit your exact industry challenges. Every solution is built with your business in mind.
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                data-ns-animate="true" data-delay="0.2"
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] justify-start group"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 1 * -72}%`),
                                    zIndex: 1
                                }}
                            >
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                    <ShieldCheck size={28} strokeWidth={1.5} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 tracking-tight">
                                    Proven Track Record
                                </h3>
                                <p className="text-white/50 text-[14px] leading-relaxed font-light px-2">
                                    Our clients see real results, with measurable ROI and efficiency improvements. We've helped hundreds of businesses thrive.
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                data-ns-animate="true" data-delay="0.3"
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] justify-start group"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 2 * -72}%`),
                                    zIndex: 2
                                }}
                            >
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                    <Cpu size={28} strokeWidth={1.5} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 tracking-tight">
                                    Cutting Edge Technology
                                </h3>
                                <p className="text-white/50 text-[14px] leading-relaxed font-light px-2">
                                    We leverage the latest tools and innovations to keep you ahead in a fast-changing market. Your business benefits from every advancement.
                                </p>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                data-ns-animate="true" data-delay="0.4"
                                className="flex flex-col items-center text-center bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] justify-start group"
                                style={{
                                    x: useTransform(whyChooseXProgress, (v) => `${v * 3 * -72}%`),
                                    zIndex: 3
                                }}
                            >
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                                    <Handshake size={28} strokeWidth={1.5} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-xl md:text-[22px] font-medium text-white mb-6 tracking-tight">
                                    Dedicated Support
                                </h3>
                                <p className="text-white/50 text-[14px] leading-relaxed font-light px-2">
                                    Our team is with you every step, providing ongoing support and scalable solutions as your business grows.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- ABOUT COIREI SECTION --- */}
                    <div className="w-full mt-24">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] text-center mb-12 tracking-tight">
                            About Coirei
                        </h2>

                        <div data-ns-animate="true" className="w-full flex flex-col xl:flex-row justify-between items-center gap-12 xl:gap-8">
                            {/* Left: Logo + Text */}
                            <div className="flex flex-col gap-6 xl:gap-[30px] max-w-[450px] w-full">
                                <div className="w-[100px] h-[100px] rounded-[20px] bg-white  border border-white/10 flex items-center justify-center p-[20px] shrink-0">
                                    <img src={coireiLogo} alt="Coirei Logo" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-white/70 text-[16px] leading-[1.7] font-light">
                                    At Coirei, we are passionate about innovation. With years of experience, we help businesses transform operations through intelligent automation and seamless integration.
                                </p>
                            </div>

                            {/* Right: Dashboard Image */}
                            <div className="overflow-hidden rounded-[20px] w-full md:w-[673px] h-[424px] shrink-0">
                                <img
                                    src={aboutusservice}
                                    alt="about us service"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- TECHNOLOGY STACK SECTION --- */}
                    <div className="w-full mt-24 mb-4">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] text-center mb-12 tracking-tight">
                            Technology Stack
                        </h2>

                        <div className="flex flex-col w-full">
                            {/* RPA Tools */}
                            <div className="h-px w-full bg-white/10" />
                            <div data-ns-animate="true" className="flex flex-col gap-3 py-8 px-2">
                                <div className="flex items-center gap-3">
                                    <Wrench size={22} className="text-white/50 shrink-0" />
                                    <h3 className="text-xl font-medium text-[#E3E3E0]">RPA Tools</h3>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    We use top RPA platforms like UiPath and Automation Anywhere to drive efficiency.
                                </p>
                            </div>

                            {/* Analytics Tools */}
                            <div className="h-px w-full bg-white/10" />
                            <div data-ns-animate="true" data-delay="0.1" className="flex flex-col gap-3 py-8 px-2">
                                <div className="flex items-center gap-3">
                                    <BarChart3 size={22} className="text-white/50 shrink-0" />
                                    <h3 className="text-xl font-medium text-[#E3E3E0]">Analytics Tools</h3>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    We harness advanced analytics platforms to provide real-time insights for better decision-making.
                                </p>
                            </div>

                            {/* Cloud Infrastructure */}
                            <div className="h-px w-full bg-white/10" />
                            <div data-ns-animate="true" data-delay="0.2" className="flex flex-col gap-3 py-8 px-2">
                                <div className="flex items-center gap-3">
                                    <Cpu size={22} className="text-white/50 shrink-0" />
                                    <h3 className="text-xl font-medium text-[#E3E3E0]">Cloud Infrastructure</h3>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed font-light">
                                    We leverage cloud solutions like AWS and Azure for scalability and flexibility.
                                </p>
                            </div>
                            <div className="h-px w-full bg-white/10" />
                        </div>
                    </div>

                    {/* --- HOW WE WORK SECTION --- */}
                    <div
                        ref={containerRef}
                        className="relative w-full mb-32 mt-32"
                        style={{ height: "300vh" }}
                    >
                        <div className="sticky top-[20vh] w-full h-fit flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#E3E3E0] text-center mb-10 md:mb-12 tracking-tight leading-tight">
                                How We Work (The Process)
                            </h2>

                            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12 lg:gap-16">
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
                {/* --- INDUSTRIES WE SERVE SECTION --- */}
                <div className="w-full mt-24 mb-16 bg-transparent">
                    {/* Section Badge */}
                    <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4 px-4">
                        <div className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white hidden sm:block opacity-20" />
                        <div className="px-6 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[16px] sm:text-[22px] whitespace-nowrap shrink-0">
                            AI Solutions Across Global
                        </div>
                        <div className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white hidden sm:block opacity-20" />
                    </div>

                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center px-6 mb-12">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-tight mb-6 max-w-4xl tracking-tight text-center">
                            <span className="text-[#F67300]">Impact </span>
                            <span className="text-white"> Across Industries</span>
                        </h2>
                    </div>

                    {/* Industries Grid */}
                    <div className="flex justify-center px-6 py-10 w-full max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                            {[
                                { name: "Finance", icon: <Receipt size={20} /> },
                                { name: "Healthcare", icon: <Hospital size={20} /> },
                                { name: "Retail", icon: <Scan size={20} /> },
                                { name: "Manufacturing", icon: <Factory size={20} /> },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="flex items-center gap-4 sm:gap-6 px-5 py-4 bg-[#1E1E1E] border-[0.5px] border-white/15 rounded-[12px] w-full max-w-[420px] h-[96px] sm:h-[110px] cursor-pointer transition-all hover:scale-[1.02] hover:border-[#F67300]/30"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[26px] bg-white/5 border border-white/15 flex items-center justify-center text-[#F67300] shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-white text-[18px] sm:text-[22px] md:text-[24px] font-medium tracking-tight leading-tight">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- CLIENT TESTIMONIALS SECTION --- */}
                <TestimonialSection />
            </main>
            <Footer />
        </>
    );
};

export default ProcessAutomation;
