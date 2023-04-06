import clsx from "clsx";
import { ProjectLinkSet } from "components/project/ProjectLinkSet";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import Image from "next/image";
import React, { ComponentProps, FC } from "react";

import { ProjectCardInfo } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"article">, ProjectCardInfo {}

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
      <Image src={cover} alt={name} className={styles.image} />
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
