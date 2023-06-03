import { projects } from "assets/data/projects";
import clsx from "clsx";
import { MainSection } from "components/main/MainSection";
import { ProjectList } from "components/project/ProjectCardList";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.projects;

export const ProjectsSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className);
  return (
    <MainSection
      section={section}
      className={classes}
      heading={"Personal Projects"}
      {...props}
    >
      <ProjectList items={projects} />
    </MainSection>
  );
};
