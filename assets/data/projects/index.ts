import { formulaeCard, formulaProject } from "assets/data/projects/formulae";
import { ligvaCard, ligvaProject } from "assets/data/projects/ligva";
import { ttgClubCard, ttgClubProject } from "assets/data/projects/ttg-club";
import { victoriaCard, victoriaProject } from "assets/data/projects/victoria";

import { ProjectSlug } from "@/constants/projects";
import { Project, ProjectCardInfo } from "@/types/project";

export const projectsMap: Partial<Record<ProjectSlug, Project>> = {
  [ProjectSlug.VICTORIA]: victoriaProject,
  [ProjectSlug.LIGVA]: ligvaProject,
  [ProjectSlug.TTG_CLUB]: ttgClubProject,
  [ProjectSlug.FORMULAE]: formulaProject,
};
export const projectCardsMap: Partial<Record<ProjectSlug, ProjectCardInfo>> = {
  [ProjectSlug.VICTORIA]: victoriaCard,
  [ProjectSlug.LIGVA]: ligvaCard,
  [ProjectSlug.TTG_CLUB]: ttgClubCard,
  [ProjectSlug.FORMULAE]: formulaeCard,
};

export const projects = Object.values(projectCardsMap);
