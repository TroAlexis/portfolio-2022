import clsx from "clsx";
import styles from "components/project/ProjectCard/index.module.scss";
import { ProjectLinkSet } from "components/project/ProjectLinkSet";
import { Heading } from "components/ui/Heading";
import { Link } from "components/ui/Link";
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
  const [firstLink] = links || [];

  return (
    <article className={classes} {...props}>
      <Link href={firstLink.href} plain className={styles.imageWrapper}>
        <Image
          src={cover}
          loading={"lazy"}
          width={540}
          height={360}
          alt={description}
          className={styles.image}
        />
      </Link>
      <Link href={firstLink.href} plain className={styles.headingWrapper}>
        <Heading as={"h3"} preset={"h3"} className={styles.heading}>
          {name}
        </Heading>
      </Link>
      <Text size={"sm"} as={"p"} className={styles.description}>
        {description}
      </Text>
      {hasLink && (
        <ProjectLinkSet links={links} className={styles.links} size={"xs"} />
      )}
    </article>
  );
};
