


import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lmstrackerimgone from "../../../../assets/images/products/lmstrackerone.png"
import Lmsdeeplearn from "../../../../assets/images/products/lmsdeeplearning.png"
import Lmsinsights from  "../../../../assets/images/products/lmsinsights.png"

gsap.registerPlugin(ScrollTrigger);

const stickyContent = [
    {
        title: "Real-time progress tracking",
        description: "Monitor learner activity, course completion, and engagement with clear dashboards. Gain full visibility into how users interact with your learning content.",
        image: Lmstrackerimgone,
    },
    {
        title: "Learning insights",
        description: "Analyze performance patterns and learner behavior using detailed reports. Identify gaps and improve outcomes with data-driven decisions.",
        image: Lmsdeeplearn,
    },
    {
        title: "Continuous Learning Optimization",
        description: "Improve learning experiences with structured updates, feedback loops, and continuous enhancements.",
        image: Lmsinsights,
    }
];

function ProgressTrack() {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            // Desktop-la mattum dhaan active section tracking venum (Sticky effect)
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top", 
                end: "bottom bottom", 
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    let index = Math.floor(progress * stickyContent.length);
                    if (index >= stickyContent.length) index = stickyContent.length - 1;
                    if (index < 0) index = 0;
                    setActiveSection(index);
                }
            });

        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="text-[#04032E] relative GlobalPadding bg-white">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center text-center px-6">
                <span 
                    data-ns-animate
                    data-offset="80"
                    className="text-[#5A5A5C] text-[14px] font-medium tracking-wide border border-[#E9ECFF] bg-[#FAFAFA] rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base mb-5"
                >
                    Learning that evolves you
                </span>
                <h2 
                    data-ns-animate
                    data-offset="80"
                    data-delay="0.1"
                    className="max-w-[849px] text-[36px] md:text-[60px] font-medium text-center leading-[1.2] md:leading-[68px] text-[#04032E] "
                >
                   Track Learner Progress Without  <br className="hidden md:block" /> Losing Context
                </h2>
            </div>

            {/* Content Container */}
            <div
            data-ns-animate
            data-offset="100"
            className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start px-6 md:px-12 relative">
                
                {/* Left Side: Scrolling Text Blocks */}
                <div className="w-full md:w-5/12 flex flex-col">
                    {stickyContent.map((item, index) => {
                        const isActive = activeSection === index;
                        return (
                            <div 
                                key={index} 
                                // Desktop-la h-screen venum sticky-ku, mobile-la dynamic height (py-12)
                                className={`min-h-fit md:h-screen flex flex-col justify-center py-12 md:py-0 transition-all duration-700 ease-out ${
                                    isActive 
                                    ? "md:opacity-100 md:scale-100" 
                                    : "md:opacity-30 md:scale-[0.9] md:blur-[2px]"
                                }`}
                            >
                                {/* Mobile-la Image Title-ku mela stacked-ah varum */}
                                <div className="block md:hidden w-full mb-8">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-auto rounded-2xl border border-[#E9ECFF] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
                                    />
                                </div>

                                <h3 className="text-[28px] md:text-[46px] font-semibold mb-6 tracking-tight leading-tight text-[#04032E]">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] md:text-[20px] text-[#5A5A5C] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Sticky Image Viewer (Desktop Only) */}
                <div className="hidden md:block w-full md:w-7/12 sticky top-0 h-screen">
                    <div className="h-full w-full flex items-center justify-center pl-12">
                        <div className="relative w-full aspect-[4/3]">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activeSection}
                                    src={stickyContent[activeSection].image}
                                    alt={stickyContent[activeSection].title}
                                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full  rounded-2xl border border-[#E9ECFF] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)]"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgressTrack;