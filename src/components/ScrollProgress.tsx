import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollProgressProps {
  containerRef: React.RefObject<HTMLElement>;
}

const ScrollProgress = ({ containerRef }: ScrollProgressProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    container.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => {
      container.removeEventListener("scroll", updateScrollProgress);
    };
  }, [containerRef]);

  return (
    <div className="absolute top-0 left-0 right-0 h-1 bg-muted z-50 pointer-events-none">
      <motion.div
        className="h-full bg-primary"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollProgress;
