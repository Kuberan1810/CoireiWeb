import SEO from "../../../component/SEO";
import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import ContentSection from "./section/ContentSection";
import JoinUs from "./section/joinUs";
import HeroSection from "./section/HeroSection";
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const Company = () => {
    useScrollAnimations();
    return (
        <div className="">
            <SEO
                title="About Coirei Technologies | AI & Software Innovation Company"
                description="Learn about Coirei Technologies, a technology company focused on AI development, custom software solutions and digital innovation for modern businesses."
                keywords="technology company, AI software company, custom software development company, web development company"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Resources", url: "https://coirei.com" },
                    { name: "Company", url: "https://coirei.com/resources/company" }
                ]}
            />
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>
            <HeroSection />
            <ContentSection />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default Company;