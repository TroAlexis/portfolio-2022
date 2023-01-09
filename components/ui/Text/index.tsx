import styles from "./index.module.scss";
import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { PolymorphicComponentProps } from "@/types/types";
import { Size } from "@/types/ui";
import clsx from "clsx";
import { roboto } from "@/config/next/fonts";
import { NextFont } from "@next/font/dist/types";

export type TextTag =
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextProps<T extends TextTag> = PolymorphicComponentProps<T> &
  PropsWithChildren<ComponentPropsWithoutRef<T>> & {
    size?: Size;
    weight?: number;
    family?: NextFont;
    accent?: boolean;
  };

const DEFAULT_TAG = "div";

export const Text = <T extends TextTag = typeof DEFAULT_TAG>({
  as,
  family = roboto,
  weight,
  size,
  accent,
  className,
  ...props
}: TextProps<T>) => {
  const Component = as || DEFAULT_TAG;

  const modifiers = {
    [styles[`size-${size}`]]: !!size,
    [styles[`weight-${weight}`]]: !!weight,
    [styles.accent]: accent,
  };
  const classes = clsx(className, styles.text, family.className, modifiers);

  return <Component className={classes} {...props} />;
};
