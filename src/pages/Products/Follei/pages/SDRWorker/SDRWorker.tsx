import React, { useEffect } from 'react';
import Navbar from '../../../../../component/Navbar';
import SEO from '../../../../../component/SEO';
import Footer from '../../sections/Footer';
import PipelineManagement from './section/PipelineManagement';
import FAQSection from './section/FAQSection';
import LeadQualification from './section/LeadQualification';
import DiscoveryIntelligence from './section/DiscoveryIntelligence';
import LeadIntelligence from './section/LeadIntelligence';
import FirstResponse from './section/FirstResponse';
import Hero from './section/Hero';


const SDRWorker: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-x-clip bg-white min-h-screen">
            <SEO
                title="SDR Worker - Follei - Coirei"
                description="The SDR Worker engages every prospect with intelligent conversations, qualifying intent, building relationships, and scheduling meetings automatically."
            />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <main className="pt-32 pb-0 w-full overflow-x-hidden bg-white">
                <Hero />
                <LeadQualification />
                <LeadIntelligence />
                <FirstResponse />
                <DiscoveryIntelligence />
                <PipelineManagement />
                <FAQSection />
            </main>

            <Footer />
        </div>
    );
};

export default SDRWorker;
