import clsx from "clsx";
import NextLink from "next/link";
import React, { ComponentProps, ElementType } from "react";

import styles from "./index.module.scss";

type Props<T> = { is?: T; plain?: boolean } & ComponentProps<
  T extends ElementType ? T : typeof NextLink
>;

export const Link = <T extends any>({
  className,
  is,
  plain,
  ...props
}: Props<T>) => {
  const classes = clsx(className, styles.link, plain && styles.plain);
  const Component = (is as ElementType) || NextLink;
  return <Component className={classes} {...props} />;
};
