import logo from "../assets/images/homepage/coirei-logo.png";
import { Link, useLocation } from "react-router-dom";
import ResourcesDropdown from "../component/NavDropdown/ResourcesDropdown";
import ProductsDropdown from "../component/NavDropdown/ProductsDropdown";
import ServicesDropdown from "../component/NavDropdown/ServicesDropdown";
import { useState } from "react";
import { Menu, X, ChevronRight, ChevronUp } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";


/* ---------------- MOBILE MENU ANIMATION ---------------- */
const mobileMenuVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -40,            // ⬆️ top la irundhu
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,              // ⬇️ correct position
        filter: "blur(0px)",
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,            // ⬆️ back to top while closing
        filter: "blur(8px)",
        transition: {
            duration: 0.25,
            ease: "easeIn"
        }
    }
};



function Navbar() {
    const [open, setOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // const location = useLocation();

    const isLight = true;



    return (
        <header data-ns-animate data-offset="40" data-direction="down" data-duration="1" className={`mx-5 my-6 rounded-lg backdrop-blur-3xl transition-colors duration-300 ${isLight ? 'text-[#04032E]' : 'text-[rgb(212,212,212)]'}`}>
            <nav className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${isLight ? 'bg-white/90 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.03),_0_1px_2px_rgba(0,0,0,0.02)]' : 'glass'}`}>

                {/* LEFT */}
                <div className="flex gap-6 items-center">
                    <Link to="/" data-ns-animate data-delay="0.1">
                        <img src={logo} alt="Coirei Logo" className="w-20 h-7 transition-transform duration-500 hover:scale-105" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul data-ns-animate data-delay="0.2" className="hidden md:flex items-center gap-5">
                        <ProductsDropdown isLight={isLight} />
                        {/* <li>
                            <Link to="/features" className="p-2.5 rounded hover:bg-[#7B7B7B20] transition-colors">
                                Features
                            </Link>
                        </li> */}

                        <ResourcesDropdown isLight={isLight} />

                        <li>
                            <Link to="/careers" className={`px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 ${isLight ? 'text-[#595959] hover:text-[#04032E] hover:bg-black/[0.03]' : 'hover:bg-[#7B7B7B20] text-inherit'}`}>
                                Careers
                            </Link>
                        </li>

                        <ServicesDropdown isLight={isLight} />

                        <li>
                            <Link to="/Learning" className={`px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 ${isLight ? 'text-[#595959] hover:text-[#04032E] hover:bg-black/[0.03]' : 'hover:bg-[#7B7B7B20] text-inherit'}`}>
                                Learning
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div data-ns-animate data-delay="0.25" className="hidden md:block">
                    <Link
                        to="/contactsales"
                        className={`rounded-lg py-3 px-4.5 text-[14px] font-medium transition-all duration-300 ${isLight ? 'bg-linear-to-r from-[#1E62A6] to-[#0F4275] text-white hover:from-[#17508B] hover:to-[#0B345D] shadow-[0_4px_12px_rgba(30,98,166,0.15)]' : 'bg-white text-[#3E3E3E] hover:bg-[#3E3E3E] hover:text-white'}`}
                    >
                        Contact sales
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* ---------------- MOBILE MENU ---------------- */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden mt-3 px-2"
                    >
                        <div className={`rounded-2xl p-3 backdrop-blur-2xl border transition-all duration-300 ${isLight ? 'bg-white/95 border-black/10 shadow-lg text-[#3E3E3E]' : 'glass bg-[#292929]/90! border-white/10 text-white'}`}>
                            <ul className={`flex flex-col gap-3 ${isLight ? 'text-[#3E3E3E]' : 'text-white'}`}>

                                <li className={`overflow-hidden rounded-2xl transition-all duration-300 ${productsOpen ? (isLight ? "bg-black/5 border border-black/5" : "bg-[#292929]/90 border border-white/10") : ""}`}>
                                    <button
                                        onClick={() => setProductsOpen(prev => !prev)}
                                        className={`w-full flex items-center justify-between px-4 py-4 text-lg font-medium ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
                                    >
                                        <span>Products</span>
                                        <ChevronUp size={18} className={`transition-transform duration-300 ${productsOpen ? "rotate-0" : "rotate-180"}`} />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}`}>
                                        {[
                                            { label: "Follei", to: "/products/follei" },
                                            { label: "CoireiLMS", to: "/products/coireilms" },
                                        ].map((item, index) => (
                                            <div
                                                key={item.label}
                                                className={`flex items-center justify-between px-4 py-3 text-[15px] cursor-default transition-colors duration-250 ${isLight ? 'text-[#3E3E3E]/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/5'} ${index !== 0 ? (isLight ? "border-t border-black/5" : "border-t border-white/10") : ""}`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight size={14} className="opacity-40" />
                                            </div>
                                        ))}
                                    </div>
                                </li>

                                {/* RESOURCES ACCORDION */}
                                <li className={`overflow-hidden rounded-2xl transition-all duration-300 ${resourcesOpen ? (isLight ? "bg-black/5 border border-black/5" : "bg-[#292929]/90 border border-white/10") : ""}`}>
                                    <button
                                        onClick={() => setResourcesOpen(prev => !prev)}
                                        className={`w-full flex items-center justify-between px-4 py-4 text-lg font-medium ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
                                    >
                                        <span>Resources</span>
                                        <ChevronUp size={18} className={`transition-transform duration-300 ${resourcesOpen ? "rotate-0" : "rotate-180"}`} />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${resourcesOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}`}>
                                        {[
                                            { label: "Blog", to: "/resources/blog" },
                                            { label: "Company", to: "/resources/company" },
                                            { label: "Contact", to: "/resources/contact" },
                                            { label: "Privacy", to: "/resources/privacy" },
                                        ].map((item, index) => (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 text-[15px] transition-colors duration-250 ${isLight ? 'text-[#3E3E3E]/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/5'} ${index !== 0 ? (isLight ? "border-t border-black/5" : "border-t border-white/10") : ""}`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight size={14} className="opacity-40" />
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                <li>
                                    <Link to="/careers" onClick={() => setOpen(false)} className={`flex items-center justify-between text-lg px-4 py-3 rounded-lg transition-colors duration-250 ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span>Careers</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li>

                                {/* SERVICES ACCORDION */}
                                <li className={`overflow-hidden rounded-2xl transition-all duration-300 ${servicesOpen ? (isLight ? "bg-black/5 border border-black/5" : "bg-[#292929]/90 border border-white/10") : ""}`}>
                                    <button
                                        onClick={() => setServicesOpen(prev => !prev)}
                                        className={`w-full flex items-center justify-between px-4 py-4 text-lg font-medium ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
                                    >
                                        <span>Services</span>
                                        <ChevronUp size={18} className={`transition-transform duration-300 ${servicesOpen ? "rotate-0" : "rotate-180"}`} />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        {[
                                            { label: "Web & Platform Development", to: "/services/custom-web-platform-development" },
                                            { label: "Custom Business Applications", to: "/services/custom-business-application-development" },
                                            { label: "AI Chatbots & Virtual Assistants", to: "/services/ai-chatbot-development" },
                                            { label: "Process Automation & Integration", to: "/services/process-automation-system-integration" },
                                            { label: "Data, Dashboards & BI", to: "/services/business-intelligence-dashboard-development" },
                                            { label: "UI/UX, Branding & Design", to: "/services/ui-ux-branding-product-design" },
                                        ].map((item, index) => (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 text-[15px] transition-colors duration-250 ${isLight ? 'text-[#3E3E3E]/90 hover:bg-black/5' : 'text-white/90 hover:bg-white/5'} ${index !== 0 ? (isLight ? "border-t border-black/5" : "border-t border-white/10") : ""}`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight size={14} className="opacity-40" />
                                            </Link>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <Link to="/learning" onClick={() => setOpen(false)} className={`flex items-center justify-between text-lg px-4 py-3 rounded-lg transition-colors duration-250 ${isLight ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}>
                                        <span>Learning</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li>
                                <Link
                                    to="/contactsales"
                                    onClick={() => setOpen(false)}
                                    className={`mt-4 text-center rounded-lg py-3  font-medium transition-all duration-300 ${isLight ? 'bg-[#04032E] text-white hover:bg-[#1b1a1f]' : 'bg-white text-black hover:bg-white/90'}`}
                                >
                                    Contact sales
                                </Link>

                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
