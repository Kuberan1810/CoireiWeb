import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

import { OrgSchema } from "./component/StructuredData";

import Home from "./pages/Home/Home";
import Contact from "./pages/ContactUs/Contact";
import NotFound from "./pages/NotFound/NotFound";


// Features pages
import Features from "./pages/Features/Features";
import Careers from "./pages/careers/Careers";
import Privacy from "./pages/Resources/Privacy/Privacy";
import Company from "./pages/Resources/Company/Company";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import BusinessAppDetails from "./pages/services/BusinessAppDetails";
import AIChatbot from "./pages/services/AIChatbot";
import WebPlatformDetails from "./pages/services/WebPlatformDetails";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import DataDashboardBI from "./pages/services/DataDashboardBI";
import UIUXDesignDetails from "./pages/services/UIUXDesignDetails";

// Product pages
import Execa from "./pages/Products/Execa/Execa";
import Follei from "./pages/Products/Follei/Follei";
import LMS from "./pages/Products/lms/LMS";
import BusinessIntelligence from "./pages/Products/Follei/pages/businessintelligence/businessintelligence";
import SDRWorker from "./pages/Products/Follei/pages/SDRWorker/SDRWorker";
import SalesExecutive from "./pages/Products/Follei/pages/salesexecutive/salesexecutive";
import CustomerSuccess from "./pages/Products/Follei/pages/customersuccess/customersuccess";
import CollectionsWorker from "./pages/Products/Follei/pages/Collections Worker/CollectionsWorker";
import AccountManager from "./pages/Products/Follei/pages/Account Manager/AccountManager";
import SupportWorker from "./pages/Products/Follei/pages/Support Worker/SupportWorker";

declare global {
  interface Window {
    lenis: Lenis | undefined;
  }
}

import { useNavigationType } from "react-router-dom";

const FOLLEI_PATH_PREFIX = "/products/follei";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        window.lenis?.scrollTo(0, { immediate: true });
      };

      scrollToTop();
      const timeout1 = setTimeout(scrollToTop, 10);
      const timeout2 = setTimeout(scrollToTop, 50);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [pathname, navigationType]);

  useEffect(() => {
    if (pathname.startsWith(FOLLEI_PATH_PREFIX)) {
      document.body.classList.add("follei-theme");
    } else {
      document.body.classList.remove("follei-theme");
    }
  }, [pathname]);

  return null;
}

function App() {
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <>
      {/* Global Organization + WebSite JSON-LD schema */}
      <OrgSchema />

      <ScrollToTop />
      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/custom-business-application-development" element={<BusinessAppDetails />} />
        <Route path="/services/ai-chatbot-development" element={<AIChatbot />} />
        <Route path="/services/custom-web-platform-development" element={<WebPlatformDetails />} />
        <Route path="/services/process-automation-system-integration" element={<ProcessAutomation />} />
        <Route path="/services/business-intelligence-dashboard-development" element={<DataDashboardBI />} />
        <Route path="/services/ui-ux-branding-product-design" element={<UIUXDesignDetails />} />
        {/* Keep this generic slug route LAST among /services/* so specific routes above take priority */}
        <Route path="/services/:slug" element={<ServiceDetails />} />

        {/* RESOURCES */}
        <Route path="/resources/company" element={<Company />} />
        <Route path="/resources/privacy" element={<Privacy />} />

        {/* Legacy/alias paths — redirect to canonical routes instead of duplicate-rendering */}
        <Route path="/contactsales" element={<Navigate to="/contact-sales" replace />} />
        <Route path="/resources/contact" element={<Navigate to="/contact" replace />} />
        <Route path="/resources/careers" element={<Navigate to="/careers" replace />} />

        {/* FEATURES */}
        <Route path="/features" element={<Features />} />

        {/* PRODUCTS */}
        <Route path="/products/execa" element={<Execa />} />
        <Route path="/products/follei" element={<Follei />} />
        <Route path="/products/follei/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/products/follei/sdr-worker" element={<SDRWorker />} />
        <Route path="/products/follei/sales-executive" element={<SalesExecutive />} />
        <Route path="/products/follei/customer-success" element={<CustomerSuccess />} />
        <Route path="/products/follei/collections-worker" element={<CollectionsWorker />} />
        <Route path="/products/follei/account-manager" element={<AccountManager />} />
        <Route path="/products/follei/support-worker" element={<SupportWorker />} />
        {/* TODO: verify whether this should be its own component/content, not a SupportWorker duplicate */}
        <Route path="/products/follei/customer-intelligence" element={<SupportWorker />} />
        <Route path="/products/coireilms" element={<LMS />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
