import { MainSection } from "components/main/MainSection";
import { Paragraphs } from "components/ui/Paragraphs";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const paragraphs = [
  "I'm Alexey Troshin, a senior software engineer.",
  "I love diving into code and exploring the latest front-end technologies to create modern and responsive web apps.",
  "Over the years, I've had the opportunity to work on various projects, including data analysis and predictive modeling platforms, real estate, advertising, hotel business, translations. I'm always looking for new and exciting opportunities to learn and grow as a developer.",
  "Apart from programming, I love cooking, travelling, playing video games and table tennis. I believe that a good work-life balance is key to staying motivated and productive in my work.",
];

const section = APP_SECTIONS.about;

export const AboutSection: FC<Props> = (props) => {
  return (
    <MainSection section={section} heading={"About me"} {...props}>
      <Paragraphs items={paragraphs} />
    </MainSection>
  );
};
