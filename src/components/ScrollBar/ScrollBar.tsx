import "./ScrollBar.css";

import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface ScrollBarProps {
  title: string;
  percentage: number;
}

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const ScrollBar: FC<ScrollBarProps> = ({ title, percentage }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the animation when the component mounts
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${percentage}%`, // Animate to the percentage width
        duration: 2, // Duration of the animation
        scrollTrigger: {
          trigger: barRef.current,
          start: "top center", // Trigger when the top of the bar reaches the center of the viewport
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });
    }
  }, [percentage]); // Re-run the effect if the percentage changes

  return (
    <div>
      <p className="bar-title">{title}</p>
      <div className="bar-graph">
        <div ref={barRef} className="bar">
          {percentage}%
        </div>
      </div>
    </div>
  );
};
export default ScrollBar;
