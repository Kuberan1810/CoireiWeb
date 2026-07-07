import { useEffect, useState, useRef } from "react";
import ceoImg from "../../../assets/images/homepage/ceo-new.svg";

// Custom Typewriter Component that types text out when scrolled into view
const TypewriterText = ({ text, delay = 35 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isIntersecting, setIsIntersecting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isIntersecting) return;

        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, i));
            i++;
            if (i > text.length) {
                clearInterval(intervalId);
            }
        }, delay);

        return () => clearInterval(intervalId);
    }, [isIntersecting, text, delay]);

    return (
        <div ref={containerRef} className="min-h-[84px]">
            {displayedText}
            {isIntersecting && displayedText.length < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </div>
    );
};

const Ceo = () => {
    return (
        <section className="relative w-full mt-12 md:mt-16 mb-8 md:mb-16 overflow-x-hidden flex justify-center">
            {/* Grey Background Band - Anchored strictly to the bottom of the section */}
            <div className="absolute left-0 right-0 bottom-0 bg-[#F9F9F9] z-0 h-[180px] md:h-[200px]" />
            
            <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row px-6 md:px-12 items-end">
                
                {/* Image Section (Left) */}
                <div 
                    data-ns-animate 
                    className="w-full md:w-[40%] flex justify-center md:justify-start items-end"
                >
                    <div className="relative w-[257px] h-[327px] shrink-0">
                        {/* Clipped Orange Circle Behind Image */}
                        <div 
                            className="absolute rounded-full bg-[#F48120] -z-10" 
                            style={{
                                width: '260px',
                                height: '260px',
                                top: '25px',
                                right: '-65px',
                                clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 22% 100%)'
                            }}
                        />
                        
                        <img 
                            src={ceoImg} 
                            alt="Naveenkumar S. - Founder & CEO" 
                            className="w-full h-full object-contain object-bottom relative z-10"
                        />
                    </div>
                </div>

                {/* Content Section (Right) */}
                <div className="w-full md:w-[60%] min-h-[180px] md:h-[200px] flex flex-col justify-center pb-4 md:pb-0">
                    
                    <div 
                        data-ns-animate 
                        data-delay="0.2"
                        className="font-medium text-[16px] md:text-[20px] leading-relaxed text-[#333333] mb-6 pr-4"
                    >
                        <TypewriterText 
                            text='"Our focus is on creating practical AI systems that help organizations automate, innovate, and grow through enterprise-ready artificial intelligence."' 
                            delay={15}
                        />
                    </div>
                    
                    <div data-ns-animate data-delay="0.4">
                        <h4 className="font-bold text-[15.5px] leading-[24px] text-[#14182C]">
                            Naveenkumar S.
                        </h4>
                        <p className="font-normal text-[13px] leading-[20px] text-[#5B6280] mt-0.5">
                            Founder & CEO, COIREI.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Ceo;