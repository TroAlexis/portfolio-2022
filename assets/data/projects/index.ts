import { ligvaCard, ligvaProject } from "assets/data/projects/ligva";
import { victoriaCard, victoriaProject } from "assets/data/projects/victoria";

import { ProjectSlug } from "@/constants/projects";
import { Project, ProjectCardInfo } from "@/types/project";

export const projectsMap: Partial<Record<ProjectSlug, Project>> = {
  [ProjectSlug.VICTORIA]: victoriaProject,
  [ProjectSlug.LIGVA]: ligvaProject,
};
export const projectCardsMap: Partial<Record<ProjectSlug, ProjectCardInfo>> = {
  [ProjectSlug.VICTORIA]: victoriaCard,
  [ProjectSlug.LIGVA]: ligvaCard,
};
