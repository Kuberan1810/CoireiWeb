import { Triangle } from "lucide-react";
import { useState } from "react";

const accordionItems = [
  {
    title: "Coirei Code",
    desc: "Explore how code is written, reviewed, and validated inside Coirei’s shared cloud workspace",
  },
  {
    title: "Developer workflow",
    desc: "Learn how tasks, code, pipelines, and deployments stay connected throughout execution",
  },
  {
    title: "Using MCP",
    desc: "Understand how MCP enables controlled interaction between humans, AI agents, and execution workflows",
  },
  {
    title: "Rules",
    desc: "Learn how rules define ownership, permissions, and safe execution inside Coirei",
  },
  {
    title: "Prompts",
    desc: "Discover how prompts are used to communicate intent to Coirei’s AI assistance layer",
  },
  {
    title: "How coirei uses coirei",
    desc: "See how the Coirei team uses the platform internally to build, test, and operate Coirei itself",
  },
];

const VideoList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-20">
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            data-ns-animate
            data-delay={0.1 * index}
            data-offset="40"
            className="bg-[#1e1e1e] rounded-xl p-10 cursor-pointer hover:bg-[#262626]"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[40px] text-white font-medium pb-2">
                  {item.title}
                </h3>
                <p className="text-[20px] text-gray-300">
                  {item.desc}
                </p>
              </div>

              <span className="flex items-center gap-2 text-[24px] text-white">
                2 Videos
                <Triangle
                  fill="#fff"
                  size={18}
                  strokeWidth={2.5}
                  className={`
                    transition-transform duration-300
                    ${openIndex === index ? "rotate-0" : "rotate-180"}
                  `}
                />
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <iframe
                  className="w-full aspect-video rounded-xl border border-white/10"
                  src="https://www.youtube.com/embed/278IRQ6HSi4"
                  allowFullScreen
                />
                <iframe
                  className="w-full aspect-video rounded-xl border border-white/10"
                  src="https://www.youtube.com/embed/a3ICNMQW7Ok"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoList;
