import { ttgClubCard, ttgClubProject } from "assets/data/projects/ttg-club";
import { victoriaCard, victoriaProject } from "assets/data/projects/victoria";

import { ProjectSlug } from "@/constants/projects";
import { Project, ProjectCardInfo } from "@/types/project";

export const projectsMap: Partial<Record<ProjectSlug, Project>> = {
  [ProjectSlug.VICTORIA]: victoriaProject,
  [ProjectSlug.TTG_CLUB]: ttgClubProject,
};
export const projectCardsMap: Partial<Record<ProjectSlug, ProjectCardInfo>> = {
  [ProjectSlug.VICTORIA]: victoriaCard,
  [ProjectSlug.TTG_CLUB]: ttgClubCard,
};

export const projects = Object.values(projectCardsMap);
