import { motion } from "framer-motion";
import founderImg from "../../../../assets/images/Resourses/company/founder.png";
import cofounderImg from "../../../../assets/images/Resourses/company/Co-founder.png";
import cyberImg from "../../../../assets/images/Resourses/company/cyberSecurity.png";
import uiuxImg from "../../../../assets/images/Resourses/company/UI&UX-Designer.png";
import frontendImg from "../../../../assets/images/Resourses/company/kubu3.png";
import backendImg from "../../../../assets/images/Resourses/company/backendDeveloper.png";
import Bg1 from "../../../../assets/images/Resourses/company/bg1.png";
import Bg2 from "../../../../assets/images/Resourses/company/bg2.png";
import Bg3 from "../../../../assets/images/Resourses/company/bg3.png";
import Bg4 from "../../../../assets/images/Resourses/company/bg4.png";
import Bg5 from "../../../../assets/images/Resourses/company/bg5.png";
import Bg6 from "../../../../assets/images/Resourses/company/bg6.png";


const HeroSection = () => {
  const team = [
    { name: "Naveenkumar", role: "Founder & CEO", image: founderImg, bg: Bg1 },
    { name: "Lalitha Bai", role: "Founder & CEO", image: cofounderImg, bg: Bg2 },
    { name: "Rajdeep", role: "Cyber Security", image: cyberImg, bg: Bg3 },
    { name: "Rahul Rajan", role: "UI/UX Designer", image: uiuxImg, bg: Bg4 },
    { name: "Kuberan", role: "Frontend Developer", image: frontendImg, bg: Bg5 },
    { name: "Pradeep", role: "Backend Developer", image: backendImg, bg: Bg6 }
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-48 pb-8 md:pb-12 overflow-hidden bg-white text-[#04032E]">
      <div className="relative z-10 px-6 md:px-15 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Capsule */}
          <div data-ns-animate="true" data-offset="40" className="border border-gray-200 rounded-full px-[20px] py-[10px] mb-8 bg-white flex items-center justify-center" >
            <span className="text-[#04032E] text-[14px] font-medium leading-none">Company</span>
          </div>

          {/* Main Heading */}
          <h1 data-ns-animate="true" data-delay="0.1" data-offset="60" className="text-4xl sm:text-5xl md:text-[52px] font-semibold leading-[1.2] tracking-tight max-w-[1200px] mb-6">
            Meet our team of <span className="text-[#F67300] italic ">Creators, designers,</span> and world-class <span className="text-[#F67300] italic">problem solvers</span>
          </h1>

          {/* Subheading */}
          <p data-ns-animate="true" data-delay="0.2" data-offset="80" className="text-[#000000] text-lg sm:text-xl max-w-[800px] mb-20 leading-relaxed">
            Discover the achievements that set us apart. From groundbreaking projects to industry accolades, we take pride in our accomplishments.
          </p>

          {/* Team Grid Marquee */}
          <div data-ns-animate="true" data-delay="0.3" data-offset="100" className="w-full overflow-hidden mb-8 pb-6 flex">
            <motion.div 
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...team, ...team].map((member, idx) => (
                <div key={idx} className="flex flex-col items-start shrink-0 w-[246px] mr-4 sm:mr-6 group">
                  <div className="w-full h-[253px] mb-4 bg-gray-100 overflow-hidden relative">
                    {/* Background Pattern */}
                    <img src={member.bg} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {/* Foreground Photo */}
                    <img src={member.image} alt={member.name} className="relative z-10 w-full h-full object-cover object-top grayscale mix-blend-multiply transition-all duration-500 group-hover:grayscale-0 group-hover:mix-blend-normal" />
                  </div>
                  <h3 className="text-[28px] text-[#272727]">{member.name}</h3>
                  <p className="text-[20px] font-light text-[#4D4D4D]">{member.role}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
