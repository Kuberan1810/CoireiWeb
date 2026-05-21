import {
  EarthLock,
  CircleGauge,
  Users,
  BadgeCheck,
  ClipboardList,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: EarthLock,
    title: "Identity & Access Control",
    desc: "Granular permissions across humans and agents, enforced directly at execution time.",
  },
  {
    icon: CircleGauge,
    title: "Execution Insights",
    desc: "Real-time visibility into what’s running, what’s blocked, and what’s completed without manual reporting.",
  },
  {
    icon: Users,
    title: "Collaboration Without Noise",
    desc: "No endless chats.Execution itself becomes the source of truth.",
  },
  {
    icon: ClipboardList,
    title: "Decision Traceability",
    desc: "Every decision is logged, explainable, and reviewable by human or AI.",
  },
  {
    icon: Eye,
    title: "State Awareness",
    desc: "Agents understand system state, dependencies, and outcomes before acting.",
  },
  {
    icon: BadgeCheck,
    title: "Secure by Default",
    desc: "Security and compliance are embedded directly into the execution flow.",
  },
];

const FeaturesGlass = () => {
  return (
    <section className="py-20 mx-15 max-sm:py-16 max-sm:mx-5">

      {/* HEADER */}
      <div className="text-white text-center">
        <h2
          data-ns-animate
          data-offset="40"
          className="
            inline-flex items-center justify-center
            text-xl max-sm:text-base
            text-white py-2.5 max-sm:py-2
            px-10 max-sm:px-6
            bg-[#7B7B7B]/10 backdrop-blur-3xl
            border border-white/20
            w-fit
            shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]
            rounded-full mb-10 max-sm:mb-6
          "
        >
          How it Works
        </h2>

        <p
          data-ns-animate
          data-delay="0.2"
          data-offset="80"
          className="
            mx-auto leading-18 max-sm:leading-tight
            text-[#E3E3E0]
            text-[32px] md:text-[60px]
            max-sm:text-[26px]
            font-normal text-center mb-5 max-sm:mb-4
          "
        >
          Execute Smarter with an All-in-One Platform
        </p>

        <p 
          data-ns-animate
          data-delay="0.4"
          data-offset="60"
          className="text-white/50 font-light text-xl max-sm:text-base mb-5"
        >
          Insight, action, and validation flow together without handoffs or tool hopping.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="py-5 max-sm:py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-5">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-ns-animate
                data-delay={0.1 * index}
                data-offset="40"
                className="
                  relative rounded-2xl
                  p-6 max-sm:p-5
                  bg-white/5 backdrop-blur-xl
                  border border-white/15
                  shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 max-sm:gap-3 mb-4 max-sm:mb-3">
                  <div
                    className="
                      w-12 h-12 max-sm:w-10 max-sm:h-10
                      rounded-xl flex items-center justify-center
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                    "
                  >
                    <Icon size={24} className="text-white max-sm:hidden" />
                    <Icon size={20} className="text-white hidden max-sm:block" />
                  </div>

                  <h3 className="font-semibold text-xl max-sm:text-lg text-white">
                    {item.title}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-white/15 mb-4 max-sm:mb-3" />

                {/* DESCRIPTION */}
                <p className="text-xl max-sm:text-lg text-white/80  mb-10 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FeaturesGlass;
