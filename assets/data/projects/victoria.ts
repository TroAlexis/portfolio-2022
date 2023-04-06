import VictoriaCover from "images/projects/victoria/victoria.jpg";
import VictoriaHero from "images/projects/victoria/victoria-cover.png";

import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import { Project, ProjectCardInfo } from "@/types/project";

export const victoriaProject: Project = {
  id: ProjectSlug.VICTORIA,
  title: "V-Victoria",
  image: VictoriaHero,
  stack: ["Nuxt.js", "Vue.js", "SCSS", "Webpack"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam quas tempore unde veritatis! Consequatur culpa fuga inventore nesciunt omnis quia repellat soluta, tempore voluptas. Autem expedita iusto laborum officiis?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quam quas tempore unde veritatis! Consequatur culpa fuga inventore nesciunt omnis quia repellat soluta, tempore voluptas. Autem expedita iusto laborum officiis?",
  ],
  links: [
    { label: "read more", accent: true, href: "/" },
    { label: "view code", href: "/" },
  ],
};

export const victoriaCard: ProjectCardInfo = {
  name: "V-Victoria",
  cover: VictoriaCover,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem in tellus ornare maximus a quis dui. Morbi arcu velit, sodales et erat ac, suscipit aliquam tortor. Aenean volutpat lorem sed lacus consequat pulvinar. Sed sollicitudin augue vel velit ultrices efficitur.",
  links: [
    {
      label: "read more",
      accent: true,
      href: `${Route.PROJECTS}/${ProjectSlug.VICTORIA}`,
    },
    { label: "view code", href: "/" },
  ],
};
