import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import React, { RefObject, useCallback, useEffect } from "react";

import { setDocumentCSSProperty } from "@/utils/dom";

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
    ifTarget((target: T) => {
      disableBodyScroll(target);
      setDocumentCSSProperty("overflow", "hidden");
    });

    return () => {
      setDocumentCSSProperty("overflow", "");
      clearAllBodyScrollLocks();
    };
  }, [ifTarget]);

  return null;
};
