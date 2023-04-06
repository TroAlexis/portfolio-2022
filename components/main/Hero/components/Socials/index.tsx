import { socials } from "assets/data/socials";
import clsx from "clsx";
import styles from "components/main/Hero/components/Socials/index.module.scss";
import React, { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul">;

export const HeroSocials: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.socials);
  return (
    <ul className={classes} {...props}>
      {socials.map(([key, { icon: Icon }], index) => {
        return (
          <li className={styles.icon} key={index}>
            <Icon />
          </li>
        );
      })}
    </ul>
  );
};
