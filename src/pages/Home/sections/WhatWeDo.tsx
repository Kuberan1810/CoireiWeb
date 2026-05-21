import { Lightbulb, PenTool, BarChart2, Wrench } from "lucide-react";

const services = [
    {


        icon: <Lightbulb size={18} className="text-white/80" />,
        title: "Web & Platform Development",
        description:
            "We offer professional web and platform development services to build fast, secure, and scalable digital solutions. From business websites to complex SaaS platforms, our development approach ensures performance, responsiveness, and future scalability.",
    },
    {


        icon: <PenTool size={18} className="text-white/80" />,
        title: "Custom Business Applications (CRM / ERP / Portals)",
        description:
            "Streamline your business operations with custom-built CRM, ERP systems, and web portals tailored to your workflow. We develop scalable business applications that improve productivity, automate processes, and centralize your data efficiently.",
    },
    {


        icon: <BarChart2 size={18} className="text-white/80" />,
        title: "AI Chatbots & Virtual Assistants",
        description:
            "Enhance customer engagement with intelligent AI chatbots and virtual assistants. Our solutions provide real-time support, automate conversations, and improve user experience across websites, apps, and messaging platforms.",
    },
    {


        icon: <Lightbulb size={18} className="text-white/80" />,
        title: "Process Automation & System Integration",
        description:
            "Reduce manual work and increase efficiency with advanced process automation and system integration services. We connect your tools, automate workflows, and ensure seamless data flow across your business systems.",
    },
    {

        icon: <Wrench size={18} className="text-white/80" />,
        title: "Data, Dashboards & Business Intelligence",
        description:
            "Make smarter decisions with real-time data dashboards and business intelligence solutions. We transform raw data into meaningful insights using interactive dashboards, reports, and analytics tools tailored to your business needs.",
    },
    {


        icon: <BarChart2 size={18} className="text-white/80" />,
        title: "UI/UX, Branding & Product Design",
        description:
            "Create impactful digital experiences with our UI/UX design, branding, and product design services. We focus on user-centered design, modern interfaces, and strong brand identity to enhance engagement and conversion.",
    },
];


function WhatWeDo() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 pt-10 sm:pt-20 pb-0">

            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4">
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"

                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[22px] whitespace-nowrap shrink-0">
                    Our Services
                </div>
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-l from-[#161616] to-white" />
            </div>



            {/* Two-column layout replaced with Grid Layout */}
            <div className="flex flex-col gap-16">

                {/* HEADER SECTION */}

                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"

                    className="w-full text-center"

                >
                    <div
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] leading-relaxed max-w-3xl mx-auto space-y-4"
                    >

                        <p>
                            Our AI powered solutions ensure your business are out reaching by flexible delivery, profitable applications that adapt with your business vision.
                        </p>
                    </div>
                </div>

                {/* GRID SECTION */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

                >
                    {services.map((service, index) => (
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

                                p-[24px] sm:p-[32px]
                                w-full
                                flex flex-col justify-between group
                                min-h-[320px]
                            "

                        >
                            {/* Top row: icon + badge */}
                            <div className="flex items-start justify-between">
                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300 mb-5">
                                    {service.icon}
                                </div>


                            </div>

                            <div className="space-y-[15px]">
                                <h3 className="text-white font-medium text-[20px] sm:text-[21px] tracking-tight">
                                    {service.title}
                                </h3>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhatWeDo;