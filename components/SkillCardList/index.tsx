import { Skills, skills } from "assets/data/skills";
import clsx from "clsx";
import { SkillCard } from "components/SkillCard";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

type CardProps = Pick<ComponentProps<typeof SkillCard>, "onActive">;

interface Props extends ComponentProps<"ul"> {
  onItemActive: CardProps["onActive"];
  activeSkill: Skills;
}

export const SkillCardList: FC<Props> = ({
  className,
  onItemActive,
  activeSkill,
  ...props
}) => {
  const classes = clsx(className, styles.list);
  return (
    <ul className={classes} {...props}>
      {skills.map(([key, skill]) => (
        <li key={key} className={styles.item}>
          <SkillCard
            id={key}
            as={"button"}
            type={"button"}
            onActive={onItemActive}
            active={activeSkill === key}
            {...skill}
            className={styles.card}
          />
        </li>
      ))}
    </ul>
  );
};
