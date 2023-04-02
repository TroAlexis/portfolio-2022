import {
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-react";
import IconJest from "assets/svg/jest.svg";
import { IconWebpack } from "components/icons/IconWebpack";
import { SkillCardProps } from "components/SkillCard";
import { CSSProperties } from "react";

export enum Skills {
  JAVASCRIPT = "JAVASCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  VUE = "VUE",
  REACT = "REACT",
  REDUX = "REDUX",
  WEBPACK = "WEBPACK",
  NEXT = "NEXT",
  NUXT = "NUXT",
  CSS = "CSS",
  JEST = "JEST",
}

const createCSSProperties = (properties: Record<string, string>) =>
  properties as CSSProperties;

const createStyle = (color: string) =>
  createCSSProperties({
    "--icon-hover-color": color,
  });

type SkillProps = Pick<SkillCardProps<"button">, "icon" | "label" | "style"> & {
  description?: string[];
};

export const skillsMap: Partial<Record<Skills, SkillProps>> = {
  [Skills.JAVASCRIPT]: {
    icon: IconBrandJavascript,
    label: Skills.JAVASCRIPT,
    style: createStyle("#EBD94D"),
    description: [
      "Making vanilla Javascript plugins (dropdowns, datepicker, custom form elements)",
      "Created a lightweight library based on Intersection Observer API for generating navigation menu and tracking scroll position, which evolved from a task on my job at the time",
      "Using modern APIs and operators, following best practices",
    ],
  },
  [Skills.TYPESCRIPT]: {
    icon: IconBrandTypescript,
    label: Skills.TYPESCRIPT,
    style: createStyle("#4170B6"),
  },
  [Skills.CSS]: {
    icon: IconBrandCss3,
    label: Skills.CSS,
    style: createStyle("#549DCF"),
  },
  [Skills.WEBPACK]: {
    icon: IconWebpack,
    label: Skills.WEBPACK,
    style: createCSSProperties({
      "--icon-color": "#fafafa",
      "--icon-color-1": "#C4C4C4",
      "--icon-color-2": "#9a9a9a",
    }),
  },
  [Skills.REACT]: {
    icon: IconBrandReact,
    label: Skills.REACT,
    style: createStyle("#61DBFB"),
  },
  [Skills.NEXT]: {
    icon: IconBrandNextjs,
    label: Skills.NEXT,
    style: createStyle("#101010"),
  },
  [Skills.REDUX]: {
    icon: IconBrandRedux,
    label: Skills.REDUX,
    style: createStyle("#9f73f6"),
  },
  [Skills.VUE]: {
    icon: IconBrandVue,
    label: Skills.VUE,
    style: createStyle("#41B883"),
  },
  [Skills.NUXT]: {
    icon: IconBrandNuxt,
    label: Skills.NUXT,
    style: createStyle("rgb(0, 220, 130)"),
  },
  [Skills.JEST]: {
    icon: IconJest,
    label: Skills.JEST,
    style: createStyle("#B04627"),
  },
};

export const skills = Object.entries(skillsMap) as Array<[Skills, SkillProps]>;
