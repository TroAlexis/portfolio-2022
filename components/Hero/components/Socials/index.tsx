import GithubIcon from "assets/svg/github.svg";
import InstagramIcon from "assets/svg/instagram.svg";
import LinkedInIcon from "assets/svg/linkedin.svg";
import clsx from "clsx";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

type Props = ComponentProps<"ul">;

export const HeroSocials: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.socials);
  return (
    <ul className={classes} {...props}>
      {[GithubIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => {
        return (
          <li className={styles.icon} key={index}>
            <Icon />
          </li>
        );
      })}
    </ul>
  );
};
