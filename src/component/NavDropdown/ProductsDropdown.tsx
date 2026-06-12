import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export default function ProductsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutId = useRef<number | null>(null);


    const handleMouseEnter = () => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    return (
        <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger */}
            <div
                className="flex items-center gap-1 p-2.5 rounded cursor-pointer
                hover:bg-[#7B7B7B20] transition-all duration-300"
            >
                <span className="font-medium leading-none">Products</span>
                <ChevronRight
                    size={16}
                    strokeWidth={2}
                    className={`mt-0.5 opacity-70 transition-all duration-500 ease-out ${isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                />
            </div>

            {/* Dropdown with Dark Liquid Glass Effect */}
            <div
                className={`
                    absolute left-0 top-full mt-5 w-72
                    
                    backdrop-blur-2xl backdrop-saturate-150
                    bg-linear-to-br from-[#292929]/95 via-[#292929]/90 to-[#292929]/85
                    
                    border border-white/10
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                    
                    rounded-xl
                    
                    z-9999
                    
                    origin-top
                    
                    ${isOpen
                        ? 'opacity-100 visible translate-y-0 scale-100'
                        : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'
                    }
                    
                    transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    
                    before:absolute before:inset-0 
                    before:rounded-2xl 
                    before:bg-linear-to-br before:from-white/5 before:to-transparent
                    before:opacity-50
                    before:pointer-events-none
                `}
                style={{
                    boxShadow: `
                        0 8px 32px 0 rgba(0, 0, 0, 0.4),
                        0 2px 8px 0 rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
                    `
                }}
            >
                <ul className="py-3 relative z-10">
                    {[
                        { label: "Follei", to: "/products/follei" },
                        { label: "CoireiLMS", to: "/products/coireilms" },
                    ].map((item, index) => (
                        <li
                            key={item.label}
                            className={`
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
        transition-all duration-300 ease-out
    `}
                            style={{
                                transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                            }}
                        >
                            <Link
                                to={item.to}
                                className="
            group relative flex items-center justify-between
            px-4 py-3 mx-2 rounded-xl
            text-[15px] font-medium text-white/90
            hover:bg-white/10
            hover:backdrop-blur-xl
            hover:shadow-lg
            transition-all duration-200
            overflow-hidden
        "
                            >
                                <span
                                    className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                bg-linear-to-r from-white/5 via-white/8 to-white/5
                transition-opacity duration-300
            "
                                />

                                <span className="relative z-10">{item.label}</span>
                                <ChevronRight
                                    size={14}
                                    strokeWidth={2}
                                    className="
                relative z-10
                opacity-50
                transition-all duration-200
                group-hover:opacity-90
                group-hover:translate-x-1
            "
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
