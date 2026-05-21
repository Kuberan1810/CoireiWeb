import JoinUs from "../../../../assets/images/Resourses/company/join-us.png";

const ContentSection = () => {
  const ethosParagraphs = [
    "Coirei exists to solve a fundamental problem in software development: execution is fragmented.",
    "Today, planning, coding, testing, deployment, collaboration, and governance live in separate systems. Context is lost, coordination slows teams down, and visibility disappears as projects scale.",
    "As AI has advanced, Warp has evolved beyond its terminal roots into a powerful agentic development environment, a workbench for dispatching agents to code, deploy, and debug production software.",
    "Coirei is a unified execution system where software development runs continuously. Code is written in shared cloud workspaces with automatic validation and background pipelines.",
    "AI in Coirei is execution-aware and human-governed. It understands intent, coordinates workflows, detects risks, and generates insights. All critical decisions and irreversible actions require human approval.",
    "We believe the future of software development is agent-assisted, not agent-controlled. Developers become directors of execution, guiding intelligent systems that build, test, deploy, and operate software with clarity, safety, and accountability.",
    "Coirei is designed to scale from small teams to large organizations without increasing execution complexity, delivering speed without sacrificing control."
  ];

  return (
    <section className="px-6 sm:px-10 md:px-15 mb-24 relative z-10">

      {/* ── Split Layout: Our Ethos ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

        {/* Sticky Title Column */}
        <div 
          data-ns-animate 
          data-direction="left" 
          data-offset="80" 
          className="w-full lg:w-1/3 lg:sticky lg:top-32"
        >
          <div className="flex flex-col mb-8 lg:mb-0">
            <span className="w-12 h-1 bg-white mb-6" />
            <h2 className="text-[#E3E3E0] text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Our Ethos
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              The principles and vision that drive how we build agentic execution platforms for the future of enterprise software.
            </p>
          </div>
        </div>

        {/* Content Column - Paragraphs */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          {ethosParagraphs.map((text, index) => (
            <div
              key={index}
              data-ns-animate
              data-delay={0.1 * index}
              data-offset="40"
              className="group relative pl-6 sm:pl-8 border-l border-white/10 hover:border-white/50 transition-colors duration-500"
            >
              {/* Subtle hover dot indicator */}
              <div className="absolute top-2 -left-[5px] w-[9px] h-[9px] rounded-full bg-white/0 group-hover:bg-white/80 transition-colors duration-500" />

              <p className={`text-white/70 leading-relaxed font-light ${index === 0 ? 'text-xl sm:text-2xl text-white/90 font-normal' : 'text-base sm:text-lg'}`}>
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Join Us Banner ── */}
      <div 
        data-ns-animate 
        data-offset="100" 
        className="py-10 border-t border-b border-white/10 mt-10"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 py-8 max-w-6xl mx-auto px-6 sm:px-0">
          <div className="w-full lg:w-1/2 mt-2">
            <h2 className="text-2xl md:text-4xl text-white/80 font-normal mb-4">
              Join us
            </h2>
            <p className="text-white max-w-2xl text-base md:text-lg">
              We are building foundational infrastructure for how modern
              software will be executed. At Coirei, we are product-first
              engineers focused on correctness, reliability, and real-world
              scale.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src={JoinUs}
              alt="Join us"
              className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContentSection;