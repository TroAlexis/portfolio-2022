import { SkillCardList } from "components/SkillCardList";
import { SkillDescription } from "components/SkillDescription";
import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
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
    <section id={section.id} {...props}>
      <Container>
        <Heading hr preset={"h2"} as={"h2"} className={styles.heading}>
          Skills & Tech
        </Heading>
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
      </Container>
    </section>
  );
};
