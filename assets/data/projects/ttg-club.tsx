import GithubIcon from "assets/svg/github.svg";
import { Icon } from "components/ui/Icon";
import ttgClubCover from "images/projects/ttg-club/ttg-club.jpg";
import TtgGoal from "images/projects/ttg-club/ttg-club-1.jpg";
import TtgChallenge from "images/projects/ttg-club/ttg-club-2.jpg";
import TtgSolutions from "images/projects/ttg-club/ttg-club-3.jpg";

import { Link } from "@/components/ui/Link";
import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import {
  Project,
  ProjectCardInfo,
  ProjectParagraphDirection,
} from "@/types/project";

export const ttgClubProject: Project = {
  id: ProjectSlug.TTG_CLUB,
  title: "TTG Club",
  image: ttgClubCover,
  alt: "TTG Club app mockup of tablet and mobile screens with gradient background",
  stack: ["Vue 3", "Typescript", "SCSS", "Vite"],
  description: [
    "By a stroke of luck, I stumbled upon this amazing app that instantly grabbed my attention. Its contemporary and elegant design, combined with its extensive range of features, made it stand out from other platforms I had used for Dungeons & Dragons (D&D). Intrigued by its potential, I decided to connect with the talented team responsible for its development. To my delight, they were actively seeking frontend developers to help take the app to the next level. Following a series of meetings and successfully completing a test task, I was thrilled to be invited on board and contribute my skills to this awesome project.",
  ],
  links: [
    {
      label: "view live",
      accent: true,
      href: "https://ttg.club/",
      target: "_blank",
    },
    {
      label: "view organisation",
      href: "https://github.com/TTG-Club",
      target: "_blank",
    },
  ],
  paragraphs: [
    {
      image: TtgGoal,
      alt: "Mockup demonstrating the list of D&D classes",
      description: [
        "The app is specifically designed for passionate tabletop game enthusiasts, especially those who love playing games like Dungeons & Dragons (D&D). It caters to their unique needs and provides a wide range of features and tools that are specifically tailored to enhance their gaming experience. The app acts as a one-stop resource, serving as an extensive encyclopedia for the 5th edition of D&D. It's packed with a wealth of information and resources, allowing players to immerse themselves in the rich and intricate world of the Forgotten Realms. Alongside this, the app offers convenient tools such as a character characteristics calculator, a dice roller, and various generators for creating exciting elements like wild magic, random encounters, traders, and treasuries.",
      ],
      title: "Purpose & Goal",
      direction: ProjectParagraphDirection.LTR,
    },
    {
      image: TtgChallenge,
      alt: "Mockup demonstrating various list filters",
      description: [
        "The team behind the app is made up of dedicated and enthusiastic Dungeons & Dragons players who contribute their time and expertise to its development, design, and content moderation. We understand that everyone has busy lives with numerous commitments and distractions, making it challenging to find ample time to work on the project. However, despite these obstacles, our passion for the game and our collective commitment to the project's success keeps us motivated. We are constantly striving to improve the app, enhance its features, and provide a valuable resource for the vibrant tabletop gaming community.",
      ],
      title: "The Challenge",
      direction: ProjectParagraphDirection.RTL,
    },
    {
      image: TtgSolutions,
      alt: "Mockup demonstrating weapons list section with a weapon detailed view",
      description: [
        'Upon joining the team, I conducted a thorough scan of the project repository and identified certain inconsistencies in the structure. Recognizing the vast potential for future features, I proposed a restructuring of the project using the "feature slice design" architecture. This approach aimed to enhance scalability and improve the separation of concerns within the codebase. By implementing this new structure, we were able to streamline development processes, facilitate easier maintenance, and accommodate the seamless integration of new features. It was a valuable contribution to the project\'s long-term growth and adaptability.',
        "To ensure optimal performance for the app, one of the initial features I focused on was implementing virtualized lists. Given the substantial amount of information to display, this was crucial to maintain smooth and efficient user experience. However, we faced the additional challenge of incorporating grouping and presenting the list in multiple columns. Overcoming this hurdle, I developed custom components for the grid and grouped lists, which can now be utilized throughout the entire app. It was a valuable learning experience, and I take pride in seeing these components utilized in various sections of the app, contributing to its overall functionality and usability.",
      ],
      title: "Problems & Solutions",
      direction: ProjectParagraphDirection.VERTICAL,
    },
  ],
};

export const ttgClubCard: ProjectCardInfo = {
  id: ProjectSlug.TTG_CLUB,
  name: {
    label: "TTG Club",
    links: (
      <Link href={"https://github.com/TTG-Club/ttg-club-frontend"} icon>
        <Icon>
          <GithubIcon />
        </Icon>
      </Link>
    ),
  },
  cover: ttgClubCover,
  alt: "TTG Club app mockup of tablet and mobile screens with gradient background",
  description:
    "A tabletop games companion app. As an avid player of Dungeons & Dragons, I joined the development of this project in my spare time. What once began as one person's endeavor has now grown into a collaborative effort with a team of passionate enthusiasts. Together, we are building a comprehensive companion for tabletop games, catering to a thriving community of players and visitors. It's a labor of love that combines my passion for D&D with my frontend expertise, and I'm excited to contribute to the growth and success of this project.",
  links: [
    {
      label: "read more",
      href: `${Route.PROJECTS}/${ProjectSlug.TTG_CLUB}`,
      accent: true,
    },
    {
      label: "view live",
      href: "https://ttg.club",
      target: "_blank",
    },
  ],
};
