import { Hero } from "components/main/Hero";
import { AboutSection } from "components/main/sections/About";
import { ExperienceSection } from "components/main/sections/Experience";
import { LetsTalkSection } from "components/main/sections/LetsTalk";
import { ProjectsSection } from "components/main/sections/Projects";
import { SkillsSection } from "components/main/sections/Skills";
import Head from "next/head";
import styles from "styles/pages/index.module.scss";

const sections = [
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  LetsTalkSection,
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Alexey Troshin | Portfolio</title>
        <meta name="description" content="Alexey Troshin's portfolio page" />
      </Head>

      <Hero className={styles.hero} />
      {sections.map((Section, index) => (
        <Section key={index} className={styles.section} />
      ))}
    </div>
  );
}
