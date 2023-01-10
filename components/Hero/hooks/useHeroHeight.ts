import { useEffect } from "react";
import headerStyles from "components/Header/index.module.scss";
import { debounce } from "debounce";

const getVh = () => {
  return window.innerHeight * 0.01;
};

const getHeaderHeight = () => {
  const header = document.querySelector(`.${headerStyles.wrapper}`);
  const headerHeight = header?.scrollHeight || 0;

  return headerHeight * 0.01;
};

const setVhProperty = () => {
  const vh = getVh();
  const headerHeight = getHeaderHeight();
  const heroHeight = vh - headerHeight;

  document.documentElement.style.setProperty(
    "--hero-height",
    `${heroHeight}px`
  );
};

export const useHeroHeight = () => {
  useEffect(() => {
    setVhProperty();

    const listener = debounce(setVhProperty, 50);

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
};
