import React, { useEffect } from "react";
import Navbar from "../../../../../component/Navbar";
import Footer from "../../sections/Footer";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

// Section Component Imports
import { HeroSection } from "./HeroSection";
import { SalesExecutionSection } from "./SalesExecutionSection";
import { SalesIntelligenceSection } from "./SalesIntelligenceSection";
import ConnectedContext from "./ConnectedContext";
import Faq from "../../sections/Faq";
import Lenis from "@studio-freight/lenis";

const SalesExecutive: React.FC = () => {
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
                <ConnectedContext />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default SalesExecutive;
