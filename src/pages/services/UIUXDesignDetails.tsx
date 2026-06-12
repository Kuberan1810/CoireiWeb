import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { Globe, Contact, Image } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TestimonialSection from "../Home/sections/Testimonal";
import FAQSection from "../Home/sections/FAQSection";

gsap.registerPlugin(ScrollTrigger);

const UIUXDesignDetails = () => {
    useScrollAnimations();

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

            <main className="min-h-screen pt-32 pb-20 w-full bg-[#161616] flex flex-col items-center overflow-x-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center w-full overflow-x-hidden">

                    {/* --- HEADER HERO SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full mb-20">
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
                            Elevate Your Brand with <span className="text-[#F67300]">Exceptional UX/UI Design</span>
                        </h1>
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mb-12 font-light">
                            Unlock the Potential of Exceptional UX/UI Design to Elevate Your Brand's Digital Presence
                        </p>
                    </div>

                    {/* --- OUR UX/UI APPROACH --- */}
                    <div className="flex flex-col items-center text-center w-full mb-10">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-[#E3E3E0] tracking-tight mb-6">
                            Our UX/UI Approach
                        </h2>
                        <p data-ns-animate="true" className="text-white/70 text-base md:text-lg max-w-4xl text-center mb-24 font-light leading-relaxed">
                            We focus on human-centered design, ensuring every interaction is seamless and every visual element reflects your brand's essence.
                        </p>

                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16">
                            What we do for your brand?
                        </h2>

                        {/* HIGH-FIDELITY GRID LAYOUT */}
                        <div data-ns-animate="true" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                            {/* Card 1: Web Design */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Globe size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Web Design
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    We design personalized dashboards that give you a clear view of your key metrics, all in real-time.
                                </p>
                            </div>
                            {/* Card 2: Brand Identity */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Contact size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Brand Identity
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    Monitor your business performance as it happens, with up-to-the-minute data streams.
                                </p>
                            </div>

                            {/* Card 3: Logo & Graphics */}
                            <div className="bg-[#1A1A1A] border border-white/10 rounded-[24px] p-8 md:p-10 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 min-h-[380px] flex flex-col justify-start text-center items-center group cursor-default">
                                <div className="w-[72px] h-[72px] rounded-full bg-[#161616] border border-white/10 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110">
                                    <Image size={28} className="text-[#E3E3E0]" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight transition-colors">
                                    Logo & Graphics
                                </h3>
                                <p className="text-white/50 text-[15px] leading-relaxed font-light px-2">
                                    Using AI, we forecast trends so you can stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div> {/* Close parent max-w-1440px container to let Statics go full screen */}

                    {/* --- STATICS SECTION --- */}
                    <div className="w-full flex flex-col items-center mt-24 mb-16 relative statics-section">
                        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center w-full">
                            <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-20 text-center">
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
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card1Ref} style={{ left: "11.5%", top: "70%" }} className="absolute z-10 w-[280px]">
                                <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        UX/UI designs delivered to 60+ industries, accelerating user engagement by up to 40%.
                                    </p>
                                </div>
                            </div>

                            {/* MILESTONE 2: More than 150 logos built */}
                            <div ref={dot2Ref} style={{ left: "48%", top: "17%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card2Ref} style={{ left: "37.5%", top: "31%" }} className="absolute z-10 w-[230px]">
                                <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        More than 150 logos built, amplifying brand recognition worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* MILESTONE 3: Over 120 websites designed */}
                            <div ref={dot3Ref} style={{ left: "84.5%", top: "1%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00] transition-transform duration-300 hover:scale-125" />
                            </div>
                            <div ref={card3Ref} style={{ left: "74%", top: "16%" }} className="absolute z-10 w-[210px]">
                                <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 hover:bg-[#222222] hover:border-white/20 transition-all duration-300 shadow-xl cursor-default">
                                    <p className="text-white/70 text-sm leading-relaxed font-light">
                                        Over 120 websites designed for top-tier brands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE VERTICAL TIMELINE */}
                        <div className="md:hidden w-full max-w-md px-6 mt-6">
                            <div className="relative pl-8 border-l-2 border-dashed border-[#FF7A00]/30 ml-4 flex flex-col gap-12 py-2">
                                {/* Mobile Item 1 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-[#222222] hover:border-white/20 shadow-lg">
                                        <p className="text-white/70 text-sm leading-relaxed font-light">
                                            UX/UI designs delivered to 60+ industries, accelerating user engagement by up to 40%.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Item 2 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-[#222222] hover:border-white/20 shadow-lg">
                                        <p className="text-white/70 text-sm leading-relaxed font-light">
                                            More than 150 logos built, amplifying brand recognition worldwide.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Item 3 */}
                                <div className="relative flex flex-col items-start mobile-timeline-item">
                                    {/* Dot */}
                                    <div className="absolute left-[-42px] top-1.5 w-5 h-5 bg-[#FF7A00] rounded-full border-4 border-[#161616] ring-2 ring-[#FF7A00]/50 shadow-[0_0_10px_#FF7A00]" />
                                    {/* Card */}
                                    <div className="bg-[#1A1A1A] border border-white/10 rounded-[12px] p-5 w-full transition-all duration-300 hover:bg-[#222222] hover:border-white/20 shadow-lg">
                                        <p className="text-white/70 text-sm leading-relaxed font-light">
                                            Over 120 websites designed for top-tier brands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Close Statics section wrapper */}

                {/* Re-open parent max-w-1440px container for Why Choose Us */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center w-full">
                    {/* --- WHY CHOOSE US --- */}
                    <div className="w-full flex flex-col items-center mt-28 mb-10 max-w-6xl">
                        <h2 data-ns-animate="true" className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-20 text-center">
                            Why Choose Us?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 w-full">
                            {/* Card 1 */}
                            <div className="border-t border-b border-white/10 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.1">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#E3E3E0] text-3xl font-medium mb-3 tracking-tight">01</span>
                                    <h3 className="text-xl font-medium text-white mb-4 tracking-tight">Human-Centered Design</h3>
                                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light">
                                        We place your users at the heart of every design, ensuring each interaction is natural and engaging.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="border-b border-white/10 md:border-t md:border-b py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.2">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#E3E3E0] text-3xl font-medium mb-3 tracking-tight">02</span>
                                    <h3 className="text-xl font-medium text-white mb-4 tracking-tight">Innovative Aesthetics</h3>
                                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light">
                                        Our designs are modern and bold, reflecting the latest trends to keep your brand ahead.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="border-b border-white/10 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.3">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#E3E3E0] text-3xl font-medium mb-3 tracking-tight">03</span>
                                    <h3 className="text-xl font-medium text-white mb-4 tracking-tight">Brand Consistency</h3>
                                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light">
                                        We ensure every visual element aligns, creating a unified brand presence across all platforms.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="border-b border-white/10 py-10 flex flex-col justify-center w-full" data-ns-animate="true" data-delay="0.4">
                                <div className="border-l-2 border-[#FF7A00] pl-6 flex flex-col items-start text-left">
                                    <span className="text-[#E3E3E0] text-3xl font-medium mb-3 tracking-tight">04</span>
                                    <h3 className="text-xl font-medium text-white mb-4 tracking-tight">Measurable Impact</h3>
                                    <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light">
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
