import logo from "../assets/images/homepage/coirei-logo.png";
import { Link } from "react-router-dom";
import ResourcesDropdown from "../component/NavDropdown/ResourcesDropdown";
import ProductsDropdown from "../component/NavDropdown/ProductsDropdown";
import { useState } from "react";
import { Menu, X, ChevronRight, ChevronUp} from "lucide-react";
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

    return (
        <header data-ns-animate data-offset="40" data-direction="down" data-duration="1" className="text-[rgb(212,212,212)] mx-5 my-7.5 rounded-lg backdrop-blur-3xl ">
            <nav className="glass flex items-center justify-between px-5 py-2.5  backdrop-blur-3xl">

                {/* LEFT */}
                <div className="flex gap-7.5 items-center">
                    <Link to="/" data-ns-animate data-delay="0.1">
                        <img src={logo} alt="Coirei Logo" className="w-20 h-7 transition-transform duration-500 hover:scale-105" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul data-ns-animate data-delay="0.2" className="hidden md:flex items-center gap-7.5">
                        <ProductsDropdown />
                        {/* <li>
                            <Link to="/features" className="p-2.5 rounded hover:bg-[#7B7B7B20] transition-colors">
                                Features
                            </Link>
                        </li> */}

                        <ResourcesDropdown />

                        <li>
                            <Link to="/careers" className="p-2.5 rounded hover:bg-[#7B7B7B20] transition-colors">
                                Careers
                            </Link>
                        </li>

                        <li>
                            <Link to="/services" className="p-2.5 rounded hover:bg-[#7B7B7B20] transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/Learning" className="p-2.5 rounded hover:bg-[#7B7B7B20] transition-colors">
                                Learning
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div data-ns-animate data-delay="0.25" className="hidden md:block">
                    <Link
                        to="/contactsales"
                        className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium hover:bg-[#3E3E3E] hover:text-white transition-all duration-300"
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
                        <div className="glass rounded-2xl p-3 bg-[#292929]/90! backdrop-blur-2xl border border-white/10">
                            <ul className="flex flex-col gap-3 text-white">

                                <li className={`overflow-hidden rounded-2xl transition-all duration-300 ${productsOpen ? "bg-[#292929]/90 border border-white/10" : ""}`}>
                                    <button
                                        onClick={() => setProductsOpen(prev => !prev)}
                                        className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium hover:bg-white/5"
                                    >
                                        <span>Products</span>
                                        <ChevronUp size={18} className={`transition-transform duration-300 ${productsOpen ? "rotate-0" : "rotate-180"}`} />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}`}>
                                        {[
                                            { label: "Execa", to: "/products/execa" },
                                            { label: "Follei", to: "/products/follei" },
                                            { label: "CoireiLMS", to: "/products/coireilms" },
                                        ].map((item, index) => (
                                            <Link
                                                key={item.label}
                                                to={item.to}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 text-[15px] text-white/90 hover:bg-white/5 ${index !== 0 ? "border-t border-white/10" : ""}`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight size={14} className="opacity-40" />
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                {/* <li>
                                    <Link to="/features" onClick={() => setOpen(false)} className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5">
                                        <span>Features</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li> */}

                                {/* RESOURCES ACCORDION */}
                                <li className={`overflow-hidden rounded-2xl transition-all duration-300 ${resourcesOpen ? "bg-[#292929]/90 border border-white/10" : ""}`}>
                                    <button
                                        onClick={() => setResourcesOpen(prev => !prev)}
                                        className="w-full flex items-center justify-between px-4 py-4 text-lg font-medium hover:bg-white/5"
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
                                                className={`flex items-center justify-between px-4 py-3 text-[15px] text-white/90 hover:bg-white/5 ${index !== 0 ? "border-t border-white/10" : ""}`}
                                            >
                                                <span>{item.label}</span>
                                                <ChevronRight size={14} className="opacity-40" />
                                            </Link>
                                        ))}
                                    </div>
                                </li>

                                <li>
                                    <Link to="/careers" onClick={() => setOpen(false)} className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5">
                                        <span>Careers</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/services" onClick={() => setOpen(false)} className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5">
                                        <span>Services</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/learning" onClick={() => setOpen(false)} className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5">
                                        <span>Learning</span>
                                        <ChevronRight size={16} className="opacity-40" />
                                    </Link>
                                </li>
                                <Link
                                    to="/contactsales"
                                    onClick={() => setOpen(false)}
                                    className="mt-4 text-center bg-white text-black rounded-lg py-3 font-medium hover:bg-white/90 transition"
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
