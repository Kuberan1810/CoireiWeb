// Section Components
import Hero from "./sections/Hero";
import VoiceAgentSection from "./sections/VoiceAgentSection";
import OverviewSection from "./sections/OverviewSection";
import OmnichannelSection from "./sections/OmnichannelSection";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Integration from "./sections/Integration";
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const Follei = () => {
    useScrollAnimations();

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
                <OmnichannelSection />
                <Features />
                <HowItWorks />
                <Integration />
            </main>

            <Footer />
        </div>
    );
};

export default Follei;