import folleiImg from "../../../assets/images/products/folleinewdashboard.svg";
import lmsImg from "../../../assets/images/products/LMSdashboard.svg";
import veleiImg from "../../../assets/images/products/Analytics Dashboard.svg";
import tasieImg from "../../../assets/images/Careers/workflow_img.avif";

const products = [
  {
    id: "follei",
    name: "Follei",
    category: "AUTONOMOUS AI SALES WORKFORCE",
    description: "An end-to-end AI sales automation platform that manages the complete customer journey — from first contact to long-term customer success — as a coordinated workforce of specialized agents, not a single chatbot.",
    pills: ["Voice", "WhatsApp", "Email", "Web Chat"],
    image: folleiImg
  },
  {
    id: "lms",
    name: "Coirei LMS",
    category: "AI-POWERED LEARNING MANAGEMENT PLATFORM",
    description: "An intelligent learning platform for schools, colleges, universities, and corporate training — combining modern learning infrastructure with AI across student, faculty, admin, and super admin portals.",
    pills: ["Student Portal", "Faculty Portal", "Admin Portal", "Super Portal"],
    image: lmsImg
  },
  {
    id: "velei",
    name: "Velei",
    category: "THE FUTURE OF AI RECRUITMENT",
    description: "Recruitment based on skills, not just resumes. Velei runs autonomous AI interviews and delivers structured candidate assessments in place of manual resume review.",
    pills: [],
    image: veleiImg
  },
  {
    id: "tasie",
    name: "TASIE",
    category: "AI-POWERED SECURE SOFTWARE ENGINEERING",
    description: "Rather than catching vulnerabilities after development, TASIE analyzes code continuously as it's written — helping teams shift quality and security earlier in the lifecycle.",
    pills: [],
    image: tasieImg
  }
];

const OurProduct = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden text-[#04032E]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-0">

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            data-ns-animate="true"
            data-delay="0.1"
            data-offset="40"
            className="text-4xl md:text-[68px] font-semibold tracking-tight text-[#04032E]"
          >
            Our Products
          </h2>
        </div>

        {/* Products List */}
        <div className="flex flex-col gap-12 md:gap-20">
          {products.map((product, index) => {
            return (
              <div
                key={product.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <div
                  data-ns-animate="true"
                  data-delay={`${0.1 + index * 0.05}`}
                  data-offset="50"
                  className="lg:col-span-5 flex flex-col items-start max-w-[530px]"
                >
                  {/* Product Title */}
                  <h3 className="text-3xl md:text-[30px] font-medium text-[#14182C] tracking-tight mb-3">
                    {product.name}
                  </h3>

                  {/* Category Subtitle */}
                  <span className="text-[12px] font-bold text-[#878FAA] tracking-wider uppercase mb-6">
                    {product.category}
                  </span>

                  {/* Description */}
                  <p className="text-[#5B6280] text-base md:text-[15px] leading-relaxed mb-6 md:mb-40 font-light">
                    {product.description}
                  </p>

                  {/* Pills */}
                  {product.pills && product.pills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {product.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-4 py-1.5 border border-[#DEE3EE] rounded-full text-xs md:text-[11px] text-[#5B6280] hover:bg-gray-100 transition-colors duration-300"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Container */}
                <div
                  data-ns-animate="true"
                  data-delay={`${0.15 + index * 0.05}`}
                  data-offset="60"
                  className="lg:col-span-7 w-full"
                >
                  <div className="block relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
                    <img
                      src={product.image}
                      alt={`${product.name} Interface Dashboard Mockup`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurProduct;