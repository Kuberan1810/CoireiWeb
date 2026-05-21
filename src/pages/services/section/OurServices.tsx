import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  Globe,
  BotMessageSquare,
  BarChart,
  LayoutDashboard,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Web & Platform Development",
    slug: "custom-web-platform-development",
    icon: Smartphone,
    desc: "Custom websites and web platforms built for scale, performance, and security, with analytics and automation embedded from day one.",
  },
  {
    title: "Custom Business Applications (CRM / ERP / Portals)",
    slug: "custom-business-application-development",
    icon: Globe,
    desc: "Tailored CRM, ERP, and internal systems designed around your workflows, not generic templates, with intelligent reporting and automation.",
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    slug: "ai-chatbot-development",
    icon: BotMessageSquare,
    desc: "Intelligent chatbots for customer support, sales, HR, and operations, integrated with your data, tools, and business logic.",
  },
  {
    title: "Process Automation & System Integration",
    slug: "process-automation-system-integration",
    icon: BarChart,
    desc: "Automation of repetitive tasks and seamless integration across tools, databases, and platforms to reduce manual effort and errors",
  },
  {
    title: "Data, Dashboards & Business Intelligence",
    slug: "business-intelligence-dashboard-development",
    icon: LayoutDashboard,
    desc: "Real-time dashboards and decision systems that turn operational data into clear insights for faster and better decisions.",
  },
  {
    title: "UI/UX, Branding & Product Design",
    slug: "ui-ux-branding-product-design",
    icon: PenTool,
    desc: "User-focused UI/UX, product interfaces, and visual design that improve usability, adoption, and trust across digital products.",
  }
];

const OurServices = () => {
  const navigate = useNavigate();
  return (
    <section className="text-white mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">
      <div className="">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>

            <h2 
              data-ns-animate 
              data-offset="40" 
              className="text-[16px] sm:text-lg md:text-xl lg:text-2xl  text-white  inline-flex items-center justify-center py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10"
            >
              Our Services
            </h2>

            <p 
              data-ns-animate 
              data-delay="0.2" 
              data-offset="80" 
              className="text-[40px] md:text-4xl max-sm:text-[28px] font-medium leading-tight mb-0"
            >
              Services We Provide to{" "}
              <span className="block text-orange-500">Elevate Your Business</span>
            </p>
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(`/services/${service.slug}`)}
                data-ns-animate
                data-delay={0.1 * index}
                data-offset="40"
                className="
                  rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all 
                  cursor-pointer hover:bg-white/10 hover:-translate-y-1 group
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-11 h-11 mb-4 rounded-lg
                    flex items-center justify-center
                    bg-white/10 backdrop-blur
                    border border-white/20
                    transition-all duration-300 group-hover:bg-white/20
                  "
                >
                  <Icon size={22} className="text-white-400 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg md:text-xl  font-bold mb-5 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className=" text-base lg:text-lg text-white/70 font-medium leading-relaxed mb-5">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default OurServices;
