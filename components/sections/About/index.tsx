import { Container } from "components/ui/Container";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"section"> {}

const paragraphs = [
  "Salut! I’m Alex, an enthusiastic developer and a cheerful person. Used to work as a teacher of English as a second language, and then got burnt out but found the light of hope in the dark thanks to programming.",
  "3 years down the road, I am now proud to be a software developer with 2 years of production experience, great passion to programming and writing clean, readable code as well as creating and improving products.",
  "Developed projects being part of agile teams in a range of spheres: real estate (samolet.ru and the company's internal projects for managers, agents and accounting), energy (being part of PwC technology branch), advertising (luckyads.pro), hotel business (v-victoriya.ru), translations (ligva.net - a startup that didn’t make it, unfortunately), volunteering for a charity organisation do-dom.ru laying the foundation in rebuilding their website.",
];

const section = APP_SECTIONS.about;

export const AboutSection: FC<Props> = (props) => {
  return (
    <section id={section.id} {...props}>
      <Container>
        <Heading hr preset={"h2"} as={"h2"} className={styles.heading}>
          About me
        </Heading>
        {paragraphs.map((paragraph, index) => (
          <Text as={"p"} key={index} className={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
      </Container>
    </section>
  );
};
