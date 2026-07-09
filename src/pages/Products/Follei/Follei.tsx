import { useState, useEffect } from "react";
import Footer from "./sections/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import useScrollAnimations from "../../../hooks/useScrollAnimations";


// Sections
import Hero from "./sections/Hero";
import AboutFollei from "./sections/AboutFollei";
import Overview from "./sections/Overview";
import Folleiplatform from "./sections/Folleiplatform";
import Automation from "./sections/Automation";
import AIWorkforce from "./sections/AIWorkforce";
import Faq from "./sections/Faq";
import HowWeWork from "./sections/HowWeWorks";
import Integrations from "./sections/integrations";

const quickLinks = [
    { id: "hero", label: "Top" },
    { id: "overview", label: "Overview" },
    { id: "workforce", label: "AI Workforce" },
    { id: "automation", label: "Automation" },
    { id: "how-we-work", label: "How We Work" },
    { id: "integration", label: "Integrations" },
    { id: "platform", label: "Platform" },
    { id: "faq", label: "FAQ" }
];

const Follei = () => {
    useScrollAnimations();
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = quickLinks.length - 1; i >= 0; i--) {
                const section = document.getElementById(quickLinks[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(quickLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section && window.lenis) {
            window.lenis.scrollTo(section, { offset: -80, duration: 1.5 });
        } else if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen relative">
            <SEO
                title="Follei"
                description="Explore our range of AI-driven digital products including Execa, Follei, and Coirei LMS."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            {/* Quick Scroll Sticky Navigation (Dots) */}
            <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
                {quickLinks.map((link) => (
                    <div
                        key={link.id}
                        className="group relative flex items-center justify-end"
                    >

                        <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none pr-2">
                            <div className="bg-[#04032E] text-white text-xs font-medium py-1 px-2.5 rounded shadow-md whitespace-nowrap">
                                {link.label}
                            </div>
                        </div>


                        <button
                            onClick={() => scrollToSection(link.id)}
                            className="w-3 h-3 rounded-full transition-all duration-300 outline-none hover:scale-150"
                            style={{
                                backgroundColor: activeSection === link.id ? '#1079B7' : '#D1D5DB',
                                border: activeSection === link.id ? '2px solid rgba(16, 121, 183, 0.3)' : 'none',
                                backgroundClip: 'padding-box'
                            }}
                            aria-label={`Scroll to ${link.label}`}
                        />
                    </div>
                ))}
            </div>

            <main>
                <div id="hero"><Hero /></div>
                <div id="overview"><Overview /></div>
                <div id="workforce"><AIWorkforce /></div>
                <AboutFollei />
                <div id="automation"><Automation /></div>
                <div id="how-we-work"><HowWeWork /></div>
                <div id="platform"><Folleiplatform /></div>
                <div id="integration"> <Integrations /></div>
                <div id="faq"><Faq /></div>
            </main>

            <Footer />
        </div>
    );
};

export default Follei;