import clsx from "clsx";
import NextLink from "next/link";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

type Props = ComponentProps<typeof NextLink>;

export const Link: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.link);
  return <NextLink className={classes} {...props} />;
};
