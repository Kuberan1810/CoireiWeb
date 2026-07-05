import SEO from "../../component/SEO";
import { FaqSchema } from "../../component/StructuredData";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";

import NewHero from "./sections/NewHero";
import AboutUs from "./sections/AboutUs";
import WhatWeDo from "./sections/WhatWeDo";
import SmartJourney from "./sections/SmartJourney";
import WhyChooseUs from "./sections/WhyChooseUs";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { CeoSection } from "./sections/CeoSection";

import OurProducts from "./sections/OurProducts";
import TestimonialSection from "./sections/Testimonal";
import HomeContact from "./sections/HomeContact";

import ValuesSection from "./sections/ValuesSection";
import IndustriesServing from "./sections/IndustriesServing";
import OurMission from "./sections/OurMission";
import FAQSection from "./sections/FAQSection";

function Home() {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-white  min-h-screen">
            <SEO

                title="AI Powered Solutions for Businesses | Coirei"
                description="Coirei is AI powered solutions company. We create AI apps and chatbots. AI automation and AI web and platform. AI products and customized LMS for business."
            />
            <FaqSchema />


            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <NewHero />
            <AboutUs />
            <OurMission />
            <WhatWeDo />
            <SmartJourney />
            <WhyChooseUs />
            <OurProducts />
            <ValuesSection />
            <IndustriesServing />
            <TestimonialSection />
            <CeoSection />
            <HomeContact />
            <FAQSection />
            <Footer />

        </div>
    );
}

export default Home;
