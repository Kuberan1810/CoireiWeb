import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Image from "../../../assets/images/homepage/image.png";
import TestimonialImage2 from "../../../assets/images/homepage/pfp.png";
import TestimonialImage3 from "../../../assets/images/homepage/priyanka.png";
import TestimonialImage4 from "../../../assets/images/homepage/confident-indian-business-woman.jpg";

const TESTIMONIALS = [
    {
        id: 0,
        name: "Aarav Patel",
        role: "CEO at DesignFlow",
        date: "03/12/2026",
        rating: 5,
        quote: "This adventure exceeded all my expectations and gave me memories I'll cherish forever.",
        avatar: Image,

    },
    {
        id: 1,
        name: "Priyanka Sharma",
        role: "Managing Director at TalentSync",
        date: "03/18/2026",
        rating: 5,
        quote: "Coirei transformed our entire workflow. Onboarding, tracking, everything became seamless and efficient.",
        avatar: TestimonialImage3,

    },
    {
        id: 2,
        name: "Rohan Malhotra",
        role: "CEO at BuildBridge",
        date: "03/24/2026",
        rating: 5,
        quote: 'Working with Coirei was a Game-changer. They delivered ahead of schedule and the quality is unmatched.',
        avatar: TestimonialImage2,
        
    },
    {
        id: 3,
        name: "Ananya Nair",
        role: "Director of Operations at AlphaScale",
        date: "03/28/2026",
        rating: 5,
        quote: "Their AI solutions saved us hundreds of hours in automation. Highly professional team and delivery.",
        avatar: TestimonialImage4,

    },
];

const Stars = ({ count, size = 15 }: { count: number; size?: number }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                style={{ width: size, height: size }}
                className={i < count ? "fill-[#FFC531] text-[#FFC531]" : "fill-[#333] text-[#333]"}
            />
        ))}
    </div>
);

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDir, setSlideDir] = useState<'left' | 'right'>('right');
    const [isVisible, setIsVisible] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const activeRef = useRef(activeIndex);
    activeRef.current = activeIndex;

    const n = TESTIMONIALS.length;

    /* Intersection Observer — reveal + start auto-scroll */
    // useEffect(() => {
    //     const el = sectionRef.current;
    //     if (!el) return;
    //     const observer = new IntersectionObserver(
    //         ([entry]) => setIsVisible(entry.isIntersecting),
    //         { threshold: 0.5}
    //     );
    //     observer.observe(el);
    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // reveal once only
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    /* Auto-scroll: no loop, stops at last card */
    useEffect(() => {
        if (!isVisible) {
            if (autoRef.current) clearInterval(autoRef.current);
            return;
        }
        autoRef.current = setInterval(() => {
            const cur = activeRef.current;
            if (cur >= n - 1) {
                clearInterval(autoRef.current!);
                return; // stop silently at end
            }
            goTo(cur + 1, 'right');
        }, 3500);
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [isVisible]);

    const shake = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
    };

    const goTo = (i: number, dir: 'left' | 'right') => {
        if (isTransitioning || i === activeRef.current) return;
        setSlideDir(dir);
        setIsTransitioning(true);
        setTimeout(() => { setActiveIndex(i); setIsTransitioning(false); }, 420);
    };

    const handleNext = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        if (activeRef.current >= n - 1) { shake(); return; } // shake at last card
        goTo(activeRef.current + 1, 'right');
    };
    const handlePrev = () => {
        if (autoRef.current) clearInterval(autoRef.current);
        if (activeRef.current <= 0) { shake(); return; } // shake at first card
        goTo(activeRef.current - 1, 'left');
    };

    const cur = TESTIMONIALS[activeIndex];
    const prevIdx = (activeIndex - 1 + n) % n;
    const nextIdx = (activeIndex + 1) % n;
    const left = TESTIMONIALS[prevIdx];
    const right = TESTIMONIALS[nextIdx];

    return (
        <section
            ref={sectionRef}
            className="pt-6 pb-6 px-6 md:px-12 lg:px-20 overflow-hidden sm:pt-8 sm:pb-8 w-full"
            style={{
            }}
        >
            <div className="w-full">

                {/* ── Header row ── */}
                <div className="flex items-center justify-center w-full mx-auto mb-12 gap-4">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full bg-linear-to-r from-transparent to-white hidden sm:block"
                ></div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-5 py-1.5 border border-white/10 rounded-md bg-transparent text-white text-[16px] sm:text-[22px] whitespace-nowrap"
                >
                    Testimonial
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full bg-linear-to-l from-transparent to-white hidden sm:block"
                ></div>
            </div>

                    <div className="flex items-start justify-center  flex-wrap gap-4 mb-16">
                        <div className="w-full">
                            <h2 className="text-[#FFFFFF] text-[20px] sm:text-[40px] font-normal leading-[30px] md:leading-[40px] text-center w-full mx-auto">
                                <span className="text-white">What <span className="text-[#F67300]">clients</span> say about</span>
                                <span className="text-white"> our <span className="text-[#F67300]">AI solutions?</span></span>
                            </h2>
                        </div>
                        
                    </div>

                {/* Shake keyframe */}
                <style>{`
                    @keyframes shake {
                        0%,100% { transform: translateX(0); }
                        20%      { transform: translateX(-10px); }
                        40%      { transform: translateX(10px); }
                        60%      { transform: translateX(-8px); }
                        80%      { transform: translateX(8px); }
                    }
                    .card-shake { animation: shake 0.45s cubic-bezier(0.36,0.07,0.19,0.97); }
                `}</style>

                {/* ── Cards row ── */}
                <div className="relative">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none hidden md:block"
                        style={{ background: "linear-gradient(to right, #161616 0%, transparent 100%)" }} />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none hidden md:block"
                        style={{ background: "linear-gradient(to left, #161616 0%, transparent 100%)" }} />

                    <div className="overflow-hidden">
                        <div
                            className={`flex items-stretch gap-4${isShaking ? ' card-shake' : ''}`}
                            style={{
                                transform: isTransitioning
                                    ? `translateX(${slideDir === 'right' ? '-40px' : '40px'})`
                                    : 'translateX(0)',
                                opacity: isTransitioning ? 0 : 1,
                                transition: 'transform 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease',
                            }}
                        >
                            {[left, cur, right].map((t, idx) => (
                                <div
                                    key={`${t.id}-${idx}`}
                                    className={`rounded-[20px] p-6 flex flex-col justify-between border border-white/[0.07] select-none glass
                                               ${idx === 1 ? 'flex-1 min-w-0' : 'hidden md:flex md:flex-1 md:min-w-0'}`}

                                >
                                    <div className="">
                                        <div className="flex items-center gap-3 mb-10">
                                            <img src={t.avatar} alt={t.name}
                                                className="w-14 h-14 rounded-full object-cover ring-1 ring-white/10" />
                                            <div>
                                                <p className="font-medium  text-[18px] text-white leading-tight">{t.name}</p>
                                                <p className="text-[14px] text-white/60 font-regular ">{t.role}</p>
                                            </div>
                                        </div>

                                        <div className="mb-20">
                                            <p className="text-[18px] text-white font-medium  leading-snug mb-1">
                                                "{t.quote.split(" ").slice(0, 6).join(" ")}"
                                            </p>
                                            <p className="text-[16px] text-white/70 leading-relaxed">
                                                {t.quote.split(" ").slice(6).join(" ")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/6">
                                        <Stars count={t.rating} />
                                        <span className="text-[12px] text-white/60">{t.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ── Arrows ── */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="w-11 h-11 rounded-full flex items-center justify-center text-xl
                                   bg-white/5 border border-white/10 text-[#777]
                                   hover:bg-white/10 hover:text-white hover:border-white/20
                                   transition-all duration-200 cursor-pointer leading-none"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="w-11 h-11 rounded-full flex items-center justify-center text-xl
                                   bg-white/5 border border-white/10 text-[#777]
                                   hover:bg-white/10 hover:text-white hover:border-white/20
                                   transition-all duration-200 cursor-pointer leading-none"
                    >
                        ›
                    </button>
                </div>
                
            </div>
        </section>
    );
}