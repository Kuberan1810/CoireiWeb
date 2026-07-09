import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sky from "../../../assets/images/homepage/sky.svg"
import HoverParticles from '../../../component/HoverParticles';


interface HeroProps {
    onTypingComplete?: () => void;
}

const Hero = ({ onTypingComplete }: HeroProps) => {
    const fullText = "AI that thinks. Learns. Executes.";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTypingDone, setIsTypingDone] = useState(false);

    // Parallax mouse state
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate mouse position relative to center (-1 to 1)
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Typing effect
    useEffect(() => {
        if (index < fullText.length) {
            // Wait 1.5 seconds before starting the first character, then type normally
            const delay = index === 0 ? 1500 : 30;
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else {
            // Typing is complete, trigger the reveal animations
            setIsTypingDone(true);
            if (onTypingComplete) onTypingComplete();
        }
    }, [index, fullText, onTypingComplete]);

    return (
        <section className="group relative w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden py-20">

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

            {/* Three.js Background Container - Only shows after typing finishes AND on hover */}
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isTypingDone ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
                <HoverParticles className="absolute inset-0 w-full h-full pointer-events-none opacity-30" />
            </div>

            {/* Welcome Section */}
            <div className="relative z-10 flex flex-col items-center w-full px-4 ">

                <div className='mb-10'>
                    {/* Custom style for sharp terminal cursor blink and clouds */}
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
                            /* Force the clouds to be white */
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
                    {/* Typed Header */}
                    <div className="flex items-center justify-center pointer-events-none">
                        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[92px] font-medium tracking-tight text-center leading-tight">
                            {(() => {
                                const baseText = "AI that thinks. Learns. ";
                                if (displayedText.length <= baseText.length) {
                                    return displayedText;
                                } else {
                                    const firstPart = displayedText.substring(0, baseText.length);
                                    const secondPart = displayedText.substring(baseText.length);
                                    return (
                                        <>
                                            {firstPart}
                                            <span className="text-[#ff7b00]">{secondPart}</span>
                                        </>
                                    );
                                }
                            })()}
                            <span className="inline-block w-[3px] h-[1em] bg-gradient-to-r from-orange-500 to-amber-400 ml-2 cursor-blink align-middle"></span>
                        </h1>
                    </div>

                    {/* Paragraph animating in after typing */}
                    <p className={`mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-[#5B6280] text-center max-w-5xl mx-auto transition-all duration-1000 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        COIREI  builds intelligent AI products that transform how businesses sell, educate, hire, and build software  practical automation, autonomous decision-making, and enterprise-grade engineering.
                    </p>
                </div>

                {/* Call to Actions animating in after paragraph */}
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full transition-all duration-1000 delay-300 ease-out transform ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <button
                        type="button"
                        onClick={() => {
                            const section = document.getElementById('our-products');
                            if (section && (window as any).lenis) {
                                (window as any).lenis.scrollTo(section, { offset: -50, duration: 1.5 });
                            } else if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center justify-center gap-2 bg-[#ff7b00] hover:bg-[#ff8b17] text-white px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer duration-300"
                    >
                        Explore Our Products
                    </button>
                    <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2 bg-[#B7BFD910] hover:bg-gray-50 text-[#14182C] border! border-[#E5E5E5]! px-6 py-3 font-medium transition-colors w-full sm:w-auto cursor-pointer duration-300"
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default Hero;