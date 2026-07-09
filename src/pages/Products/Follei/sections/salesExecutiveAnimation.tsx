import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquareText } from "lucide-react";

// CountUp component to animate metric numbers
const CountUpNumber = ({
    end,
    duration = 2000,
    delay = 200,
}: {
    end: number;
    duration?: number;
    delay?: number;
}) => {
    const [count, setCount] = useState(0);
    const containerRef = React.useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                animationFrameId = window.requestAnimationFrame(step);
            }
        };

        const timeoutId = setTimeout(() => {
            animationFrameId = window.requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
        };
    }, [end, duration, delay, isInView]);

    return (
        <span ref={containerRef} className="  font-semibold tracking-tight tabular-nums">
            {count.toLocaleString("en-US")}
        </span>
    );
};

const SalesExecutiveAnimation: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    // SVG dimensions for the graph
    const width = 600;
    const height = 220;

    // Graph path points 
    const pathD = "M 0 210 L 220 210 L 340 120 L 460 120 L 600 10";
    const areaD = "M 0 210 L 220 210 L 340 120 L 460 120 L 600 10 L 600 220 L 0 220 Z";

    return (
        <div
            className="w-full relative bg-white border border-black/[0.05] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_70px_rgba(89,96,223,0.08)] hover:border-indigo-100/60"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 1.6s infinite linear;
          }
          
          @keyframes pulse-opacity {
            0%, 100% { opacity: 0.95; }
            50% { opacity: 0.55; }
          }
          .animate-pulse-opacity {
            animation: pulse-opacity 2s infinite ease-in-out;
          }
        `
            }} />

            {/* Top Container with Padding */}
            <div className="pt-6 px-6 md:pt-8 md:px-8 relative z-10">
                {/* Grid of Metric Cards */}
                <div className="grid grid-cols-3 gap-3 md:gap-5">
                    {[
                        { label: "Users", value: 189423, delay: 0 },
                        { label: "Sessions", value: 128754, delay: 150 },
                        { label: "Conversion", value: 110480, delay: 300 },
                    ].map((item, idx) => (
                        <div
                            key={item.label}
                            className="bg-gradient-to-b from-[#D1D1D1] via-[E7E7E7] to-[#FFFFFF] border border-[#F1F3F9] rounded-[16px] p-4 md:p-5 text-left transition-all duration-300 hover:bg-white hover:border-indigo-100 hover:shadow-[0_8px_25px_rgba(89,96,223,0.04)]"
                            style={{
                                transform: isHovered ? "translateY(-2px)" : "translateY(0px)",
                                transitionDelay: `${idx * 50}ms`,
                            }}
                        >
                            <div className="text-[#5A5A5C] text-xs md:text-sm font-medium mb-1">
                                {item.label}
                            </div>
                            <div className="text-xl sm:text-2xl md:text-[28px] text-[#04032E] font-semibold leading-tight">
                                <CountUpNumber end={item.value} delay={item.delay} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="absolute top-[48%] left-6 md:left-8 z-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border border-white/50 rounded-[20px] p-3.5 md:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 hover:scale-[1.03]"
                style={{
                    transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
                }}
            >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-[14px] bg-[#ECECFF] flex items-center justify-center text-[#5960DF] transition-transform duration-300 ">
                        <MessageSquareText className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                    </div>

                    {/* Skeleton Lines */}
                    <div className="flex flex-col gap-1.5 text-left">
                        <div className="w-24 md:w-28 h-3.5 md:h-4 rounded-full bg-gradient-to-r from-[#FFD0C4] to-[#FFC4BA] animate-pulse-opacity" />
                        <div className="w-14 md:w-16 h-3 rounded-full bg-gradient-to-r from-[#FFE8E3] to-[#FFE2DD] animate-pulse-opacity" />
                    </div>
                </div>
            </div>

            {/* Animated SVG Graph  */}
            <div className="w-full mt-6 relative select-none z-0 overflow-hidden leading-none">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full h-auto translate-y-[2px]"
                    preserveAspectRatio="none"
                    style={{ display: "block" }}
                >
                    {/* Gradients */}
                    <defs>
                        {/* Area Fill Gradient */}
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#5960DF" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#5960DF" stopOpacity="0.00" />
                        </linearGradient>

                        {/* Stroke Line Gradient */}
                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8E2884" stopOpacity={0.5} />
                            <stop offset="50%" stopColor="#5960DF" />
                            <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>

                        {/*  Dot Filter */}
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Guidelines */}
                    <line
                        x1="0"
                        y1="210"
                        x2="600"
                        y2="210"
                        stroke="#F1F3F9"
                        strokeWidth="1.2"
                        strokeDasharray="4,4"
                    />

                    {/* Underlay Gradient Area  */}
                    <motion.path
                        d={areaD}
                        fill="url(#areaGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    />

                    {/* Glowing Neon Line Underlay */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="url(#strokeGradient)"
                        strokeWidth="11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.35}
                        style={{ filter: "blur(5px)" }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                    />

                    {/* Graph Lines */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="url(#strokeGradient)"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                    />

                    <g>
                        {/* Outer Pulsing Glow */}
                        <circle r="14" fill="#6366F1" opacity="0.3" filter="url(#glow)">
                            <animateMotion
                                dur={isHovered ? "3.2s" : "4.8s"}
                                repeatCount="indefinite"
                                path={pathD}
                                calcMode="linear"
                            />
                        </circle>

                        {/* Secondary pulsing ring */}
                        <circle r="8" fill="none" stroke="#6366F1" strokeWidth="2" opacity="0.6">
                            <animateMotion
                                dur={isHovered ? "3.2s" : "4.8s"}
                                repeatCount="indefinite"
                                path={pathD}
                                calcMode="linear"
                            />
                        </circle>

                        {/* Core Bright Dot */}
                        <circle r="5" fill="#FFFFFF" stroke="#5960DF" strokeWidth="3">
                            <animateMotion
                                dur={isHovered ? "3.2s" : "4.8s"}
                                repeatCount="indefinite"
                                path={pathD}
                                calcMode="linear"
                            />
                        </circle>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default SalesExecutiveAnimation;
