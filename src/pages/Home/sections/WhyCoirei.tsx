import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CardItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const cardsData: CardItem[] = [
    {
        id: 1,
        title: "Enterprise Ready",
        description:
            "Secure, scalable systems designed to support startups, institutions, enterprises, and government organizations.",
        icon: (
            <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 0L0 5.33333V14.2222C0 22.9689 6.00889 30.9333 14 32C21.9911 30.9333 28 22.9689 28 14.2222V5.33333L14 0Z"
                    fill="#7C3AED"
                />
                <path
                    d="M14 11C12.3431 11 11 12.3431 11 14C11 15.3062 11.8344 16.4175 13 16.8291V20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20V16.8291C16.1656 16.4175 17 15.3062 17 14C17 12.3431 15.6569 11 14 11Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Practical Intelligence",
        description:
            "We turn AI into practical business outcomes through automation, intelligent decision-making, and real-world execution.",
        icon: (
            <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.5 0L1.5 16H12L10.5 28L22.5 12H12L13.5 0Z"
                    fill="#D33B12"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Autonomous Workflows",
        description:
            "End-to-end intelligent agent orchestration that automates complex operations with precision and speed.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Scalable & Multilingual",
        description:
            "Engineered for high availability and global reach, seamlessly supporting diverse operational requirements.",
        icon: (
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
];

const WhyCoirei = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const gap = 24; // Gap between cards in px

    useEffect(() => {
        const updateWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const maxIndex = cardsData.length - 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    return (
        <section className="relative w-full bg-white overflow-hidden GlobalPadding">
            <div className="w-full mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 md:mb-16">
                    <div data-ns-animate="true" data-direction="up" data-delay="0.1">
                        <span className="text-[#D33B12] text-[16px] leading-[20.8px] font-normal block mb-2 instrument-sans">
                            Why Coirei
                        </span>
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] md:leading-[52.8px] font-normal text-[#0E121B] instrument-sans max-w-2xl">
                            Built for real-world AI <br className="hidden sm:block" />
                            adoption
                        </h2>
                    </div>

                    <div
                        className="md:pt-8"
                        data-ns-animate="true"
                        data-direction="up"
                        data-delay="0.3"
                    >
                        <p className="text-[#0E121B] text-[16px] leading-[20.8px] font-normal instrument-sans max-w-xs">
                            We engineer practical AI solutions that create lasting business impact.
                        </p>
                    </div>
                </div>

                {/* Cards Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                        }}
                    >
                        {cardsData.map((card, index) => {
                            // Ensure only the current card and next card are visible
                            // Any card beyond the next one gets opacity-0 to hide it
                            const isVisible = index <= currentIndex + 1;
                            
                            return (
                                <div
                                    key={card.id}
                                    ref={index === 0 ? cardRef : null}
                                    className={`w-full sm:w-[480px] md:w-[45vw] shrink-0 bg-[#F5F7FA] rounded-[16px] p-6 md:p-8 flex flex-col justify-between min-h-[262px] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                >
                                    {/* Top Icon Box */}
                                    <div className="w-[72px] h-[72px] bg-white rounded-[16px] flex items-center justify-center shadow-xs mb-8 md:mb-10">
                                        {card.icon}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-[22px] sm:text-[24px] font-medium text-[#0E121B] mb-2 instrument-sans">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#5B6280] text-[15px] sm:text-[16px] leading-[22px] font-normal instrument-sans max-w-xl">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows Below First Card */}
                <div className="flex items-center gap-3 mt-6">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous card"
                        className="w-10 h-10 rounded-[8px] bg-[#F5F7FA] hover:bg-[#E5E7EB] disabled:opacity-40 disabled:hover:bg-[#F5F7FA] disabled:cursor-not-allowed text-[#0E121B] flex items-center justify-center transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={currentIndex === maxIndex}
                        aria-label="Next card"
                        className="w-10 h-10 rounded-[8px] bg-[#F5F7FA] hover:bg-[#E5E7EB] disabled:opacity-40 disabled:hover:bg-[#F5F7FA] disabled:cursor-not-allowed text-[#0E121B] flex items-center justify-center transition-colors cursor-pointer"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyCoirei;
