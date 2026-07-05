import SEO from "../../component/SEO";
import { FaqSchema } from "../../component/StructuredData";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import Industry from "./sections/Industry";
import Vision from "./sections/Vision";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import About from "./sections/About";
import OurProducts from "./sections/OurProduct";
import BuildWithCoirei from "./sections/BuildWithCoirei";
import Ceo from "./sections/Ceo";
import Cta from "./sections/Cta";
import Hero from "./sections/Hero";
import IndustrialAITraining from "./sections/IndustrialAITraining";
import { useState } from "react";


function Home() {
    useScrollAnimations();
    const [isHeroTypingDone, setIsHeroTypingDone] = useState(false);

    return (
        <div className="overflow-x-clip bg-white  min-h-screen">
            <SEO

                title="AI Powered Solutions for Businesses | Coirei"
                description="Coirei is AI powered solutions company. We create AI apps and chatbots. AI automation and AI web and platform. AI products and customized LMS for business."
            />
            <FaqSchema />


            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out transform ${isHeroTypingDone ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <Navbar />
            </div>

            <Hero onTypingComplete={() => setIsHeroTypingDone(true)} />
            <About />
            <OurProducts />
            <BuildWithCoirei />
            <IndustrialAITraining />
            <Industry />
            <Vision />
            <Ceo />
            <Cta />
       
            <Footer />

        </div>
    );
}

export default Home;
