import { ProjectParagraph } from "components/project/ProjectParagraph";
import { Container } from "components/ui/Container";
import React, { FC } from "react";

import { Project } from "@/types/project";

import styles from "./index.module.scss";

interface Props {
  project: Project;
}

export const ProjectBody: FC<Props> = ({ project }) => {
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
    </Container>
  );
};
