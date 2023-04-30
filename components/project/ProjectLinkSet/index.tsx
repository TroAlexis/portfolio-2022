import clsx from "clsx";
import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { ProjectLink } from "@/types/project";
import { Size } from "@/types/ui";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"ul"> {
  links: ProjectLink[];
  size?: Size;
}

export const ProjectLinkSet: FC<Props> = ({
  links,
  size,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.links);

  return (
    <ul className={classes} {...props}>
      {links.map(({ href, label, accent }, index) => (
        <li key={href + index}>
          <Text
            as={"span"}
            accent={accent}
            className={styles.text}
            family={visueltPro}
            size={size}
          >
            <Link href={href} className={styles.link}>
              {label}
            </Link>
          </Text>
        </li>
      ))}
    </ul>
  );
};
