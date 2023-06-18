import clsx from "clsx";
import styles from "components/main/Footer/components/Link/index.module.scss";
import { Icon } from "components/ui/Icon";
import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { Social } from "@/types/socials";

export interface FooterLinkProps
  extends Omit<ComponentProps<typeof Link>, "icon">,
    Social {}

export const FooterLink: FC<FooterLinkProps> = ({
  icon: SvgIcon,
  label,
  className,
  link,
  ...props
}) => {
  const classes = clsx(className, styles.wrapper);
  return (
    <Link plain className={classes} {...props}>
      <Link<"span"> is={"span"} className={styles.iconWrapper} plain icon>
        <Icon className={styles.icon}>
          <SvgIcon />
        </Icon>
      </Link>
      <Link<"span"> is={"span"}>
        <Text
          as={"span"}
          className={styles.text}
          family={visueltPro}
          size={"xs"}
        >
          {label}
        </Text>
      </Link>
    </Link>
  );
};
