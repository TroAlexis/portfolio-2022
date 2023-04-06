import clsx from "clsx";
import styles from "components/main/Footer/components/Link/index.module.scss";
import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { Social } from "@/types/socials";

export interface FooterLinkProps extends ComponentProps<typeof Link>, Social {}

export const FooterLink: FC<FooterLinkProps> = ({
  icon: Icon,
  label,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.wrapper);
  return (
    <Link plain className={classes} {...props}>
      <Icon className={styles.icon} />
      <Link<"span"> is={"span"}>
        <Text as={"span"} family={visueltPro} size={"xs"}>
          {label}
        </Text>
      </Link>
    </Link>
  );
};