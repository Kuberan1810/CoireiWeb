import { useLayoutEffect, useRef } from 'react';
import localGsap from 'gsap';
import localScrollTrigger from 'gsap/ScrollTrigger';

import callIcon from '../../../..//assets/images/products/integration/call.png';
import gmailIcon from '../../../..//assets/images/products/integration/gmail.png';
import whatsappIcon from '../../../..//assets/images/products/integration/whatsapp.png';
import documentIcon from '../../../..//assets/images/products/integration/document.png';
import filesIcon from '../../../..//assets/images/products/integration/files.png';
import recordIcon from '../../../..//assets/images/products/integration/record.png';
import folleiIcon from '../../../..//assets/images/products/integration/follei.png';
import robot2Icon from '../../../..//assets/images/products/integration/robot-2.png';
import callOutIcon from '../../../..//assets/images/products/integration/call-out.png';
import httpsIcon from '../../../..//assets/images/products/integration/https.png';
import chatIcon from '../../../..//assets/images/products/integration/chat.png';
import robotIcon from '../../../..//assets/images/products/integration/robot.png';
import rectangleIcon from '../../../..//assets/images/products/integration/Rectangle.png';

const gsap: typeof localGsap = (window as any).gsap || localGsap;
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger;

if (!(window as any).gsap) {
  localGsap.registerPlugin(ScrollTrigger);
}

const HexItem = ({ icon, active, empty, hideOnMobile, delay, opacityClass }: { icon?: string, active?: boolean, empty?: boolean, hideOnMobile?: boolean, delay?: number, opacityClass?: string }) => {
    return (
        <div 
            className={`hex-item group relative w-[70px] h-[81px] sm:w-[110px] sm:h-[127px] md:w-[130px] md:h-[150px] flex items-center justify-center shrink-0  
            ${empty ? (opacityClass || 'opacity-30 hover:opacity-50') : 'hover:z-20 cursor-pointer'} 
            ${hideOnMobile ? 'hidden sm:flex' : 'flex'} transition-all duration-300 ease-out`}
            data-delay={delay}
        >
            <div className={`absolute inset-0 transition-transform duration-300 ease-out ${!empty && 'group-hover:scale-105'}`}>
                <svg viewBox="0 0 100 116" className="w-full h-full transition-all duration-300" 
                     style={{ 
                         filter: active 
                             ? 'drop-shadow(0px 12px 35px rgba(59, 130, 246, 0.45)) drop-shadow(0px 0px 15px rgba(16, 121, 183, 0.6))' 
                             : 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 6px rgba(0,0,0,0.02))' 
                     }}>
                    {active ? (
                        <>
                            <defs>
                                <linearGradient id="hexGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#e0e8ff" />
                                    <stop offset="50%" stopColor="#c7d4ff" />
                                    <stop offset="100%" stopColor="#a3bcf5" />
                                </linearGradient>
                            </defs>
                            <polygon points="50,0 100,29 100,87 50,116 0,87 0,29" fill="url(#hexGradActive)" stroke="#ffffff" strokeWidth="1.5" />
                        </>
                    ) : (
                        <polygon 
                            points="50,0 100,29 100,87 50,116 0,87 0,29" 
                            fill="white" 
                            stroke="#f1f5f9" 
                            strokeWidth="2" 
                            className="transition-colors duration-300 group-hover:stroke-[#e2e8f0]"
                        />
                    )}
                </svg>
            </div>
            {icon && (
                <div className={`relative z-10 flex items-center justify-center transition-transform duration-300 ease-out 
                    ${active ? 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 scale-110' : 'w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:scale-110'}`}>
                    <img src={icon} alt="integration icon" className={`max-w-full max-h-full object-contain ${active ? 'drop-shadow-md' : 'drop-shadow-sm group-hover:drop-shadow-md'}`} />
                </div>
            )}
        </div>
    )
}

const Integrations = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const row1 = [
        { empty: true, opacityClass: "opacity-[0.05]" }, { empty: true, opacityClass: "opacity-10" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-40" },
        { icon: callIcon }, { icon: gmailIcon }, { icon: whatsappIcon }, { icon: documentIcon },
        { empty: true, opacityClass: "opacity-40" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-10" }, { empty: true, opacityClass: "opacity-[0.05]" }
    ];

    const row2 = [
        { empty: true, opacityClass: "opacity-10" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-40" },
        { icon: filesIcon }, { icon: recordIcon }, { icon: folleiIcon, active: true }, { icon: robot2Icon }, { icon: callOutIcon },
        { empty: true, opacityClass: "opacity-40" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-10" }
    ];

    const row3 = [
        { empty: true, opacityClass: "opacity-[0.05]" }, { empty: true, opacityClass: "opacity-10" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-40" },
        { icon: httpsIcon }, { icon: chatIcon }, { icon: robotIcon }, { icon: rectangleIcon },
        { empty: true, opacityClass: "opacity-40" }, { empty: true, opacityClass: "opacity-20" }, { empty: true, opacityClass: "opacity-10" }, { empty: true, opacityClass: "opacity-[0.05]" }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                ".integration-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".integration-header",
                        start: "top 85%",
                    }
                }
            );

            // Hexagons entrance animation
            const hexItems = gsap.utils.toArray<HTMLElement>(".hex-item");
            
            gsap.fromTo(
                hexItems,
                { opacity: 0, scale: 0.3, y: 40, rotation: -5 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotation: 0,
                    duration: 1,
                    stagger: {
                        amount: 1.2,
                        from: "center",
                        grid: "auto"
                    },
                    ease: "elastic.out(1, 0.6)",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    },
                    onComplete: () => {
                        // Continuous floating animation after entrance
                        hexItems.forEach((item, i) => {
                            // Only animate non-empty items for better performance and focus
                            if (item.classList.contains('cursor-pointer')) {
                                gsap.to(item, {
                                    y: "-=8",
                                    duration: 2 + (i % 3) * 0.5,
                                    yoyo: true,
                                    repeat: -1,
                                    ease: "sine.inOut",
                                    delay: (i % 5) * 0.2
                                });
                            }
                        });
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden bg-[#fafcff] relative w-full">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="integration-header flex flex-col items-center mb-16 md:mb-28 px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 flex justify-center">
                        <div
                            style={{
                                borderWidth: '1px',
                                borderColor: 'rgba(0, 67, 112, 0.15)',
                                borderRadius: '12px',
                                padding: '6px 16px',
                                gap: '10px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                            }}
                            className="inline-flex items-center bg-white/80 backdrop-blur-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1079B7]"></span>
                            <span className="text-sm font-medium text-[#0A0E29]">Integrations</span>
                        </div>
                    </div>

                    <h2 className="text-[#04032E] text-4xl sm:text-5xl md:text-[52px] font-medium tracking-tight leading-[1.15] mb-4 text-center max-w-4xl mx-auto">
                        Seamless Integrations Across <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">Every Workflow </span>
                    </h2>

                    <p className="text-[#5A5A5C] text-sm sm:text-[17px] max-w-2xl font-normal leading-relaxed text-center mt-2 mx-auto">
                        Work with what you've got. Follei integrates smoothly with your existing platforms keeping your teams in familiar tools while giving AI workers the context and data they need to operate autonomously and effectively.
                    </p>
                </div>

                {/* Grid Wrapper that hides horizontal overflow and applies the edge fade */}
                <div 
                    className="relative w-full overflow-hidden pb-10"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                >
                    <div ref={gridRef} className="relative flex flex-col items-center justify-center min-w-max mx-auto px-4">
                        {/* 
                            Spacing Math for perfect hexagons: 
                            Base: w=70, h=81, gap=8. dy=67.55. mt = -13.5px
                            SM: w=110, h=127, gap=12. dy=105.65. mt = -21.35px
                            MD: w=130, h=150, gap=16. dy=126.4. mt = -23.6px
                        */}
                        <div className="flex gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center">
                            {row1.map((item, idx) => (
                                <HexItem key={`r1-${idx}`} {...item} delay={idx} />
                            ))}
                        </div>

                        <div className="flex gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center -mt-[14px] sm:-mt-[21px] md:-mt-[24px]">
                            {row2.map((item, idx) => (
                                <HexItem key={`r2-${idx}`} {...item} delay={idx + 10} />
                            ))}
                        </div>

                        <div className="flex gap-[8px] sm:gap-[12px] md:gap-[16px] justify-center -mt-[14px] sm:-mt-[21px] md:-mt-[24px]">
                            {row3.map((item, idx) => (
                                <HexItem key={`r3-${idx}`} {...item} delay={idx + 20} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Integrations;