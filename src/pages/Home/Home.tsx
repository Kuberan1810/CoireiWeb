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
import FAQ from "./sections/faq";
import Cta from "./sections/Cta";
import StayWithCoirei from "./sections/staywithcoirei";
import Hero from "./sections/Hero";
import IndustrialAITraining from "./sections/IndustrialAITraining";
import WhyCoirei from "./sections/WhyCoirei";
import Highlights from "./sections/Highlights";
import Ecosystem from "./sections/Ecosystem";
import { useState } from "react";


function Home() {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-white min-h-screen">
            <SEO
                title="AI Powered Solutions for Businesses | Coirei"
                description="Coirei is AI powered solutions company. We create AI apps and chatbots. AI automation and AI web and platform. AI products and customized LMS for business."
            />
            <FaqSchema />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <Hero />
            <WhyCoirei />
            <Highlights />
            <Ecosystem />
            <About />
            <OurProducts />
            <BuildWithCoirei />
            <IndustrialAITraining />
            <Industry />
            <Vision />
            <Ceo />
            <FAQ />
            <StayWithCoirei />
       
            <Footer />

        </div>
    );
}

export default Home;
