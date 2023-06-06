import ttgClubCover from "images/projects/ttg-club/ttg-club.jpg";

import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import { Project, ProjectCardInfo } from "@/types/project";

export const ttgClubProject: Project = {
  id: ProjectSlug.TTG_CLUB,
  title: "TTG Club",
  image: ttgClubCover,
  stack: ["Nuxt.js", "Vue.js", "SCSS", "Webpack"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam quas tempore unde veritatis! Consequatur culpa fuga inventore nesciunt omnis quia repellat soluta, tempore voluptas. Autem expedita iusto laborum officiis?",
  ],
  links: [
    { label: "read more", accent: true, href: "/" },
    { label: "view code", href: "/" },
  ],
};

export const ttgClubCard: ProjectCardInfo = {
  id: ProjectSlug.TTG_CLUB,
  name: "TTG Club",
  cover: ttgClubCover,
  description:
    "Tabletop games companion app. As an avid player of Dungeons & Dragons, I joined the development of this project in my spare time. What once began as a personal endeavor has now grown into a collaborative effort with a team of passionate enthusiasts. Together, we are building a comprehensive companion for tabletop games, catering to a thriving community of players and visitors. It's a labor of love that combines my passion for D&D with my frontend expertise, and I'm excited to contribute to the growth and success of this project.",
  links: [
    {
      label: "read more",
      href: `${Route.PROJECTS}/${ProjectSlug.TTG_CLUB}`,
      accent: true,
    },
    { label: "view code", href: "#" },
  ],
};
