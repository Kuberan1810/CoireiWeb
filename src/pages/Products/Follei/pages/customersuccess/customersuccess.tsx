import React from "react";

import HeroSection from "./section/HeroSection";
import SmartOnboardingSection from "./section/SmartOnboardingSection";
import SuccessIntelligenceSection from "./section/SuccessIntelligenceSection";
import CustomerJourneySection from "./section/CustomerJourneySection";
import RelationshipsSection from "./section/RelationshipsSection";
import Faq from "../../sections/Faq";
import Navbar from "../../../../../component/Navbar";
import SEO from "../../../../../component/SEO";

const CustomerSuccess: React.FC = () => {

  return (
    <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen">
      <SEO
        title="Follei"
        description="Explore our range of AI-driven digital products including Execa, Follei, and Coirei LMS."
      />

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main className="pt-24 w-full overflow-x-hidden bg-white">
        <HeroSection />
        <SmartOnboardingSection />
        <SuccessIntelligenceSection />
        <CustomerJourneySection />
        <RelationshipsSection />
        <Faq />
      </main>
    </div>
  );
};

export default CustomerSuccess;
