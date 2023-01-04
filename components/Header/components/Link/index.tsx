import { ComponentProps, FC } from "react";
import Link from "next/link";
import { clsx, Text } from "@mantine/core";

import styles from "./index.module.scss";

export type HeaderLinkProps = ComponentProps<typeof Link>;

export const HeaderLink: FC<HeaderLinkProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.link);

  return (
    <Link className={classes} {...props}>
      <Text span fz={"xs"} lts={0.5} fw={400}>
        {children}
      </Text>
    </Link>
  );
};
