import signature from "../../../assets/images/services/Ceo-sign.png";
import groupImage from "../../../assets/images/services/group_images.png";

const ServiceAbout = () => {
  return (
    <section className="bg-[#1C1B1B] GlobalPadding">
      <div className="flex flex-col md:flex-row  md:items-center">

        {/* Image */}
        <div
          data-ns-animate
          data-direction="left"
          data-offset="100"
          className="mb-10 lg:mb-0 md:mr-20"
        >
          <img
            src={groupImage}
            alt=""
            className="object-cover w-full "
          />
        </div>

        {/* Text Content */}
        <div
          data-ns-animate
          data-direction="right"
          data-offset="100"
          className="md:justify-items-start">
          <h2
            data-ns-animate
            data-offset="40"
            className="inline-flex items-center justify-center text-[16px] sm:text-lg md:text-xl lg:text-2xl  text-white py-2 px-6 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-4"
          >
            About Us
          </h2>

          <p
            data-ns-animate
            data-delay="0.2"
            data-offset="80"
            className="mt-4 text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[64px] leading-tight text-white font-medium"
          >
            Transforming <span className="text-[#FF6A00]">Ideas.</span>
            <br />
            <span className="text-[#FF6A00]">into Digital Reality</span>
          </p>

          <p
            data-ns-animate
            data-delay="0.4"
            data-offset="60"
            className="mt-2 text-white/90 text-base sm:text-lg lg:text-xl max-w-md lg:max-w-105 mb-2"
          >
            Get assistance with invoices, subscriptions, plan
            changes, or account-related questions
          </p>

          {/* Signature */}
          <div
            data-ns-animate
            data-direction="right"
            data-offset="100"
            className="flex flex-col">
            <img
              src={signature}
              alt="Signature"
              className="w-[110px] sm:w-[120px] lg:w-[130px] object-contain"
            />
            <p className="text-white text-sm sm:text-md mt-2">
              Naveenkumar S
              <br />
              <span className="text-white/80 text-sm">
                (CEO & Founder)
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;
