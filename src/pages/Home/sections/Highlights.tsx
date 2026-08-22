import { useEffect, useRef } from "react";
import { Cpu, Headphones, LayoutGrid } from "lucide-react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import founderImg from "../../../assets/images/Resourses/company/founder.png";
import coFounderImg from "../../../assets/images/Resourses/company/Co-founder.png";
import uiUxImg from "../../../assets/images/Resourses/company/UI&UX-Designer.png";
import backendImg from "../../../assets/images/Resourses/company/backendDeveloper.png";
import cyberSecurityImg from "../../../assets/images/Resourses/company/cyberSecurity.png";
import kubuImg from "../../../assets/images/Resourses/company/kubu3.png";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, motionValue, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Number(latest.toFixed(0))) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

const Highlights = () => {
    return (
        <section className="relative w-full bg-white GlobalPadding">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between" data-ns-animate="true" data-direction="up" data-delay="0.1">
                        <div>
                            <span className="text-[#D33B12] text-[16px] leading-[20.8px] font-normal block mb-4 instrument-sans">
                                Highlights
                            </span>
                            <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-normal text-[#0E121B] instrument-sans  mb-6">
                                Engineering AI for <br></br>real-world impact
                            </h2>
                            <p className="text-[#0E121B] text-[16px] leading-[24px] font-normal instrument-sans ">
                                Building secure, scalable AI systems that help organizations <br></br> automate, innovate, and grow.
                            </p>
                        </div>

                        <div className="mt-16 lg:mt-32">
                            <p className="text-[#5B6280] text-[15px] leading-[22px] font-normal instrument-sans max-w-xs mb-8">
                                Built for ambitious organizations From startups and institutions to enterprises and government organizations.
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    <img className="relative z-[60] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={founderImg} alt="Avatar 1" />
                                    <img className="relative z-[50] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={coFounderImg} alt="Avatar 2" />
                                    <img className="relative z-[40] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={uiUxImg} alt="Avatar 3" />
                                    <img className="relative z-[30] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={backendImg} alt="Avatar 4" />
                                    <img className="relative z-[20] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={cyberSecurityImg} alt="Avatar 5" />
                                    <img className="relative z-[10] w-14 h-14 rounded-full border-2 border-white bg-slate-100 object-cover object-top" src={kubuImg} alt="Avatar 6" />
                                </div>
                                <div className="w-8 h-[2px] bg-[#E5E7EB]"></div>
                                <span className="text-[#0E121B] text-[18px] font-medium instrument-sans">
                                    Trusted by growing teams
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" data-ns-animate="true" data-direction="up" data-delay="0.3">
                        {/* Top Card (Spans full width) */}
                        <div className="sm:col-span-2 bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                    <Cpu className="w-4 h-4 text-[#0E121B]" />
                                </div>
                                <span className="text-[16px] font-medium text-[#0E121B] instrument-sans">AI Products</span>
                            </div>
                            <div>
                                <h3 className="text-[48px] md:text-[56px] font-medium text-[#0E121B] leading-none mb-4 instrument-sans">
                                    <AnimatedCounter value={4} suffix="+" />
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans">
                                    Intelligent products built for real-world use
                                </p>
                            </div>
                        </div>

                        {/* Bottom Left Card */}
                        <div className="bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                    <Headphones className="w-4 h-4 text-[#0E121B]" />
                                </div>
                                <span className="text-[16px] font-medium text-[#0E121B] instrument-sans">AI Solutions</span>
                            </div>
                            <div>
                                <h3 className="text-[48px] md:text-[56px] font-medium text-[#0E121B] leading-none mb-4 instrument-sans">
                                    <AnimatedCounter value={10} suffix="+" />
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans">
                                    Business workflows powered by AI
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right Card */}
                        <div className="bg-[#F5F7FA] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                    <LayoutGrid className="w-4 h-4 text-[#0E121B]" />
                                </div>
                                <span className="text-[16px] font-medium text-[#0E121B] instrument-sans">Industries</span>
                            </div>
                            <div>
                                <h3 className="text-[48px] md:text-[56px] font-medium text-[#0E121B] leading-none mb-4 instrument-sans">
                                    <AnimatedCounter value={15} suffix="+" />
                                </h3>
                                <p className="text-[#5B6280] text-[15px] font-normal instrument-sans leading-[22px]">
                                    Industries and business domains supported
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;