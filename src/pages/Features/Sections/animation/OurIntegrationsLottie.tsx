import Lottie from "lottie-react";
import integrationsLottie from "../../../../assets/js/integrations.json";

export default function OurIntegrationsLottie() {
    return (
        <div className="lottie-100 w-full h-full flex items-center justify-center">
            <Lottie
                animationData={integrationsLottie}
                loop
                autoplay
                className="w-full h-full"
            />
        </div>
    );
}
