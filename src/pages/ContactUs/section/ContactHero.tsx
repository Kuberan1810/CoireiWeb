import { MessageCircle, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white px-5 sm:px-8 md:px-12 lg:px-15 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
      {/* TITLE */}
      <h1 
        data-ns-animate 
        data-offset="100" 
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-medium mb-12 sm:mb-16 lg:mb-20"
      >
        Contact
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
        
        {/* LEFT CARD */}
        <div 
          data-ns-animate 
          data-direction="left" 
          data-offset="100" 
          className="relative pl-8 sm:pl-10 lg:pl-12"
        >
          <div className="absolute left-0 top-0 h-full w-px  bg-white/20" />
      


          <div className="backdrop-blur-md border border-white/20 rounded-md p-3 sm:p-4 max-w-fit mb-2.5 bg-[#29292980]">
            <MessageCircle size={20} className="text-[#FF8800]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-medium mb-3">
            Contact Sales
          </h2>

          <p className="text-white/70 text-[18px] max-w-md mb-6">
            Discuss your enterprise requirements, explore tailored pricing, or request a personalized demo of Coirei.
          </p>

          <button
            onClick={() => navigate("/contact-sales")}
            className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out"
          >
            Let’s chat
          </button>
        </div>

        {/* RIGHT CARD */}
        <div 
          data-ns-animate 
          data-direction="right" 
          data-offset="100" 
          data-delay="0.2"
          className="relative pl-8 sm:pl-10 lg:pl-12"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-white/20" />

          <div className="backdrop-blur-md border border-white/20 rounded-md p-3 sm:p-4 max-w-fit mb-2.5 bg-[#29292980]">
            <Hand size={20} className="text-[#FF8800]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-medium mb-6">
            Get in touch
          </h2>

          <div className="space-y-5 text-[18px]">
            <p className="text-white/70 max-w-md">
              Technical support:<br />
              <a className="text-white/90 underline hover:text-white cursor-pointer">support@coirei.com</a>
            </p>

            <p className="text-white/70 max-w-md">
              Billing questions:<br />
              <a className="text-white/90 underline hover:text-white cursor-pointer">billing@coirei.com</a>
            </p>

            <p className="text-white/70 max-w-md">
              Security concerns:<br />
              <a className="text-white underline hover:text-white cursor-pointer">security@coirei.com</a>
            </p>

            <p className="text-white/70 max-w-md">
              Privacy & data:<br />
              <a className="text-white/90 underline hover:text-white cursor-pointer">privacy@coirei.com</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
