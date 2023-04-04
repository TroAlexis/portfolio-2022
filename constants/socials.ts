import GithubIcon from "assets/svg/github.svg";
import InstagramIcon from "assets/svg/instagram.svg";
import LinkedInIcon from "assets/svg/linkedin.svg";

import { Social } from "@/types/socials";

export const socialsMap: Record<string, Social> = {
  github: {
    icon: GithubIcon,
    label: "github",
    link: "https://github.com/TroAlexis",
  },
  instagram: {
    icon: InstagramIcon,
    label: "instagram",
    link: "https://www.instagram.com/troalexis",
  },
  linkedin: {
    icon: LinkedInIcon,
    label: "linkedin",
    link: "https://www.linkedin.com/in/alex-troshin",
  },
};

export const socials = Object.entries(socialsMap);
