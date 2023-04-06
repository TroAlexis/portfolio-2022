import { socials } from "assets/data/socials";
import clsx from "clsx";
import { FooterLink } from "components/main/Footer/components/Link";
import styles from "components/main/Footer/components/LinkList/index.module.scss";
import React, { ComponentProps, FC } from "react";

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
