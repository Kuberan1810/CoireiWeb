import React from "react";
import { ChevronRight } from "lucide-react";

interface FooterLinksProps {
    links: { label: string; href: string }[];
    isFollei?: boolean;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links, isFollei = false }) => {
    return (
        <ul className={`divide-y text-sm sm:text-base ${isFollei ? "divide-black/10" : "divide-gray-200"}`}>
            {links.map((link) => (
                <li
                    key={link.label}
                    className={link.label === "" ? (isFollei ? "border-b border-black/10 sm:border-none" : "border-b border-gray-200 sm:border-none") : ""}
                >
                    <a
                        href={link.href}
                        className={`group flex items-center justify-between py-3 sm:py-4 transition-all duration-300 ${isFollei ? "text-black/70 hover:text-black" : "text-gray-600 hover:text-gray-900"}`}
                    >
                        <span>{link.label}</span>

                        <span className={`flex items-center transition-transform duration-300 ease-out group-hover:translate-x-2 ${isFollei ? "text-black/40 group-hover:text-black" : "text-gray-400 group-hover:text-gray-900"}`}>
                            <ChevronRight size={16} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default FooterLinks;
