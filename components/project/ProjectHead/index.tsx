import clsx from "clsx";
import { ProjectHeadStack } from "components/project/ProjectHead/components/Stack";
import { ProjectLinkSet } from "components/project/ProjectLinkSet";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import Image from "next-image-export-optimizer";
import React, { ComponentProps, FC } from "react";

import { Project } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"div"> {
  project: Project;
}

export const ProjectHead: FC<Props> = ({ project, className, ...props }) => {
  const { title, image, description, links } = project;

  const classes = clsx(className, styles.head);

  return (
    <Container className={classes} {...props}>
      <Heading as={"h1"} preset={"h2"} hr className={styles.title}>
        {title}
      </Heading>

      {image && <Image src={image} alt={title} className={styles.image} />}

      {description.map((paragraph, index) => (
        <Text
          as={"p"}
          key={paragraph + index}
          size={"sm"}
          className={styles.description}
        >
          {paragraph}
        </Text>
      ))}

      <ProjectHeadStack project={project} className={styles.stack} />

      {links && <ProjectLinkSet links={links} size={"md"} />}
    </Container>
  );
};
