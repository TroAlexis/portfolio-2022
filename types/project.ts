import { StaticImageData } from "next/image";

import { ProjectSlug } from "@/constants/projects";

export type Project = {
  id: string;
  title: string;
  image?: string | StaticImageData;
  description: string[];
  stack: string[];
  links?: ProjectLink[];
  paragraphs?: ProjectParagraph[];
};

export type ProjectLink = {
  label: string;
  href: string;
  accent?: boolean;
};

export enum ProjectParagraphDirection {
  LTR = "ltr",
  RTL = "rtl",
  VERTICAL = "vertical",
}

export type ProjectParagraph = {
  title: string;
  image: string | StaticImageData;
  direction: ProjectParagraphDirection;
  description: string[];
};

export interface ProjectCardInfo {
  id?: ProjectSlug;
  name: string;
  description: string;
  cover: string | StaticImageData;
  links?: ProjectLink[];
}
