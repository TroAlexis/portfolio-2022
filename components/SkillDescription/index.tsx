import clsx from "clsx";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"ul"> {
  description: string[];
}

export const SkillDescription: FC<Props> = ({
  description,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {description.map((paragraph) => (
        <li key={paragraph}>
          <Text as={"span"}>{paragraph};</Text>
        </li>
      ))}
    </ul>
  );
};
