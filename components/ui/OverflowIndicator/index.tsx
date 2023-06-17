import clsx from "clsx";
import { useOverflow } from "components/main/Hero/hooks/useOverflow";
import React, { Ref, useMemo } from "react";

import styles from "./index.module.scss";

export interface OverflowIndicatorProps<T extends HTMLElement> {
  children: (context: OverflowIndicatorContext<T>) => JSX.Element;
}

interface OverflowIndicatorContext<T extends HTMLElement> {
  containerClassName: string;
  containerRef: Ref<T>;
}

export const OverflowIndicator = <T extends HTMLElement>({
  children,
}: OverflowIndicatorProps<T>): JSX.Element => {
  const { ref, refYOverflowing, refYScrollEnd } = useOverflow<T>();

  const context: OverflowIndicatorContext<T> = useMemo(
    () => ({
      containerRef: ref,
      containerClassName: clsx(styles.container, {
        [styles.overflowing]: refYOverflowing && !refYScrollEnd,
      }),
    }),
    [ref, refYOverflowing, refYScrollEnd]
  );

  return children(context);
};
