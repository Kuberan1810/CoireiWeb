// Section Components
import Hero from "./sections/Hero";
import VoiceAgentSection from "./sections/VoiceAgentSection";
import OverviewSection from "./sections/OverviewSection";
import PlatformTransformation from "./sections/PlatformTransformation";
import OmnichannelSection from "./sections/OmnichannelSection";
import AdvancedAISection from "./sections/AdvancedAISection";
import HowItWorks from "./sections/HowItWorks";
import AIWorkforceSection from "./sections/AIWorkforceSection";
import FolleiPlatformSection from "./sections/FolleiPlatformSection";
import Integration from "./sections/Integration";
import Timeline from "./sections/Timeline";
import InsightsCTASection from "./sections/InsightsCTASection";
import FAQSection from "./sections/FAQSection";
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import { useEffect } from "react";

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
        <div className="overflow-x-clip bg-[#161616] min-h-screen">
            <SEO
                title="Our Products – Coirei"
                description="Explore our range of AI-driven digital products including Execa, Follei, and Coirei LMS."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main className="pt-20">
                <Hero />
                <VoiceAgentSection />
                <OverviewSection />
                <PlatformTransformation />
                <OmnichannelSection />
                <AdvancedAISection />
                <HowItWorks />
                <AIWorkforceSection />
                <FolleiPlatformSection />
                <Integration />
                <Timeline />
                <InsightsCTASection />
                <FAQSection />
            </main>

            <Footer />
        </div>
    );
};

export default Follei;