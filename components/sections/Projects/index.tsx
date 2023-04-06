import { projectCardsMap } from "assets/data/projects";
import clsx from "clsx";
import { MainSection } from "components/MainSection";
import { ProjectList } from "components/ProjectList";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.projects;
const projects = Object.values(projectCardsMap);

export const ProjectsSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className);
  return (
    <MainSection
      section={section}
      className={classes}
      heading={"Projects"}
      {...props}
    >
      <ProjectList items={projects} />
    </MainSection>
  );
};
