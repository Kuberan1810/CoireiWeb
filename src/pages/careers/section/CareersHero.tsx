
import { Link } from "react-router-dom";

const CareersHero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-[#FFFFFF]">
            
            {/* Top Oval Glow - Anchored strictly to the very top edge */}
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[70%] h-[200px] rounded-[100%] bg-[#F67300] blur-[120px] opacity-[0.25] pointer-events-none" />
            
            {/* Content Container */}
            <div className="flex flex-col items-center relative max-w-[900px] mx-auto text-center mt-24">
                
                {/* Headline */}
                <h1 data-ns-animate data-duration="0.4" data-delay="0.1" className="font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] md:leading-[57.2px] text-[#000000] mb-8 tracking-normal">
                    Build the Future of AI with Coirei <br className="hidden md:block" /> Join <span className="text-[#F67300]">Our Team</span> of Innovators
                </h1>
                
                {/* Subtext */}
                <p data-ns-animate data-duration="0.4" data-delay="0.2" className="font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] md:leading-[28px] text-[#4F4F4F] mb-10 max-w-[950px]">
                    Shape the next generation of AI-powered products, enterprise solutions, and <br />intelligent experiences. At Coirei, you'll collaborate with passionate minds, solve <br/> meaningful challenges, and create technology that makes a real impact.
                </p>
                
                {/* CTA Button */}
                <Link
                to="/careers"
                data-ns-animate data-duration="0.4" data-delay="0.3" className="font-normal text-[18px] md:text-[22px] leading-[33px] text-white bg-[#272727] border-t border-[#000000] rounded-[8px] px-10 py-3 hover:bg-[#1a1a1a] transition-colors duration-300 shadow-md cursor-pointer">
                    Join Our Team
                </Link>

            </div>

            {/* Bottom Rectangle Glow - Anchored strictly to the very bottom edge */}
            <div className="absolute bottom-0 translate-y-1/2 left-0 w-full h-[200px] bg-[#F67300] blur-[120px] opacity-[0.25] pointer-events-none" />
            
        </section>
    );
};

export default CareersHero;
