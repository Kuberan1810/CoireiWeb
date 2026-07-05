import founderImg from "../../../../assets/images/Resourses/company/founder.png";
import cofounderImg from "../../../../assets/images/Resourses/company/Co-founder.png";
import cyberImg from "../../../../assets/images/Resourses/company/cyberSecurity.png";
import uiuxImg from "../../../../assets/images/Resourses/company/UI&UX-Designer.png";
import frontendImg from "../../../../assets/images/Resourses/company/frontendDeveloper.png";
import backendImg from "../../../../assets/images/Resourses/company/backendDeveloper.png";

const HeroSection = () => {
  const team = [
    { name: "Naveenkumar", role: "Founder & CEO", image: founderImg },
    { name: "Lalitha Bai", role: "Founder & CEO", image: cofounderImg },
    { name: "Raj Deep", role: "Cyber Security", image: cyberImg },
    { name: "Rahul Rajan", role: "UI/UX Designer", image: uiuxImg },
    { name: "Kuberan", role: "Frontend Developer", image: frontendImg },
    { name: "Pradeep", role: "Backend Developer", image: backendImg }
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-48 pb-8 md:pb-12 overflow-hidden bg-white text-[#04032E]">
      <div className="relative z-10 px-6 md:px-15 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Capsule */}
          <div data-ns-animate="true" data-offset="40" className="border border-gray-200 rounded-full px-[20px] py-[10px] mb-8 bg-white flex items-center justify-center" style={{ boxShadow: '0px 3px 2.3px 0px rgba(0, 0, 0, 0.25)' }}>
            <span className="text-[#04032E] text-[14px] font-medium leading-none">Company</span>
          </div>

          {/* Main Heading */}
          <h1 data-ns-animate="true" data-delay="0.1" data-offset="60" className="text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.2] tracking-tight max-w-[1200px] mb-6">
            Meet our team of <span className="text-[#F67300]">Creators, designers,</span> and world-class <span className="text-[#F67300]">problem solvers</span>
          </h1>

          {/* Subheading */}
          <p data-ns-animate="true" data-delay="0.2" data-offset="80" className="text-[#000000] text-lg sm:text-xl max-w-[800px] mb-20 leading-relaxed">
            Discover the achievements that set us apart. From groundbreaking projects to industry accolades, we take pride in our accomplishments.
          </p>

          {/* Team Grid */}
          <div data-ns-animate="true" data-delay="0.3" data-offset="100" className="flex overflow-x-auto gap-4 sm:gap-6 w-full mb-8 pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-start shrink-0 w-[246px] snap-start">
                <div className="w-full h-[253px] mb-4 bg-gray-100 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale mix-blend-multiply" />
                </div>
                <h3 className="text-[28px] text-[#272727]">{member.name}</h3>
                <p className="text-[20px] font-light text-[#4D4D4D]">{member.role}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
