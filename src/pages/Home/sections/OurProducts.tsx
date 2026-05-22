import { BarChart2 } from "lucide-react";

import { Teacher } from "iconsax-react"

import { Link } from "react-router-dom";

const products = [
    {
        icon: <BarChart2 size={18} className="text-white/80" />,
        title: <span className="text-[#F67300]">Follei</span>,
        description: "An AI-powered follow-up agent that automates lead capture, engagement, and workflows, helping you never miss opportunities and improve conversions.",
        to: "/products/follei",
    },
    {
        icon: <Teacher size={18} color="currentColor" className="text-white/80" />,
        title: <span className="text-[#F67300]">Coirei LMS</span>,
        description: "Coirei LMS is a scalable learning management system built to create, manage, and track educational content efficiently.",
        to: "/products/Coireilms",
    },
];

function OurProducts() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 pt-15 pb-16  md:pt-6 md:pb-20">
            {/* Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-12 gap-4">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full max-w-[342px] bg-linear-to-r from-[#161616] to-white"
                ></div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-5 py-1.5 border border-white/10 rounded-md bg-transparent text-white text-[22px] whitespace-nowrap"
                >
                    Our Products
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full max-w-[342px] bg-linear-to-l from-[#161616] to-white"
                ></div>
            </div>

            {/* Centered heading */}
            <div className="text-center max-w-3xl mx-auto mb-6">

                <p
                    data-ns-animate
                    data-delay="0.1"
                    data-offset="80"
                    className="text-white text-[16px] sm:text-[18px] leading-relaxed"
                >

                    Coirei builts  world class level LMS product for multiple industries around the world

                </p>
            </div>

            {/* Products */}

            <div className="flex lg:flex-row flex-col flex-wrap items-center justify-center gap-[30px] mt-16">

                {products.map((product, index) => {
                    const CardWrapper = product.to ? Link : "div";
                    const wrapperProps = product.to ? { to: product.to } : {};
                    return (
                        <CardWrapper
                            key={index}
                            {...(wrapperProps as any)}
                            data-ns-animate
                            data-delay={`${index * 0.1}`}
                            data-offset="80"

                            className="relative w-full md:max-w-[480px] rounded-[20px] overflow-hidden cursor-pointer group bg-[#29292980] border border-white/15 hover:bg-[#323232] hover:border-white/25 transition-all duration-500 no-underline "

                            style={{
                                boxShadow: "0 -20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                            }}
                        >

                            {/* Card content */}

                            <div className="relative z-10 flex  flex-col h-full p-[28px] ">

                                {/* Text pushed to bottom */}
                                <div className="mt-auto flex flex-col gap-[10px]">
                                    <div className="flex items-center justify-center gap-4 mb-5">
                                        {/* Icon */}
                                        <div
                                            className="w-[70px] h-[70px] rounded-full flex items-center justify-center shrink-0"
                                            style={{
                                                background: "rgba(255,255,255,0.07)",
                                                border: "1px solid rgba(255,255,255,0.12)",
                                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                                            }}
                                        >
                                            <div className="text-white/80">{product.icon}</div>
                                        </div>
                                        <h3 className="text-white font-bold tracking-tight text-[30px] group-hover:text-orange-400 duration-300" >
                                            {product.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 text-[15px] md:text-[20px] leading-[1.65] font-light group-hover:text-white/80">
                                        {product.description}
                                    </p>
                                </div>


                            </div>
                        </CardWrapper>
                    );
                })}
            </div>
        </section>
    );
}

export default OurProducts; 