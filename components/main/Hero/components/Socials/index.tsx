import { socials } from "assets/data/socials";
import clsx from "clsx";
import styles from "components/main/Hero/components/Socials/index.module.scss";
import { Link } from "components/ui/Link";
import React, { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul">;

export const HeroSocials: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.socials);
  return (
    <ul className={classes} {...props}>
      {socials.map(([key, { icon: Icon, link }], index) => {
        return (
          <li className={styles.icon} key={index}>
            <Link href={link} icon>
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
