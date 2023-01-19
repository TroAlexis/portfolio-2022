import clsx from "clsx";
import { Heading } from "components/ui/Heading";
import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import Image from "next/image";
import React, { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { Project } from "@/types/data";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"article">, Project {}

export const ProjectCard: FC<Props> = ({
  className,
  name,
  description,
  cover,
  link,
  code,
  ...props
}) => {
  const classes = clsx(styles.card, className);

  const hasLink = [link, code].some(Boolean);

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
        <ul className={styles.links}>
          {link && (
            <li>
              <Text as={"span"} accent family={visueltPro} size={"xs"}>
                <Link href={link} className={styles.link}>
                  read more
                </Link>
              </Text>
            </li>
          )}
          {code && (
            <li>
              <Text as={"span"} family={visueltPro} size={"xs"}>
                <Link href={code} className={styles.link}>
                  view code
                </Link>
              </Text>
            </li>
          )}
        </ul>
      )}
    </article>
  );
};
