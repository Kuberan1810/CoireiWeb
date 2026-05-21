import React from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../BlogData";

const BlogList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="md:py-20 py-0 ">
      <div className="mx-6 sm:mx-10 md:mx-15 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-5">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              onClick={() => navigate(`/resources/blog/${blog.slug}`)}
              data-ns-animate
              data-delay={0.1 * index}
              data-offset="40"
              className="group cursor-pointer rounded-2xl p-5 bg-transparent 
      hover:bg-[#29292950] active:bg-[#29292980]
      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      hover:-translate-y-1 active:scale-[0.97]"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-50 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
          group-hover:scale-110 group-active:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium text-white leading-snug mb-6 transition-colors duration-500">
                  {blog.title}
                </h3>

                <span className="inline-block mb-6 text-sm font-medium text-white/90 bg-white/10 py-2 px-4 rounded transition-all duration-500 group-hover:bg-white/15">
                  By {blog.author}
                </span>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
