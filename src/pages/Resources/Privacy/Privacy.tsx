import SEO from "../../../component/SEO";
import Footer from "../../../component/Footer/Footer"
import Navbar from "../../../component/Navbar"
import PrivacySection from "./section/PrivacySection"
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const Privacy = () => {
    useScrollAnimations();
    return (
        <div className="overflow-hidden">
            <SEO 
                title="Privacy Policy | Coirei Technologies"
                description="Read the privacy policy of Coirei Technologies to understand how we collect, use and protect your personal information"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Resources", url: "https://coirei.com" },
                    { name: "Privacy Policy", url: "https://coirei.com/resources/privacy" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <PrivacySection />
            <Footer />
        </div>
    )
}

export default Privacy