import { useState, useEffect } from "react";

export default function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const pastThreshold = currentY > threshold;

      setScrolled(pastThreshold);

      if (currentY <= threshold) {
        setHidden(false);
      } else if (currentY > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, hidden };
}
