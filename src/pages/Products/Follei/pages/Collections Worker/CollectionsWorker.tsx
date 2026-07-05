

import useScrollAnimations from "../../../../../hooks/useScrollAnimations";
import Hero from "./section/Hero";
import Navbar from "../../../../../component/Navbar";
import SEO from "../../../../../component/SEO";
import Footer from "../../sections/Footer";
import Faq from "./section/FAQs";
import CollectionCapabilities from "./section/CollectionCapabilities";
import IntelligentCollection from "./section/IntelligentCollection";
import RevenueIntelligence from "./section/RevenueIntelligence";

import Sample from "./section/Sample";


const CollectionsWorker = () => {
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

            <main>
                <Hero />
                <IntelligentCollection />

                <RevenueIntelligence />
                <CollectionCapabilities />
                {/* <RevenueAutomation /> */}
                <Sample />

                <Faq />
            </main>

            <Footer />
        </div>
    );
};

export default CollectionsWorker;