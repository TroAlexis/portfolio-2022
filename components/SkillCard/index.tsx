import clsx from "clsx";
import { SkillCardIcon } from "components/SkillCard/Icon";
import { Text } from "components/ui/Text";
import React, { ComponentPropsWithoutRef, FC } from "react";

import { visueltPro } from "@/config/next/fonts";
import { Skills } from "@/constants/skills";
import { PolymorphicComponentProps } from "@/types/types";

import styles from "./index.module.scss";

type SkillCardTag = "article" | "button";

export type SkillCardProps<T extends SkillCardTag> =
  PolymorphicComponentProps<T> &
    Omit<ComponentPropsWithoutRef<T>, "onClick"> & {
      icon?: FC;
      label: string;
      id: Skills;
      active?: boolean;
      onClick?: (id: Skills) => unknown;
    };

const DEFAULT_TAG = "article";

export const SkillCard = <T extends SkillCardTag = typeof DEFAULT_TAG>({
  icon,
  label,
  className,
  as,
  onClick,
  id,
  active,
  ...props
}: SkillCardProps<T>) => {
  const classes = clsx(className, styles.card, {
    [styles.active]: active,
  });
  const Component = as || DEFAULT_TAG;

  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <Component className={classes} onClick={handleClick} {...props}>
      {icon && <SkillCardIcon icon={icon} className={styles.icon} />}
      <Text
        size={"xs"}
        family={visueltPro}
        weight={500}
        as={"span"}
        className={styles.label}
      >
        {label}
      </Text>
    </Component>
  );
};
