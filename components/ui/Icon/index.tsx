import clsx from "clsx";
import { ComponentProps, FC, ReactNode } from "react";

import styles from "./index.module.scss";

export interface IconProps extends ComponentProps<"span"> {
  children: ReactNode;
}

export const Icon: FC<IconProps> = ({ children, className, ...props }) => {
  const classes = clsx(styles.icon, className);
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
