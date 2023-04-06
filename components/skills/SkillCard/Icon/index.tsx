import clsx from "clsx";
import styles from "components/skills/SkillCard/Icon/index.module.scss";
import React, { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"span"> {
  icon: FC<ComponentProps<"svg">>;
}

export const SkillCardIcon: FC<Props> = ({
  icon: Icon,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.wrapper);
  return (
    <span className={classes} {...props}>
      <Icon className={styles.icon} />
    </span>
  );
};
