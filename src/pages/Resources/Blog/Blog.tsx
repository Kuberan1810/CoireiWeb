import SEO from "../../../component/SEO";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
// import BlogHero from "./Section/BlogHero";
// import BlogList from "./Section/BlogList";
// import BlogCTA from "./Section/BlogCTA";
import useScrollAnimations from "../../../hooks/useScrollAnimations";

function Blog() {
    useScrollAnimations();
    return (
        <>
            <SEO 
                title="AI, Web Development & Automation Insights"
                description="Read the latest insights on AI development, software engineering, automation, SaaS platforms and modern web technologies"
                keywords="AI development blog, software engineering blog, web development tutorials, automation technology articles"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Resources", url: "https://coirei.com" },
                    { name: "Blog", url: "https://coirei.com/resources/blog" }
                ]}
            />
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            {/* <BlogHero /> */}
            {/* <BlogList /> */}
            {/* <BlogCTA /> */}
            <Footer />
        </>
    );
};

export default Blog
