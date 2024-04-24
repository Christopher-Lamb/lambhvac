import React from "react";

import { useInView } from "react-intersection-observer";

interface AnimationComponentProps {
  animationClassName: string;
  triggerOnce?: boolean;
  invisible?: boolean;
  children: React.ReactNode;
  threshold?: number;
}

const AnimatedComponent: React.FC<AnimationComponentProps> = ({ animationClassName, threshold = 0.5, children, triggerOnce = true, invisible = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce, // Animation will trigger only once
    threshold: threshold, // Adjust this value based on when you want the element to trigger
  });

  return (
    <div ref={ref} className={inView ? animationClassName : invisible ? "invisible" : ""}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
