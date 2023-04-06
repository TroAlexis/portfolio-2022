import { socials } from "assets/data/socials";
import clsx from "clsx";
import { FooterLink } from "components/Footer/components/Link";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"ul"> {}

export const FooterLinkList: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {socials.map(([key, social]) => (
        <li key={key} className={styles.item}>
          <FooterLink {...social} href={social.link} />
        </li>
      ))}
    </ul>
  );
};
