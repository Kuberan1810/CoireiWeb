// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import folleiO from "../../../../assets/images/services/follei O.svg";
// import folleihomescreen from "../../../../assets/images/services/folleihomescreen.svg";

// const Hero = () => {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Track scroll progress of the entire sticky container height
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"]
//     });

//     // 1. Zoom the O SVG: starts at 1x, scales up to 28x to act as a portal
//     const oScale = useTransform(scrollYProgress, [0.05, 0.55], [1, 28]);

//     // Fade out the O SVG near the end of the zoom so it disappears cleanly
//     const oOpacity = useTransform(scrollYProgress, [0.05, 0.35, 0.45], [1, 1, 0]);

//     // 2. Zoom the screenshot: starts tiny (fits inside the O) and scales up to 1.0
//     const imageScale = useTransform(scrollYProgress, [0.05, 0.55], [0.12, 1.0]);

//     // Keep the screenshot fully visible at all times (no fade in or out)
//     const imageOpacity = 1;

//     // Clip path to mask the screenshot as a capsule matching the O shape initially, and rounded rect (16px) at full size
//     const clipPath = useTransform(
//         scrollYProgress,
//         [0.05, 0.55],
//         [
//             "inset(0% 0% 0% 0% round 100px)",
//             "inset(0% 0% 0% 0% round 16px)"
//         ]
//     );

//     // 3. Move the letters left/right as they fade out
//     const fTranslateX = useTransform(scrollYProgress, [0.05, 0.45], [0, -350]);
//     const lleiTranslateX = useTransform(scrollYProgress, [0.05, 0.45], [0, 350]);

//     // Fade out old surrounding content (badge, text, button, and neighboring letters) extremely early
//     const contentOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);

//     // 4. Inner Content Fade & Slide inside the screenshot after zoom completes (from 0.55 to 0.8)
//     const innerContentOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
//     const innerContentY = useTransform(scrollYProgress, [0.55, 0.8], [40, 0]);

//     return (
//         <div ref={containerRef} className="relative w-full h-[170vh]">
//             {/* Sticky viewport wrapper */}
//             <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#161616]">

//                 {/* Background Grid & Glow */}
//                 <div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                         backgroundImage: `
//                             linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//                             linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
//                         `,
//                         backgroundSize: '20% 120px',
//                         backgroundPosition: 'center top'
//                     }}
//                 />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

//                 {/* Hero Content Section */}
//                 <section className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-7xl px-6 sm:px-10 md:px-15 py-12">

//                     {/* Top Content (Badge, Title, Desc, Button) */}
//                     <motion.div
//                         style={{ opacity: contentOpacity }}
//                         className="flex flex-col items-center w-full"
//                     >
//                         {/* Badge */}
//                         <div data-ns-animate data-offset="80" className="mb-6">
//                             <div className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
//                                 <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] text-[#60A5FA] text-xs sm:text-sm font-medium tracking-wide">
//                                     <Sparkles size={14} className="text-[#3B82F6]" />
//                                     <span>One Platform. Complete Customer Intelligence.</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h1
//                             data-ns-animate
//                             data-offset="80"
//                             className="text-[#E3E3E0] text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-tight mb-6 max-w-5xl tracking-tight"
//                         >
//                             Track Every Customer Interaction with <br />
//                             <span className="text-white">AI Precision</span>
//                         </h1>

//                         {/* Description */}
//                         <p
//                             data-ns-animate
//                             data-delay="0.1"
//                             data-offset="80"
//                             className="text-white/60 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light"
//                         >
//                             Follie helps businesses understand customer behavior, predict user intent, <br className="hidden md:block" />
//                             and automate engagement using real-time AI-powered analytics.
//                         </p>

//                         {/* CTA Button */}
//                         <div
//                             data-ns-animate
//                             data-delay="0.2"
//                             data-offset="80"
//                             className="mb-10"
//                         >
//                             <button className="px-6 py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20 cursor-pointer">
//                                 Request Early Access
//                             </button>
//                         </div>
//                     </motion.div>

//                     {/* Giant FOLLEI Logo Container */}
//                     <div
//                         data-ns-animate
//                         data-delay="0.3"
//                         data-offset="80"
//                         className="w-full flex items-center justify-center font-bold tracking-tight text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] select-none leading-none mt-4 relative"
//                     >
//                         {/* F Letter */}
//                         <motion.span
//                             style={{ opacity: contentOpacity, x: fTranslateX }}
//                             className="bg-gradient-to-r from-[#1A5FB4] via-[#2A75D3] to-[#3B82F6] bg-clip-text text-transparent"
//                         >
//                             F
//                         </motion.span>

//                         {/* O Capsule Portal Container */}
//                         <div className="relative inline-flex items-center justify-center h-[0.72em] w-[1.42em] mx-2 sm:mx-3 md:mx-4">
//                             {/* The O SVG which scales up 28x */}
//                             <motion.img
//                                 style={{
//                                     scale: oScale,
//                                     opacity: oOpacity,
//                                     transformOrigin: "center center"
//                                 }}
//                                 src={folleiO}
//                                 alt="Follei O"
//                                 className="w-full h-full object-contain align-middle z-30 pointer-events-none"
//                             />

//                             {/* The animated homescreen preview (centered inside the O, scaling independently) */}
//                             <motion.div
//                                 style={{
//                                     scale: imageScale,
//                                     opacity: imageOpacity,
//                                     clipPath,
//                                     x: "-50%",
//                                     y: "-50%",
//                                     left: "50%",
//                                     top: "50%",
//                                 }}
//                                 className="absolute z-20 w-[90vw] max-w-[1150px] aspect-[16/10] rounded-[16px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] origin-center"
//                             >
//                                 <img
//                                     src={folleihomescreen}
//                                     alt="Follei Home Screen"
//                                     className="w-full h-full object-cover"
//                                 />

//                                 {/* Inner content overlay inside the screenshot */}
//                                 <motion.div
//                                     style={{
//                                         opacity: innerContentOpacity,
//                                         y: innerContentY
//                                     }}
//                                     className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 z-20"
//                                 >
//                                     {/* Badge */}
//                                     <div className="mb-4">
//                                         <div className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
//                                             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] text-[#60A5FA] text-xs font-medium tracking-wide">
//                                                 <Sparkles size={12} className="text-[#3B82F6]" />
//                                                 <span>One Platform. Complete Customer Intelligence.</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Title */}
//                                     <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight mb-4 tracking-tight">
//                                         Track Every Customer Interaction <br /> with <span className="text-blue-400">AI Precision</span>
//                                     </h2>

//                                     {/* Description */}
//                                     <p className="text-white/70 text-xs sm:text-sm max-w-lg mb-6 leading-relaxed font-light">
//                                         Follie helps businesses understand customer behavior, predict user intent, and automate engagement using real-time AI-powered analytics.
//                                     </p>

//                                     {/* CTA Button */}
//                                     <button className="px-5 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs sm:text-sm rounded-lg font-medium transition-all duration-300 shadow-lg cursor-pointer">
//                                         Request Early Access
//                                     </button>
//                                 </motion.div>
//                             </motion.div>
//                         </div>

//                         {/* LLEI Letters */}
//                         <motion.span
//                             style={{ opacity: contentOpacity, x: lleiTranslateX }}
//                             className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent"
//                         >
//                             LLEI
//                         </motion.span>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Hero;



import { useEffect, useRef } from "react"
import localGsap from "gsap"
import localScrollTrigger from "gsap/ScrollTrigger"
import "../../../../App.css"
import F from "../../../../assets/images/products/F.svg"
import L from "../../../../assets/images/products/L.svg"
import E from "../../../../assets/images/products/E.svg"
import I from "../../../../assets/images/products/I.svg"
import folleihomescreen from "../../../../assets/images/services/folleihomescreen.svg"

const gsap: typeof localGsap = (window as any).gsap || localGsap
const ScrollTrigger: typeof localScrollTrigger = (window as any).ScrollTrigger || localScrollTrigger

if (!(window as any).gsap) {
    gsap.registerPlugin(ScrollTrigger)
}

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!containerRef.current || !imageRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                {
                    scale: 1.4,
                    filter: "blur(20px)",
                    opacity: 0,
                },
                {
                    scale: 1.0,
                    filter: "blur(0px)",
                    opacity: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    }
                }
            )
        })

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <section ref={containerRef} className="banner-section">
            <div className="banner-vh-wrap">
                <div className="banner-sticky-wrap">
                    <div className="banner-wrapper">

                        {/* Existing banner letters block */}
                        <div className="banner-letters-wrap">
                            <div className="banner-letters-row">
                                <div className="banner-letters-flex">

                                    <div className="single-banner-letter _01">
                                        <img
                                            src={F}
                                            loading="lazy"
                                            alt="Banner Letter"
                                            className="banner-letter _01"
                                        />
                                    </div>

                                    <div className="after-banner-wrapper">
                                        <div className="after-banner-inner">
                                            <div className="after-banner-wra">

                                                {/* Content */}



                                                {/* Background Image */}
                                                <div className="banner-bg-wrap">
                                                    <img
                                                        ref={imageRef}
                                                        src={folleihomescreen}
                                                        alt="Banner"
                                                        className="banner-bg-image"
                                                        style={{ willChange: "filter, opacity" }}
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="banner-letter-o"></div>
                                    </div>

                                    <div className="single-banner-letter _03">
                                        <img
                                            src={L}
                                            loading="lazy"
                                            alt="Banner Letter"
                                            className="banner-letter _03"
                                        />
                                    </div>

                                    <div className="single-banner-letter _03">
                                        <img
                                            src={L}
                                            loading="lazy"
                                            alt="Banner Letter"
                                            className="banner-letter _03"
                                        />
                                    </div>

                                    <div className="single-banner-letter _05">
                                        <img
                                            src={E}
                                            loading="lazy"
                                            alt="Banner Letter"
                                            className="banner-letter _05"
                                        />
                                    </div>

                                    <div className="single-banner-letter _04">
                                        <img
                                            src={I}
                                            loading="lazy"
                                            alt="Banner Letter"
                                            className="banner-letter _04"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    );
}
export default Hero