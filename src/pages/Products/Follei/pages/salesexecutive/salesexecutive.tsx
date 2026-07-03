import React from "react";
import Navbar from "../../../../../component/Navbar";
import Footer from "../../sections/Footer";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

// Section Component Imports
import { HeroSection } from "./HeroSection";
import { SalesExecutionSection } from "./SalesExecutionSection";
import { SalesIntelligenceSection } from "./SalesIntelligenceSection";
import Faq from "../../sections/Faq";

const SalesExecutive: React.FC = () => {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-white min-h-screen">
            <SEO
                title="Sales Executive - Follei - Coirei"
                description="Close more deals with intelligent sales execution. The Sales Executive Worker guides prospects through every stage of the buying journey with complete business intelligence."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main className="pt-24 w-full overflow-x-hidden bg-white">
                <HeroSection />
                <SalesIntelligenceSection />
                <SalesExecutionSection />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default SalesExecutive;
