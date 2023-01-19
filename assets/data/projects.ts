import LigvaCover from "assets/images/projects/ligva.jpg";
import VictoriaCover from "assets/images/projects/victoria.jpg";

import { Project } from "@/types/data";

export enum ProjectName {
  V_VICTORIA,
  LIGVA,
}

export const projectMap: Record<ProjectName, Project> = {
  [ProjectName.V_VICTORIA]: {
    name: "V-Victoria",
    cover: VictoriaCover,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem in tellus ornare maximus a quis dui. Morbi arcu velit, sodales et erat ac, suscipit aliquam tortor. Aenean volutpat lorem sed lacus consequat pulvinar. Sed sollicitudin augue vel velit ultrices efficitur.",
    code: "#",
    link: "#",
  },
  [ProjectName.LIGVA]: {
    name: "Ligva",
    cover: LigvaCover,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sem in tellus ornare maximus a quis dui. Morbi arcu velit, sodales et erat ac, suscipit aliquam tortor. Aenean volutpat lorem sed lacus consequat pulvinar. Sed sollicitudin augue vel velit ultrices efficitur.",
    code: "#",
    link: "#",
  },
};
