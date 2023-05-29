import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

import { PolymorphicComponentProps } from "@/types/types";

import styles from "./index.module.scss";

export type ButtonProps<T extends ElementType> = PolymorphicComponentProps<T> &
  ComponentPropsWithoutRef<T> & {
    outline?: boolean;
    icon?: boolean;
  };

const DEFAULT_TAG = "button";

export const Button = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  outline,
  icon,
  ...props
}: ButtonProps<T>) => {
  const Component = as || DEFAULT_TAG;

  const modifiers = {
    [styles.isOutline]: outline,
    [styles.isIcon]: icon,
  };
  const classes = clsx(className, styles.button, modifiers);

  return <Component className={classes} {...props} />;
};
