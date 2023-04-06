import clsx from "clsx";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { Project } from "@/types/project";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"div"> {
  project: Project;
}

export const ProjectHeadStack: FC<Props> = ({
  project,
  className,
  ...props
}) => {
  const { stack } = project;
  const classes = clsx(className, styles.wrapper);
  return (
    <Text className={classes} {...props}>
      <Text
        as={"span"}
        family={visueltPro}
        size={"md"}
        weight={700}
        className={styles.stack}
      >
        THE STACK:
      </Text>
      <ul className={styles.list}>
        {stack.map((item) => (
          <li key={item} className={styles.item}>
            <Text as={"span"} size={"md"} weight={500}>
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </Text>
  );
};
