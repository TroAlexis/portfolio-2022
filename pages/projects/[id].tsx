import { projects as allProjects, projectsMap } from "assets/data/projects";
import { LetsTalkSection } from "components/main/sections/LetsTalk";
import { ProjectBody } from "components/project/ProjectBody";
import { ProjectList } from "components/project/ProjectCardList";
import { ProjectHead } from "components/project/ProjectHead";
import { Heading } from "components/ui/Heading";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "styles/pages/project.module.scss";

import { ProjectSlug } from "@/constants/projects";

export default function ProjectPage({
  projectId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const project = projectsMap[projectId as ProjectSlug];

  if (!project) {
    return null;
  }

  const otherProjects = allProjects.filter(
    (project) => project.id !== projectId
  );

  const title = `Alexey Troshin | ${project.title}`;

  return (
    <div className={styles.page}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${project.title} case page.`} />
      </Head>

      <ProjectHead project={project} className={styles.head} />

      <ProjectBody project={project}>
        <Heading as={"h3"} preset={"h3"} hr className={styles.heading}>
          Other Work
        </Heading>
        <ProjectList items={otherProjects} />

        <LetsTalkSection className={styles.footer} />
      </ProjectBody>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const projectId = params?.id;

  return {
    props: {
      projectId,
      key: projectId,
    },
  };
};
