import { projects as allProjects, projectsMap } from "assets/data/projects";
import { LetsTalkSection } from "components/main/sections/LetsTalk";
import { ProjectBody } from "components/project/ProjectBody";
import { ProjectList } from "components/project/ProjectCardList";
import { ProjectHead } from "components/project/ProjectHead";
import { Heading } from "components/ui/Heading";
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
    const hasNoProject = !!slug && !project;

    if (hasNoProject) {
      router.push("/");
    }
  }, [slug, project, router]);

  if (!project) {
    return null;
  }

  const projects = allProjects.filter((project) => project.id !== slug);

  return (
    <div className={styles.page}>
      <Head>
        <title>Alexey Troshin | Portfolio</title>
        <meta name="description" content="Alexey Troshin's portfolio page" />
      </Head>

      <ProjectHead project={project} className={styles.head} />

      <ProjectBody project={project}>
        <Heading as={"h3"} preset={"h3"} hr className={styles.heading}>
          Other Work
        </Heading>
        <ProjectList items={projects} />

        <LetsTalkSection className={styles.footer} />
      </ProjectBody>
    </div>
  );
}
