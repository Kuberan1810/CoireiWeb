import React from "react";
import { Boxes, Cog, ClipboardCheck, BookOpen, CircleUser, DollarSign } from "lucide-react";
import folleiLogo from "../../../../../assets/images/products/folleilogo.svg";

interface OrbitItemProps {
    radius: number;
    angle: number;
    speed: number;
    label: string;
    icon: React.ReactNode;
    direction: "clockwise" | "counter-clockwise";
    offsetX?: string;
    offsetY?: string;
}

const OrbitItem: React.FC<OrbitItemProps> = ({
    radius,
    angle,
    speed,
    label,
    icon,
    direction,
    offsetX = "0px",
    offsetY = "0px"
}) => {
    const animClass = direction === "clockwise" ? "orbit-clockwise" : "orbit-counter-clockwise";
    const counterAnimClass = direction === "clockwise" ? "orbit-counter-clockwise" : "orbit-clockwise";

    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-10"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                transform: `rotate(${angle}deg)`,
            }}
        >
            <div
                className="w-full h-full relative rounded-full"
                style={{
                    animation: `${animClass} ${speed}s linear infinite`,
                }}
            >
                {/* The white dot sitting directly on the ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-0" />

                {/* The capsule itself, offset slightly from the dot */}
                <div
                    className="absolute top-0 left-1/2 w-0 h-0 pointer-events-none"
                    style={{
                        animation: `${counterAnimClass} ${speed}s linear infinite`,
                    }}
                >
                    <div
                        className="absolute flex items-center gap-2.5 pl-2 pr-4 py-1.5 border border-[#045F9D]/15 hover:border-[#045F9D]/40 rounded-xl shadow-[0_4px_20px_rgba(4,95,157,0.06)] pointer-events-auto transition-all duration-300 hover:scale-105 z-10 whitespace-nowrap"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${-angle}deg) translate(${offsetX}, ${offsetY})`,
                            backgroundColor: "#F1F1F1",
                            boxShadow: "inset 0 2px 10px 0 rgba(100, 201, 255, 0.25)"
                        }}
                    >
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#004370] text-white">
                            {icon}
                        </span>
                        <span className="text-[#04032E] text-base font-medium tracking-tight ">{label}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ConnectedContext: React.FC = () => {
    return (
        <section className="relative w-full GlobalPadding flex justify-center bg-white overflow-hidden">
            <div className="w-full max-w-[1300px] flex flex-col items-center">

                {/* Badge Header */}
                <div data-ns-animate="true" data-delay="0.1" className="mb-6 flex justify-start">
                    <div
                        style={{
                            borderRadius: '10px',
                            overflow: 'visible'
                        }}
                        className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-white border border-[#004370]/30 text-[#004370] font-medium text-[16px] "
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004370]" />
                        <span className="tracking-wide">
                            Connected Context
                        </span>
                    </div>
                </div>

                {/* Heading & Subheading */}
                <h2
                    data-ns-animate="true" data-delay="0.1"
                    className="text-[#04032E] text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] mb-4 text-center  max-w-4xl">
                    Every Recommendation Starts With <br />
                    <span className="bg-gradient-to-r from-[#1079B7] via-[#8E2884] to-[#004370] bg-clip-text text-transparent">
                        Complete Context
                    </span>
                </h2>
                <p
                    data-ns-animate="true" data-delay="0.1"
                    className="text-[#5A5A5C] text-base sm:text-lg max-w-4xl mx-auto font-light leading-relaxed mb-16 text-center ">
                    The Sales Executive Worker combines customer context, product knowledge, pricing, commercial policies, and operational intelligence to deliver recommendations that are accurate, relevant, and tailored to every opportunity.
                </p>

                {/* DESKTOP VERSION: Orbit Ring Layout Container */}
                <div
                    data-ns-animate="true" data-delay="0.1"
                    className="hidden md:flex w-full items-center justify-center relative select-none mt-8" style={{ height: "650px" }}>
                    <style>{`
                        @keyframes orbit-clockwise {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }
                        @keyframes orbit-counter-clockwise {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(-360deg);
                            }
                        }
                    `}</style>

                    {/* Bottom Gradient Fade Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20" />

                    {/* Central Coirei Logo Dashboard Core */}
                    <div className="flex items-center justify-center relative z-30 flex-shrink-0">
                        <div
                            className="w-28 h-28 rounded-full border border-orange-500/35 flex items-center justify-center bg-white relative transition-transform duration-500 hover:scale-105"
                            style={{
                                boxShadow: "0 0 50px rgba(10, 102, 245, 0.15)"
                            }}
                        >
                            <img
                                src={folleiLogo}
                                alt="Coirei Logo Processor"
                                className="w-full h-full object-contain transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Orbit Rings (Static Visual Paths) */}
                    {/* Inner Ring (280px) */}
                    <div
                        className="absolute rounded-full border-[3.5px] border-[#4181CA]/65 z-0"
                        style={{
                            width: "280px",
                            height: "280px"
                        }}
                    />
                    {/* Middle Ring (440px) */}
                    <div
                        className="absolute rounded-full border-[5px] border-[#4181CA]/45 z-0"
                        style={{
                            width: "440px",
                            height: "440px",
                        }}
                    />
                    {/* Outer Ring (600px) */}
                    <div
                        className="absolute rounded-full border-[6.5px] border-[#4181CA]/30 z-0"
                        style={{
                            width: "600px",
                            height: "600px",
                        }}
                    />

                    {/* Orbit Items */}
                    {/* Inner Ring (radius 140px) */}
                    <OrbitItem
                        radius={140}
                        angle={240}
                        speed={40}
                        label="Products"
                        icon={<Boxes size={14} />}
                        direction="clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />
                    <OrbitItem
                        radius={140}
                        angle={60}
                        speed={40}
                        label="Business Knowledge"
                        icon={<BookOpen size={14} />}
                        direction="clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />

                    {/* Middle Ring (radius 220px) */}
                    <OrbitItem
                        radius={220}
                        angle={120}
                        speed={55}
                        label="Business Processes"
                        icon={<Cog size={14} />}
                        direction="counter-clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />
                    <OrbitItem
                        radius={220}
                        angle={300}
                        speed={55}
                        label="Customer Context"
                        icon={<CircleUser size={14} />}
                        direction="counter-clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />

                    {/* Outer Ring (radius 300px) */}
                    <OrbitItem
                        radius={300}
                        angle={150}
                        speed={70}
                        label="Pricing Intelligence"
                        icon={<DollarSign size={14} />}
                        direction="clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />
                    <OrbitItem
                        radius={300}
                        angle={330}
                        speed={70}
                        label="Commercial Policies"
                        icon={<ClipboardCheck size={14} />}
                        direction="clockwise"
                        offsetX="0px"
                        offsetY="32px"
                    />

                </div>

                {/* MOBILE VERSION: Clean Grid Layout */}
                <div className="flex md:hidden flex-col items-center w-full mt-10 relative z-10 px-2">
                    <div data-ns-animate="true" data-delay="0.1" className="w-24 h-24 rounded-full border border-orange-500/35 flex items-center justify-center bg-white shadow-[0_0_30px_rgba(10,102,245,0.15)] mb-10 relative">
                        {/* Connecting Line to Grid */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1.5px] h-10 bg-gradient-to-b from-[#4181CA]/50 to-transparent"></div>
                        <img
                            src={folleiLogo}
                            alt="Coirei Logo Processor"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {[
                            { label: "Products", icon: <Boxes size={18} /> },
                            { label: "Business Knowledge", icon: <BookOpen size={18} /> },
                            { label: "Business Processes", icon: <Cog size={18} /> },
                            { label: "Customer Context", icon: <CircleUser size={18} /> },
                            { label: "Pricing Intelligence", icon: <DollarSign size={18} /> },
                            { label: "Commercial Policies", icon: <ClipboardCheck size={18} /> },
                        ].map((item, idx) => (
                            <div key={idx} data-ns-animate="true" data-delay={(idx * 0.1).toFixed(1)} className="flex items-center gap-3 p-4 border border-[#045F9D]/15 rounded-xl bg-[#F1F1F1] shadow-[inset_0_2px_10px_0_rgba(100,201,255,0.15)] relative">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#004370] text-white shrink-0">
                                    {item.icon}
                                </span>
                                <span className="text-[#04032E] text-[15px] font-medium tracking-tight">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Gradient Fade/Blur Overlay */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none z-30 backdrop-blur-[3px]" />
        </section>
    );
};

export default ConnectedContext;
