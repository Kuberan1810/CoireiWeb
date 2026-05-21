import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
import LmsHero from "./section/LmsHero";
import WhyLms from "./section/Whylms";
import Progresstrack from "./section/Progresstrack"
import Timeline from "./section/Timeline"
import Lmsroadmap from './section/Lmsroadmap'
import LmsData from './section/LmsData'
import useScrollAnimations from "../../../hooks/useScrollAnimations";
import SEO from "../../../component/SEO";
import { FaqSchema } from "../../../component/StructuredData";
import Instructorfeature from "./section/Instructorfeature";
import Studentfeature from "./section/Studentfeatures";

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
          

            <LmsHero />
            <WhyLms />
             <Studentfeature />
            <Instructorfeature />
            <Progresstrack />
            <Timeline />
            <Lmsroadmap />
            <LmsData />
            <Footer />
        </div>
    );
}

export default Lms;
