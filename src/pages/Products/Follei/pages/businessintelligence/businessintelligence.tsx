import React from "react";
import Navbar from "../../../../../component/Navbar";
import Footer from "../../../../../component/Footer/Footer";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

// Section Component Imports
import { HeroSection } from "./HeroSection";
import { ConnectedIntelligenceSection } from "./ConnectedIntelligenceSection";
import { WhatFolleiLearnsSection } from "./WhatFolleiLearnsSection";
import { TimelineSection } from "./TimelineSection";
import { WhyItMattersSection } from "./WhyItMattersSection";
import { BusinessImpactSection } from "./BusinessImpactSection";
import Faq from "../../sections/Faq";

const BusinessIntelligence: React.FC = () => {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-[#161616] min-h-screen">
            <SEO
                title="Business Intelligence - Follei - Coirei"
                description="Understand your business inside and out. Follei Business Intelligence transforms disconnected information into a unified digital understanding."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main className="pt-32 pb-24 w-full overflow-x-hidden bg-[#161616]">
                <HeroSection />
                <ConnectedIntelligenceSection />
                <WhatFolleiLearnsSection />
                <TimelineSection />
                <WhyItMattersSection />
                <BusinessImpactSection />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default BusinessIntelligence;
