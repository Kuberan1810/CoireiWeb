
import type { JSX } from "react";
import { OptimizedLottie } from "../../../../component/OptimizedLottie";

import collaborateLottie from "../../../../assets/js/colabration.json";

export default function CollaborateCard(): JSX.Element {
  return (
    <section className=" flex items-end  h-92.5">

      {/* LEFT – LOTTIE */}
      <div className="">
        <OptimizedLottie
          animationData={collaborateLottie}
          loop
          className="w-full h-full "
        />
      </div>


      
    </section>
  );
}
