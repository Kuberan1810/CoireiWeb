import React, { useRef, useState, useEffect } from "react";
import useScrollReveal from "../../../hooks/useScrollReveal";

const countryCodes = [
  { flag: "🇮🇳", code: "+91" },
  { flag: "🇺🇸", code: "+1" },
  { flag: "🇬🇧", code: "+44" },
  { flag: "🇦🇪", code: "+971" },
  { flag: "🇸🇬", code: "+65" },
];

const HomeContact = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const [countryOpen, setCountryOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log({
      ...formData,
      countryCode: selectedCountry.code,
    });
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setCountryOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener(
  //       "mousedown",
  //       handleClickOutside
  //     );
  //   };
  // }, []);

  const { ref: sectionRef, revealStyle } = useScrollReveal(0.6);

  return (
    <section ref={sectionRef} style={revealStyle} className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div>
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center justify-center px-6 h-[52px] rounded-full border border-white/10 text-white text-lg bg-white/[0.02] backdrop-blur-xl mb-10">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
              <span className="text-[#FF6B00] block">
                Reach out For AI experts
              </span>

              <span className="text-white block">
                for your Business queries.
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">
            <div className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-lg text-white/50 mb-2.5">
                  Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12
                    bg-[#1a1a1a]
                    border
                    border-[#2d2d2d]
                    rounded-lg
                    px-4
                    text-lg
                    text-white/90
                    focus:outline-none
                    focus:border-white/20
                    transition
                  "
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-lg text-white/50 mb-2.5">
                  Company
                </label>

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12
                    bg-[#1a1a1a]
                    border
                    border-[#2d2d2d]
                    rounded-lg
                    px-4
                    text-lg
                    text-white/90
                    focus:outline-none
                    focus:border-white/20
                    transition
                  "
                />
              </div>

              {/* Phone + Email */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Phone */}
                <div>
                  <label className="block text-lg text-white/50 mb-2.5">
                    Phone
                  </label>

                  <div
                    className="
                      flex
                      items-center
                      h-12
                      bg-[#1a1a1a]
                      border
                      border-[#2d2d2d]
                      rounded-lg
                      overflow-visible
                      focus-within:border-white/20
                      transition
                      relative
                    "
                  >
                    {/* Dropdown */}
                    <div
                      ref={dropdownRef}
                      className="relative h-full"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setCountryOpen(!countryOpen)
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          h-full
                          border-r
                          border-[#2d2d2d]
                          text-white/80
                          text-[15px]
                          bg-[#202020]
                          cursor-pointer
                        "
                      >
                        <span className="text-base">
                          {selectedCountry.flag}
                        </span>

                        <span>
                          {selectedCountry.code}
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`text-white/40 transition ${
                            countryOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {countryOpen && (
                        <div
                          className="
                            absolute
                            top-14
                            left-0
                            w-[130px]
                            bg-[#1A1A1A]
                            border
                            border-[#2d2d2d]
                            rounded-xl
                            overflow-hidden
                            z-50
                            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                          "
                        >
                          {countryCodes.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setCountryOpen(false);
                              }}
                              className="
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                text-white/80
                                hover:bg-white/5
                                transition
                                cursor-pointer
                              "
                            >
                              <span>
                                {country.flag}
                              </span>

                              <span>
                                {country.code}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      className="
                        flex-1
                        h-full
                        bg-transparent
                        px-4
                        text-lg
                        text-white/90
                        placeholder:text-white/20
                        focus:outline-none
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg text-white/50 mb-2.5">
                    Email
                  </label>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full
                      h-12
                      bg-[#1a1a1a]
                      border
                      border-[#2d2d2d]
                      rounded-lg
                      px-4
                      text-lg
                      text-white/90
                      focus:outline-none
                      focus:border-white/20
                      transition
                    "
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-lg text-white/50 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="
                    w-full
                    bg-[#1a1a1a]
                    border
                    border-[#2d2d2d]
                    rounded-lg
                    px-4
                    py-3
                    text-lg
                    text-white/90
                    resize-none
                    focus:outline-none
                    focus:border-white/20
                    transition
                  "
                />
              </div>

              {/* Button */}
              <button
                onClick={handleSubmit}
                className="
                  w-full
                  h-12
                  bg-[#FC7C04]
                  text-white
                  rounded-lg
                  text-lg
                  font-medium
                  transition-all
                  duration-300
                  ease-out
                  hover:brightness-95
                  hover:shadow-[0_0_0_3px_rgba(252,124,4,0.25)]
                  active:scale-[0.98]
                  cursor-pointer
                "
              >
                Get in touch
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeContact;