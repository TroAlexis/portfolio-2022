import { projectMap } from "assets/data/projects";
import clsx from "clsx";
import { ProjectList } from "components/ProjectList";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.projects;
const projects = Object.values(projectMap);

export const ProjectsSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className);
  return (
    <section id={section.id} className={classes} {...props}>
      <Container>
        <Heading hr preset={"h2"} as={"h2"} className={styles.heading}>
          Projects
        </Heading>
        <ProjectList items={projects} />
      </Container>
    </section>
  );
};
