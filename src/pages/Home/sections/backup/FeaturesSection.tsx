import { useState, type JSX, lazy, Suspense } from "react";
import { CardSim } from "lucide-react";
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
    image: JSX.Element;
    badge: string;
    title: string;
    description: string | string[];
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
    const [activeTab, setActiveTab] = useState<string>("colabration");

    const tabs: TabContent[] = [
        {
            id: "colabration",
            label: "Colabration",
            image: <CollaborateFeature />,
            badge: "IN-FLOW TEAMS",
            title: "Collaboration Without Context Switching",
            description:
                "ORCA AI embeds collaboration directly into the execution flow. Instead of juggling chats, meetings, and repos, teams work together with shared context."
        },
        {
            id: "orchestration",
            label: "Orchestration",
            image: <OrchestrationCard />,
            badge: "AUTO-COORDINATED EXECUTION",
            title: "From Intent to Deployment, Orchestrated.",
            description: [
                "Task → code → deploy automation",
                "AI-managed execution workflows",
                "Meaningful, change-aware commits",
                "CI/CD pipelines with execution context"
            ]
        },
        {
            id: "traceability",
            label: "Traceability",
            image: <Traceability />,
            badge: "UNBROKEN CONTEXT",
            title: "Software That Understands",
            description:
                "It analyzes intent, impact, and relationships across the system, not just lines of code, helping teams prevent conflicts, detect risks early, and make better decisions."
        },
        {
            id: "intelligence",
            label: "Intelligence",
            image: <Intelligence />,
            badge: "SEMANTIC AWARENESS",
            title: "Execution That Never Lose Memory",
            description:
                "Every task, discussion, decision, code change, and deployment is automatically linked into a living execution graph."
        }
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)!;

    return (
        <section className="min-h-screen py-16 sm:py-20">
            <div className="px-6 sm:px-10 md:px-15">

                {/* ---------- Heading (SCROLL) ---------- */}
                <h2 data-ns-animate data-offset="80" className="text-2xl md:text-5xl text-center mb-10 sm:mb-14 md:mb-16 font-normal leading-tight max-w-5xl mx-auto text-white/80">
                    ORCA AI unifies the entire software execution lifecycle into a single AI-native platform.
                </h2>

                {/* ---------- Tabs (SCROLL) ---------- */}
                <div data-ns-animate data-delay="0.1" data-offset="80" className="flex justify-center mb-10 sm:mb-12">
                    <LayoutGroup>
                        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-15 w-full lg:w-auto p-2.5 rounded-2xl lg:rounded-full bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20">

                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative z-10 flex items-center justify-center gap-1 px-5 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-xl md:rounded-full text-sm sm:text-base transition-colors cursor-pointer ${activeTab === tab.id ? "text-white" : "text-white/70 hover:text-white"}`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.span layoutId="activeTab" className="absolute inset-0 rounded-xl md:rounded-full backdrop-blur-3xl shadow-[inset_-1px_1px_2px_#ffffff20]" transition={{ type: "spring", stiffness: 500, damping: 35 }} />
                                    )}
                                    <CardSim size={16} className="relative z-10 shrink-0" />
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
                        data-delay="0.2"
                        data-offset="80"
                        className="bg-[#1E1E1E] rounded-[20px] px-5 sm:px-8 md:px-13 pt-5 pb-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                            {/* LEFT (IMAGE / ANIMATION) */}
                            <div data-ns-animate data-delay="0.3" data-offset="80" className="relative w-full">
                                <div className="bg-linear-to-br from-white/70 to-gray-600 rounded-3xl px-6 sm:px-8 pt-10 sm:pt-15 shadow-2xl">
                                    <Suspense fallback={<div className="w-full py-24 flex items-center justify-center text-white/40 text-sm">Loading animation...</div>}>
                                        <div className="w-full flex items-center justify-center">
                                            {activeContent.image}
                                        </div>
                                    </Suspense>
                                </div>
                            </div>

                            {/* RIGHT (TEXT) */}
                            <div data-ns-animate data-delay="0.4" data-offset="80" className="space-y-4">
                                <span className="inline-block px-3 py-1.5 bg-[#FFF7A5] text-black rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase">
                                    {activeContent.badge}
                                </span>

                                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] text-white font-normal leading-tight">
                                    {activeContent.title}
                                </h2>

                                {Array.isArray(activeContent.description) ? (
                                    <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                                        {activeContent.description.map((point, index) => (
                                            <motion.li key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + index * 0.1 }}>
                                                • {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                                        {activeContent.description}
                                    </p>
                                )}
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
