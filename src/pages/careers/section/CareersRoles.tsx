const roles = [
  "AI ML Intern",
  "UI & UX Intern",
  "Frontend & Fullstack Intern",
  "Digital Marketing Intern",
];

const CareersRoles = () => {
  return (
    <section className="text-white mb-10 sm:mb-15 md:mb-20 mx-6 sm:mx-10 md:mx-15">
      <div className="py-2">

        {/* HEADER */}
        <h2 
          data-ns-animate 
          data-offset="80" 
          className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-4"
        >
          Open roles
        </h2>

        <p className="text-gray-200 text-lg lg:text-xl mb-1">
          If you’re passionate about helping developers get more done, we’d love to chat.
        </p>
        <p className="text-gray-200 text-lg lg:text-xl mb-8 sm:mb-10">
          We’re currently hiring for the following roles:
        </p>

        {/* ROLES LIST */}
        <div className="border-t border-white/10">
          {roles.map((role, index) => (
            <div key={index} className="border-b border-white/30">

              {/* ROLE ROW */}
              <div
                data-ns-animate
                data-delay={0.1 * index}
                data-offset="20"
                className="w-full px-4 sm:px-6 md:px-7.5 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-white/5 transition"
              >
                <div>
                  <p className="font-semibold text-base sm:text-lg lg:text-[20px]">
                    {role}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-[20px] mt-1">
                    Hybrid
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersRoles;
