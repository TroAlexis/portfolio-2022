import { socials } from "assets/data/socials";
import clsx from "clsx";
import styles from "components/main/Hero/components/Socials/index.module.scss";
import { Icon } from "components/ui/Icon";
import { Link } from "components/ui/Link";
import React, { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul">;

export const HeroSocials: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.socials);
  return (
    <ul className={classes} {...props}>
      {socials.map(([key, { icon: SvgIcon, link, label }], index) => {
        return (
          <li key={index}>
            <Link href={link} icon aria-label={label}>
              <Icon>
                <SvgIcon />
              </Icon>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
