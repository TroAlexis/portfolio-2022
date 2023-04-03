import { timeline } from "assets/data/experience";
import clsx from "clsx";
import { MainSection } from "components/MainSection";
import { Timeline } from "components/ui/Timeline";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.experience;

export const ExperienceSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className);
  return (
    <MainSection
      section={section}
      heading={"Experience"}
      className={classes}
      {...props}
    >
      <Timeline items={timeline} />
    </MainSection>
  );
};
