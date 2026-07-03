import React, { useEffect } from "react";

import HeroSection from "./section/HeroSection";
import SmartOnboardingSection from "./section/SmartOnboardingSection";
import SuccessIntelligenceSection from "./section/SuccessIntelligenceSection";
import CustomerJourneySection from "./section/CustomerJourneySection";
import RelationshipsSection from "./section/RelationshipsSection";
import Faq from "../../sections/Faq";
import Navbar from "../../../../../component/Navbar";
import SEO from "../../../../../component/SEO";
import Lenis from '@studio-freight/lenis'
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

const CustomerSuccess: React.FC = () => {
  useScrollAnimations();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.8, // Ultra smooth duration (increased from 1.2)
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for a buttery gliding feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly softer wheel step to enhance smoothness
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
