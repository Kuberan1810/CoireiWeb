import { Settings } from "lucide-react";

const PrivacySection = () => {
  return (
    <section className="text-white mx-6 sm:mx-10 md:mx-15 pt-24 sm:pt-28 md:pt-32 pb-16">
      {/* Hero */}
      <div
        data-ns-animate
        data-offset="80"
        className="w-full max-w-6xl mx-auto mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left max-w-4xl mx-auto md:mx-0">
          Your privacy <br /> while using Coirei
        </h1>

        <p className="mt-6 text-base md:text-lg text-white max-w-3xl leading-relaxed text-left mx-auto md:mx-0 px-4 sm:px-0">
          At Coirei, we are building a unified execution platform for software
          development. Because Coirei operates across code, workflows,
          pipelines, and AI-assisted execution, we take privacy, security, and
          data control seriously by design.
        </p>

        <p className="mt-6 text-base md:text-lg text-white text-left mx-auto md:mx-0 px-4 sm:px-0">
          Our goal is simple: you remain in control of your data at all times.
        </p>

        {/* Highlights */}
        <div className="w-full flex flex-col md:flex-row gap-8 mt-8 flex-wrap px-4 sm:px-0">
          <div className="flex-1">
            <Settings className="text-[18px] bg-gray-500 p-0.5 rounded-md mb-2.5" />
            <p className="text-lg md:text-xl text-white mb-2">
              Telemetry is optional. You remain in control.
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed">
              Coirei may collect limited execution telemetry to improve platform
              reliability and performance. You can opt out at any time without
              losing access to core features, including AI assistance.
            </p>
          </div>

          <div className="flex-1 mb-6 md:mb-0">
            <Settings
              size={24}
              className="text-[18px] bg-gray-500 p-0.5 rounded-md mb-2.5"
            />
            <p className="text-lg md:text-xl text-white mb-2">
              Full visibility, always.
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed">
              You can review execution and telemetry events in real time through
              Coirei’s monitoring and audit views. All data collection is
              transparent, documented, and governed by your privacy settings.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div
        data-ns-animate
        data-offset="100"
        className="border-t border-b border-white/20"
      >
        <div className="text-center max-w-4xl mx-auto py-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-8 pb-5 text-white">
            Our philosophy is built on transparency, minimal data collection,
            and explicit control
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 text-left md:text-center">
            Coirei is designed so that execution happens inside controlled
            environments, with clear ownership, access rules, and auditability.
            Any data that leaves your execution environment does so
            intentionally, securely, and with purpose. We do not believe in
            hidden data collection or opaque AI behaviour. Every system
            interaction is governed, observable, and accountable.
          </p>
        </div>
      </div>

      {/* How Coirei Works */}
      <div
        data-ns-animate
        data-offset="100"
        className="max-w-4xl mx-auto mt-12 px-4 sm:px-0">

        <h3 className="text-2xl md:text-3xl font-regular mb-4">
          How Coirei Works
        </h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei operates as a cloud-native execution platform. Code is written
          and executed inside isolated cloud workspaces. Execution environments
          are consistent and reproducible.
        </p>
      </div>

      {/* Cloud-based Capabilities */}
      <div
        data-ns-animate
        data-offset="100"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0">
        <h3 className="text-2xl md:text-3xl font-regular mb-4">
          Cloud-based Capabilities
        </h3>
        <p className="text-base md:text-lg text-white mb-2.5">
          Some Coirei features rely on cloud services to function correctly,
          including:
        </p>
        <ul className="text-base md:text-lg text-white space-y-2 list-disc list-inside">
          <li>Cloud workspaces and execution environments</li>
          <li>Continuous testing and CI/CD orchestration</li>
          <li>AI-assisted analysis and recommendations</li>
          <li>Collaboration, monitoring, and execution history</li>
        </ul>
        <p className="mt-2.5 text-base md:text-lg text-white leading-relaxed">
          All cloud-based data is encrypted in transit and at rest. You can
          delete project data at any time based on your access level and
          organization policies.
        </p>
      </div>

      {/* Coirei AI */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-4">Coirei AI</h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei AI provides execution-aware assistance across planning, code,
          workflows, and pipelines.
        </p>

        <p className="mt-5 text-base md:text-lg text-white leading-relaxed">
          It helps teams by understanding intent, analyzing execution signals,
          detecting risks, and generating recommendations to improve quality and
          reliability.
        </p>

        <p className="mt-5 text-base md:text-lg text-white leading-relaxed">
          Some AI capabilities may process execution context such as code diffs,
          test results, workflow state, or system outputs to provide accurate
          assistance. This processing happens strictly within defined boundaries
          and never results in autonomous execution of irreversible actions. All
          critical actions require explicit human approval, and AI behavior is
          always observable and auditable.
        </p>

        <p className="mt-5 text-base md:text-lg text-white leading-relaxed">
          You can manage or disable specific AI capabilities at any time through
          platform settings.
        </p>
      </div>

      {/* Telemetry */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-4">
          Telemetry (Opt-out)
        </h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei may collect limited telemetry to improve platform reliability,
          performance, and user experience. This telemetry focuses on system
          health and feature usage, not customer code or proprietary logic.
          Opting out does not restrict access to core features or AI assistance.
        </p>
      </div>

      {/* Login */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-2.5">Login</h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei supports optional sign-in to provide a consistent and secure
          execution experience across devices and teams.
        </p>
        <p className="text-base md:text-lg text-white leading-relaxed">
          You can explore Coirei without logging in, but signing in enables:
        </p>
        <ul className="mt-2.5 text-base md:text-lg text-white list-disc list-inside space-y-2">
          <li>Persistent cloud workspaces and execution history</li>
          <li>Synchronized settings and configurations across devices</li>
          <li>Faster support and issue resolution tied to your account</li>
        </ul>
      </div>

      {/* Business Model */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-4">
          Coirei’s Business Model
        </h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei is built as a product-led platform with usage-based and
          enterprise subscription plans. Our focus is delivering execution
          infrastructure for teams and organizations, not monetizing user data.
        </p>
      </div>

      {/* Open Practices */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-2.5">
          Open & Verifiable Practices
        </h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Coirei believes trust is earned through transparency and
          verifiability.
        </p>
        <ul className="mt-2.5 text-base md:text-lg text-white list-disc list-inside space-y-2">
          <li>Improve reliability and security</li>
          <li>Enable independent review of system behavior</li>
          <li>Strengthen trust around privacy and execution guarantees</li>
        </ul>
      </div>

      {/* Contact */}
      <div
        data-ns-animate
        data-direction="up"
        data-offset="60"
        className="max-w-4xl mx-auto mt-16 px-4 sm:px-0"
      >
        <h3 className="text-2xl md:text-3xl font-regular mb-2.5">
          Contact the Coirei Privacy Team
        </h3>
        <p className="text-base md:text-lg text-white leading-relaxed">
          For questions about privacy, security, data handling, or governance,
          reach us at{" "}
          <a
            href="mailto:info@coirei.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            info@coirei.com
          </a>
          . You may also review our Privacy Policy, Terms of Service, and Trust
          documentation.
        </p>
      </div>
    </section>
  );
};

export default PrivacySection;
