import React from "react";
import { ChevronRight } from "lucide-react";

interface FooterLinksProps {
    links: { label: string; href: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
    return (
        <ul className="divide-y divide-white/10 text-sm sm:text-base">
            {links.map((link) => (
                <li
                    key={link.label}
                    className={link.label === "" ? "border-b border-white/10 sm:border-none" : ""}
                >
                    <a
                        href={link.href}
                        className="group flex items-center justify-between py-3 sm:py-4 text-white/70 hover:text-white transition-all duration-300"
                    >
                        <span>{link.label}</span>

                        <span className="flex items-center text-white/40 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-white">
                            <ChevronRight size={16} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default FooterLinks;
