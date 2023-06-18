import clsx from "clsx";
import {
  HeaderLink,
  HeaderLinkProps,
} from "components/main/Header/components/Link";
import styles from "components/main/Header/components/Links/index.module.scss";
import { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

export type HeaderLinksProps = ComponentProps<"ul"> & {
  onLinkClick?: (e: Event) => unknown;
};

const getSectionProps = (
  name: keyof typeof APP_SECTIONS,
  props: Partial<HeaderLinkProps>
) => {
  const section = APP_SECTIONS[name];

  return {
    ...props,
    id: section.id,
    href: `/#${section.id}`,
  };
};

const links: HeaderLinkProps[] = [
  getSectionProps("about", { children: "About me" }),
  getSectionProps("skills", { children: "Skills" }),
  getSectionProps("projects", { children: "Projects" }),
  getSectionProps("experience", { children: "Experience" }),
];

export const HeaderLinks: FC<HeaderLinksProps> = ({
  className,
  onLinkClick,
  ...props
}) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {links.map(({ id, ...link }) => (
        <li key={id}>
          <HeaderLink {...link} onClick={onLinkClick} />
        </li>
      ))}
    </ul>
  );
};
