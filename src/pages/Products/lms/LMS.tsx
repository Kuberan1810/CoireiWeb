import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
import Progresstrack from "./section/Progresstrack"
import Lmsroadmap from './section/Lmsroadmap'
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import SEO from "../../../component/SEO";
import { FaqSchema } from "../../../component/StructuredData";
import Studentfeature from "./section/Studentfeatures";
import IntelligentLearning from "./section/IntelligentLearning";
import LmsFeatures from "./section/LmsFeatures";
import LmsAnalytics from "./section/LmsAnalytics";
import RunLearningPrograms from "./section/RunLearningPrograms";
import ModernLearning from "./section/ModernLearning";
import LmsFaq from "./section/LmsFaq";

function Lms() {
    useScrollAnimations();
    return (
        <div className="relative">
            <SEO
                title="Coirei LMS - Learning Management System for Institutes"
                description="Coirei LMS is a scalable learning management system designed for institutes and training providers. Manage courses, track progress, and deliver structured learning efficiently.
"
            />
            <FaqSchema />

            <div className="fixed top-0 left-0 w-full z-99999">
                <Navbar />
            </div>


            <IntelligentLearning />
            <LmsFeatures />
            <LmsAnalytics />
            <Studentfeature />
            <RunLearningPrograms />
            <Progresstrack />
            <ModernLearning />
            <Lmsroadmap />
            <LmsFaq />
            <Footer />
        </div>
    );
}

export default Lms;
