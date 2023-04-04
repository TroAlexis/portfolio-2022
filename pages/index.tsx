import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { AboutSection } from "components/sections/About";
import { ExperienceSection } from "components/sections/Experience";
import { LetsTalkSection } from "components/sections/LetsTalk";
import { ProjectsSection } from "components/sections/Projects";
import { SkillsSection } from "components/sections/Skills";
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

      <Footer className={styles.footer} />
    </div>
  );
}
