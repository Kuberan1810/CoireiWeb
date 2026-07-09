
import { use, useEffect, useState } from "react";
import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import FAQSection from "../Home/sections/backup/FAQSection";
import TestimonialSection from "../Home/sections/backup/Testimonal";
import { LayoutGrid, LineChart, TrendingUp, Handshake, Network, Bot, Scan, Coins, Stethoscope, Factory, PhoneCall, Truck, Monitor, GraduationCap } from "lucide-react";
import Sky from "../../assets/images/homepage/sky.svg";
import HoverParticles from "../../component/HoverParticles";
import { useNavigate } from "react-router-dom";

const DataDashboardBI = () => {
    useScrollAnimations();

    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const fullText = "Unlock the Power of AI-Driven Business Intelligence";
    const [displayedText, setDisplayedText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (typingIndex < fullText.length) {
            const delay = typingIndex === 0 ? 1000 : 30;
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[typingIndex]);
                setTypingIndex(typingIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else {
            setIsTypingDone(true);
        }
    }, [typingIndex, fullText]);

    // Time-linked continuous animation progress for Our Working Process (3s duration, repeats in a very fast loop)
    const processAnimProgress = useMotionValue(0);
    useEffect(() => {
        const controls = animate(processAnimProgress, 1, {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5
        });
        return () => controls.stop();
    }, [processAnimProgress]);

    // Reveal SVG path from 0 to 1
    const curvePathLength = useTransform(processAnimProgress, [0.10, 0.70], [0, 1]);

    // Animate lines height dynamically (aligned to baseline Y = 260px for all 3 nodes)
    const line1Height = useTransform(processAnimProgress, [0.19, 0.34], [0, 159]); // Node 1 (Consultation)
    const line2Height = useTransform(processAnimProgress, [0.40, 0.55], [0, 70]);  // Node 2 (Dashboard Design)
    const line3Height = useTransform(processAnimProgress, [0.61, 0.76], [0, 125]); // Node 3 (Deployment and Support)

    // Animate nodes borders colors
    const circle1Color = useTransform(processAnimProgress, [0, 0.18, 0.19], ["transparent", "transparent", "#F67300"]);
    const circle2Color = useTransform(processAnimProgress, [0, 0.39, 0.40], ["transparent", "transparent", "#F67300"]);
    const circle3Color = useTransform(processAnimProgress, [0, 0.60, 0.61], ["transparent", "transparent", "#F67300"]);

    // Animate nodes fill colors (transparent to background color)
    const circle1Fill = useTransform(processAnimProgress, [0, 0.18, 0.19], ["transparent", "transparent", "#F67300"]);
    const circle2Fill = useTransform(processAnimProgress, [0, 0.39, 0.40], ["transparent", "transparent", "#F67300"]);
    const circle3Fill = useTransform(processAnimProgress, [0, 0.60, 0.61], ["transparent", "transparent", "#F67300"]);

    // Animate nodes text opacity and scale reveal
    const opacity1 = useTransform(processAnimProgress, [0.34, 0.49], [0, 1]);
    const y1 = useTransform(processAnimProgress, [0.34, 0.49], [20, 0]);

    const opacity2 = useTransform(processAnimProgress, [0.55, 0.70], [0, 1]);
    const y2 = useTransform(processAnimProgress, [0.55, 0.70], [20, 0]);

    const opacity3 = useTransform(processAnimProgress, [0.76, 0.91], [0, 1]);
    const y3 = useTransform(processAnimProgress, [0.76, 0.91], [20, 0]);


    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen w-full bg-white flex flex-col items-center overflow-x-hidden">
                {/* --- HERO SECTION --- */}
                <section className="group relative w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden pt-36 pb-20">
                    {/* Sky Background with Parallax */}
                    <div
                        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-[600ms] ease-out"
                        style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) scale(1.05)` }}
                    >
                        <img src={Sky} alt="sky background" className="w-full h-full object-cover" />
                    </div>

                    {/* Cloud Animation with Parallax */}
                    <div
                        className="clouds transition-transform duration-[400ms] ease-out"
                        style={{ transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px) scale(1.1)` }}
                    >
                        <div className="cloud-layer clouds-1"></div>
                        <div className="cloud-layer clouds-2"></div>
                        <div className="cloud-layer clouds-3"></div>
                    </div>

                    {/* Three.js Background Container
                    <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isTypingDone ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                        <HoverParticles className="absolute inset-0 w-full h-full pointer-events-none opacity-30" />
                    </div> */}

                    {/* Welcome Section */}
                    <div className="relative z-10 flex flex-col items-center w-full px-6 md:px-10 text-center max-w-[1440px] mx-auto">
                        <style>{`
                            @keyframes terminalBlink {
                                0%, 49% { opacity: 1; }
                                50%, 100% { opacity: 0; }
                            }
                            .cursor-blink {
                                animation: terminalBlink 1s infinite;
                            }

                            @keyframes clouds-loop-1 { to { background-position: -1000px 0; } }
                            @keyframes clouds-loop-2 { to { background-position: -1000px 0; } }
                            @keyframes clouds-loop-3 { to { background-position: -1579px 0; } }

                            .clouds {
                                opacity: 0.6;
                                pointer-events: none;
                                position: absolute;
                                overflow: hidden;
                                top: 0; left: 0; right: 0;
                                height: 100%;
                                z-index: 1;
                            }

                            .cloud-layer {
                                background-repeat: repeat-x;
                                position: absolute;
                                top: 0; right: 0; left: 0;
                                height: 500px;
                                filter: brightness(0) invert(1);
                            }

                            .clouds-1 {
                                background-image: url("https://s.cdpn.io/15514/clouds_2.png");
                                animation: clouds-loop-1 20s infinite linear;
                            }

                            .clouds-2 {
                                background-image: url("https://s.cdpn.io/15514/clouds_1.png");
                                animation: clouds-loop-2 15s infinite linear;
                            }

                            .clouds-3 {
                                background-image: url("https://s.cdpn.io/15514/clouds_3.png");
                                animation: clouds-loop-3 17s infinite linear;
                            }
                        `}</style>

                        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tight text-center leading-tight text-gray-900 max-w-5xl mb-6 min-h-[1.2em]">
                            {(() => {
                                const baseText = "Unlock the Power of ";
                                if (displayedText.length <= baseText.length) {
                                    return displayedText;
                                } else {
                                    const firstPart = displayedText.substring(0, baseText.length);
                                    const secondPart = displayedText.substring(baseText.length);
                                    return (
                                        <>
                                            {firstPart}
                                            <span className="text-[#F67300]">{secondPart}</span>
                                        </>
                                    );
                                }
                            })()}
                            <span className="inline-block w-[3px] h-[1em] bg-gradient-to-r from-orange-500 to-amber-400 ml-2 cursor-blink align-middle"></span>
                        </h1>
                        <p className={`text-[#5B6280] text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Coirei empowers your business with advanced analytics, helping you turn raw data into smart decisions.
                        </p>

                        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full transition-all duration-1000 delay-300 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            {/* <button
                                type="button"
                                className="flex items-center justify-center gap-2 bg-[#ff7b00] hover:bg-[#ff8b17] text-white px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer duration-300 shadow-[0_4px_14px_rgba(255,123,0,0.3)]"
                            >
                                Explore Our Products
                            </button> */}
                            <button
                                type="button"
                                onClick={() => navigate("/contact")}
                                className="flex items-center justify-center gap-2 bg-[#ff7b00] hover:bg-[#ff8b17] text-white border! border-[#E5E5E5]! px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer duration-300"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>

                <div className="max-w-[1440px] flex flex-col items-center w-full overflow-x-hidden GlobalPadding">

                    {/* --- WHAT WE DO FOR YOU SECTION --- */}
                    <div className="flex flex-col items-center text-center w-full ">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#262626] tracking-tight mb-16">
                            What We Do for You?
                        </h2>

                        {/* HIGH-FIDELITY GRID LAYOUT */}
                        <div data-ns-animate="true" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                            {/* Card 1: Custom Dashboards */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <LayoutGrid size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Custom Dashboards
                                </h3>
                                <p className="text-gray-900/50 text-[16px] leading-relaxed font-light px-2">
                                    We design personalized dashboards that give you a clear view of your key metrics, all in real-time.
                                </p>
                            </div>

                            {/* Card 2: Real-Time Analytics */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <LineChart size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Real-Time Analytics
                                </h3>
                                <p className="text-gray-900/50 text-[16px] leading-relaxed font-light px-2">
                                    Monitor your business performance as it happens, with up-to-the-minute data streams.
                                </p>
                            </div>

                            {/* Card 3: Predictive Insights */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <TrendingUp size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Predictive Insights
                                </h3>
                                <p className="text-gray-900/50 text-[16px] leading-relaxed font-light px-2">
                                    Using AI, we forecast trends so you can stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- WHY COIREI IS BEST SECTION --- */}
                    <div className="w-full max-w-4xl flex flex-col items-center GlobalPadding">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#262626] text-center mb-6 tracking-tight">
                            Why Coirei is Best?
                        </h2>

                        <div className="flex flex-col w-full border-t border-gray-200">
                            {/* Row 1: AI Expertise */}
                            {/* Row 1: AI Expertise */}
                            <div data-ns-animate="true" data-delay="0.1" onClick={() => setOpenIndex(openIndex === 0 ? null : 0)} className="flex flex-col py-10 border-b border-gray-200 relative group cursor-pointer">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-gray-400 font-light text-lg mt-1 shrink-0">01</span>
                                        <div className={`flex flex-col transition-all duration-500 ${openIndex === 0 ? 'gap-4' : 'gap-0 lg:group-hover:gap-4'}`}>
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                AI Expertise
                                            </h3>
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-4 ${openIndex === 0 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:opacity-100'}`}>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    Our team of experienced AI specialists combines deep industry knowledge with advanced analytics to deliver intelligent, data-driven solutions.
                                                </p>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    Every insight we provide is designed to be practical, actionable, and capable of driving measurable business growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 shrink-0 mt-1">
                                        <Bot size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Scalable Solutions */}
                            <div data-ns-animate="true" data-delay="0.2" onClick={() => setOpenIndex(openIndex === 1 ? null : 1)} className="flex flex-col py-10 border-b border-gray-200 relative group cursor-pointer">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-gray-400 font-light text-lg mt-1 shrink-0">02</span>
                                        <div className={`flex flex-col transition-all duration-500 ${openIndex === 1 ? 'gap-4' : 'gap-0 lg:group-hover:gap-4'}`}>
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                Scalable Solutions
                                            </h3>
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-4 ${openIndex === 1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:opacity-100'}`}>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    Whether you are a growing startup or a large global enterprise, our solutions are built to scale alongside your business needs.
                                                </p>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    We create flexible and future-ready systems that adapt seamlessly as your data, operations, and goals evolve.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 shrink-0 mt-1">
                                        <Network size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Customer-Centric Approach */}
                            <div data-ns-animate="true" data-delay="0.3" onClick={() => setOpenIndex(openIndex === 2 ? null : 2)} className="flex flex-col py-10 border-b border-gray-200 relative group cursor-pointer">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-gray-400 font-light text-lg mt-1 shrink-0">03</span>
                                        <div className={`flex flex-col transition-all duration-500 ${openIndex === 2 ? 'gap-4' : 'gap-0 lg:group-hover:gap-4'}`}>
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                Customer-Centric Approach
                                            </h3>
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-4 ${openIndex === 2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:opacity-100'}`}>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    At Coirei, we work closely with every client to understand their unique challenges, objectives, and long-term vision.
                                                </p>
                                                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                    By building tailored solutions and maintaining transparent collaboration, we ensure results that truly align with your business goals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 shrink-0 mt-1">
                                        <Handshake size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- WORKING PROCESS SECTION --- */}
                    <div className="w-full GlobalPadding flex flex-col items-center select-none overflow-visible">
                        <h2 className="text-3xl md:text-5xl font-medium text-[#262626] text-center mb-24 tracking-tight leading-tight">
                            Our Working Process
                        </h2>

                        <div className="relative w-full max-w-none aspect-[1000/300] hidden md:block">
                            {/* Curved Arc SVG */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
                                {/* Background Curve Arc */}
                                <path
                                    d="M 50 70 Q 500 290 950 110"
                                    stroke="transparent"
                                    strokeWidth="2.5"
                                    fill="none"
                                />

                                {/* Animated Orange Curve Arc */}
                                <motion.path
                                    d="M 50 70 Q 500 290 950 110"
                                    stroke="#F67300"
                                    strokeWidth="2.5"
                                    fill="none"
                                    style={{ pathLength: curvePathLength }}
                                />

                                {/* Node 1 Circle (Consultation) */}
                                <motion.circle
                                    cx="120"
                                    cy="101"
                                    r="6"
                                    style={{ stroke: circle1Color, fill: circle1Fill }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 2 Circle (Dashboard Design) */}
                                <motion.circle
                                    cx="500"
                                    cy="190"
                                    r="6"
                                    style={{ stroke: circle2Color, fill: circle2Fill }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 3 Circle (Deployment and Support) */}
                                <motion.circle
                                    cx="880"
                                    cy="135"
                                    r="6"
                                    style={{ stroke: circle3Color, fill: circle3Fill }}
                                    strokeWidth="3.5"
                                />

                                {/* Vertical Line 1 (Background Track - Consultation) */}
                                <line
                                    x1="120"
                                    y1="101"
                                    x2="120"
                                    y2="260"
                                    stroke="transparent"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 1 (Active) */}
                                <motion.line
                                    x1="120"
                                    y1="101"
                                    x2="120"
                                    y2={useTransform(line1Height, h => 101 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 2 (Background Track - Dashboard Design) */}
                                <line
                                    x1="500"
                                    y1="190"
                                    x2="500"
                                    y2="260"
                                    stroke="transparent"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 2 (Active) */}
                                <motion.line
                                    x1="500"
                                    y1="190"
                                    x2="500"
                                    y2={useTransform(line2Height, h => 190 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 3 (Background Track - Deployment and Support) */}
                                <line
                                    x1="880"
                                    y1="135"
                                    x2="880"
                                    y2="260"
                                    stroke="transparent"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 3 (Active) */}
                                <motion.line
                                    x1="880"
                                    y1="135"
                                    x2="880"
                                    y2={useTransform(line3Height, h => 135 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />
                            </svg>

                            {/* Content Blocks absolute aligned */}
                            {/* Step 1: Consultation */}
                            <motion.div
                                style={{ opacity: opacity1, y: y1 }}
                                className="absolute left-[12%] top-[86.67%] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tight">
                                    Consultation
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                                    We listen to your challenges, understand your goals, and define a plan.
                                </p>
                            </motion.div>

                            {/* Step 2: Dashboard Design */}
                            <motion.div
                                style={{ opacity: opacity2, y: y2 }}
                                className="absolute left-[50%] top-[86.67%] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tight">
                                    Dashboard Design
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                                    Our designers craft intuitive, actionable dashboards.
                                </p>
                            </motion.div>

                            {/* Step 3: Deployment and Support */}
                            <motion.div
                                style={{ opacity: opacity3, y: y3 }}
                                className="absolute left-[88%] top-[86.67%] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tight">
                                    Deployment and Support
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                                    We ensure smooth rollout and ongoing support, so you never miss a beat.
                                </p>
                            </motion.div>
                        </div>

                        {/* Mobile view (vertical list) */}
                        <div className="flex flex-col gap-12 w-full px-6 md:hidden">
                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full border-2 border-[#F67300] flex items-center justify-center text-[#F67300] font-semibold text-lg mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2">
                                    Consultation
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
                                    We listen to your challenges, understand your goals, and define a plan.
                                </p>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full border-2 border-[#F67300] flex items-center justify-center text-[#F67300] font-semibold text-lg mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2">
                                    Dashboard Design
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
                                    Our designers craft intuitive, actionable dashboards.
                                </p>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full border-2 border-[#F67300] flex items-center justify-center text-[#F67300] font-semibold text-lg mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-2">
                                    Deployment and Support
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">
                                    We ensure smooth rollout and ongoing support, so you never miss a beat.
                                </p>
                            </motion.div>
                        </div>
                    </div>


                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center GlobalPadding">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-tight max-w-4xl tracking-tight text-center">
                            <span className="text-gray-900">Industries We Serve</span>
                        </h2>
                    </div>

                    {/* Industries Grid */}
                    <div className="flex justify-center px-6 py-10 w-full max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
                            {[
                                { name: "E-Commerce & Retail", icon: <Scan size={20} /> },
                                { name: "Finance & Banking", icon: <Coins size={20} /> },
                                { name: "Healthcare & Pharmaceuticals", icon: <Stethoscope size={20} /> },
                                { name: "Manufacturing & Supply Chain", icon: <Factory size={20} /> },
                                { name: "Telecommunications", icon: <PhoneCall size={20} /> },
                                { name: "Logistics & Transportation", icon: <Truck size={20} /> },
                                { name: "SaaS & Digital Agencies", icon: <Monitor size={20} /> },
                                { name: "Education", icon: <GraduationCap size={20} /> },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: (idx % 8) * 0.08 }}
                                    className="flex items-center gap-4 sm:gap-6 px-5 py-5 bg-white border-[0.5px] border-gray-200 rounded-[12px] w-full max-w-[420px] min-h-[96px] sm:min-h-[110px] h-auto cursor-pointer transition-all hover:scale-[1.02] hover:border-[#F67300]/30"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[26px] bg-gray-50 border border-gray-200 flex items-center justify-center text-[#F67300] shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-900 text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- CLIENT TESTIMONIALS SECTION --- */}
                <TestimonialSection />
                <FAQSection />

            </main>
            <Footer />
        </>
    );
};

export default DataDashboardBI;
