import { useState } from "react";
import SEO from "../../component/SEO";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import Topsection from "./section/Topsection";
import Pricingsection from "./section/Pricingsection";
import Modelsection from "./section/Modelsection";
import PrivacySecurity from "./section/PrivacySecurity";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function Pricing() {
    useScrollAnimations();
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <>
            <SEO 
                title="Pricing Plans | Coirei Solutions"
                description="Flexible and transparent pricing plans designed to scale with your business needs."
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Pricing", url: "https://coirei.com/pricing" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>

            <Topsection
                isAnnual={isAnnual}
                setIsAnnual={setIsAnnual}
            />

            <Pricingsection
                isAnnual={isAnnual}
            />

            <Modelsection />
            <PrivacySecurity />
            <Footer />
        </>
    );
}

export default Pricing;
