import clsx from "clsx";
import styles from "components/skills/SkillDescription/index.module.scss";
import { Text } from "components/ui/Text";
import React, { ComponentProps, forwardRef, ReactNode } from "react";

interface Props extends ComponentProps<"ul"> {
  description: ReactNode[];
}

export const SkillDescription = forwardRef<HTMLUListElement, Props>(
  ({ description, className, ...props }, ref) => {
    const classes = clsx(className, styles.list);
    return (
      <ul className={classes} ref={ref} {...props}>
        {description.map((paragraph, index) => (
          <li key={index} className={styles.item}>
            <Text as={"span"}>{paragraph};</Text>
          </li>
        ))}
      </ul>
    );
  }
);

SkillDescription.displayName = "SkillDescription";
