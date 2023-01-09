import Head from "next/head";

import styles from "styles/pages/index.module.scss";
import { Hero } from "components/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Alexey Troshin | Portfolio</title>
        <meta name="description" content="Alexey Troshin's portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero className={styles.hero} />
    </div>
  );
}
