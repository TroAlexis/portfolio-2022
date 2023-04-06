import { socials } from "assets/data/socials";
import clsx from "clsx";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

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
