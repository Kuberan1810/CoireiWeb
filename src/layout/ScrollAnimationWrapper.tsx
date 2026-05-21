import type { ReactNode } from "react";
import useScrollAnimations from "../hooks/useScrollAnimations";

interface Props {
    children: ReactNode;
}

const ScrollAnimationWrapper = ({ children }: Props) => {
    useScrollAnimations();
    return <>{children}</>;
};

export default ScrollAnimationWrapper;
