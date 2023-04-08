import { ProjectParagraph } from "components/project/ProjectParagraph";
import { Container } from "components/ui/Container";
import React, { ComponentProps, FC } from "react";

import { Project } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<typeof Container> {
  project: Project;
}

export const ProjectBody: FC<Props> = ({ project, children, ...props }) => {
  const { paragraphs } = project;
  return (
    <Container>
      {paragraphs?.map((paragraph) => (
        <ProjectParagraph
          key={paragraph.title}
          paragraph={paragraph}
          className={styles.paragraph}
        />
      ))}

      {children}
    </Container>
  );
};
