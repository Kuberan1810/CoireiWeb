import React, { useState, type FormEvent } from "react";

const FeatureContact: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="mx-6 sm:mx-10 md:mx-15 py-16 sm:py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

        {/* LEFT */}
        <div 
          data-ns-animate 
          data-direction="left" 
          data-offset="100" 
          className="max-w-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2.5">
            Contact Us Now
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md">
            Have questions or want to explore how Coirei fits your team?
            Share your email and our team will get in touch
          </p>
        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          data-ns-animate 
          data-direction="right" 
          data-offset="100" 
          className="flex flex-col gap-4 w-full sm:max-w-md md:w-120"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-[#1a1b25] px-4 py-3 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:border-[#FF8800] focus:ring-2 focus:ring-[#FF8800]/20"
          />

          <button
            type="submit"
            className="rounded-lg bg-[#FF8800] px-6 py-3 text-sm sm:text-base font-medium text-white transition hover:bg-[#FF8800]/80 cursor-pointer"
          >
            Submit Request
          </button>
        </form>

      </div>
    </section>
  );
};

export default FeatureContact;
