import LigvaCover from "images/projects/ligva/ligva.jpg";
import VictoriaHero from "images/projects/victoria/victoria-cover.png";

import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import { Project, ProjectCardInfo } from "@/types/project";

export const ligvaProject: Project = {
  id: ProjectSlug.LIGVA,
  title: "Ligva",
  image: VictoriaHero,
  stack: ["Nuxt.js", "Vue.js", "SCSS", "Webpack"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam quas tempore unde veritatis! Consequatur culpa fuga inventore nesciunt omnis quia repellat soluta, tempore voluptas. Autem expedita iusto laborum officiis?",
  ],
  links: [
    { label: "read more", accent: true, href: "/" },
    { label: "view code", href: "/" },
  ],
};

export const ligvaCard: ProjectCardInfo = {
  id: ProjectSlug.LIGVA,
  name: "Ligva",
  cover: LigvaCover,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem in tellus ornare maximus a quis dui. Morbi arcu velit, sodales et erat ac, suscipit aliquam tortor. Aenean volutpat lorem sed lacus consequat pulvinar. Sed sollicitudin augue vel velit ultrices efficitur.",
  links: [
    {
      label: "read more",
      href: `${Route.PROJECTS}/${ProjectSlug.LIGVA}`,
      accent: true,
    },
    { label: "view code", href: "#" },
  ],
};
