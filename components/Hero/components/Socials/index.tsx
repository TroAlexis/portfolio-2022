import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import clsx from "clsx";
import GithubIcon from "assets/svg/github.svg";
import LinkedInIcon from "assets/svg/linkedin.svg";
import InstagramIcon from "assets/svg/instagram.svg";

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
