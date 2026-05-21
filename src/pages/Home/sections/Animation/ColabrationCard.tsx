
import type { JSX } from "react";
import Lottie from "lottie-react";

import collaborateLottie from "../../../../assets/js/colabration.json";

export default function CollaborateCard(): JSX.Element {
  return (
    <section className=" flex items-end  h-92.5">

      {/* LEFT – LOTTIE */}
      <div className="">
        <Lottie
          animationData={collaborateLottie}
          loop
          autoplay
          
          className="w-full h-full "
        />
      </div>


      
    </section>
  );
}
