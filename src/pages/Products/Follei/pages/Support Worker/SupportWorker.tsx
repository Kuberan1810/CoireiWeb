import Navbar from "../../../../../component/Navbar";
import Footer from "../../sections/Footer";
import Faq from "../../sections/Faq";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

// Sections
import HeroSection from "./HeroSection";
import IntelligentSupportSection from "./IntelligentSupportSection";
import ConfidentResolutionSection from "./ConfidentResolutionSection";
import ProactiveResolutionSection from "./ProactiveResolutionSection";
import BetterExperienceSection from "./BetterExperienceSection";

const SupportWorker = () => {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen">
            <SEO
                title="Support Worker - Follei"
                description="Resolve every customer issue with intelligence."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main>
                <HeroSection />
                <IntelligentSupportSection />
                <ProactiveResolutionSection />
                <ConfidentResolutionSection />
                <BetterExperienceSection />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default SupportWorker;
