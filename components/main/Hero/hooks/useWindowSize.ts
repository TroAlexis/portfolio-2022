import { useCallback, useEffect, useState } from "react";

export function useWindowSize(): {
  height: number | undefined;
  width: number | undefined;
} {
  const isClient = typeof window === "object";

  const getSize = useCallback((): {
    height: number | undefined;
    width: number | undefined;
  } => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    function handleResize(): void {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
