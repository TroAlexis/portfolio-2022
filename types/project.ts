import { StaticImageData } from "next/image";

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

export enum ProjectParagraphPosition {
  LTR,
  RTL,
  VERTICAL,
}

export type ProjectParagraph = {
  title: string;
  image: string | StaticImageData;
  position: ProjectParagraphPosition;
  description: string[];
};

export interface ProjectCardInfo {
  name: string;
  description: string;
  cover: string | StaticImageData;
  links?: ProjectLink[];
}
