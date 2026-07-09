import { useRef, useState, useEffect } from "react";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import FAQSection from "../Home/sections/backup/FAQSection";
import {
    Globe,
    Layers,
    Sparkles,
    Cpu,
    Hospital,
    Receipt,
    BookOpen,
    Scan,
    Factory,
    Truck
} from "lucide-react";

import coireiLogo from "../../assets/images/products/coirei-logo.svg";
import cardTopCurve from "../../assets/images/services/cardtopcurve-light.svg";





const serviceDetails = {
    INDUSTRIES: [
        {
            title: "Healthcare",
            description: "We develop platforms for patient management, appointment scheduling, and secure medical records, ensuring compliance and easy access.",
            icon: Hospital
        },
        {
            title: "Finance",
            description: "We build secure financial platforms for investment tracking, budgeting, and real-time reporting, helping firms stay agile and compliant.",
            icon: Receipt
        },
        {
            title: "Education",
            description: "Our platforms power e-learning, student management, and virtual classrooms, making education more accessible and engaging.",
            icon: BookOpen
        },
        {
            title: "Retail",
            description: "We create e-commerce platforms and inventory management systems, helping businesses streamline sales and logistics.",
            icon: Scan
        },
        {
            title: "Manufacturing",
            description: "We design platforms for supply chain tracking, production scheduling, and quality control, ensuring efficiency and real-time oversight.",
            icon: Factory
        },
        {
            title: "Logistics",
            description: "We build platforms that optimize fleet management, route planning, and shipment tracking, making logistics faster and more reliable.",
            icon: Truck
        }
    ]
};

const offerings = [
    {
        title: "Custom Web Platforms",
        icon: Globe,
        desc: "High-performance web apps built to support high concurrency, complex logic, and custom user roles."
    },
    {
        title: "Full-Stack Development",
        icon: Layers,
        desc: "End-to-end solutions (Frontend, Backend, Database) using modern, secure frameworks."
    },
    {
        title: "Platform Modernization",
        icon: Sparkles,
        desc: "Refreshing legacy systems into fast, mobile-responsive, and SEO-friendly architectures."
    },
    {
        title: "API & Third-Party Integration",
        icon: Cpu,
        desc: "Connecting your platform to the tools that matter—payment gateways, CRM/ERPs, and marketing automation suites."
    }
];

import WebPlatformHero from "./sections/WebPlatformHero";

const WebPlatformDetails = () => {
    useScrollAnimations();

    const [isHeroTypingDone, setIsHeroTypingDone] = useState(false);

    const offeringsScrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: offeringsScrollY } = useScroll({
        target: offeringsScrollRef,
        offset: ["start 85%", "end 20%"]
    });
    const offeringsXProgress = useTransform(offeringsScrollY, [0.05, 0.55], [1, 0]);

    const sectionPinRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sectionScrollY } = useScroll({
        target: sectionPinRef,
        offset: ["start start", "end end"]
    });

    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const unsubscribe = sectionScrollY.on("change", (latest) => {
            if (latest < 0.33) {
                setActiveSection(1);
            } else if (latest < 0.66) {
                setActiveSection(2);
            } else {
                setActiveSection(3);
            }
        });
        return () => unsubscribe();
    }, [sectionScrollY]);

    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);
    const card5Ref = useRef<HTMLDivElement>(null);
    const card6Ref = useRef<HTMLDivElement>(null);

    const card1InView = useInView(card1Ref, { once: false, margin: "-30% 0px -30% 0px" });
    const card2InView = useInView(card2Ref, { once: false, margin: "-30% 0px -30% 0px" });
    const card3InView = useInView(card3Ref, { once: false, margin: "-30% 0px -30% 0px" });
    const card4InView = useInView(card4Ref, { once: false, margin: "-30% 0px -30% 0px" });
    const card5InView = useInView(card5Ref, { once: false, margin: "-30% 0px -30% 0px" });
    const card6InView = useInView(card6Ref, { once: false, margin: "-30% 0px -30% 0px" });

    const activeCard = card6InView ? 6 :
        card5InView ? 5 :
            card4InView ? 4 :
                card3InView ? 3 :
                    card2InView ? 2 :
                        card1InView ? 1 : 1;

    const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return () => window.removeEventListener("resize", checkIsDesktop);
    }, []);

    const howWeWorkRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: howWeWorkRef,
        offset: ["start 65%", "end 35%"]
    });

    const yOffsets = [
        useTransform(scrollYProgress, [0.05, 0.75], [0, 0]),
        useTransform(scrollYProgress, [0.05, 0.75], [250, 0]),
        useTransform(scrollYProgress, [0.05, 0.75], [500, 0]),
        useTransform(scrollYProgress, [0.05, 0.75], [750, 0])
    ];

    return (
        <div className="overflow-x-clip w-full bg-white min-h-screen">
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out transform ${isHeroTypingDone ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <Navbar />
            </div>

            <WebPlatformHero onTypingComplete={() => setIsHeroTypingDone(true)} />


            <main className="w-full bg-white flex flex-col items-center">


                {/* --- SERVICE OFFERINGS SECTION --- */}
                <div ref={offeringsScrollRef} className="w-full GlobalPadding flex flex-col items-center">
                    <h2 data-ns-animate="true" className="text-3xl md:text-5xl lg:text-[56px] font-medium text-[#262626] text-center mb-6 tracking-tight leading-tight">
                        Coirei Core Service Offerings
                    </h2>

                    <p data-ns-animate="true" className="text-gray-600 text-base md:text-lg max-w-3xl text-center mb-16 font-light">
                        End-to-end engineered platforms optimized for performance, security, and true scalability.
                    </p>

                    {/* Horizontal Plain Cards Container (revealing as we scroll, with gaps) */}
                    <div className="flex flex-col md:flex-row gap-6 w-full h-auto md:h-[420px] items-stretch mt-4">
                        {offerings.map((card, index) => {
                            return (
                                <OfferingCard key={index} index={index} card={card} offeringsXProgress={offeringsXProgress} isDesktop={isDesktop} />
                            );
                        })}
                    </div>
                </div>

                {/* --- WHY WORK WITH COIREI SECTION --- */}
                <div ref={sectionPinRef} className="relative w-full h-[250vh] bg-white ">
                    <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden GlobalPadding max-w-[1920px] mx-auto">
                        <div className="max-w-6xl w-full mx-auto">
                            <h2 data-ns-animate="true" className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#000000] text-center mb-16 lg:mb-20 tracking-tight leading-tight shrink-0">
                                Why Work With Coirei?
                            </h2>

                            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-24">
                                {/* Left Column - Scroll-Controlled Orbit */}
                                <div className="w-full lg:w-1/2 flex items-center justify-center">
                                    <div className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] lg:w-[500px] lg:h-[500px] flex items-center justify-center shrink-0">
                                        {/* Concentric static orbit lines */}
                                        <div className="absolute w-[260px] h-[260px] md:w-[480px] md:h-[480px] lg:w-[500px] lg:h-[500px] rounded-full">
                                            {/* Orbit line 1 (Outer) */}
                                            <div className="absolute inset-0 border border-[#F67300]/40 rounded-full" />
                                            {/* Orbit line 2 (Middle) */}
                                            <div className="absolute inset-[10%] border border-[#F67300]/40 rounded-full" />
                                            {/* Orbit line 3 (Inner) */}
                                            <div className="absolute inset-[20%] border border-[#F67300]/40 rounded-full" />

                                            {/* Top-left node (Document/Checkmark) on Outer Ring */}
                                            <motion.div
                                                initial={{ rotate: 180 }}
                                                animate={{ rotate: activeSection === 1 ? 45 : (activeSection >= 2 ? -135 : 180) }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                className="absolute inset-0 rounded-full pointer-events-none"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.5, rotate: -180, x: "-50%", y: "-50%" }}
                                                    animate={{
                                                        opacity: activeSection >= 1 ? (activeSection === 1 ? 1 : 0.4) : 0,
                                                        scale: activeSection >= 1 ? (activeSection === 1 ? 1.1 : 1.0) : 0.5,
                                                        rotate: activeSection === 1 ? -45 : (activeSection >= 2 ? 135 : -180),
                                                        x: "-50%",
                                                        y: "-50%",
                                                        borderColor: activeSection === 1 ? "rgba(246, 115, 0, 0.5)" : "rgba(255, 255, 255, 0.15)",
                                                        color: activeSection === 1 ? "#F67300" : "#111827",
                                                        boxShadow: activeSection === 1 ? "0 0 30px rgba(246, 115, 0, 0.3)" : "0 0 15px rgba(255, 255, 255, 0.05)"
                                                    }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    style={{ left: "50%", top: "0" }}
                                                    className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-[96px] lg:h-[96px] rounded-full bg-white border flex items-center justify-center pointer-events-auto"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8">
                                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <polyline points="9 15 11 17 15 13" />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>

                                            {/* Top-right node (True Scalability / 3D Box) on Last/Outer Ring */}
                                            <motion.div
                                                initial={{ rotate: 180 }}
                                                animate={{ rotate: activeSection === 3 ? 45 : 180 }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                className="absolute inset-0 rounded-full pointer-events-none"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.5, rotate: -180, x: "-50%", y: "-50%" }}
                                                    animate={{
                                                        opacity: activeSection === 3 ? 1 : (activeSection === 2 ? 0.4 : 0),
                                                        scale: activeSection === 3 ? 1.1 : 0.5,
                                                        rotate: activeSection === 3 ? -45 : -180,
                                                        x: "-50%",
                                                        y: "-50%",
                                                        borderColor: activeSection === 3 ? "rgba(246, 115, 0, 0.5)" : "rgba(255, 255, 255, 0.15)",
                                                        color: activeSection === 3 ? "#F67300" : "#111827",
                                                        boxShadow: activeSection === 3 ? "0 0 30px rgba(246, 115, 0, 0.3)" : "0 0 15px rgba(255, 255, 255, 0.05)"
                                                    }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    style={{ left: "50%", top: "0" }}
                                                    className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-[96px] lg:h-[96px] rounded-full bg-white border flex items-center justify-center pointer-events-auto"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8">
                                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>

                                            {/* Bottom node (Security by Design / Folder Lock) on Last/Outer Ring */}
                                            <motion.div
                                                initial={{ rotate: 180 }}
                                                animate={{ rotate: activeSection === 2 ? 45 : (activeSection === 3 ? -45 : 180) }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                className="absolute inset-0 rounded-full pointer-events-none"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.5, rotate: -180, x: "-50%", y: "-50%" }}
                                                    animate={{
                                                        opacity: activeSection >= 2 ? (activeSection === 2 ? 1 : 0.4) : 0,
                                                        scale: activeSection >= 2 ? (activeSection === 2 ? 1.1 : 1.0) : 0.5,
                                                        rotate: activeSection === 2 ? -45 : (activeSection === 3 ? 45 : -180),
                                                        x: "-50%",
                                                        y: "-50%",
                                                        borderColor: activeSection === 2 ? "rgba(246, 115, 0, 0.5)" : "rgba(255, 255, 255, 0.15)",
                                                        color: activeSection === 2 ? "#F67300" : "#111827",
                                                        boxShadow: activeSection === 2 ? "0 0 30px rgba(246, 115, 0, 0.3)" : "0 0 15px rgba(255, 255, 255, 0.05)"
                                                    }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    style={{ left: "50%", top: "0" }}
                                                    className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-[96px] lg:h-[96px] rounded-full bg-white border flex items-center justify-center pointer-events-auto"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8">
                                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16z" />
                                                        <rect x="12" y="10" width="8" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M14 10V8a2 2 0 0 1 4 0v2" />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Center Coirei Logo */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: activeSection >= 1 ? 1 : 0,
                                                scale: activeSection >= 1 ? 1 : 0.8
                                            }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="absolute z-10 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] flex items-center justify-center"
                                        >
                                            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(246,115,0,0.2)] bg-[#F67300]/5 mix-blend-screen"></div>
                                            <img
                                                src={coireiLogo}
                                                alt="Coirei Logo"
                                                className="w-full h-full object-contain relative z-10"
                                                style={{ imageRendering: '-webkit-optimize-contrast' }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Right Column - Dynamically reveal only active section content */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left min-h-[250px] relative">
                                    {/* Row 1 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: activeSection === 1 ? 1 : 0,
                                            y: activeSection === 1 ? 0 : 10,
                                            pointerEvents: activeSection === 1 ? "auto" : "none"
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`flex flex-col gap-4 text-left w-full ${activeSection === 1 ? "relative z-10" : "absolute inset-0 pointer-events-none"}`}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-medium text-[#F67300]">
                                            Integrated Architecture
                                        </h3>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                                            We don’t just build code; we build for visibility. Your platform is structured to be "search-engine friendly" from the first commit.
                                        </p>
                                    </motion.div>

                                    {/* Row 2 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: activeSection === 2 ? 1 : 0,
                                            y: activeSection === 2 ? 0 : 10,
                                            pointerEvents: activeSection === 2 ? "auto" : "none"
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`flex flex-col gap-4 text-left w-full ${activeSection === 2 ? "relative z-10" : "absolute inset-0 pointer-events-none"}`}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-medium text-[#F67300]">
                                            Security by Design
                                        </h3>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                                            We build with a "zero-trust" approach, implementing robust encryption, role-based access control, and proactive vulnerability scanning.
                                        </p>
                                    </motion.div>

                                    {/* Row 3 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: activeSection === 3 ? 1 : 0,
                                            y: activeSection === 3 ? 0 : 10,
                                            pointerEvents: activeSection === 3 ? "auto" : "none"
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`flex flex-col gap-4 text-left w-full ${activeSection === 3 ? "relative z-10" : "absolute inset-0 pointer-events-none"}`}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-medium text-[#F67300]">
                                            True Scalability
                                        </h3>
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                                            Our modular development approach allows your platform to grow as your user base expands, without needing a full rebuild.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- OUR SERVICES FOR INDUSTRIES SECTION --- */}
                <div className="w-full GlobalPadding max-w-[1920px] mx-auto relative">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#262626] text-center mb-24 tracking-tight leading-tight">
                            Our Service for Industries
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start w-full relative">
                            {/* Left Column: Sticky Single Header */}
                            <div className="flex flex-col w-full lg:w-1/3 gap-4 lg:sticky lg:top-[30vh] z-10">
                                <div className="w-full text-left py-4 relative">
                                    <span className="text-xl md:text-2xl font-medium tracking-wider text-gray-900">
                                        INDUSTRIES
                                    </span>
                                    {/* Divider / brand orange line underneath */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#F67300]" />
                                </div>
                            </div>

                            {/* Right Column: Tabular rows with Spotlight Fade Effect */}
                            <div className="w-full lg:w-2/3 flex flex-col border-t border-gray-200">
                                {serviceDetails.INDUSTRIES.map((item, idx) => {
                                    const isFocused = activeCard >= (idx + 1);
                                    const ref = cardRefs[idx];
                                    const IconComponent = item.icon;
                                    return (
                                        <motion.div
                                            ref={ref}
                                            key={item.title}
                                            initial={{ opacity: 0.15, y: 30 }}
                                            animate={{
                                                opacity: isFocused ? 1 : 0.15,
                                                y: 0
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="border-b border-gray-200 py-10 md:py-12 px-2 cursor-default transition-all duration-500 w-full flex gap-6 md:gap-8 items-start"
                                        >
                                            {/* Industry Icon */}
                                            <IconComponent
                                                size={32}
                                                strokeWidth={1.2}
                                                className={`transition-colors duration-500 shrink-0 mt-1 ${isFocused ? "text-gray-900" : "text-gray-300"}`}
                                            />

                                            {/* Content Block */}
                                            <div className="flex flex-col gap-3 text-left">
                                                {/* Industry Title */}
                                                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                                                    {item.title}
                                                </h4>

                                                {/* Industry Description */}
                                                <p className={`text-[15px] md:text-base font-light leading-relaxed transition-colors duration-300 ${isFocused ? "text-gray-800" : "text-gray-500"}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- HOW WE WORK SECTION --- */}
                <div className="relative w-full GlobalPadding">
                    <div className="w-full">

                        {/* TITLE */}
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#262626] text-center mb-10 md:mb-20 tracking-tight leading-tight ">
                            How We Work?
                        </h2>

                        <div ref={howWeWorkRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start w-full relative h-auto lg:h-[1800px]">

                            {/* LEFT SIDE */}
                            <div className="lg:col-span-5 text-left lg:sticky lg:top-[22vh] h-auto">
                                <h3 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-[#262626] leading-tight tracking-tight">
                                    A Transparent Process<br className="hidden lg:block" />
                                    Built for
                                    Fast & Reliable<br />
                                    Delivery.
                                </h3>
                            </div>

                            {/* RIGHT SIDE - STACKED CARDS */}
                            <div className="lg:col-span-7 w-full lg:sticky lg:top-[160px] lg:h-[320px] h-auto relative flex flex-col gap-16 lg:block">
                                {[
                                    {
                                        step: 1,
                                        title: "Requirement Deep-Dive",
                                        desc: "We analyze your business goals before we write a line of code.",
                                        tabLeft: "0%",
                                    },
                                    {
                                        step: 2,
                                        title: "Agile Sprints",
                                        desc: "We break your project into manageable 2-week sprints, providing you with functional builds at every stage.",
                                        tabLeft: "26%",
                                    },
                                    {
                                        step: 3,
                                        title: "Collaborative Communication",
                                        desc: "You get a dedicated project manager and direct access to your dev team through your preferred communication tools (Slack/Teams).",
                                        tabLeft: "52%",
                                    },
                                    {
                                        step: 4,
                                        title: "Rigorous QA",
                                        desc: "Our testing team ensures your platform is bug-free across all devices, browsers, and load conditions.",
                                        tabLeft: "78%",
                                    },
                                ].map((s, index) => (
                                    <motion.div
                                        key={s.step}
                                        className="relative lg:absolute w-full left-0 lg:top-[44px] mt-12 lg:mt-0"
                                        style={isDesktop ? {
                                            y: yOffsets[index],
                                            zIndex: 20 + index,
                                        } : {}}
                                    >
                                        {/* STEP TAB */}
                                        <div
                                            className="absolute top-[-43px] h-[44px] md:top-[-77px] md:h-[78px] z-30"
                                            style={{
                                                left: isDesktop ? s.tabLeft : "0%",
                                                width: "22%",
                                                minWidth: "120px",
                                                maxWidth: "200px",
                                            }}
                                        >
                                            <img
                                                src={cardTopCurve}
                                                alt={`Step ${s.step} Tab`}
                                                className="w-full h-full object-fill drop-shadow-[0_-1px_0_rgba(113,113,113,0.4)]"
                                            />

                                            <div className="absolute inset-0 flex items-center justify-center pt-2 md:pt-4">
                                                <span className="text-[#F67300] text-xs md:text-sm font-semibold tracking-widest">
                                                    STEP 0{s.step}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CARD */}
                                        <div className={`relative bg-gray-50 pt-10 pb-15 px-7 md:px-9 flex gap-6  backdrop-blur-md transition-all duration-500 border border-gray-200 ${isDesktop
                                            ? (s.step === 1
                                                ? "rounded-tr-[20px] rounded-b-[20px] rounded-tl-none"
                                                : s.step === 4
                                                    ? "rounded-tl-[20px] rounded-b-[20px] rounded-tr-none"
                                                    : "rounded-[20px]")
                                            : "rounded-tr-[20px] rounded-b-[20px] rounded-tl-none"
                                            }`}>

                                            <div className="w-[3px] bg-[#F67300] rounded-full shrink-0" />
                                            <div className="flex flex-col gap-2 relative z-10 text-left">
                                                <h4 className="text-lg md:text-2xl font-medium text-gray-900">
                                                    {s.title}
                                                </h4>
                                                <p className="text-gray-600 text-[14px] md:text-[17px] leading-relaxed font-light">
                                                    {s.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </main>



            <FAQSection />
            <Footer />
        </div>
    );
};

export default WebPlatformDetails;

const OfferingCard = ({ index, card, offeringsXProgress, isDesktop }: { index: number, card: any, offeringsXProgress: any, isDesktop: boolean }) => {
    const Icon = card.icon;
    return (
        <motion.div
            {...(!isDesktop ? {
                "data-ns-animate": "true",
                "data-direction": "up",
                "data-delay": index * 0.1
            } : {})}
            className="relative flex flex-col justify-between p-8 rounded-[20px] border border-gray-200 bg-gray-50 transition-all duration-500 overflow-hidden h-[320px] md:h-full w-full md:w-auto md:flex-1"
            style={{
                x: useTransform(offeringsXProgress, (v: any) => isDesktop ? `${v * index * -72}%` : `0%`),
                borderColor: "rgba(0, 0, 0, 0.1)",
                zIndex: index
            }}
        >
            {/* Content Wrapper */}
            <div className="flex flex-col h-full justify-between relative z-10">
                {/* Top Section: Icon */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center border bg-white  border-gray-200 text-[#F67300] shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Middle Section: Title & Description */}
                <div className="flex flex-col text-left justify-end h-full">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 text-left mb-3">
                        {card.title}
                    </h3>

                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-light text-left">
                        {card.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
