
import { useEffect } from "react";
// Sections
import Lenis from '@studio-freight/lenis'
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";
import Navbar from "../../../../../component/Navbar";
import SEO from "../../../../../component/SEO";
import Footer from "../../sections/Footer";
import AccountAnalytics from "./section/AccountAnalytics";
import AccountEvolution from "./section/AccountEvolution";
import AccountIntelligence from "./section/AccountIntelligence";
import BusinessImpact from "./section/BusinessImpact";
import Faq from "./section/Faqs";
import Hero from "./section/Hero";
import YouUseFollei from "./section/YouUseFollei";

const AccountManager = () => {
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

            <main>
                <Hero />
                <AccountIntelligence />
                <BusinessImpact />
                <AccountEvolution />
                <AccountAnalytics />
                < YouUseFollei />
                <Faq />

            </main>

            <Footer />
        </div>
    );
};

export default AccountManager;