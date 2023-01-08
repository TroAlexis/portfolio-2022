import { ComponentProps, FC } from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import clsx from "clsx";

export type HeaderLinkProps = ComponentProps<typeof Link>;

export const HeaderLink: FC<HeaderLinkProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.link);

  return (
    <Link className={classes} {...props}>
      <span>{children}</span>
    </Link>
  );
};
