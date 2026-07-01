import React from "react";
import { ChevronRight } from "lucide-react";

interface FooterLinksProps {
    links: { label: string; href: string }[];
    isFollei?: boolean;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links, isFollei = false }) => {
    return (
        <ul className={`divide-y text-sm sm:text-base ${isFollei ? "divide-black/10" : "divide-white/10"}`}>
            {links.map((link) => (
                <li
                    key={link.label}
                    className={link.label === "" ? (isFollei ? "border-b border-black/10 sm:border-none" : "border-b border-white/10 sm:border-none") : ""}
                >
                    <a
                        href={link.href}
                        className={`group flex items-center justify-between py-3 sm:py-4 transition-all duration-300 ${isFollei ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
                    >
                        <span>{link.label}</span>

                        <span className={`flex items-center transition-transform duration-300 ease-out group-hover:translate-x-2 ${isFollei ? "text-black/40 group-hover:text-black" : "text-white/40 group-hover:text-white"}`}>
                            <ChevronRight size={16} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default FooterLinks;
