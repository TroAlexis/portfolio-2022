import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import React, { RefObject, useCallback, useEffect } from "react";

interface Props<T extends HTMLElement> {
  targetRef: RefObject<T>;
}

export const BodyScrollLocker = <T extends HTMLElement>({
  targetRef,
}: Props<T>) => {
  const ifTarget = useCallback(
    (fn: any) => {
      const target = targetRef.current;
      if (target) {
        fn(target);
      }
    },
    [targetRef]
  );

  useEffect(() => {
    const htmlElement = document.documentElement;
    ifTarget((target: T) => {
      disableBodyScroll(target);
      htmlElement.style.overflow = "hidden";
    });

    return () => {
      htmlElement.style.overflow = "";
      clearAllBodyScrollLocks();
    };
  }, [ifTarget]);

  return null;
};
