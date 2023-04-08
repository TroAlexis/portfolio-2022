import { projectsMap } from "assets/data/projects";
import { ProjectBody } from "components/project/ProjectBody";
import { ProjectHead } from "components/project/ProjectHead";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "styles/pages/project.module.scss";

import { ProjectSlug } from "@/constants/projects";

export default function ProjectPage() {
  const router = useRouter();
  const { id = "" } = router.query;
  const slug = id as ProjectSlug;
  const project = projectsMap[slug];

  useEffect(() => {
    if (id && !project) {
      router.push("/");
    }
  }, [id, project, router]);

  if (!project) {
    return null;
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Alexey Troshin | Portfolio</title>
        <meta name="description" content="Alexey Troshin's portfolio page" />
      </Head>

      <ProjectHead project={project} className={styles.head} />

      <ProjectBody project={project} />
    </div>
  );
}
