import { Skills } from "assets/data/skills";
import clsx from "clsx";
import {
  useActive,
  UseHoverOptions,
} from "components/main/Hero/hooks/useActive";
import { SkillCardIcon } from "components/skills/SkillCard/Icon";
import styles from "components/skills/SkillCard/index.module.scss";
import { Text } from "components/ui/Text";
import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";

import { visueltPro } from "@/config/next/fonts";
import { PolymorphicComponentProps } from "@/types/types";

type SkillCardTag = "article" | "button";

export type SkillCardProps<T extends SkillCardTag> =
  PolymorphicComponentProps<T> &
    ComponentPropsWithoutRef<T> & {
      icon?: FC;
      label: string;
      id: Skills;
      active?: boolean;
      onActive?: (id: Skills) => unknown;
    };

const DEFAULT_TAG = "article";

export const SkillCard = <T extends SkillCardTag = typeof DEFAULT_TAG>({
  icon,
  label,
  className,
  as,
  onActive,
  id,
  active,
  ...props
}: SkillCardProps<T>) => {
  const classes = clsx(className, styles.card, {
    [styles.active]: active,
  });
  const Component = as || DEFAULT_TAG;

  const activeOptions: UseHoverOptions<HTMLButtonElement> = useMemo(
    () => ({
      triggers: ["focus"],
      onEnter: () => onActive?.(id),
    }),
    [onActive, id]
  );
  const [ref] = useActive<HTMLButtonElement>(activeOptions);

  return (
    <Component className={classes} ref={ref} {...props}>
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
