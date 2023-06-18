import clsx from "clsx";
import { ProjectHeadStack } from "components/project/ProjectHead/components/Stack";
import { ProjectLinkSet } from "components/project/ProjectLinkSet";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import { Paragraphs } from "components/ui/Paragraphs";
import Image from "next-image-export-optimizer";
import React, { ComponentProps, FC } from "react";

import { Project } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"div"> {
  project: Project;
}

export const ProjectHead: FC<Props> = ({ project, className, ...props }) => {
  const { title, image, alt, description, links } = project;

  const classes = clsx(className, styles.head);

  return (
    <Container className={classes} {...props}>
      <Heading as={"h1"} preset={"h2"} hr className={styles.title}>
        {title}
      </Heading>

      {image && (
        <Image
          src={image}
          alt={alt}
          width={800}
          height={500}
          priority
          className={styles.image}
        />
      )}

      <Paragraphs items={description} />

      <ProjectHeadStack project={project} className={styles.stack} />

      {links && <ProjectLinkSet links={links} size={"md"} />}
    </Container>
  );
};
