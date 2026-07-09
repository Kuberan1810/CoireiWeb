import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { Globe, Contact, Image } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TestimonialSection from "../Home/sections/backup/Testimonal";
import FAQSection from "../Home/sections/backup/FAQSection";
import Sky from "../../assets/images/homepage/sky.svg";
import HoverParticles from "../../component/HoverParticles";
import { useNavigate, useNavigation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const UIUXDesignDetails = () => {
    useScrollAnimations();

    const navigate = useNavigate();

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const fullText = "Elevate Your Brand with Exceptional UX/UI Design";
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

    const clipRectRef = useRef<SVGRectElement>(null);
    const dot1Ref = useRef<HTMLDivElement>(null);
    const dot2Ref = useRef<HTMLDivElement>(null);
    const dot3Ref = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (clipRectRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".statics-section",
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1
                }
            });

            // Initial states
            gsap.set(clipRectRef.current, {
                attr: { x: 1370, width: 0 }
            });

            gsap.set([dot1Ref.current, dot2Ref.current, dot3Ref.current, card1Ref.current, card2Ref.current, card3Ref.current], {
                opacity: 0,
                scale: 0.8
            });

            // Reveal from right to left
            tl.to(clipRectRef.current, {
                attr: {
                    x: 0,
                    width: 1370
                },
                duration: 2.2,
                ease: "none"
            }, 0);

            // Staggered dot + card fade-ins timed to match the line progression
            tl.to([dot3Ref.current, card3Ref.current], {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            }, 0.25); // Fades in quickly as the curve starts on the right

            tl.to([dot2Ref.current, card2Ref.current], {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            }, 0.9); // Fades in as the curve reaches the middle

            tl.to([dot1Ref.current, card1Ref.current], {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            }, 1.65); // Fades in as the curve finishes on the left

            // Mobile timeline items staggered animation
            gsap.utils.toArray<HTMLElement>(".mobile-timeline-item").forEach((item) => {
                gsap.fromTo(item,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        }
    }, []);

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

                    {/* Three.js Background Container */}
                    {/* <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isTypingDone ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
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
                                const baseText = "Elevate Your Brand with ";
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
                            Unlock the Potential of Exceptional UX/UI Design to Elevate Your Brand's Digital Presence
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

                <div className="max-w-[1440px] mx-auto flex flex-col items-center w-full GlobalPadding">

                    {/* --- OUR UX/UI APPROACH --- */}
                    <div className="flex flex-col items-center text-center w-full ">
                        {/* <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#262626] tracking-tight">
                            Our UX/UI Approach
                        </h2>
                        <p data-ns-animate="true" className="text-gray-600 text-base md:text-lg mb-5 max-w-4xl text-center font-light leading-relaxed">
                            We focus on human-centered design, ensuring every interaction is seamless and every visual element reflects your brand's essence.
                        </p> */}

                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-16">
                            What we do for your brand?
                        </h2>

                        {/* HIGH-FIDELITY GRID LAYOUT */}
                        <div data-ns-animate="true" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                            {/* Card 1: Web Design */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Globe size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Web Design
                                </h3>
                                <p className="text-gray-900/50 text-[15px] leading-relaxed font-light px-2">
                                    We design personalized dashboards that give you a clear view of your key metrics, all in real-time.
                                </p>
                            </div>
                            {/* Card 2: Brand Identity */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Contact size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Brand Identity
                                </h3>
                                <p className="text-gray-900/50 text-[15px] leading-relaxed font-light px-2">
                                    Monitor your business performance as it happens, with up-to-the-minute data streams.
                                </p>
                            </div>

                            {/* Card 3: Logo & Graphics */}
                            <div className="bg-white border border-gray-200 rounded-[24px] p-8 md:p-10 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-white  border border-gray-200 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Image size={28} className="text-[#262626]" />
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight transition-colors">
                                    Logo & Graphics
                                </h3>
                                <p className="text-gray-900/50 text-[15px] leading-relaxed font-light px-2">
                                    Using AI, we forecast trends so you can stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div> {/* Close parent max-w-1440px container to let Statics go full screen */}

                    {/* --- STATICS SECTION --- */}
                    <div className="w-full flex flex-col items-center GlobalPadding relative statics-section">
                        <div className="max-w-[1440px] flex flex-col items-center w-full ">
                            <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-10 text-center">
                                Statics
                            </h2>
                        </div>

                        {/* DESKTOP CURVED TIMELINE */}
                        <div className="hidden md:block w-full h-[550px] relative mt-10 px-12 lg:px-24">
                            {/* SVG Bezier Curve from products assets: curveline.svg */}
                            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 1370 766" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <defs>
                                    <clipPath id="reveal-clip">
                                        <rect ref={clipRectRef} x="1370" y="0" width="0" height="766" />
                                    </clipPath>
                                </defs>
                                <path
                                    clipPath="url(#reveal-clip)"
                                    d="M1368.95 4.23385C1368.98 3.06769 1369.02 1.90153 1369.05 0.735367C1341.3 -0.0541353 1313.36 -0.207732 1285.56 0.273834C791.913 6.31778 256.955 226.882 33.9696 689.375C21.6255 714.506 10.4529 739.622 0 765.695C0 765.695 0 765.695 0 765.695C10.507 739.644 21.7321 714.553 34.1266 689.453C258.078 227.551 792.825 8.62964 1285.61 3.5984C1313.37 3.17597 1341.26 3.38761 1368.95 4.23385Z"
                                    fill="#F67300"
                                />
                            </svg>

                            {/* MILESTONE 1: UX/UI designs delivered to 60+ industries */}
                            <div ref={dot1Ref} style={{ left: "11.5%", top: "65%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card1Ref} style={{ left: "11.5%", top: "70%" }} className="absolute z-10 w-[280px]">
                                <div className="bg-white border border-gray-200 rounded-[12px] p-5 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        UX/UI designs delivered to 60+ industries, accelerating user engagement by up to 40%.
                                    </p>
                                </div>
                            </div>

                            {/* MILESTONE 2: More than 150 logos built */}
                            <div ref={dot2Ref} style={{ left: "48%", top: "17%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card2Ref} style={{ left: "37.5%", top: "31%" }} className="absolute z-10 w-[230px]">
                                <div className="bg-white border border-gray-200 rounded-[12px] p-5 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        More than 150 logos built, amplifying brand recognition worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* MILESTONE 3: Over 120 websites designed */}
                            <div ref={dot3Ref} style={{ left: "84.5%", top: "1%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card3Ref} style={{ left: "74%", top: "16%" }} className="absolute z-10 w-[210px]">
                                <div className="bg-white border border-gray-200 rounded-[12px] p-5 hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        Over 120 websites designed for top-tier brands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE VERTICAL TIMELINE */}
                        <div className="md:hidden w-full max-w-md ps">
                            <div className="relative pl-8 border-l-2 border-dashed border-[#FF7A00]/30 ml-4 flex flex-col gap-12 py-2">
                                {/* Mobile Item 1 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-white border border-gray-200 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-200 shadow-lg">
                                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                                            UX/UI designs delivered to 60+ industries, accelerating user engagement by up to 40%.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Item 2 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-white border border-gray-200 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-200 shadow-lg">
                                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                                            More than 150 logos built, amplifying brand recognition worldwide.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Item 3 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-white ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-white border border-gray-200 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-200 shadow-lg">
                                        <p className="text-gray-600 text-sm leading-relaxed font-light">
                                            Over 120 websites designed for top-tier brands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Close Statics section wrapper */}

                {/* Re-open parent max-w-1440px container for Why Choose Us */}
                <div className="max-w-[1440px] flex flex-col items-center w-full">
                    {/* --- WHY CHOOSE US --- */}
                    <div className="w-full flex flex-col items-center max-w-6xl">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-6 text-center">
                            Why Choose Us?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 w-full">
                            {/* Card 1 */}
                            <div className="border-t border-b border-gray-200 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.1">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#262626] text-3xl font-medium mb-3 tracking-tight">01</span>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Human-Centered Design</h3>
                                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-light">
                                        We place your users at the heart of every design, ensuring each interaction is natural and engaging.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="border-b border-gray-200 md:border-t md:border-b py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.2">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#262626] text-3xl font-medium mb-3 tracking-tight">02</span>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Innovative Aesthetics</h3>
                                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-light">
                                        Our designs are modern and bold, reflecting the latest trends to keep your brand ahead.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="border-b border-gray-200 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.3">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#262626] text-3xl font-medium mb-3 tracking-tight">03</span>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Brand Consistency</h3>
                                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-light">
                                        We ensure every visual element aligns, creating a unified brand presence across all platforms.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="border-b border-gray-200 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.4">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#262626] text-3xl font-medium mb-3 tracking-tight">04</span>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">Measurable Impact</h3>
                                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-light">
                                        We focus on designs that drive results—boosting user engagement, brand loyalty, and conversions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TestimonialSection />
                <FAQSection />

            </main>
            <Footer />
        </>
    );
};

export default UIUXDesignDetails;
