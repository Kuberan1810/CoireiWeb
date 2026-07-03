import React from "react";

import HeroSection from "./section/HeroSection";
import SmartOnboardingSection from "./section/SmartOnboardingSection";
import SuccessIntelligenceSection from "./section/SuccessIntelligenceSection";
import CustomerJourneySection from "./section/CustomerJourneySection";
import RelationshipsSection from "./section/RelationshipsSection";
import Faq from "../../sections/Faq";

const CustomerSuccess: React.FC = () => {

  return (
    <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen font-sans">
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
