import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo1 from "../../../../assets/images/Features/animation/logo1.png";
import Logo2 from "../../../../assets/images/Features/animation/Logo2.png";
import Logo3 from "../../../../assets/images/Features/animation/Logo3.png";
import Logo4 from "../../../../assets/images/Features/animation/Logo4.png";
import Logo5 from "../../../../assets/images/Features/animation/Logo5.png";
import Logo6 from "../../../../assets/images/Features/animation/Logo6.png";
import CenterLogo from "../../../../assets/images/Features/animation/execa.svg";

const leftIcons = [Logo1, Logo2, Logo3];
const rightIcons = [Logo4, Logo5, Logo6];

type Phase = "center" | "open" | "close";

const AiWorkflowTrack = () => {
    const [phase, setPhase] = useState<Phase>("center");
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const check = () => setIsSmall(window.innerWidth <= 420);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (phase === "center") setTimeout(() => setPhase("open"), 100);
        if (phase === "open") setTimeout(() => setPhase("close"), 3000);
        if (phase === "close") setTimeout(() => setPhase("center"), 1000);
    }, [phase]);

    const visibleLeftIcons = isSmall ? leftIcons.slice(0, 2) : leftIcons;
    const visibleRightIcons = isSmall ? rightIcons.slice(0, 2) : rightIcons;

    return (
        <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-full border border-white/10 overflow-hidden">

            {/* CENTER ICON */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: phase === "center" || phase === "open" ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <img src={CenterLogo} className="w-16 sm:w-20 md:w-28" />
                </motion.div>
            </div>

            {/* LEFT ICONS */}
            <div className="absolute left-[6%] sm:left-[8%] md:left-[10%] top-1/2 -translate-y-1/2 flex gap-3 sm:gap-4 md:gap-6">
                {visibleLeftIcons.map((icon, i) => (
                    <motion.div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center"
                        animate={{
                            x: phase === "open" ? [60, 0] : 0,
                            scale:
                                phase === "open" ? [0, 1] : phase === "close" ? [1, 0] : 0,
                            opacity: phase === "close" ? 0 : 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: phase === "open" ? i * 0.12 : 0,
                            ease: "easeInOut",
                        }}
                    >
                        <img src={icon} className="w-full h-full object-contain" />
                    </motion.div>
                ))}
            </div>

            {/* RIGHT ICONS */}
            <div className="absolute right-[6%] sm:right-[8%] md:right-[10%] top-1/2 -translate-y-1/2 flex gap-3 sm:gap-4 md:gap-6">
                {visibleRightIcons.map((icon, i) => (
                    <motion.div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center"
                        animate={{
                            x: phase === "open" ? [-60, 0] : 0,
                            scale:
                                phase === "open" ? [0, 1] : phase === "close" ? [1, 0] : 0,
                            opacity: phase === "close" ? 0 : 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: phase === "open" ? i * 0.12 : 0,
                            ease: "easeInOut",
                        }}
                    >
                        <img src={icon} className="w-full h-full object-contain" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


export default AiWorkflowTrack;
