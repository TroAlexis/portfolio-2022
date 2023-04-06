import { Skills, skills } from "assets/data/skills";
import clsx from "clsx";
import { SkillCard } from "components/skills/SkillCard";
import styles from "components/skills/SkillCardList/index.module.scss";
import React, { ComponentProps, FC } from "react";

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
