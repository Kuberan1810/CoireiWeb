import { useState, type JSX, lazy, Suspense } from "react";
import { Scan, FileBadge, SquareStack, DoorClosed } from "lucide-react";
import {
    LayoutGroup,
    motion,
    AnimatePresence,
    type Variants
} from "framer-motion";

/* ---------------- LAZY IMPORTS ---------------- */
const CollaborateFeature = lazy(() => import("../Animation/ColabrationCard"));
const OrchestrationCard = lazy(() => import("../Animation/OrchestrationCard"));
const Traceability = lazy(() => import("../Animation/Traceability"));
const Intelligence = lazy(() => import("../Animation/IntelligenceCard"));

/* ---------------- TYPES ---------------- */
interface TabContent {
    id: string;
    label: string;
    tabIcon: JSX.Element;
    image: JSX.Element;
    badge: string;
    badgeIcon: JSX.Element;
    title: string;
    description: string | string[];
    bottomPills: string[];
}

/* ---------------- TAB CONTENT ANIMATION (TS SAFE) ---------------- */
const tabContentVariants: Variants = {
    initial: {
        opacity: 0,
        y: 28,
        filter: "blur(10px)"
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: "blur(10px)",
        transition: {
            duration: 0.25,
            ease: "easeIn"
        }
    }
};

/* ---------------- COMPONENT ---------------- */
export default function FeaturesSection(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>("detect");

    const tabs: TabContent[] = [
        {
            id: "detect",
            label: "Detect",
            tabIcon: <Scan size={16} className="relative z-10 shrink-0" />,
            image: <CollaborateFeature />,
            badge: "Detect",
            badgeIcon: <Scan size={14} />,
            title: "Every repository. Every route. Every vulnerability.",
            description: "TASIE continuously analyzes your codebase, maps execution paths, and identifies security vulnerabilities before they reach production.",
            bottomPills: ["107 Endpoints", "30+ Vulnerability Classes", "98 Detection Engines"]
        },
        {
            id: "prove",
            label: "Prove",
            tabIcon: <FileBadge size={16} className="relative z-10 shrink-0" />,
            image: <OrchestrationCard />,
            badge: "Prove",
            badgeIcon: <FileBadge size={14} />,
            title: "Evidence. Not assumptions.",
            description: [
                "Every vulnerability is validated against a sandboxed application.",
                "Only vulnerabilities that successfully execute are promoted as proven."
            ],
            bottomPills: ["Status", "Proven", "Response", "User Data Retrieved"]
        },
        {
            id: "patch",
            label: "Patch",
            tabIcon: <SquareStack size={16} className="relative z-10 shrink-0" />,
            image: <Traceability />,
            badge: "Patch",
            badgeIcon: <SquareStack size={14} />,
            title: "AI writes. AI verifies. You review.",
            description: "Verified patches are generated, tested, and re-attacked before they're proposed.",
            bottomPills: ["Exploit Failed", "Feature Working", "Scanner Clean"]
        },
        {
            id: "gate",
            label: "Gate",
            tabIcon: <DoorClosed size={16} className="relative z-10 shrink-0" />,
            image: <Intelligence />,
            badge: "Gate",
            badgeIcon: <DoorClosed size={14} />,
            title: "Automation stops. Control stays with you.",
            description: [
                "Nothing is merged automatically.",
                "Every verified patch requires human approval before deployment."
            ],
            bottomPills: ["Approve", "Reject", "Defer"]
        }
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)!;

    return (
        <section className="min-h-screen py-16 sm:py-20">
            <div className="px-6 sm:px-10 md:px-15">

                {/* ---------- Heading (SCROLL) ---------- */}
                <div className="text-center mb-10 sm:mb-14 md:mb-16">
                    <h2 data-ns-animate data-offset="80" className="text-2xl md:text-5xl font-normal leading-tight max-w-5xl mx-auto text-black mb-4">
                        The Complete Security Loop.
                    </h2>
                    <p data-ns-animate data-delay="0.1" data-offset="80" className="text-sm sm:text-base md:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
                        From the first line of vulnerable code to a verified patch awaiting your approval, TASIE executes the entire security lifecycle with autonomous AI agents while keeping the final decision in your hands.
                    </p>
                </div>

                {/* ---------- Tabs (SCROLL) ---------- */}
                <div data-ns-animate data-delay="0.2" data-offset="80" className="flex justify-center mb-10 sm:mb-12">
                    <LayoutGroup>
                        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-15 w-full lg:w-auto p-2.5 rounded-2xl lg:rounded-full bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20">

                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative z-10 flex items-center justify-center gap-2 px-3 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-xl md:rounded-full text-xs sm:text-sm md:text-base transition-colors cursor-pointer ${activeTab === tab.id ? "text-black" : "text-black/70 hover:text-black"}`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.span layoutId="activeTab" className="absolute inset-0 rounded-xl md:rounded-full backdrop-blur-3xl shadow-[inset_-1px_1px_2px_#ffffff20]" transition={{ type: "spring", stiffness: 500, damping: 35 }} />
                                    )}
                                    {tab.tabIcon}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}

                        </div>
                    </LayoutGroup>
                </div>

                {/* ---------- CONTENT (SCROLL + TAB CLICK) ---------- */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={tabContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        data-ns-animate
                        data-delay="0.3"
                        data-offset="80"
                        className="bg-[#1E1E1E] rounded-[20px] px-5 sm:px-8 md:px-13 pt-5 pb-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                            {/* LEFT (IMAGE / ANIMATION) */}
                            <div className="relative w-full">
                                <div className="bg-linear-to-br from-white/70 to-gray-600 rounded-3xl px-6 sm:px-8 pt-10 sm:pt-15 shadow-2xl flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                                    <Suspense fallback={<div className="w-full py-24 flex items-center justify-center text-white/40 text-sm">Loading animation...</div>}>
                                        <div className="w-full flex items-center justify-center">
                                            {activeContent.image}
                                        </div>
                                    </Suspense>
                                </div>
                            </div>

                            {/* RIGHT (TEXT) */}
                            <div className="space-y-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF7A5] text-black rounded-md text-xs sm:text-sm font-medium tracking-wide uppercase">
                                    {activeContent.badgeIcon}
                                    {activeContent.badge}
                                </span>

                                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] text-white font-normal leading-tight">
                                    {activeContent.title}
                                </h2>

                                {Array.isArray(activeContent.description) ? (
                                    <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                                        {activeContent.description.map((point, index) => (
                                            <motion.p key={index} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.1 }}>
                                                {point}
                                            </motion.p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                                        {activeContent.description}
                                    </p>
                                )}

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {activeContent.bottomPills.map((pill, idx) => (
                                        <span key={idx} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-white/80 text-[11px] sm:text-xs font-medium whitespace-nowrap">
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
