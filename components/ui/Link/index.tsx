import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import NextLink from "next/link";
import clsx from "clsx";

type Props = ComponentProps<typeof NextLink>;

export const Link: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.link);
  return <NextLink className={classes} {...props} />;
};
