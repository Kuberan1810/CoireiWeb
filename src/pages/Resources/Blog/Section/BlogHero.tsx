
import Code from "../../../../assets/images/Resourses/Code-img.png";
import BGRectangle from "../../../../assets/images/Resourses/bg-Rectangle.png";

const BlogHero = () => {
  return (
    <section className="mt-50 mb-12.5 ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 sm:px-10 md:px-15">

          {/* LEFT — TEXT */}
          <div 
            data-ns-animate 
            data-direction="left" 
            data-offset="80"
          >
            <h1 className="text-4xl md:text-6xl font-medium text-[#E3E3E0] leading-tight">
              Ideas for the AI builders.
              From concept to production.
            </h1>
          </div>

          {/* RIGHT — IMAGE + GLASS */}
          <div 
            data-ns-animate 
            data-direction="right" 
            data-offset="100" 
            className="relative h-105 md:h-130 rounded-2xl overflow-hidden hidden md:block"
          >
            {/* Background Image */}
            <img
              src={BGRectangle}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover  "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Glass Card */}
            <div className="relative z-1 h-full flex items-center justify-center p-6">
              <div className="  p-4 max-w-lg w-full">
                <img
                  src={Code}
                  alt="Code preview"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogHero;
