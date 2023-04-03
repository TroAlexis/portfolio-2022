import { MainSection } from "components/MainSection";
import { SkillCardList } from "components/SkillCardList";
import { SkillDescription } from "components/SkillDescription";
import React, { ComponentProps, FC, useState } from "react";

import { APP_SECTIONS } from "@/config/app/sections";
import { Skills, skills, skillsMap } from "@/constants/skills";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS.skills;

const [[firstSkill]] = skills;

export const SkillsSection: FC<Props> = (props) => {
  const [skill, setSkill] = useState<Skills>(firstSkill);

  const description = skillsMap[skill]?.description;

  return (
    <MainSection section={section} heading={"Skills & Tech"} {...props}>
      <div className={styles.main}>
        <SkillCardList
          className={styles.list}
          activeSkill={skill}
          onItemClick={setSkill}
        />
        {description && (
          <SkillDescription
            description={description}
            className={styles.description}
          />
        )}
      </div>
    </MainSection>
  );
};
