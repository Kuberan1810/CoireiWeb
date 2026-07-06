import { useState } from "react";
import RequestDemoForm from "./RequestDemoForm";
import useScrollAnimations from "../../../../hooks/useScrollAnimations";

const ContactList = () => {
  useScrollAnimations();
  const [showRequestDemo, setShowRequestDemo] = useState(false);

  return (
    <section className="GlobalPadding">
      <div className="flex flex-col lg:flex-col justify-between gap-12 lg:gap-16">

        {/* LEFT CONTENT */}
        <div 
          data-ns-animate 
          data-offset="80" 
          className="w-full sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white/80 mb-4 font-medium">
            Contact Sales
          </h1>

          <p className="text-base sm:text-lg text-white/70 mb-3">
            We’re here to help you understand how Coirei fits into your team’s execution workflow. Tell us what you’re looking to achieve, and we’ll guide you to the right solution.
          </p>

          <p className="text-base sm:text-lg text-white/70">
            If you’re looking for detailed technical documentation or learning resources, you can explore Coirei University and our Docs.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-2">
          <div className="pb-6 sm:pb-8">
            <h2 className="text-xl sm:text-2xl text-white/80">
              How can we help?
            </h2>
          </div>

          <div className="w-full">
            {!showRequestDemo ? (
              <div 
                data-ns-animate 
                data-offset="100" 
                className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2"
              >
                <div
                  onClick={() => setShowRequestDemo(true)}
                  className="group bg-[#1e1e1e] px-6 sm:px-8 py-7 sm:py-10 rounded-lg space-y-3 hover:bg-[#29292950] cursor-pointer transition-all duration-300"
                >
                  <h4 className="text-xl sm:text-2xl text-white/80 group-hover:text-white/50 transition">
                    Request a Demo
                  </h4>

                  <p className="text-base sm:text-lg text-white/70 group-hover:text-white/40 transition">
                    See Coirei in action with a guided walkthrough tailored to your use case. Understand how planning, code, pipelines, and AI-assisted execution come together in one system.
                  </p>
                </div>

                <Card
                  title="Upgrade my plan"
                  desc="Talk to our team about advanced capabilities, team collaboration features, and enterprise-scale execution support."
                />

                <Card
                  title="Help with Billing"
                  desc="Get assistance with invoices, subscriptions, plan changes, or account-related questions"
                />

                <Card
                  title="Report a bug"
                  desc="Found a bug or unexpected behavior? Reach out to our team so we can investigate and resolve it quickly"
                />

                <div>
                  <h4 className="text-xl sm:text-2xl text-white/80 mb-2.5">
                    Other questions:
                  </h4>

                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <a className="text-white/60 underline text-base sm:text-lg hover:text-white/80 transition cursor-pointer">
                      Technical Support
                    </a>
                    <a className="text-white/60 underline text-base sm:text-lg hover:text-white/80 transition cursor-pointer">
                      Privacy and data handling
                    </a>
                    <a className="text-white/60 underline text-base sm:text-lg hover:text-white/80 transition cursor-pointer">
                      Security and compliance
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <RequestDemoForm onBack={() => setShowRequestDemo(false)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactList;

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group bg-[#1e1e1e] px-6 sm:px-8 py-7 sm:py-10 rounded-lg space-y-3 hover:bg-[#29292950] cursor-pointer transition-all duration-300">
    <h4 className="text-xl sm:text-2xl text-white/80 group-hover:text-white/50 transition">
      {title}
    </h4>

    <p className="text-sm sm:text-lg text-white/70 group-hover:text-white/40 transition">
      {desc}
    </p>
  </div>
);
