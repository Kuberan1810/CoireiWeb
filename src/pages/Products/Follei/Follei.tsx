
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import { useEffect } from "react";

// Sections
import { Hero } from "./sections/Hero";
import AboutFollei from "./sections/AboutFollei";
import Overview from "./sections/Overview";
import Folleiplatform from "./sections/Folleiplatform";
import Automation from "./sections/Automation";
import AIWorkforce from "./sections/AIWorkforce";
import Faq from "./sections/Faq";
import HowWeWork from "./sections/HowWeWorks";
import Integrations from "./sections/integrations";

const Follei = () => {
    useScrollAnimations();

    useEffect(() => {
        const lastRefresh = sessionStorage.getItem("follei-refresh-time");
        const now = Date.now();
        const recentlyRefreshed = lastRefresh && (now - parseInt(lastRefresh, 10) < 10000);

        if (!recentlyRefreshed) {
            sessionStorage.setItem("follei-refresh-time", now.toString());
            window.location.reload();
        }
    }, []);

    return (
        <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen">
            <SEO
                title="Our Products – Coirei"
                description="Explore our range of AI-driven digital products including Execa, Follei, and Coirei LMS."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main className="pt-20">
                <Hero />
                <Overview />
                <AIWorkforce />
                <AboutFollei />
                <Automation />
                <HowWeWork/>
                <Integrations />
                <Folleiplatform />
                <Faq />
            </main>

            <Footer isFollei />
        </div>
    );
};

export default Follei;