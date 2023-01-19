import { Hero } from "components/Hero";
import AboutSection from "components/sections/About";
import { ProjectsSection } from "components/sections/Projects";
import Head from "next/head";
import styles from "styles/pages/index.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Alexey Troshin | Portfolio</title>
        <meta name="description" content="Alexey Troshin's portfolio page" />
      </Head>

      <Hero className={styles.hero} />
      <AboutSection className={styles.section} />
      <ProjectsSection className={styles.section} />
    </div>
  );
}
