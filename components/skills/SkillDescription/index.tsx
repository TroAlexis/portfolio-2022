import clsx from "clsx";
import styles from "components/skills/SkillDescription/index.module.scss";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC, ReactNode } from "react";

interface Props extends ComponentProps<"ul"> {
  description: ReactNode[];
}

export const SkillDescription: FC<Props> = ({
  description,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {description.map((paragraph, index) => (
        <li key={index} className={styles.item}>
          <Text as={"span"}>{paragraph};</Text>
        </li>
      ))}
    </ul>
  );
};
