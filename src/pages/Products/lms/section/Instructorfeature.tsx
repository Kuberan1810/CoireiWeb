import createclass from "../../../../assets/images/products/createclass.svg";
import createassignment from "../../../../assets/images/products/createassignment.svg";
const cards = [
    {
        img: createclass,
        title: "New Class",
        desc: "Create a new batch or session. Set class name, batch ID, schedule time, and date. Launch in seconds",
        highlighted: false,
    },
    // {
    //     img: instructorImg,
    //     title: "New courses",
    //     desc: "Build a new course. Add course ID, title, description, duration. Auto-generated batch ID included.",
    //     highlighted: false,
    // },
    // {
    //     img: instructorImg,
    //     title: "New student",
    //     desc: "Enroll students manually. Select course, generate student ID, add name and email, assign to a batch.",
    //     highlighted: false,
    // },
    {
        img: createassignment,
        title: "Assignment",
        desc: "Create tasks for students. Select course, batch, and module. Track submissions and progress.",
        highlighted: false,
    },
];

const Instructorfeature = () => {
    return (
        <section className="relative text-white bg-[#161616] py-16 md:py-24 px-6 sm:px-10 md:px-15 lg:px-20 overflow-hidden">
            <div className="">

                <div className="flex flex-col items-center text-center mb-16">

                    <h2
                        data-ns-animate
                        data-delay="0.1"
                        className="text-[36px] md:text-[50px] lg:text-[60px] font-medium leading-[1.1]  text-[#E3E3E0] tracking-tight"
                    >
                        Everything you need to manage your teaching
                        <br />
                        right from your dashboard
                    </h2>
                </div>

                <div
                    data-ns-animate
                    data-delay="0.15"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {cards.map((card, i) => (
                        <div key={i} className="group flex flex-col gap-6">

                            <div className="relative rounded-[24px] w-full overflow-hidden cursor-pointer bg-[#1D1D1D] hover:bg-[#363636]/80 transition-all duration-500">

                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-auto aspect-[300/256] pt-8 pl-8 md:pt-[44px] md:pl-[44px] object-cover  
      transition-all duration-500 
      group-hover:scale-105 group-hover:rounded-xl"
                                />

                                {/* Optional overlay effect */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                            </div>

                            <div className="flex flex-col gap-3 px-4 transition-all duration-300 group-hover:translate-y-[-4px]">
                                <h3 className="text-lg lg:text-[24px] font-medium text-white">
                                    {card.title}
                                </h3>
                                <p className="text-base lg:text-[18px] text-white/70">
                                    {card.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Instructorfeature;
