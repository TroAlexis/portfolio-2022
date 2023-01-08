import { ComponentProps, FC } from "react";
import { HeaderLink, HeaderLinkProps } from "components/Header/components/Link";

import styles from "./index.module.scss";
import clsx from "clsx";

export type HeaderLinksProps = ComponentProps<"ul">;

const links: HeaderLinkProps[] = [
  { id: "about", href: "#", children: "About me" },
  { id: "skills", href: "#", children: "Skills" },
  { id: "projects", href: "#", children: "Projects" },
  { id: "experience", href: "#", children: "Experience" },
];

export const HeaderLinks: FC<HeaderLinksProps> = ({ className, ...props }) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {links.map(({ id, ...link }) => (
        <HeaderLink {...link} key={id} />
      ))}
    </ul>
  );
};
