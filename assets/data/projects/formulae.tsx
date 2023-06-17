import GithubIcon from "assets/svg/github.svg";
import { Icon } from "components/ui/Icon";
import { Text } from "components/ui/Text";
import FormulaeGoal from "images/projects/formulae/formulae-1.jpg";
import FormulaeChallenge from "images/projects/formulae/formulae-2.jpg";
import FormulaeSoultions from "images/projects/formulae/formulae-3.jpg";
import formulaeCover from "images/projects/formulae/formulae-cover.jpg";

import { Link } from "@/components/ui/Link";
import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import {
  Project,
  ProjectCardInfo,
  ProjectParagraphDirection,
} from "@/types/project";

export const formulaProject: Project = {
  id: ProjectSlug.FORMULAE,
  title: "Formulae",
  image: formulaeCover,
  stack: ["Next.js", "Mantine", "Zustand"],
  links: [
    {
      label: "view live",
      accent: true,
      href: "https://troalexis.github.io/formulae/",
      target: "_blank",
    },
    {
      label: "view code",
      href: "https://github.com/TroAlexis/formulae",
      target: "_blank",
    },
  ],
  description: [
    <>
      I embarked on an exciting journey with a solo project that was probably
      the first to keep me inspired for an extended period. It was a project
      that genuinely made my life abroad a little more convenient, and
      that&apos;s what made it so great. To kickstart development without
      getting caught up in building components and a style system from scratch,
      I opted for the{" "}
      <Link href={"https://mantine.dev/"}>
        <Text as={"span"} accent>
          Mantine
        </Text>
      </Link>{" "}
      framework. Its pre-built components and style system allowed me to dive
      right into development. Additionally, I decided to explore and experiment
      with{" "}
      <Link href={"https://mantine.dev/"}>
        <Text as={"span"} accent>
          Zustand
        </Text>
      </Link>{" "}
      for state management, as I was keen on trying something fresh.,
    </>,
  ],
  paragraphs: [
    {
      image: FormulaeGoal,
      description: [
        "The goal of the project was originally to create a simple web app that would allow me to reuse conversion formulas without keeping them in mind and reaching for calculator every time. Then, I started adding more features to improve it and make it more useful and user-friendly.",
      ],
      title: "Purpose & Goal",
      direction: ProjectParagraphDirection.LTR,
    },
    {
      image: FormulaeChallenge,
      description: [
        "One of the problems was that I was too excited about the idea and jumped into development right away without designing and thinking every little detail through. As a result, I am not entirely satisfied with the UX side of the app, but I didn't really have better ideas for improvement at the time, so I decided to leave it as it is and focus on other things.",
      ],
      title: "The Challenge",
      direction: ProjectParagraphDirection.RTL,
    },
    {
      image: FormulaeSoultions,
      description: [
        "A fundamental aspect of the project revolved around the concept of creating a formula tree, with the ability to have child formulas nested within parent formulas. This required careful consideration of the data structure to ensure efficient access to child formulas and prevent unnecessary re-rendering of related components. To address this challenge, I implemented a simple yet effective solution using hash maps, which provided O(1) (constant-time) access speed. This approach ensured swift retrieval of child formulas and optimized the overall performance of the app.",
      ],
      title: "Problems & Solutions",
      direction: ProjectParagraphDirection.VERTICAL,
    },
  ],
};

export const formulaeCard: ProjectCardInfo = {
  id: ProjectSlug.FORMULAE,
  name: {
    label: "Formulae",
    links: (
      <Link href={"https://github.com/TroAlexis/formulae"} icon>
        <Icon>
          <GithubIcon />
        </Icon>
      </Link>
    ),
  },
  cover: formulaeCover,
  description:
    "Formulas creator app. During my trip around Southeast Asia, I encountered the recurring challenge determining the most favorable money exchange options — whether it was cash, card, or cryptocurrency. Inspired by this need, I developed this app as a solution. It allows you to create and save personalized formulas, name variables and expressions, and conveniently reuse them whenever required. Moreover, you can easily share your formulas with others who might find them helpful. To enhance usability, I implemented PWA support, ensuring that you can access the app even offline.",
  links: [
    {
      label: "read more",
      href: `${Route.PROJECTS}/${ProjectSlug.FORMULAE}`,
      accent: true,
    },
    {
      label: "view live",
      href: `https://troalexis.github.io/formulae/`,
      target: "_blank",
    },
  ],
};
