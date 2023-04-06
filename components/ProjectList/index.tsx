import clsx from "clsx";
import { ProjectCard } from "components/ProjectCard";
import React, { ComponentProps, FC } from "react";

import { ProjectCardInfo } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"ul"> {
  items: ProjectCardInfo[];
}

export const ProjectList: FC<Props> = ({ className, items, ...props }) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {items.map((item) => (
        <ProjectCard key={item.name} className={styles.item} {...item} />
      ))}
    </ul>
  );
};
