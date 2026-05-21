
import {
  MessageSquare,
  Lightbulb,
  Code2,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Consultation",
    icon: MessageSquare,
    desc: "We start by understanding your business goals, challenges and requirements in-depth discussions",
  },
  {
    step: "02",
    title: "Strategy",
    icon: Lightbulb,
    desc: "Our team designs a clear roadmap, technical strategy and defining architecture",
  },
  {
    step: "03",
    title: "Implementation",
    icon: Code2,
    desc: "We build, integrate, and test the solution using modern technologies, ensuring performance",
  },
  {
    step: "04",
    title: "Final Result",
    icon: CheckCircle,
    desc: "After thorough testing and validation, we deliver a polished solution that’s ready to launch",
  },
];
const ServicesWorkFlow = () => {
  return (
    <section className="text-white py-10 sm:py-20 mx-15 max-sm:py-16 max-sm:mx-5">
      <div className="">

        {/* HEADER */}
        <div className="text-center mb-16 max-sm:mb-12">
          <h2 
            data-ns-animate 
            data-offset="40" 
            className="inline-flex items-center justify-center text-xl max-sm:text-base text-white py-2.5 max-sm:py-2 px-10 max-sm:px-6 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10 max-sm:mb-6"
          >
            Our Work Process
          </h2>

          <p 
            data-ns-animate 
            data-delay="0.2" 
            data-offset="80" 
            className="text-[40px] max-sm:text-[28px] font-medium"
          >
            Our Proven <span className="text-orange-500">Work Process</span>
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-sm:gap-8 relative">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div 
                key={index} 
                data-ns-animate 
                data-delay={0.15 * index} 
                data-offset="60" 
                className="relative text-center"
              >

                {/* CONNECTOR LINE (desktop only) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[42px] right-[-35%] px-20 h-px bg-white/20" />
                )}

                {/* ICON CIRCLE */}
                <div className="relative mx-auto w-20 h-20 max-sm:w-16 max-sm:h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                  <Icon size={28} className="text-white max-sm:hidden" />
                  <Icon size={22} className="text-white hidden max-sm:block" />

                  {/* STEP NUMBER */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 max-sm:w-5 max-sm:h-5 rounded-full bg-white text-black text-xs font-semibold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="mt-6 max-sm:mt-4 text-[24px] max-sm:text-[18px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-[18px] max-sm:text-[16px] text-white/70 leading-relaxed max-w-xs mx-auto">
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

export default ServicesWorkFlow;
