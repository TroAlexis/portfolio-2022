import styles from "./index.module.scss";
import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { PolymorphicComponentProps } from "@/types/types";
import { Size } from "@/types/ui";
import clsx from "clsx";
import { roboto } from "@/config/next/fonts";
import { NextFont } from "@next/font/dist/types";

type Tag = "div" | "p" | "span";

type Props<T extends Tag> = PolymorphicComponentProps<T> &
  PropsWithChildren<ComponentPropsWithoutRef<T>> & {
    size?: Size;
    weight?: number;
    family?: NextFont;
    accent?: boolean;
  };

const DEFAULT_TAG = "div";

export const Text = <T extends Tag = typeof DEFAULT_TAG>({
  as,
  family = roboto,
  weight = 400,
  size = "sm",
  accent,
  className,
  ...props
}: Props<T>) => {
  const Component = as || DEFAULT_TAG;

  const modifiers = {
    [styles[`size-${size}`]]: !!size,
    [styles[`weight-${weight}`]]: !!weight,
    [styles.accent]: accent,
  };
  const classes = clsx(className, styles.text, family.className, modifiers);

  return <Component className={classes} {...props} />;
};
