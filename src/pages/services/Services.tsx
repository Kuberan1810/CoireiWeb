import SEO from "../../component/SEO";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar";
import OurServices from "./section/OurServices";
import ServiceAbout from "./section/ServiceAbout";
import ServicesHero from "./section/ServicesHero";
import ServicesWorkFlow from "./section/ServicesWorkFlow";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function Services() {
    useScrollAnimations();
    return (
        <>
            <SEO 
                title="Software Development Services | AI, Web & Automation Solutions"
                description="Explore our professional software development services including AI solutions, custom web applications, SaaS platforms, automation tools and enterprise software development"
                keywords="software development services, AI development services, custom web development, SaaS application development, business automation solutions"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Services", url: "https://coirei.com/services" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <ServicesHero />
            <ServiceAbout />
            <OurServices />
            <ServicesWorkFlow />
            <Footer />
        </>
    );
};

export default Services
