import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  description: string;
  cover: string | StaticImageData;
  link?: string;
  code?: string;
}
