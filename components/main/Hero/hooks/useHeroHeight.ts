import headerStyles from "components/main/Header/index.module.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { debounce } from "throttle-debounce";

import { setDocumentCSSProperty } from "@/utils/dom";

const getVh = () => {
  return window.innerHeight * 0.01;
};

const getHeaderHeight = () => {
  const header = document.querySelector(`.${headerStyles.wrapper}`);
  const headerHeight = header?.scrollHeight || 0;

  return headerHeight * 0.01;
};

const setVhProperty = (lastVh: MutableRefObject<number | null>) => {
  const vh = getVh();
  const headerHeight = getHeaderHeight();
  const heroHeight = vh - headerHeight;

  setDocumentCSSProperty("--header-height", `${headerHeight}px`);
  if (!lastVh.current || Math.abs(lastVh.current - vh) > 1) {
    setDocumentCSSProperty("--vh", `${vh}px`);
    setDocumentCSSProperty("--hero-height", `${heroHeight}px`);

    lastVh.current = vh;
  }
};

export const useHeroHeight = () => {
  const lastVh = useRef<number>(null);
  useEffect(() => {
    setVhProperty(lastVh);

    const listener = debounce(50, () => setVhProperty(lastVh));

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
};
