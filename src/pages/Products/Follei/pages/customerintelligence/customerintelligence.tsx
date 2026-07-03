import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Navbar from "../../../../../component/Navbar";
import Footer from "../../sections/Footer";
import Faq from "../../sections/Faq";
import SEO from "../../../../../component/SEO";
import useScrollAnimations from "../../../../../hooks/useScrollAnimations";

// Sections
import HeroSection from "./HeroSection";
import IntelligentSupportSection from "./IntelligentSupportSection";
import ConfidentResolutionSection from "./ConfidentResolutionSection";
import ProactiveResolutionSection from "./ProactiveResolutionSection";
import BetterExperienceSection from "./BetterExperienceSection";

const CustomerIntelligence = () => {
    useScrollAnimations();

    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.8, 
            easing: (t) => 1 - Math.pow(1 - t, 4), 
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Force a single page reload if not refreshed recently (to ensure GSAP/Lenis calculates perfectly)
        const lastRefresh = sessionStorage.getItem("ci-refresh-time");
        const now = Date.now();
        const recentlyRefreshed = lastRefresh && (now - parseInt(lastRefresh, 10) < 10000);

        if (!recentlyRefreshed) {
            sessionStorage.setItem("ci-refresh-time", now.toString());
            window.location.reload();
        }

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="overflow-x-clip bg-[#FFFFFF] min-h-screen">
            <SEO
                title="Customer Intelligence - Follei"
                description="Resolve every customer issue with intelligence."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main>
                <HeroSection />
                <IntelligentSupportSection />
                <ProactiveResolutionSection />
                <ConfidentResolutionSection />
                <BetterExperienceSection />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default CustomerIntelligence;
