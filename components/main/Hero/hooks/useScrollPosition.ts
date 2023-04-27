import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";

export interface UseScrollPositionOptions {
  delay?: number;
}

export const useScrollPosition = (params: UseScrollPositionOptions = {}) => {
  const { delay = 500 } = params;
  const [scrollY, setScrollY] = useState<number>();

  useEffect(() => {
    const updatePosition = () => {
      setScrollY(window.scrollY);
    };

    const scrollListener = throttle(delay, updatePosition);

    scrollListener();
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, [delay]);

  return [scrollY, setScrollY];
};
