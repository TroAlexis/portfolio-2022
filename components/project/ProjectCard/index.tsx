import clsx from "clsx";
import styles from "components/project/ProjectCard/index.module.scss";
import { ProjectLinkSet } from "components/project/ProjectLinkSet";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import Image from "next-image-export-optimizer";
import React, { ComponentProps, FC } from "react";

import { ProjectCardInfo } from "@/types/project";

interface Props
  extends Omit<ComponentProps<"article">, "id">,
    ProjectCardInfo {}

export const ProjectCard: FC<Props> = ({
  className,
  name,
  description,
  cover,
  links,
  ...props
}) => {
  const classes = clsx(styles.card, className);

  const hasLink = !!links;

  return (
    <article className={classes} {...props}>
      <Image
        src={cover}
        loading={"lazy"}
        width={540}
        height={360}
        alt={name}
        className={styles.image}
      />
      <Heading as={"h3"} preset={"h3"} className={styles.heading}>
        {name}
      </Heading>
      <Text size={"sm"} as={"p"} className={styles.description}>
        {description}
      </Text>
      {hasLink && (
        <ProjectLinkSet links={links} className={styles.links} size={"xs"} />
      )}
    </article>
  );
};
