import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SEO from "../../component/SEO";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import CareersAppForm from "./section/CareersAppForm";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function CareersApply() {
    const navigate = useNavigate();
    const location = useLocation();
    useScrollAnimations();

    // Retrieve selectedRole from navigation state or URL query parameters, fallback if none (e.g. direct load)
    const state = location.state as { roleTitle?: string } | null;
    const searchParams = new URLSearchParams(location.search);
    const selectedRole = state?.roleTitle || searchParams.get("role") || "General Application";

    const handleBack = () => {
        navigate("/careers");
        window.scrollTo({ top: 0, behavior: "instant" });
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
    };

    return (
        <>
            <SEO 
                title={`Apply for ${selectedRole} | Coirei Technologies`}
                description={`Submit your application for the ${selectedRole} position at Coirei Technologies.`}
                keywords="apply, tech job, software engineer application"
            />
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>
            
            <CareersAppForm selectedRole={selectedRole} onBack={handleBack} />
            
            <Footer />
        </>
    );
}

export default CareersApply;
