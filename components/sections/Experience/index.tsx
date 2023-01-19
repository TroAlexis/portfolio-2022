import { timeline } from "assets/data/experience";
import clsx from "clsx";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import { Timeline } from "components/ui/Timeline";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.experience;

export const ExperienceSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className);
  return (
    <section id={section.id} className={classes} {...props}>
      <Container>
        <Heading hr preset={"h2"} as={"h2"} className={styles.heading}>
          Experience
        </Heading>
        <Timeline items={timeline} />
      </Container>
    </section>
  );
};
