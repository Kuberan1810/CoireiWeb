import SEO from "../../component/SEO";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import FeaturesHero from "./Sections/FeaturesHero";
import FeatureCategories from "./Sections/FeatureCategories";
import FeatureContent from "./Sections/FeatureContent";
import CTASection from "./Sections/CTASection";
import WorksFlow from "./Sections/WorksFlow";
import FeatureContact from "./Sections/FeatureContact";
import "./Features.css"
import IntegrationSection from "./Sections/IntegrationSection";
import useScrollAnimations from "../../hooks/useScrollAnimations";


function Features() {
    useScrollAnimations();
    return (
        <>
            <SEO 
                title="AI, Automation & Smart Digital Solutions"
                description="Discover powerful technology features including AI automation, scalable software architecture, cloud solutions and advanced development capabilities"
                keywords="AI features, automation solutions, scalable software architecture, cloud technology solutions, smart business automation"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Features", url: "https://coirei.com/features" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <FeaturesHero />
            <FeatureCategories />
            <FeatureContent />
            <WorksFlow />
            <IntegrationSection />
            <CTASection />
            <FeatureContact />

            <Footer />
        </>
    );
};

export default Features;
