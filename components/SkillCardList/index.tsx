import clsx from "clsx";
import { SkillCard } from "components/SkillCard";
import React, { ComponentProps, FC } from "react";

import { Skills, skills } from "@/constants/skills";

import styles from "./index.module.scss";

type CardProps = Pick<ComponentProps<typeof SkillCard>, "onClick">;

interface Props extends ComponentProps<"ul"> {
  onItemClick: CardProps["onClick"];
  activeSkill: Skills;
}

export const SkillCardList: FC<Props> = ({
  className,
  onItemClick,
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
            onClick={onItemClick}
            active={activeSkill === key}
            {...skill}
            className={styles.card}
          />
        </li>
      ))}
    </ul>
  );
};
