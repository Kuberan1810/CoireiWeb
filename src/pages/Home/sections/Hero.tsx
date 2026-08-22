import { Link } from 'react-router-dom';
import networkRhinos from '../../../assets/images/homepage/networkrhinos.svg';
import techPanda from '../../../assets/images/homepage/techpanda.svg';
import skillPoint from '../../../assets/images/homepage/skillpoint.svg';
import jit from '../../../assets/images/homepage/jeppiarcollege.svg';
import background from '../../../assets/images/homepage/background.jpg';

const Hero = () => {
    return (
        <section 
            className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#F9FCF8] pt-32 pb-10 px-4"
        >
            {/* Background Image */}
            <img src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center px-4">
                
                {/* Top Badge */}
                <div className="inline-flex items-center px-[10px] py-[3px] gap-[10px] rounded-[8px] bg-white mb-8 mt-12" data-ns-animate="true" data-direction="up" data-delay="0.1">
                    <span className="text-[16px] text-[#0E121B] font-normal leading-[1.3] instrument-sans text-center">
                        Coirei builds intelligent AI products for modern businesses
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[48px] sm:text-[64px] md:text-[90px] font-normal tracking-[-0.27px] text-center leading-[1.1] md:leading-[90px] text-[#0E121B] mb-12 instrument-sans" data-ns-animate="true" data-direction="up" data-delay="0.2">
                    AI that thinks.<br />
                    Learns. Executes.
                </h1>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-16" data-ns-animate="true" data-direction="up" data-delay="0.3">
                    <button
                        type="button"
                        onClick={() => {
                            const section = document.getElementById('our-products');
                            if (section && (window as any).lenis) {
                                (window as any).lenis.scrollTo(section, { offset: -50, duration: 1.5 });
                            } else if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center justify-center bg-[#0E121B] hover:bg-black text-white px-8 py-3.5 rounded-full font-medium text-[16px] transition-all duration-300 w-full sm:w-auto cursor-pointer instrument-sans"
                    >
                        Explore Our Products
                    </button>
                    <Link
                        to="/contact"
                        className="flex items-center justify-center text-[#5B6280] hover:text-[#0E121B] font-medium text-[16px] transition-all duration-300 w-full sm:w-auto cursor-pointer instrument-sans"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Logos Section */}
                <div className="flex flex-col items-center justify-center w-full" data-ns-animate="true" data-direction="up" data-delay="0.4">
                    <span className="text-[#616161] text-[10px] font-medium text-center uppercase mb-10 instrument-sans">
                        TRUSTED BY AMBITIOUS TEAMS
                    </span>
                    <div className="relative flex flex-wrap items-center justify-center gap-10 md:gap-16 max-w-max mx-auto">
                        {/* Left Edge Blur */}
                        <div className="absolute left-[-20px] top-1/2  w-[111px] h-[85px] bg-[#F9FCF8] blur-[44px] z-10 pointer-events-none"></div>
                        
                        <img src={networkRhinos} alt="Network Rhinos" className="w-[168px] h-[28px] object-contain relative z-0" />
                        <img src={techPanda} alt="TechPanda" className="w-[117px] h-[28px] object-contain relative z-0" />
                        <img src={skillPoint} alt="Skill Point" className="w-[66.67px] h-[40px] object-contain relative z-0" />
                        <img src={jit} alt="JIT" className="w-[52.67px] h-[60px] object-contain relative z-0" />

                        {/* Right Edge Blur */}
                        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[111px] h-[85px] bg-[#F9FCF8] blur-[44px] z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
