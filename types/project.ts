import { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { ProjectSlug } from "@/constants/projects";

export type Project = {
  id: string;
  title: string;
  image?: string | StaticImageData;
  description: ReactNode[];
  stack: string[];
  links?: ProjectLink[];
  paragraphs?: ProjectParagraph[];
};

export type ProjectLink = {
  label: string;
  href: string;
  accent?: boolean;
  target?: string;
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
  description: ReactNode[];
};

export interface ProjectCardInfo {
  id?: ProjectSlug;
  name: string;
  description: string;
  cover: string | StaticImageData;
  links?: ProjectLink[];
}
