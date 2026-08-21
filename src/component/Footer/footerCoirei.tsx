import { Link } from "react-router-dom";
import footerBg from "../../assets/images/homepage/footerbg.png";
import logo from "../../assets/images/homepage/coirei-logo.png";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
    mainPages: [
        { label: "Home", href: "/" },
        { label: "About", href: "/resources/company" },
        { label: "Career", href: "/careers" },
        { label: "Case Studies", href: "/resources/company" },
        { label: "Blog", href: "/resources/company" },
        { label: "Pricing", href: "/contact" },
    ],
    forBusiness: [
        "Healthcare",
        "Financial Services",
        "Insurance",
        "Home Services",
        "Travel & Hospitality",
    ],
    socialMedia: [
        "LinkedIn",
        "X",
        "YouTube",
        "Discord",
        "Community",
    ],
};

const FooterCoirei = () => {
    return (
        <footer className="w-full relative overflow-hidden bg-[#1E0902]">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                <img
                    src={footerBg}
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                />
            </div>

            <div className="relative z-10 w-full">

                <div className="w-full bg-white text-neutral-900 rounded-b-[24px] sm:rounded-b-[36px] shadow-sm GlobalPadding">
                    <div>

                        {/* Top Grid: */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-14">

                            {/* Logo Column */}
                            <div className="lg:col-span-4 flex flex-col items-start">
                                <Link to="/" className="inline-block">
                                    <img
                                        src={logo}
                                        alt="Coirei Logo"
                                        className="h-8 sm:h-9 w-auto object-contain"
                                    />
                                </Link>
                            </div>

                            {/* Column: Main Pages */}
                            <div className="lg:col-span-3">
                                <h4 className="text-[14px] sm:text-[16px] font-medium text-[#0E121B] mb-4 sm:mb-5">
                                    Main Pages
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-xs sm:text-[14px] text-[#181B25] font-normal">
                                    {footerLinks.mainPages.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={item.href}
                                                className="hover:text-[#111827] transition-colors duration-150"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column: For Business */}
                            <div className="lg:col-span-3">
                                <h4 className="text-[14px] sm:text-[16px] font-medium text-[#111827] mb-4 sm:mb-5">
                                    For Business
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-xs sm:text-[14px] text-[#4B5563] font-normal">
                                    {footerLinks.forBusiness.map((item, idx) => (
                                        <li key={idx}>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column: Social Media */}
                            <div className="lg:col-span-2">
                                <h4 className="text-[14px] sm:text-[16px] font-medium text-[#111827] mb-4 sm:mb-5">
                                    Social Media
                                </h4>
                                <ul className="flex flex-col gap-2.5 text-xs sm:text-[14px] text-[#4B5563] font-normal">
                                    {footerLinks.socialMedia.map((item, idx) => (
                                        <li key={idx}>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Divider 1 */}
                        <div className="border-t border-[#D9D9D9] w-full" />

                        {/* Middle Section: Description & Social Buttons */}
                        <div className="py-8 sm:py-10 flex flex-col items-start gap-4">
                            <p className="text-[#0E121B] text-xs sm:text-[14px] leading-relaxed max-w-[450px] font-normal">
                                Coirei builds intelligent products and technology solutions that help businesses automate, innovate, and grow.
                            </p>

                            {/* Social Icon Buttons  */}
                            <div className="flex items-center gap-3 mt-1">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F5F7FA] hover:bg-[#111827] flex items-center justify-center text-[#111827] hover:text-white transition-all duration-200"
                                >
                                    <Facebook className="w-3.5 h-3.5 fill-current stroke-none" />
                                </a>
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F5F7FA] hover:bg-[#111827] flex items-center justify-center text-[#111827] hover:text-white transition-all duration-200"
                                >
                                    <Twitter className="w-3.5 h-3.5 fill-current stroke-none" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/coirei"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#F5F7FA] hover:bg-[#111827] flex items-center justify-center text-[#111827] hover:text-white transition-all duration-200"
                                >
                                    <Linkedin className="w-3.5 h-3.5 fill-current stroke-none" />
                                </a>
                            </div>
                        </div>

                        {/* Divider 2 */}
                        <div className="border-t border-[#D9D9D9] w-full" />

                        {/* Bottom Row: Copyright & Legal */}
                        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[14px] text-[#181B25] font-light">
                            <p>© 2026 Coirei. All rights reserved.</p>

                            <div className="flex items-center gap-6 sm:gap-8">
                                <Link
                                    to="/resources/privacy"
                                    className="hover:text-neutral-900 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to="/resources/privacy"
                                    className="hover:text-neutral-900 transition-colors"
                                >
                                    Cookie Policy
                                </Link>
                                <Link
                                    to="/resources/privacy"
                                    className="hover:text-neutral-900 transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Brand Reveal Banner: White Coirei Logo */}
                <div className="w-full GlobalPadding py-6 sm:py-8 md:py-10 flex items-center justify-start">
                    <div className="flex items-center justify-start select-none pointer-events-none">
                        <img
                            src={logo}
                            alt="Coirei"
                            className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain brightness-0 invert opacity-95"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterCoirei;
