import React, { useEffect } from "react";

import HeroSection from "./section/HeroSection";
import SmartOnboardingSection from "./section/SmartOnboardingSection";
import SuccessIntelligenceSection from "./section/SuccessIntelligenceSection";
import CustomerJourneySection from "./section/CustomerJourneySection";
import Faq from "../../sections/Faq";
import Navbar from "../../../../../component/Navbar";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";
import Footer from "../../sections/Footer";

const CustomerSuccess: React.FC = () => {
  useScrollAnimations();

  return (
    <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen">
      <SEO
        title="Follei"
        description="Explore our range of AI-driven digital products including Execa, Follei, and Coirei LMS."
      />

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main className="pt-24 w-full  bg-white">
        <HeroSection />
        <SmartOnboardingSection />
        <SuccessIntelligenceSection />
        <CustomerJourneySection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerSuccess;
