import { MainSection } from "components/main/MainSection";
import styles from "components/main/sections/About/index.module.scss";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const paragraphs = [
  "I'm Alexey Troshin, former ESL teacher turned frontend developer.",
  "Although I enjoyed helping students learn, I discovered that my true calling was in building apps with great user experiences. I love diving into code and exploring the latest front-end technologies to create modern and responsive web apps.",
  "Over the years, I've had the opportunity to work on various projects, including data analysis and predictive modeling platforms, real estate, advertising, hotel business, translations. I'm always looking for new and exciting opportunities to learn and grow as a developer.",
  "Apart from programming, I love cooking, travelling and playing video games. I believe that a good work-life balance is key to staying motivated and productive in my work.",
];

const section = APP_SECTIONS.about;

export const AboutSection: FC<Props> = (props) => {
  return (
    <MainSection section={section} heading={"About me"} {...props}>
      {paragraphs.map((paragraph, index) => (
        <Text as={"p"} key={index} className={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </MainSection>
  );
};
