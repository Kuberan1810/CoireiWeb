import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import video1 from "../../../../assets/images/Resourses/University/Video 1.png";
import video2 from "../../../../assets/images/Resourses/University/Video 2.png";
import video3 from "../../../../assets/images/Resourses/University/Video 3.png";
import video4 from "../../../../assets/images/Resourses/University/Video 4.png";
import video5 from "../../../../assets/images/Resourses/University/Video 5.png";
import video6 from "../../../../assets/images/Resourses/University/Video 6.png";
import video7 from "../../../../assets/images/Resourses/University/Video 7.png";
import video8 from "../../../../assets/images/Resourses/University/Video 8.png";
import video9 from "../../../../assets/images/Resourses/University/Video 9.png";

/* VIDEO DATA */
const allVideoImages = [
  { id: 1, title: "Coirei VS ZIRA", image: video1, youtubeId: "aOuVTGG9Bik" },
  { id: 2, title: "Coirei VS ZIRA", image: video2, youtubeId: "tRaMUeBkJmU" },
  { id: 3, title: "Coirei VS ZIRA", image: video3, youtubeId: "nGnX6GkrOgk" },
  { id: 4, title: "Coirei VS ZIRA", image: video4, youtubeId: "zkCKx3fpk4Q" },
  { id: 5, title: "Coirei VS ZIRA", image: video5, youtubeId: "Yla5i5tzXKE" },
  { id: 6, title: "Coirei VS ZIRA", image: video6, youtubeId: "egDIqKLt2L4" },
  { id: 7, title: "Coirei VS ZIRA", image: video7, youtubeId: "pSHVbLPWA28" },
  { id: 8, title: "Coirei VS ZIRA", image: video8, youtubeId: "CrgYEbIQkac" },
  { id: 9, title: "Coirei VS ZIRA", image: video9, youtubeId: "EdfQQGSoNXU" },
];

const VideoSection = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="GlobalPadding">
      <div className="bg-[#292929] rounded-2xl p-10 mb-14 border border-white/10">
        <h2 className="text-[40px] font-medium mb-2 text-white">
          Getting started
        </h2>
        <p className="text-[20px] text-[#C1C1C1] mb-6">
          Everything you need to get up and running with Coirei’s AI-powered coding environment
        </p>

        {!showAllVideos && (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          >
            {allVideoImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.youtubeId)}
                data-ns-animate
                data-delay={0.1 * index}
                data-offset="40"
                className="min-w-[450px] h-60 bg-black rounded-xl overflow-hidden relative cursor-pointer"
              >
                <img
                   src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#B9B9B9] p-3 rounded-full">
                    <Play size={28} fill="#1a1a1a" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-6 text-[30px] text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          onClick={() => setShowAllVideos(!showAllVideos)}
          className="flex justify-end mt-5 cursor-pointer text-white text-xl"
        >
          {showAllVideos ? "Hide all Videos ↑" : "View all 9 Videos →"}
        </div>

        {showAllVideos && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideoImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.youtubeId)}
                data-ns-animate
                data-delay={0.1 * index}
                data-offset="40"
                className="h-[300px] bg-black rounded-xl overflow-hidden relative cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#B9B9B9] p-3 rounded-full">
                    <Play size={28} fill="#1a1a1a" />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-2xl text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[80%] h-[80%] bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white text-xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
