import { Skills, skills, skillsMap } from "assets/data/skills";
import clsx from "clsx";
import { MainSection } from "components/main/MainSection";
import styles from "components/main/sections/Skills/index.module.scss";
import { SkillCardList } from "components/skills/SkillCardList";
import { SkillDescription } from "components/skills/SkillDescription";
import { OverflowIndicator } from "components/ui/OverflowIndicator";
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
          <OverflowIndicator<HTMLUListElement> key={skill}>
            {({ containerClassName, containerRef }) => (
              <SkillDescription
                ref={containerRef}
                description={description}
                className={clsx(styles.description, containerClassName)}
              />
            )}
          </OverflowIndicator>
        )}
      </div>
    </MainSection>
  );
};
