import { Routes, Route } from "react-router-dom";
import ParticleBackground from "./component/ParticleBackground";
import { OrgSchema } from "./component/StructuredData";

import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/ContactUs/Contact";

// Resources pages
import Blog from "./pages/Resources/Blog/Blog";
import BlogDetails from "./pages/Resources/Blog/BlogDetails";
// import Docs from "./pages/Resources/Docs";
// import University from "./pages/Resources/Univercity/University";
// import Changelog from "./pages/Resources/Changelog";

// Features pages
import Features from "./pages/Features/Features";
import Careers from "./pages/careers/Careers";
import Privacy from "./pages/Resources/Privacy/Privacy";
import ContactSales from "./pages/ContactUs/ContactSales/ContactSales";
import Company from "./pages/Resources/Company/Company";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import BusinessAppDetails from "./pages/services/BusinessAppDetails";
import AIChatbot from "./pages/services/AIChatbot";
import WebPlatformDetails from "./pages/services/WebPlatformDetails";
import Learning from "./pages/Learning/Learning";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import DataDashboardBI from "./pages/services/DataDashboardBI";
import UIUXDesignDetails from "./pages/services/UIUXDesignDetails";

// Product pages
import Execa from "./pages/Products/Execa/Execa";
import Follei from "./pages/Products/Follei/Follei";
import LMS from "./pages/Products/lms/LMS";
import BusinessIntelligence from "./pages/Products/Follei/pages/businessintelligence/businessintelligence";
import SDRWorker from "./pages/Products/Follei/pages/SDRWorker/SDRWorker";

// import Analytics from "./pages/Features/Analytics";
// import Integrations from "./pages/Features/Integrations";

function App() {
  return (
    <>
      {/* Global Organization + WebSite JSON-LD schema */}
      <OrgSchema />
      {/* Global white particle background — visible across all pages */}
      <ParticleBackground />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/custom-business-application-development" element={<BusinessAppDetails />} />
        <Route path="/services/ai-chatbot-development" element={<AIChatbot />} />
        <Route path="/services/custom-web-platform-development" element={<WebPlatformDetails />} />
        <Route path="/services/process-automation-system-integration" element={<ProcessAutomation />} />
        <Route path="/services/business-intelligence-dashboard-development" element={<DataDashboardBI />} />
        <Route path="/services/ui-ux-branding-product-design" element={<UIUXDesignDetails />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/learning" element={<Learning />} />
        {/* RESOURCES (NO parent page) */}
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/blog/:slug" element={<BlogDetails />} />
        <Route path="/resources/company" element={<Company />} />
        {/* <Route path="/resources/university" element={<University />} /> */}
        <Route path="/contactsales" element={<ContactSales />} />
        <Route path="/resources/privacy" element={<Privacy />} />
        <Route path="/resources/contact" element={<Contact />} />
        <Route path="/resources/careers" element={<Careers />} />

        {/* FEATURES (NO parent page) */}
        <Route path="/features" element={<Features />} />

        {/* PRODUCTS */}
        <Route path="/products/execa" element={<Execa />} />
        <Route path="/products/follei" element={<Follei />} />
        <Route path="/products/follei/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/products/follei/sdr-worker" element={<SDRWorker />} />
        <Route path="/products/coireilms" element={<LMS />} />
      </Routes>
    </>
  );
}

export default App;
