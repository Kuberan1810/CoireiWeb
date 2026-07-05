import React from "react";
import SEO from "../../component/SEO";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import ContactMain from "./section/ContactMain";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function Contact() {
    useScrollAnimations();
    return (
        <div className="bg-white min-h-screen">
            <SEO 
                title="Contact Coirei Technologies | Get a Quote for AI & Software Development"
                description="Contact Coirei Technologies for AI development, custom software, web development and automation solutions. Get a free consultation today"
                keywords="contact AI development company, software development consultation, web development quote, AI automation services company"
                breadcrumbs={[
                    { name: "Home", url: "https://coirei.com" },
                    { name: "Contact", url: "https://coirei.com/contact" }
                ]}
            />

            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>
            
            <main>
                <ContactMain />
            </main>
            
            <Footer />
        </div>
    )
}

export default Contact;