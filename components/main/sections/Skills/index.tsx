import { Skills, skills, skillsMap } from "assets/data/skills";
import { MainSection } from "components/main/MainSection";
import styles from "components/main/sections/Skills/index.module.scss";
import { SkillCardList } from "components/skills/SkillCardList";
import { SkillDescription } from "components/skills/SkillDescription";
import React, { ComponentProps, FC, useState } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

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
          onItemActive={setSkill}
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
