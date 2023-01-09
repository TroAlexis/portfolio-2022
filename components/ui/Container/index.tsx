import styles from "./index.module.scss";
import React, { ComponentProps, ElementType, PropsWithChildren } from "react";
import { PolymorphicComponentProps } from "@/types/types";
import clsx from "clsx";

type Props<T extends ElementType> = PolymorphicComponentProps<T> &
  PropsWithChildren<ComponentProps<T>>;

const DEFAULT_TAG: ElementType = "div";

export const Container = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  ...props
}: Props<T>) => {
  const Component = as || DEFAULT_TAG;
  const classes = clsx(className, styles.container);

  return <Component className={classes} {...props} />;
};
