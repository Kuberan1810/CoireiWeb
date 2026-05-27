import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { LayoutGrid, LineChart, TrendingUp, Handshake, Network, Bot, Scan, Coins, Stethoscope, Factory, PhoneCall, Truck, Monitor, GraduationCap } from "lucide-react";

const DataDashboardBI = () => {
    useScrollAnimations();

    const processRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: processRef,
        offset: ["start end", "end start"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

    // Reveal SVG path from 0 to 1
    const curvePathLength = useTransform(smoothScroll, [0.15, 0.65], [0, 1]);

    // Animate lines height dynamically
    const line1Height = useTransform(smoothScroll, [0.25, 0.32], [0, 72]);
    const line2Height = useTransform(smoothScroll, [0.42, 0.49], [0, 68]);
    const line3Height = useTransform(smoothScroll, [0.59, 0.66], [0, 72]);

    // Animate nodes borders colors
    const circle1Color = useTransform(smoothScroll, [0, 0.25, 0.26], ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)", "#F67300"]);
    const circle2Color = useTransform(smoothScroll, [0, 0.42, 0.43], ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)", "#F67300"]);
    const circle3Color = useTransform(smoothScroll, [0, 0.59, 0.60], ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)", "#F67300"]);

    // Animate nodes text opacity and scale reveal
    const opacity1 = useTransform(smoothScroll, [0.30, 0.36], [0, 1]);
    const y1 = useTransform(smoothScroll, [0.30, 0.36], [20, 0]);

    const opacity2 = useTransform(smoothScroll, [0.47, 0.53], [0, 1]);
    const y2 = useTransform(smoothScroll, [0.47, 0.53], [20, 0]);

    const opacity3 = useTransform(smoothScroll, [0.64, 0.70], [0, 1]);
    const y3 = useTransform(smoothScroll, [0.64, 0.70], [20, 0]);

    // Scroll metrics for the new impact stats section
    const statsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: statsScroll } = useScroll({
        target: statsRef,
        offset: ["start end", "end start"]
    });
    const smoothStats = useSpring(statsScroll, { stiffness: 60, damping: 25 });

    // Curve Path animation
    const statsCurveLength = useTransform(smoothStats, [0.15, 0.75], [0, 1]);

    // Animate lines height dynamically
    const statLine1Height = useTransform(smoothStats, [0.25, 0.35], [0, 120]);
    const statLine2Height = useTransform(smoothStats, [0.40, 0.50], [0, 120]);
    const statLine3Height = useTransform(smoothStats, [0.55, 0.65], [0, 120]);
    const statLine4Height = useTransform(smoothStats, [0.70, 0.80], [0, 120]);

    // Animate nodes borders colors
    const statCircle1Color = useTransform(smoothStats, [0, 0.24, 0.25], ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)", "#F67300"]);
    const statCircle2Color = useTransform(smoothStats, [0, 0.39, 0.40], ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)", "#F67300"]);
    const statCircle3Color = useTransform(smoothStats, [0, 0.54, 0.55], ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)", "#F67300"]);
    const statCircle4Color = useTransform(smoothStats, [0, 0.69, 0.70], ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)", "#F67300"]);

    // Dropdown / fade in for the numbers & labels
    const statCol1Opacity = useTransform(smoothStats, [0.35, 0.45], [0, 1]);
    const statCol1Y = useTransform(smoothStats, [0.35, 0.45], [20, 0]);

    const statCol2Opacity = useTransform(smoothStats, [0.50, 0.60], [0, 1]);
    const statCol2Y = useTransform(smoothStats, [0.50, 0.60], [20, 0]);

    const statCol3Opacity = useTransform(smoothStats, [0.65, 0.75], [0, 1]);
    const statCol3Y = useTransform(smoothStats, [0.65, 0.75], [20, 0]);

    const statCol4Opacity = useTransform(smoothStats, [0.80, 0.90], [0, 1]);
    const statCol4Y = useTransform(smoothStats, [0.80, 0.90], [20, 0]);

    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-32 pb-6 w-full bg-[#161616] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- HEADER HERO SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full">
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
                            Unlock the Power of <span className="text-[#F67300]">AI-Driven Business Intelligence</span>
                        </h1>
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-24 font-light">
                            Coirei empowers your business with advanced analytics, helping you turn raw data into smart decisions.
                        </p>
                    </div>

                    {/* --- WHAT WE DO FOR YOU SECTION --- */}
                    <div className="flex flex-col items-center text-center w-full mb-32">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] tracking-tight mb-16">
                            What We Do for You?
                        </h2>

                        {/* HIGH-FIDELITY GRID LAYOUT */}
                        <div data-ns-animate="true" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                            {/* Card 1: Custom Dashboards */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <LayoutGrid size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Custom Dashboards
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    We design personalized dashboards that give you a clear view of your key metrics, all in real-time.
                                </p>
                            </div>

                            {/* Card 2: Real-Time Analytics */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <LineChart size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Real-Time Analytics
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    Monitor your business performance as it happens, with up-to-the-minute data streams.
                                </p>
                            </div>

                            {/* Card 3: Predictive Insights */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <TrendingUp size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Predictive Insights
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    Using AI, we forecast trends so you can stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- WHY COIREI IS BEST SECTION --- */}
                    <div className="w-full max-w-4xl mb-32 flex flex-col items-center">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] text-center mb-20 tracking-tight">
                            Why Coirei is Best?
                        </h2>

                        <div className="flex flex-col w-full border-t border-white/10">
                            {/* Row 1: AI Expertise */}
                            <div data-ns-animate="true" data-delay="0.1" className="flex flex-col py-10 border-b border-white/10 relative group">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-white/40 font-light text-lg mt-1 shrink-0">01</span>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                AI Expertise
                                            </h3>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                Our team of experienced AI specialists combines deep industry knowledge with advanced analytics to deliver intelligent, data-driven solutions.
                                            </p>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                Every insight we provide is designed to be practical, actionable, and capable of driving measurable business growth.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-white/70 shrink-0 mt-1">
                                        <Bot size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Scalable Solutions */}
                            <div data-ns-animate="true" data-delay="0.2" className="flex flex-col py-10 border-b border-white/10 relative group">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-white/40 font-light text-lg mt-1 shrink-0">02</span>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                Scalable Solutions
                                            </h3>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                Whether you are a growing startup or a large global enterprise, our solutions are built to scale alongside your business needs.
                                            </p>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                We create flexible and future-ready systems that adapt seamlessly as your data, operations, and goals evolve.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-white/70 shrink-0 mt-1">
                                        <Network size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Customer-Centric Approach */}
                            <div data-ns-animate="true" data-delay="0.3" className="flex flex-col py-10 border-b border-white/10 relative group">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-white/40 font-light text-lg mt-1 shrink-0">03</span>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-2xl md:text-3xl font-medium text-[#F67300] tracking-tight">
                                                Customer-Centric Approach
                                            </h3>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                At Coirei, we work closely with every client to understand their unique challenges, objectives, and long-term vision.
                                            </p>
                                            <p className="text-white/70 text-[15px] md:text-base leading-relaxed font-light max-w-2xl">
                                                By building tailored solutions and maintaining transparent collaboration, we ensure results that truly align with your business goals.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-white/70 shrink-0 mt-1">
                                        <Handshake size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- WORKING PROCESS SECTION --- */}
                    <div ref={processRef} className="w-full mt-32 mb-32 flex flex-col items-center select-none overflow-hidden py-16">
                        <h2 className="text-3xl md:text-5xl font-medium text-[#E3E3E0] text-center mb-24 tracking-tight leading-tight">
                            Our Working Process
                        </h2>

                        <div className="relative w-full max-w-5xl h-[450px] md:h-[400px]">
                            {/* Curved Arc SVG */}
                            <svg className="absolute inset-0 w-full h-[300px]" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="xMidYMid meet">
                                {/* Background Curve Arc */}
                                <path
                                    d="M 50 50 Q 500 240 950 100"
                                    stroke="rgba(255, 255, 255, 0.15)"
                                    strokeWidth="2.5"
                                    strokeDasharray="6 6"
                                    fill="none"
                                />

                                {/* Animated Orange Curve Arc */}
                                <motion.path
                                    d="M 50 50 Q 500 240 950 100"
                                    stroke="#F67300"
                                    strokeWidth="2.5"
                                    fill="none"
                                    style={{ pathLength: curvePathLength }}
                                />

                                {/* Node 1 Circle */}
                                <motion.circle
                                    cx="200"
                                    cy="118"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: circle1Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 2 Circle */}
                                <motion.circle
                                    cx="500"
                                    cy="192"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: circle2Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 3 Circle */}
                                <motion.circle
                                    cx="800"
                                    cy="138"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: circle3Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Vertical Line 1 */}
                                <motion.line
                                    x1="200"
                                    y1="118"
                                    x2="200"
                                    y2={useTransform(line1Height, h => 118 + h)}
                                    stroke={circle1Color}
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 2 */}
                                <motion.line
                                    x1="500"
                                    y1="192"
                                    x2="500"
                                    y2={useTransform(line2Height, h => 192 + h)}
                                    stroke={circle2Color}
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 3 */}
                                <motion.line
                                    x1="800"
                                    y1="138"
                                    x2="800"
                                    y2={useTransform(line3Height, h => 138 + h)}
                                    stroke={circle3Color}
                                    strokeWidth="2"
                                />
                            </svg>

                            {/* Content Blocks absolute aligned */}
                            {/* Step 1: Consultation */}
                            <motion.div
                                style={{ opacity: opacity1, y: y1 }}
                                className="absolute left-[10%] md:left-[12%] top-[200px] md:top-[205px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                                    Consultation
                                </h3>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                                    We listen to your challenges, understand your goals, and define a plan.
                                </p>
                            </motion.div>

                            {/* Step 2: Dashboard Design */}
                            <motion.div
                                style={{ opacity: opacity2, y: y2 }}
                                className="absolute left-[50%] top-[270px] md:top-[275px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                                    Dashboard Design
                                </h3>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                                    Our designers craft intuitive, actionable dashboards.
                                </p>
                            </motion.div>

                            {/* Step 3: Deployment and Support */}
                            <motion.div
                                style={{ opacity: opacity3, y: y3 }}
                                className="absolute left-[90%] md:left-[88%] top-[220px] md:top-[225px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-3"
                            >
                                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                                    Deployment and Support
                                </h3>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                                    We ensure smooth rollout and ongoing support, so you never miss a beat.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* --- MEASURABLE PERFORMANCE STATS SECTION --- */}
                    <div ref={statsRef} className="w-full mt-32 mb-32 flex flex-col items-center select-none overflow-hidden py-16">
                        <h2 className="text-3xl md:text-5xl font-medium text-[#E3E3E0] text-center mb-24 tracking-tight leading-tight">
                            Measurable <span className="text-[#F67300]">Impact</span> by the Numbers
                        </h2>

                        <div className="relative w-full max-w-6xl h-[450px] md:h-[400px]">
                            {/* Curved Arc SVG */}
                            <svg className="absolute inset-0 w-full h-[320px]" viewBox="0 0 1200 320" fill="none" preserveAspectRatio="xMidYMid meet">
                                {/* Background Curve Arc */}
                                <path
                                    d="M 50 100 Q 600 300 1150 150"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="2.5"
                                    strokeDasharray="6 6"
                                    fill="none"
                                />

                                {/* Animated Orange Curve Arc */}
                                <motion.path
                                    d="M 50 100 Q 600 300 1150 150"
                                    stroke="#F67300"
                                    strokeWidth="2.5"
                                    fill="none"
                                    style={{ pathLength: statsCurveLength }}
                                />

                                {/* Node 1 Circle */}
                                <motion.circle
                                    cx="270"
                                    cy="166"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: statCircle1Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 2 Circle */}
                                <motion.circle
                                    cx="490"
                                    cy="204"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: statCircle2Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 3 Circle */}
                                <motion.circle
                                    cx="710"
                                    cy="214"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: statCircle3Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Node 4 Circle */}
                                <motion.circle
                                    cx="930"
                                    cy="196"
                                    r="6"
                                    fill="#161616"
                                    style={{ stroke: statCircle4Color }}
                                    strokeWidth="3.5"
                                />

                                {/* Vertical Line 1 (Background Track) */}
                                <line
                                    x1="270"
                                    y1="166"
                                    x2="270"
                                    y2="286"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 1 (Active) */}
                                <motion.line
                                    x1="270"
                                    y1="166"
                                    x2="270"
                                    y2={useTransform(statLine1Height, h => 166 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 2 (Background Track) */}
                                <line
                                    x1="490"
                                    y1="204"
                                    x2="490"
                                    y2="324"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 2 (Active) */}
                                <motion.line
                                    x1="490"
                                    y1="204"
                                    x2="490"
                                    y2={useTransform(statLine2Height, h => 204 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 3 (Background Track) */}
                                <line
                                    x1="710"
                                    y1="214"
                                    x2="710"
                                    y2="334"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 3 (Active) */}
                                <motion.line
                                    x1="710"
                                    y1="214"
                                    x2="710"
                                    y2={useTransform(statLine3Height, h => 214 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />

                                {/* Vertical Line 4 (Background Track) */}
                                <line
                                    x1="930"
                                    y1="196"
                                    x2="930"
                                    y2="316"
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="1.5"
                                />
                                {/* Vertical Line 4 (Active) */}
                                <motion.line
                                    x1="930"
                                    y1="196"
                                    x2="930"
                                    y2={useTransform(statLine4Height, h => 196 + h)}
                                    stroke="#F67300"
                                    strokeWidth="2"
                                />
                            </svg>

                            {/* Content Blocks absolute aligned */}
                            {/* Step 1 */}
                            <motion.div
                                style={{ opacity: statCol1Opacity, y: statCol1Y }}
                                className="absolute left-[22.5%] top-[296px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-2"
                            >
                                <span className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                                    $1.2B+
                                </span>
                                <span className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[200px]">
                                    Total Capital Deployed
                                </span>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                style={{ opacity: statCol2Opacity, y: statCol2Y }}
                                className="absolute left-[40.83%] top-[334px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-2"
                            >
                                <span className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                                    100+
                                </span>
                                <span className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[200px]">
                                    Custom Dashboards
                                </span>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                style={{ opacity: statCol3Opacity, y: statCol3Y }}
                                className="absolute left-[59.16%] top-[344px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-2"
                            >
                                <span className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                                    50M+
                                </span>
                                <span className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[200px]">
                                    Data Points Daily
                                </span>
                            </motion.div>

                            {/* Step 4 */}
                            <motion.div
                                style={{ opacity: statCol4Opacity, y: statCol4Y }}
                                className="absolute left-[77.5%] top-[326px] w-[200px] md:w-[240px] -ml-[100px] md:-ml-[120px] text-center flex flex-col items-center gap-2"
                            >
                                <span className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                                    99%
                                </span>
                                <span className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-[200px]">
                                    Client Satisfaction
                                </span>
                            </motion.div>
                        </div>
                    </div>

                       {/* Header Section */}
                        <div className="flex flex-col items-center text-center px-6 mb-3">
                            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-tight mb-6 max-w-4xl tracking-tight text-center">
                               <span className="text-[#F67300]">Industries </span>
                               <span className="text-white">We Serve</span>
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
                                        className="flex items-center gap-4 sm:gap-6 px-5 py-5 bg-[#1E1E1E] border-[0.5px] border-white/15 rounded-[12px] w-full max-w-[420px] min-h-[96px] sm:min-h-[110px] h-auto cursor-pointer transition-all hover:scale-[1.02] hover:border-[#F67300]/30"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[26px] bg-white/5 border border-white/15 flex items-center justify-center text-[#F67300] shrink-0">
                                            {item.icon}
                                        </div>
                                        <span className="text-white text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

              
            </main>
            <Footer />
        </>
    );
};

export default DataDashboardBI;
