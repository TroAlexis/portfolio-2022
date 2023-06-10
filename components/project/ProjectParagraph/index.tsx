import clsx from "clsx";
import { Heading } from "components/ui/Heading";
import { Paragraphs } from "components/ui/Paragraphs";
import Image from "next-image-export-optimizer";
import React, { ComponentProps, FC } from "react";

import { ProjectParagraph as ProjectParagraphType } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"article"> {
  paragraph: ProjectParagraphType;
}

export const ProjectParagraph: FC<Props> = ({
  className,
  paragraph,
  ...props
}) => {
  const { description, image, direction, title } = paragraph;
  const classes = clsx(className, styles.wrapper, {
    [styles[`${direction}`]]: direction,
  });

  return (
    <article className={classes} {...props}>
      <Heading as={"h2"} preset={"h3"} className={styles.heading}>
        {title}
      </Heading>
      <div className={styles.description}>
        <Paragraphs items={description} />
      </div>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} className={styles.image} />
      </div>
    </article>
  );
};
