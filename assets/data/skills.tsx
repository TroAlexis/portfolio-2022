import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNpm,
  IconBrandNuxt,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-react";
import IconJest from "assets/svg/jest.svg";
import { IconWebpack } from "components/icons/IconWebpack";
import { SkillCardProps } from "components/skills/SkillCard";
import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import { CSSProperties, ReactNode } from "react";

export enum Skills {
  JAVASCRIPT = "JAVASCRIPT",
  HTML = "HTML",
  TYPESCRIPT = "TYPESCRIPT",
  VUE = "VUE",
  REACT = "REACT",
  REDUX = "REDUX",
  WEBPACK = "WEBPACK",
  NEXT = "NEXT",
  NUXT = "NUXT",
  CSS = "CSS",
  TESTING = "TESTING",
  NPM = "NPM",
}

function addAlpha(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

const createCSSProperties = (properties: Record<string, string>) =>
  properties as CSSProperties;

const createStyle = (color: string, gradient: string = color) =>
  createCSSProperties({
    "--icon-hover-color": color,
    "--gradient-color": gradient,
    "--shadow-color": addAlpha(gradient, 0.07),
  });

type SkillProps = Pick<SkillCardProps<"button">, "icon" | "label" | "style"> & {
  description?: ReactNode[];
};

export const skillsMap: Partial<Record<Skills, SkillProps>> = {
  [Skills.JAVASCRIPT]: {
    icon: IconBrandJavascript,
    label: Skills.JAVASCRIPT,
    style: createStyle("#EBD94D"),
    description: [
      "Making vanilla Javascript plugins (dropdowns, a datepicker, custom form elements)",
      <>
        Creating a{" "}
        {
          <Link href={"https://www.npmjs.com/package/naviscroll"}>
            {" "}
            <Text as={"span"} accent>
              {" "}
              mini-library{" "}
            </Text>{" "}
          </Link>
        }{" "}
        based on Intersection Observer API for generating navigation menu and
        scroll tracking for simple js websites
      </>,
      "Optimising performance of heavy operations utilising hash maps, memoization, etc.",
      "Utilising modern APIs, operators and following best practices",
      "ES6+",
      "WebSockets, REST API",
      'Sticking to "SOLID", "DRY", "KISS", "YAGNI" principles',
    ],
  },
  [Skills.HTML]: {
    icon: IconBrandHtml5,
    label: Skills.HTML,
    style: createStyle("#F86119"),
    description: [
      "Writing clean, semantic and well-organised HTML",
      "Developing with accessibility in mind",
      "Familiar with HTML5 features and APIs like Web Workers, Geolocation, etc.",
      "Experience with HTML-templating engines like Pug (ex. Jade) and Handlebars",
      "Using WebPageTest, Lighthouse, etc. for performance optimisation",
      'Good understanding of browser mechanisms like "Event Loop", "DOM Tree", "Render Tree", "Layout", "Painting", "Compositing", etc.',
    ],
  },
  [Skills.CSS]: {
    icon: IconBrandCss3,
    label: Skills.CSS,
    style: createStyle("#549DCF"),
    description: [
      "Using CSS-preprocessors like SASS, LESS",
      "Using CSS Modules, CSS-in-JS, Styled Components, etc.",
      "Working with CSS frameworks like Bootstrap, Tailwind CSS, etc.",
      "Configuring PostCSS plugins for cross-browser compatibility",
      'Following "BEM" methodology',
      'Developing with "mobile-first" approach',
      "Writing responsive and accessible CSS",
      'Being proficient with latest features like "grid", "custom properties", ":has" pseudo-class, "container queries", "scroll-snap", etc.',
      "Building complex layouts and creating custom animations and transitions",
    ],
  },
  [Skills.TYPESCRIPT]: {
    icon: IconBrandTypescript,
    label: Skills.TYPESCRIPT,
    style: createStyle("#4170B6"),
    description: [
      "Developing a library with shared utils and types for a micro-frontend application",
      "Using advanced patterns like conditional types, mapped types, generics, etc.",
      "Building reusable generic components in React and Vue 3",
    ],
  },
  [Skills.WEBPACK]: {
    icon: IconWebpack,
    label: Skills.WEBPACK,
    style: createCSSProperties({
      "--gradient-color": "#8ED6FB",
      "--icon-color": "#fafafa",
      "--icon-color-1": "#C4C4C4",
      "--icon-color-2": "#9a9a9a",
    }),
    description: [
      "Configuring Webpack for various frameworks",
      "Tuning loaders/plugins for faster build times",
      "Improving TTI (Time To Interactive) with code splitting, caching, etc.",
      'Using "webpack-bundle-analyzer" to find bottlenecks and reduce bundle size',
    ],
  },
  [Skills.REACT]: {
    icon: IconBrandReact,
    label: Skills.REACT,
    style: createStyle("#61DBFB"),
    description: [
      'Applying design patterns like "factory", "render props", "compound components", "higher-order components (HOC)", "observer"',
      "Writing reusable and maintainable components with hooks",
      'Using DHTMLX Gantt Chart library and custom "renderless" components to provide great user experience for a "project management" app',
      "Creating complex canvas interactions with React-Flow and WebSockets",
      "GraphQL integration with Apollo Client",
      'Using "virtual lists" to optimise rendering of multiple components',
      'Maintaining a UI-library with "Storybook"',
    ],
  },
  [Skills.NEXT]: {
    icon: IconBrandNextjs,
    label: Skills.NEXT,
    style: createStyle("#fff", "#007cf0"),
    description: [
      "Developing pet projects, using Next.js as out-of-the-box solution for SSG, routing, etc.",
      <>
        Image optimisation with Image component and{" "}
        <Link
          href={"https://www.npmjs.com/package/next-image-export-optimizer"}
        >
          <Text accent as={"span"}>
            {" "}
            next-image-export-optimizer{" "}
          </Text>
        </Link>
        for static sites
      </>,
    ],
  },
  [Skills.REDUX]: {
    icon: IconBrandRedux,
    label: Skills.REDUX,
    style: createStyle("#9f73f6"),
    description: [
      "Creating WebSocket modules for real-time communication",
      'Creating reusable store modules for modals, notifications, loaders, etc. with "factory" pattern',
      "Using redux-observable with rx.js for side-effects",
      "Migrating legacy Redux code to RTK (Redux-Toolkit) to improve DX",
    ],
  },
  [Skills.VUE]: {
    icon: IconBrandVue,
    label: Skills.VUE,
    style: createStyle("#41B883"),
    description: [
      "Using mixins, scoped slots in Vue 2 to share common functionality between components",
      "Creating custom directives to manipulate DOM",
      'Creating "renderless" components to separate logic from presentation (in maps, charts, etc.)',
      "Getting the most out of Composition API to create reusable stateful logic",
      "Working with Vuetify",
    ],
  },
  [Skills.NUXT]: {
    icon: IconBrandNuxt,
    label: Skills.NUXT,
    style: createStyle("#00dc82"),
    description: [
      "Developing an SSR application (familiar with the caveats and how to fight them)",
      'Implementing "feature slice design" for better maintainability and DX',
    ],
  },
  [Skills.TESTING]: {
    icon: IconJest,
    label: Skills.TESTING,
    style: createStyle("#B04627"),
    description: [
      "Familiar with Test-Driven Development",
      "Writing JEST unit and integration tests, React component tests with React Testing Library",
      'Applying the "builder" pattern for better DX in test data creation',
      "cy.press()ing buttons with Cypress",
    ],
  },
  [Skills.NPM]: {
    icon: IconBrandNpm,
    label: Skills.NPM,
    style: createStyle("#CD0000"),
    description: [
      "Using npm and yarn for package management",
      "Publishing packages to npm registry",
      "Creating custom scripts for better DX",
      "Using yarn/npm capabilities and packages for efficient local development",
    ],
  },
};

export const skills = Object.entries(skillsMap) as Array<[Skills, SkillProps]>;
