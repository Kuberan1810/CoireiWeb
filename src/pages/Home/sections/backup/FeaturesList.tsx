import { useState } from "react";
import img1 from "../../../assets/images/homepage/img1.webp"
import img2 from "../../../assets/images/homepage/img2.webp"
import img3 from "../../../assets/images/homepage/img3.jpg"
import img4 from "../../../assets/images/homepage/img4.webp"
import img5 from "../../../assets/images/homepage/img5.webp"


const FeaturesList = () => {

    const [options] = useState<string[]>(["dashboard1","dashboard2","dashboard3","dashboard4","dashboard5","dashboard6","dashboard7" ])
  const [selected, setSelected] = useState("dashboard1");



  return (
    <>
      <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20 w-full">
        <div className="flex flex-col items-center">
          <div className="heading-section mb-5">
            <h2 data-ns-animate data-offset="40" className="leading-none text-[#E3E3E0] text-[30px] font-small md:text-[60px] max-w-5xl text-center">
              Everything you need to succeed. Fast
            </h2>
          </div>
          <div 
            data-ns-animate
            data-delay="0.1"
            data-offset="40"
            className="h-150 w-[80%] main-section flex gap-8 border border-[#8D8D8D]"
          >
            <div className="navigation">
              
              <ul className="w-56 h-150 flex flex-col justify-start border divide-y divide-[#676767]">
                {options
                  .map((myoption, i) => (
                    <li
                        onMouseEnter={() => setSelected(myoption)}
                      key={i}
                      className="flex-1 flex justify-center items-center gap-3 px-4 py-4 text-[#B5B4B2] text-[24px] cursor-pointer hover:bg-[#2f2f2f] hover:text-white transition"
                    >
                      {/* Icon placeholder */}
                      <div className="h-4 w-4 border border-[#B5B4B2] rounded-sm" />
                      <span>{myoption}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="content mr-2.5 flex flex-col items-start">
              <p className="mt-15 text-[#B5B4B2] text-[24px]">
                Whether you're just starting or scaling fast. Tasklyn helps your team work smarter on what truly
                matters.
              </p>
              <div className="mt-7.5 border border-[#939393] w-209.25 h-100 rounded-lg">
                {
                    (selected == "dashboard1")?<img className="rounded-lg w-full h-full object-cover" src={img1} alt="" />:
                    (selected == "dashboard2")?<img className="rounded-lg w-full h-full object-cover" src={img2} alt="" />:
                    (selected == "dashboard3")?<img className="rounded-lg w-full h-full object-cover" src={img3} alt="" />:
                    (selected == "dashboard4")?<img className="rounded-lg w-full h-full object-cover" src={img4} alt="" />:
                    (selected == "dashboard5")?<img className="rounded-lg w-full h-full object-cover" src={img5} alt="" />:
                    (selected == "dashboard6")?<img className="rounded-lg w-full h-full object-cover" src={img1} alt="" />:
                    (selected == "dashboard7")?<img className="rounded-lg w-full h-full object-cover" src={img3} alt="" />:
                    null
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesList;
