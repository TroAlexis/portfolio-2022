import { ComponentProps, FC } from "react";
import { HeaderLink, HeaderLinkProps } from "components/Header/components/Link";

import styles from "./index.module.scss";
import clsx from "clsx";
import { APP_SECTIONS } from "@/config/app/sections";

export type HeaderLinksProps = ComponentProps<"ul">;

const getSectionProps = (
  name: keyof typeof APP_SECTIONS,
  props: Partial<HeaderLinkProps>
) => {
  const section = APP_SECTIONS[name];

  return {
    ...props,
    id: section.id,
    href: `#${section.id}`,
  };
};

const links: HeaderLinkProps[] = [
  getSectionProps("about", { children: "About me" }),
  getSectionProps("skills", { children: "Skills" }),
  getSectionProps("projects", { children: "Projects" }),
  getSectionProps("experience", { children: "Experience" }),
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
