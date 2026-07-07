


import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import studenttracking from "../../../../assets/images/products/replace1.svg"
import instructorperformance from "../../../../assets/images/products/replace2.svg"
import adminoperator from "../../../../assets/images/products/replace3.svg"
import superadmin from "../../../../assets/images/products/replace4.svg"

gsap.registerPlugin(ScrollTrigger);

const stickyContent = [
    {
        title: "Student Success Tracking",
        description: "Monitor every learner's journey with real-time insights into course progress, assessments, attendance, certifications, and skill development—all from a personalized learning dashboard.",
        image: studenttracking,
    },
    {
        title: "Instructor Performance Hub",
        description: "Create engaging courses, manage live sessions, evaluate assignments, monitor learner engagement, and deliver personalized feedback to maximize student success.",
        image: instructorperformance,
    },
    {
        title: "Admin Operations Center",
        description: "Simplify academic operations with centralized control over users, batches, courses, reports, attendance, assessments, and platform-wide learning analytics.",
        image: adminoperator,
    },
    {
        title: "Super Admin Command Center",
        description: "Manage multiple organizations, configure global platform settings, oversee administrators, monitor system health, ensure security, and access enterprise-level insights from a single dashboard.",
        image: superadmin,
    }
];

function ProgressTrack() {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            const blocks = containerRef.current.querySelectorAll('.scroll-text-block');
            blocks.forEach((block, i) => {
                ScrollTrigger.create({
                    trigger: block,
                    start: "top 60%",
                    end: "bottom 60%",
                    onToggle: (self) => {
                        if (self.isActive) {
                            setActiveSection(i);
                        }
                    }
                });
            });

        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="text-[#04032E] relative py-20 bg-white">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center text-center px-6">
                <span 
                    data-ns-animate
                    data-offset="80"
                    className="text-[#5A5A5C] text-[14px] font-medium tracking-wide border border-[#E9ECFF] bg-[#FAFAFA] rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base mb-5"
                >
                    One Platform
                </span>
                <h2 
                    data-ns-animate
                    data-offset="80"
                    data-delay="0.1"
                    className="max-w-[849px] text-[36px] md:text-[60px] font-medium text-center leading-[1.2] md:leading-[68px] text-[#04032E] "
                >
                   Every Learning Role. <br className="hidden md:block" /> Fully Connected.
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
                                className={`scroll-text-block min-h-fit md:h-screen flex flex-col justify-center py-12 md:py-0 transition-all duration-700 ease-out ${
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
                                        className="w-full h-auto object-contain"
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
                                    className="absolute inset-0 w-full h-full object-contain"
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