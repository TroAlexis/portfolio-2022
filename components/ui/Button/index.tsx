import styles from "./index.module.scss";
import { PolymorphicComponentProps } from "@/types/types";
import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";

export type ButtonProps<T extends ElementType> = PolymorphicComponentProps<T> &
  ComponentPropsWithoutRef<T>;

const DEFAULT_TAG = "button";

export const Button = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || DEFAULT_TAG;
  const classes = clsx(className, styles.button);

  return <Component className={classes} {...props} />;
};
