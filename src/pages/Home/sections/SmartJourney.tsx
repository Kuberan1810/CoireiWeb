import React from "react";
import { useNavigate } from "react-router-dom";

const journeyItems = [
    {
        title: <span className="text-[#F67300]">Gen AI Developer</span>,
        description: "Our AI Developers build intelligent solutions that help businesses work smarter and faster. We focus on creating reliable, scalable, and user-friendly AI systems for real business needs. From automation to smart analytics, our team delivers technology that drives growth and innovation."
    },
    {
        title: <span className="text-[#F67300]">AI Strategist</span>,
        description: "Our AI Strategists help businesses identify the right AI opportunities for long-term success. We create clear strategies that align technology with your business goals and customer needs. With deep market understanding, we ensure every AI solution adds real value to your company."
    },
    {
        title: <span className="text-[#F67300]">AI Consultant</span>,
        description: "Our AI Consultants work closely with clients to understand challenges and provide practical AI solutions. We guide businesses through every step, from planning to implementation with complete transparency. Our goal is to help companies adopt AI confidently and achieve measurable results."
    },
    {
        title: <span className="text-[#F67300]">App Tester</span>,
        description: "Our App Testers ensure every application performs smoothly, securely, and without errors. We carefully test functionality, performance, and user experience before every launch. With attention to detail and quality assurance, we help deliver reliable digital products for your business."
    }
];

function SmartJourney() {
    const navigate = useNavigate();

    return (
        <section className="mx-6 sm:mx-10 md:mx-15 pt-10 sm:pt-20 pb-0">

         {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 mb-16">
                <h2
                    data-ns-animate
                    className="text-[20px] sm:text-[20px] md:text-[40px] font-normal text-[#E3E3E0] leading-[1.13] md:leading-[68px] mb-8 max-w-4xl tracking-tight text-center"
                >
                   <span className="text-[#F67300]">Smart <span className="text-white">Journey</span></span>
                   <span className="text-white"> with Our <span className="text-[#F67300]">AI Team</span></span>
                </h2>
            </div>

            {/* Grid of 4 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {journeyItems.map((item, index) => (
                    <div
                        key={index}
                        data-ns-animate
                        data-delay={0.1 * index}
                        data-offset="80"
                        className="
                            bg-[#292929]
                            border border-white/15
                            rounded-2xl
                            hover:bg-[#323232]
                            hover:border-white/25
                            hover:-translate-y-1.5
                            transition-all duration-700
                            w-full
                            p-[24px] sm:p-[32px]
                            flex flex-col justify-start group
                            min-h-[260px]
                        "
                    >
                        <div className="space-y-[15px]">
                            <h3 className="text-white font-medium text-[20px] sm:text-[22px] tracking-tight">
                                {item.title}
                            </h3>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered Button */}
            <div className="flex justify-center mt-12">
                <button 
                    onClick={() => navigate("/contactsales")}
                    className="text-[#252525] py-2 px-5 bg-[#FAF9F6] rounded-md font-semibold border border-transparent hover:bg-[#F67300] hover:text-white hover:border-[#F67300] transition-all duration-500 ease-out cursor-pointer text-xs sm:text-sm w-fit"
                >
                    Consult with our Team
                </button>
            </div>
        </section>
    );
}

export default SmartJourney;
