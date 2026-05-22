import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import FAQSection from "../Home/sections/FAQSection";

const servicesData: Record<string, { title: string; subtitle: string; desc: string; features: string[] }> = {
    "custom-web-platform-development": {
        title: "Custom Web & Platform Development",
        subtitle: "We build modern, secure, and highly scalable web applications tailored to your business needs.",
        desc: "From complex customer portals to custom SaaS products, we architect software that scales with your growth. We focus on clean code, blazing fast load times, and premium user experiences.",
        features: [
            "Modern frontend frameworks (React, Next.js)",
            "Scalable cloud backend architecture",
            "Responsive layout optimization",
            "SEO and performance optimization"
        ]
    },
    "process-automation-system-integration": {
        title: "Process Automation & System Integration",
        subtitle: "Eliminate manual errors and streamline operations by integrating your software tools.",
        desc: "Connect your existing software packages, databases, and APIs. We automate repetitive tasks to save your team hours of work every single week.",
        features: [
            "API design and integrations",
            "Automated ETL and data syncing",
            "Custom workflow scripting",
            "Legacy system modernization"
        ]
    },
    "business-intelligence-dashboard-development": {
        title: "Data, Dashboards & Business Intelligence",
        subtitle: "Make faster and smarter business decisions with real-time operational insights.",
        desc: "Centralize your business data into clean, interactive dashboards. Track key performance metrics, monitor growth, and identify bottlenecks instantly.",
        features: [
            "Real-time data visualization",
            "Interactive charts and tables",
            "Custom analytics pipelines",
            "Role-based access control"
        ]
    },
    "ui-ux-branding-product-design": {
        title: "UI/UX, Branding & Product Design",
        subtitle: "User-focused designs that improve usability, adoption, and digital brand trust.",
        desc: "We design beautiful, intuitive, and modern user interfaces. We align your product's design system with your brand identity to build credibility and delight users.",
        features: [
            "Wireframing and high-fidelity prototyping",
            "Interactive design systems",
            "User journey and persona research",
            "Usability testing and audits"
        ]
    }
};

const ServiceDetails = () => {
    useScrollAnimations();
    const { slug } = useParams<{ slug: string }>();

    const service = servicesData[slug || ""] || {
        title: "Custom Software Services",
        subtitle: "Elevate your business operations with our modern technology solutions.",
        desc: "At Coirei, we architect the digital backbone of your business. We build custom software solutions engineered for scalability, safety, and performance.",
        features: [
            "Tailored software engineering",
            "Robust security architectures",
            "Flexible APIs and integrations",
            "Continuous support and iterations"
        ]
    };

    return (
        <>
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-32 pb-20 w-full bg-[#161616] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center w-full">

                    {/* --- HEADER SECTION --- */}
                    <div className="flex flex-col items-center text-center mt-10 md:mt-16 w-full mb-20">
                        {/* Main Title */}
                        <h1 data-ns-animate="true" data-delay="0.1" className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 max-w-4xl tracking-tight">
                            {service.title}
                        </h1>

                        {/* Subtitle / Description */}
                        <p data-ns-animate="true" data-delay="0.2" className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl font-light">
                            {service.subtitle}
                        </p>
                    </div>

                    {/* --- ABOUT SECTION --- */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32 items-center">
                        <div data-ns-animate="true" data-delay="0.1" className="text-left">
                            <h2 className="text-3xl font-medium text-[#E3E3E0] mb-6">
                                How We Help You Succeed
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed font-light mb-8">
                                {service.desc}
                            </p>
                        </div>
                        <div data-ns-animate="true" data-delay="0.2" className="bg-white/5 border border-white/10 rounded-[20px] p-8 md:p-10">
                            <h3 className="text-xl font-medium text-white mb-8 border-b border-white/10 pb-4">
                                Core Capabilities
                            </h3>
                            <ul className="flex flex-col gap-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white/80 font-light text-base md:text-lg">
                                        <div className="w-2 h-2 rounded-full bg-[#F67300]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* --- CTA SECTION --- */}
                    <div className="w-full mt-10 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto border-t border-white/10 pt-20">
                        <h2 data-ns-animate="true" className="text-[20px] sm:text-[20px] md:text-[40px] font-medium text-[#E3E3E0] text-center mb-20 tracking-tight leading-tight md:leading-[68px]">
                            Get Started with <span className="text-[#F67300]">Coirei Services</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full mb-10">
                            {/* Left Content */}
                            <div data-ns-animate="true" className="flex flex-col gap-6 items-start text-left">
                                <h3 className="text-2xl md:text-[28px] font-normal text-white leading-tight">
                                    Ready to design your custom system?
                                </h3>
                                <div className="flex flex-col gap-4 text-white/70 text-lg font-light leading-relaxed">
                                    <p>Book a consultation with our technology team.</p>
                                    <p>We'll analyze your requirements and outline a product roadmap.</p>
                                </div>
                            </div>

                            {/* Right Image Placeholder (Blank Space) */}
                            <div className="w-full h-[200px] md:h-[300px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 font-light">
                                Custom Roadmap Session
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <FAQSection />

            <Footer />
        </>
    );
};

export default ServiceDetails;
