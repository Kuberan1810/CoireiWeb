import React, { useRef } from "react";
import vmBgImg from "../../../assets/images/homepage/V&M BG.png";
import folleiImg from "../../../assets/images/homepage/folleihome.svg";
import coireiImg from "../../../assets/images/homepage/coireihome.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
    {
        id: "follei",
        title: "Follei - Autonomous AI sales workforce",
        description: "Transform your sales operation with a coordinated AI workforce that handles customer conversations, follow-ups, qualification, and engagement across every channel.",
        src: folleiImg,
    },
    {
        id: "lms",
        title: "Coirei LMS - AI-powered learning infrastructure",
        description: "A modern learning platform that connects students, faculty, and administrators with intelligent tools for learning, management, engagement, and academic operations.",
        src: coireiImg,
    }
];

const OurProduct = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.45 : window.innerWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="our-products" className="relative GlobalPadding overflow-hidden">
            {/* Top Heading Section matches previous sections */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end mb-10 lg:mb-15">
                <div className="w-full lg:w-[60%]">
                    <span className="text-[#D33B12] text-[16px] font-normal leading-[20.8px] tracking-[0px] mb-2 block">
                        Our Products
                    </span>
                    <h2 data-ns-animate className="text-[32px] sm:text-[40px] md:text-[48px] font-normal text-[#0E121B] leading-[1.2] md:leading-[52.8px] tracking-[0px] instrument-sans">
                        Intelligence built into products<br className="hidden sm:block" /> that move businesses forward.
                    </h2>
                </div>
                <div className="w-full lg:w-[40%] flex lg:justify-end pb-2">
                    <p className="text-[#0E121B] font-normal text-[16px] leading-[30.8px] tracking-[0px] instrument-sans text-left">
                        Coirei builds intelligent products that<br className="hidden lg:block" /> simplify complex challenges and drive<br className="hidden lg:block" /> what's next.
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
                        /* Hide scrollbar for Chrome, Safari and Opera */
                        .overflow-x-auto::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[90vw] md:min-w-[60vw] lg:min-w-[45vw] snap-start flex flex-col">
                            <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden mb-6 shadow-sm flex items-center justify-center p-4 md:py-[48px] md:pl-[48px] md:pr-[64px]">
                                {/* Vibrant Gradient Background */}
                                <img
                                    src={vmBgImg}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                                />

                                <div className="relative z-10 w-full aspect-[624/444] rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white">
                                    <img
                                        src={product.src}
                                        alt={product.title}
                                        className="w-full h-full object-contain object-left-top block"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[20px] md:text-[24px] font-medium text-[#0E121B] mb-3 instrument-sans tracking-tight">
                                {product.title}
                            </h3>
                            <p className="text-[#5B6280] text-[14px] md:text-[16px] leading-[1.6] instrument-sans max-w-[95%]">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3 mt-2">
                    <button 
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-md bg-[#F4F5F7] flex items-center justify-center hover:bg-[#E2E4E9] transition-colors cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <ArrowLeft size={18} className="text-[#5B6280]" strokeWidth={2} />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-md bg-[#F4F5F7] flex items-center justify-center hover:bg-[#E2E4E9] transition-colors cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <ArrowRight size={18} className="text-[#5B6280]" strokeWidth={2} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurProduct;