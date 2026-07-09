import type { JSX } from "react";
import { OptimizedLottie } from "../../../../component/OptimizedLottie";

import uploadLottie from "../../../../assets/js/intelligence.json";

export default function Intelligence(): JSX.Element {
    return (
        <div className="ai-design-image-box _01 w-full h-full flex items-center justify-center">
            <div className="lottie-100 w-full h-full">
                <OptimizedLottie
                    animationData={uploadLottie}
                    loop
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
