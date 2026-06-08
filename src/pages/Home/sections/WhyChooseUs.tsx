import { useEffect, useRef } from "react";
import { Lightbulb, BarChart2, DollarSign } from "lucide-react";
import localGsap from "gsap";
import localScrollTrigger from "gsap/ScrollTrigger";

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
    {
        icon: <Lightbulb size={120} strokeWidth={0.5} className="text-white/80 group-hover:text-white transition-colors duration-300" />,
        title: "Industry-Leading Solutions",
        description: "Delivering top-tier digital products built with precision and modern technology.",
        index: "01",
    },
    {
        icon: <BarChart2 size={120} strokeWidth={0.5} className="text-white/80 group-hover:text-white transition-colors duration-300" />,
        title: "AI-Driven Innovation",
        description: "Smart AI-powered systems to automate processes and drive business efficiency.",
        index: "02",
    },
    {
        icon: <DollarSign size={120} strokeWidth={0.5} className="text-white/80 group-hover:text-white transition-colors duration-300" />,
        title: "Cost effective",
        description: "High-quality, scalable solutions designed to fit your business budget and goals.",
        index: "03",
    },
];

function WhyChooseUs() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const cards = cardsRef.current;
        if (!wrapper || cards.length < 3) return;

        if (window.innerWidth < 640) return;

        const ctx = gsap.context(() => {
            // Set initial positions
            gsap.set(cards[0], { x: "0%", y: "0%", scale: 1, zIndex: 10, opacity: 1 });
            gsap.set(cards[1], { x: "0%", y: "80%", scale: 0.96, zIndex: 11, opacity: 0 });
            gsap.set(cards[2], { x: "0%", y: "160%", scale: 0.92, zIndex: 12, opacity: 0 });

            gsap.set(".why-choose-header", { opacity: 0, y: 30 });
            gsap.set(".why-choose-paragraph", { opacity: 0, y: 30 });

            const spreadX = window.innerWidth < 1024 ? "-300px" : "-460px";
            const spreadXRight = window.innerWidth < 1024 ? "300px" : "460px";

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top 80px", // Pin below the fixed navbar
                    end: "+=700",      // Smooth scroll distance (not too long to feel stuck)
                    pin: true,
                    scrub: 0.8,        // Tight scrub response
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl
              // Entrance animations for headers
              .to(".why-choose-header", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0)
              .to(".why-choose-paragraph", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.1)
              // Phase 1 — stack cards 1 and 2 into view behind card 0
              .to(cards[1], { y: "6%", scale: 0.98, opacity: 1, duration: 0.4, ease: "power2.out" }, 0.2)
              .to(cards[2], { y: "12%", scale: 0.96, opacity: 1, duration: 0.4, ease: "power2.out" }, 0.3)
              // Phase 2 — fan all three cards out
              .to(cards[0], { x: spreadX, y: "0%", scale: 1, duration: 0.6, ease: "power2.out" }, "+=0.05")
              .to(cards[1], { x: "0%", y: "0%", scale: 1, duration: 0.6, ease: "power2.out" }, "<")
              .to(cards[2], { x: spreadXRight, y: "0%", scale: 1, duration: 0.6, ease: "power2.out" }, "<");
        }, wrapperRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (

        <>

        <div ref={wrapperRef}>
            {/* Header */}
            <section className="mx-6 sm:mx-10 md:mx-15 pt-12 md:pt-16 pb-20 md:pb-6">
                <div className="flex items-center justify-center w-full mx-auto mb-10 gap-4 why-choose-header">
                    <div
                        className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white"
                    ></div>
                    <div
                        className="px-5 py-1.5 border border-white/10 rounded-md bg-transparent text-white text-[22px] whitespace-nowrap shrink-0"
                    >

                        Why Choose Coirei?

                    </div>
                    <div
                        className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white"
                    ></div>
                </div>



            </section>
            <div className="flex flex-col items-center text-center gap-6 mb-16">


                    <p
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl why-choose-paragraph"
                    >
                        We focus on innovation, scalability, and real-world impact, helping you build smarter solutions and grow your business with confidence.
                    </p>
                </div>



            {/* Mobile — vertical stack, no animation */}
            <div className="flex sm:hidden flex-col gap-6 mx-6 md:pb-16">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="group rounded-2xl border border-white/15 bg-[#292929] px-5 py-8 flex flex-col items-center justify-center gap-5 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] w-full min-h-[280px] hover:bg-[#323232] hover:border-white/25 transition-all duration-500"
                    >
                        <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                            {reason.icon}
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-white font-semibold tracking-wide text-[20px] mb-3 text-center">{reason.title}</h3>
                            <p className="text-[#a1a1aa] text-[16px] leading-relaxed text-center">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tablet+ — pinned GSAP animation */}
            <div
                className="relative w-full overflow-visible hidden sm:block"
                style={{ height: "50vh", minHeight: "400px" }}
            >
                <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className="absolute rounded-[20px] border border-white/15 bg-[#292929] px-6 py-6 flex flex-col items-center justify-center gap-5 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] w-[85vw] sm:w-[380px] md:w-[440px] h-[320px] sm:h-[360px] group hover:bg-[#323232] hover:border-white/25 transition-colors duration-300 glass"
                        >
                            <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-white font-semibold tracking-wide text-[20px] mb-2 text-center">{reason.title}</h3>
                                <p className="text-[#a1a1aa] text-[15px] leading-relaxed text-center px-2">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>

    );
}

export default WhyChooseUs;