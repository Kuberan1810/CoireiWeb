
import Footer from "./sections/Footer";
import Navbar from "../../../component/Navbar";
import SEO from "../../../component/SEO";
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import { useEffect } from "react";
// Sections
import Hero from "./sections/Hero";
import AboutFollei from "./sections/AboutFollei";
import Overview from "./sections/Overview";
import Folleiplatform from "./sections/Folleiplatform";
import Automation from "./sections/Automation";
import AIWorkforce from "./sections/AIWorkforce";
import Faq from "./sections/Faq";
import HowWeWork from "./sections/HowWeWorks";
import Integrations from "./sections/integrations";

import Lenis from '@studio-freight/lenis'
import Sample2 from "./pages/sample2";

const Follei = () => {
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
                {/* <Sample2/> */}

                <Hero />
                <Overview />
                <AIWorkforce />
                <AboutFollei />
                <Automation />
                <HowWeWork />
                <Integrations />
                <Folleiplatform />
                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default Follei;