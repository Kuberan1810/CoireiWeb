import React from "react";
import logo from "../../assets/images/Features/coirei-cirlce-logo.png";
import { Mail, MessagesSquare, Info, ChevronRight } from "lucide-react";

import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const footerLinksData = [
    [
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: "Contact Sales", href: "/contactsales" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" },
    ],
    [

        { label: "Blog", href: "/resources/blog" },
        { label: "Company", href: "/resources/company" },
        { label: "Privacy", href: "/resources/privacy" },
        { label: "Contact", href: "/resources/contact" },
        { label: "Learning", href: "/learning" },

    ]
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#161616] text-white mx-6 sm:mx-10 md:mx-15 pt-16 sm:pt-20">

            {/* TOP BAR */}
            <div data-ns-animate data-offset="60" data-duration="1" data-direction="up" className="relative overflow-hidden">
                <span className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent" />

                <div className="group flex items-center justify-between py-6">
                    <img src={logo} alt="Logo" className="w-10 sm:w-12 transition-transform duration-500 ease-out group-hover:rotate-180" />

                    <a href="/careers" className="flex items-center gap-2 text-xs sm:text-sm tracking-wide text-white/70 hover:text-white transition-all duration-300">
                        JOIN OUR TEAM
                        <span className="flex items-center text-white/40 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-white">
                            <ChevronRight size={16} />
                        </span>
                    </a>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="py-5 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

                {/* LEFT */}
                <div data-ns-animate data-delay="0.15" data-offset="80" data-direction="up" className="max-w-lg">
                    <h2 className="text-[28px] sm:text-[32px] md:text-4xl font-medium leading-tight">
                        Unlock the future of software execution
                    </h2>
                    <p className="text-white/60 mt-4 text-sm sm:text-base">
                        Get product updates, execution insights, and engineering perspectives from the team building Coirei.
                    </p>

                    <form data-ns-animate data-delay="0.3" data-offset="60" data-direction="up" className="mt-8 sm:mt-10 flex flex-col sm:flex-row">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 py-3 text-white outline-none text-sm sm:text-base border border-white/20" />
                        <button className="bg-white text-black px-15 py-3 text-sm font-medium sm:mt-0 mt-5 hover:bg-[#eaeaea] transition-colors duration-300">
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* RIGHT */}
                <div className="grid grid-cols-2 sm:gap-16 gap-5">
                    {footerLinksData.map((links, index) => (
                        <div
                            key={index}
                            data-ns-animate
                            data-delay={index === 0 ? "0.25" : "0.4"}
                            data-offset="70"
                            data-direction="up"
                        >
                            <FooterLinks links={links} />
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTACT STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div data-ns-animate data-delay="0.3" data-offset="50" data-direction="up">
                    <FooterContact icon={<Mail />} title="Email address" value="info@coirei.com" />
                </div>
                <div data-ns-animate data-delay="0.45" data-offset="50" data-direction="up">
                    <FooterContact icon={<MessagesSquare />} title="Live chat with us" value="Chat with us" />
                </div>
                <div data-ns-animate data-delay="0.4" data-offset="50" data-direction="up">
                    <FooterContact icon={<Info />} title="Support" value="support@coirei.com" />
                </div>
            </div>

            {/* BOTTOM */}
            <div data-ns-animate data-delay="0.2" data-offset="40" data-direction="up" className="px-6 sm:px-8 py-6 flex justify-center md:justify-end text-white/50 text-xs sm:text-sm">
                © coirei
            </div>

        </footer>
    );
};

export default Footer;
