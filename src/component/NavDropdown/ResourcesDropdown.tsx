import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export default function ResourcesDropdown({ isLight = false }: { isLight?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutId = useRef<number | null>(null);
    const location = useLocation();
    const isFollei = location.pathname.startsWith("/products/follei");

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
                className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${isLight
                    ? `text-[#04032E]/80 ${isFollei ? 'hover:text-[#1079B7]' : 'hover:text-[#F48120]'} hover:bg-white/50 hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-white/60 px-3.5 py-2 rounded-xl`
                    : 'hover:bg-[#7B7B7B20] text-inherit p-2.5 rounded'
                    }`}
            >
                <span className="font-medium leading-none">Resources</span>
                <ChevronRight
                    size={16}
                    strokeWidth={2}
                    className={`mt-0.5 opacity-70 transition-all duration-500 ease-out ${isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                />
            </div>

            {/* Dropdown with Dark/Light Liquid Glass Effect */}
            <div
                className={`
                    absolute left-0 top-full mt-5 w-72
                    
                    backdrop-blur-3xl backdrop-saturate-150
                    ${isLight
                        ? 'bg-white/95 border border-black/5 shadow-[0_24px_48px_-12px_rgba(16,121,183,0.15)]'
                        : 'bg-linear-to-br from-[#292929]/95 via-[#292929]/90 to-[#292929]/85 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
                    }
                    
                    rounded-xl
                    
                    z-9999
                    
                    origin-top
                    
                    ${isOpen
                        ? 'opacity-100 visible translate-y-0 scale-100'
                        : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'
                    }
                    
                    transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    
                    ${!isLight ? `
                    before:absolute before:inset-0 
                    before:rounded-2xl 
                    before:bg-linear-to-br before:from-white/5 before:to-transparent
                    before:opacity-50
                    before:pointer-events-none
                    ` : ''}
                `}
                style={{
                    boxShadow: isOpen
                        ? (isLight
                            ? `0 24px 48px -12px rgba(16, 121, 183, 0.15), 0 0 1px 0 rgba(0, 0, 0, 0.1)`
                            : `0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 2px 8px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`)
                        : undefined
                }}
            >


                <ul className="py-3 relative z-10">
                    {[
                        // { label: "Blog", to: "/resources/blog" },
                        { label: "Company", to: "/resources/company" },
                        { label: "Contact", to: "/contact" },
                        { label: "Privacy", to: "/resources/privacy" },
                    ].map((item, index) => (
                        <li
                            key={item.label}
                            className={`
                                ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                                transition-all duration-300 ease-out
                            `}
                            style={{
                                transitionDelay: isOpen ? `${index * 30}ms` : '0ms'
                            }}
                        >
                            <Link
                                to={item.to}
                                className={`
                                    group relative flex items-center justify-between
                                    px-4 py-3 mx-2 rounded-lg
                                    text-[15px] font-medium transition-all duration-300 overflow-hidden
                                    ${isLight
                                        ? `text-[#0A0E29] ${isFollei ? 'hover:text-[#1079B7] hover:bg-[#1079B7]/5' : 'hover:text-[#F48120] hover:bg-[#F48120]/5'}`
                                        : 'text-white/90 hover:bg-white/10 hover:backdrop-blur-xl hover:shadow-lg'
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        absolute inset-0
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                        ${isLight
                                            ? 'bg-transparent'
                                            : 'bg-linear-to-r from-white/5 via-white/8 to-white/5'
                                        }
                                    `}
                                />

                                <span className="relative z-10">{item.label}</span>
                                <ChevronRight
                                    size={14}
                                    strokeWidth={2}
                                    className={`
                                        relative z-10
                                        opacity-50
                                        transition-all duration-300
                                        group-hover:opacity-100
                                        group-hover:translate-x-1
                                        ${isLight ? (isFollei ? 'text-[#1079B7]' : 'text-[#F48120]') : 'text-white'}
                                    `}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}