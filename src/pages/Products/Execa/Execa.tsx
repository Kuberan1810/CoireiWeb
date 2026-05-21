import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import { FaqSchema } from "../../../component/StructuredData";
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import CTASection from "../../Features/Sections/CTASection";
import FeatureCategories from "../../Features/Sections/FeatureCategories";
import FeatureContact from "../../Features/Sections/FeatureContact";
import WorksFlow from "../../Features/Sections/WorksFlow";
import FeatureContent from "../../Features/Sections/FeatureContent";
import FeaturesHero from "../../Features/Sections/FeaturesHero";
import IntegrationSection from "../../Features/Sections/IntegrationSection";
import FeaturesSection from "../../Home/sections/FeaturesSection";
import Hero from "../../Home/sections/Hero";
import ProblemSection from "../../Home/sections/ProblemSection";



function Execa() {
    useScrollAnimations();

    return (
        <div className="overflow-hidden">
            <SEO
                title="Coirei – Intelligence Engineered"
                description="Coirei – Intelligence Engineered. We build AI-native systems, deep-tech engineering platforms, and scalable software solutions that transform ideas into intelligent digital products."
                keywords="Coirei, AI-native systems, deep tech engineering, intelligent software development, enterprise software solutions, AI platform development, software engineering company"
            />
            <FaqSchema />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>


            <Hero />
            <ProblemSection />
            <FeaturesSection />
            <FeaturesHero />
            <FeatureCategories />
            <FeatureContent />
            <WorksFlow />
            <IntegrationSection />
            <CTASection />
            <FeatureContact />

            <Footer />

        </div>
    );
}

export default Execa;
