import clsx from "clsx";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"div"> {
  open?: boolean;
}

const Burger: FC<Props> = ({ className, open, ...props }) => {
  const classes = clsx(className, styles.wrapper, {
    [styles.active]: open,
  });
  return (
    <div className={classes} {...props}>
      <svg className={styles.burger} viewBox="0 0 100 100">
        <path className={styles.line} d="M 30,35 H 70 " />
        <path className={styles.line} d="M 50,50 H 30 L 34,32" />
        <path className={styles.line} d="M 50,50 H 70 L 66,68" />
        <path className={styles.line} d="M 30,65 H 70 " />
      </svg>
      <svg className={styles.cross} viewBox="0 0 100 100">
        <path className={styles.line} d="M 34,32 L 66,68" />
        <path className={styles.line} d="M 66,32 L 34,68" />
      </svg>
    </div>
  );
};

export default Burger;
