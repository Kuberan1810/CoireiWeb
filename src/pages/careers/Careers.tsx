import SEO from "../../component/SEO";
import Footer from "../../component/Footer/Footer";
import CareersHero from "./section/CareersHero";
import CareersFeature from "./section/CareersFeature";
import CareersFAQ from "./section/CareersFAQ";
import CareersRoles from "./section/CareersRoles";
import CareersCTA from "./section/CareersCTA";
import Navbar from "../../component/Navbar";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function Careers() {
    useScrollAnimations();
    return (
        <>
            <SEO 
                title="Careers at Coirei Technologies | Join Our Technology Team"
                description="Explore exciting career opportunities at Coirei Technologies. Join our team of developers, engineers and innovators building AI, web and software solutions"
                keywords="software developer jobs, tech careers, AI developer jobs, web developer careers, IT jobs, technology company careers"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Careers", url: "https://coirei.com/careers" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <CareersHero />
            <CareersFeature />
            <CareersRoles />
            <CareersFAQ />
            <CareersCTA />
            <Footer />
        </>
    );
};

export default Careers;
