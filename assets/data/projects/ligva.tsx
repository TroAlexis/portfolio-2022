import { Text } from "components/ui/Text";
import LigvaGoal from "images/projects/ligva/ligva-1.jpg";
import LigvaLessons from "images/projects/ligva/ligva-2.jpg";
import LigvaSolutions from "images/projects/ligva/ligva-3.jpg";
import ligvaCover from "images/projects/ligva/ligva-cover.jpg";

import { Link } from "@/components/ui/Link";
import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import {
  Project,
  ProjectCardInfo,
  ProjectParagraphDirection,
} from "@/types/project";

export const ligvaProject: Project = {
  id: ProjectSlug.LIGVA,
  title: "Ligva",
  image: ligvaCover,
  stack: ["Nuxt.js", "LESS", "TailwindCSS", "WebSockets"],
  description: [
    "I was fortunate to join this ambitious project that gave me loads of experience and new skills. As part of the team, I played a crucial role in the project's mid-development phase. My tasks were diverse and involved developing a chat module for seamless client communication, migrating the app to TailwindCSS for improved styling, ensuring a responsive design across various devices, and creating visually appealing landing pages and emails. Unfortunately, the founders of the app faced significant challenges related to funding and intense competition, ultimately leading to the closure of the project shortly after its release.",
  ],
  paragraphs: [
    {
      image: LigvaGoal,
      description: [
        "The goal of the project was to create a platform that would make professional translations easily accessible and cheaper for all people. The idea was to simplify the process, allowing users to effortlessly upload documents, photos, or text and receive high-quality translations within a short timeframe. To ensure the best quality, we had a team of skilled editors who meticulously reviewed each translation to guarantee its correctness. Additionally, the app included a convenient chat module that enabled clients to communicate directly with the translators, facilitating effective collaboration and addressing any specific requirements or details related to the translation process.",
      ],
      title: "Purpose & Goal",
      direction: ProjectParagraphDirection.LTR,
    },
    {
      image: LigvaLessons,
      description: [
        "The biggest takeaway I gained from this experience is that the success of a project isn't solely dependent on its quality alone. It's essential to recognize that factors such as the market and competition play a significant role. Even if you have a brilliant idea and a top-notch product, it doesn't automatically guarantee success. It's crucial to develop a clear vision of how you will reach your target audience and differentiate yourself from competitors before diving into product development. Equally important is having a solid business plan and a well-defined funding strategy. Without these critical elements, it's easy to become overwhelmed by the sea of competitors and lose sight of your objectives.",
      ],
      title: "Lessons Learned",
      direction: ProjectParagraphDirection.RTL,
    },
    {
      image: LigvaSolutions,
      description: [
        "The biggest challenge I faced during this project was developing a chat module that would allow clients and translators to communicate. I implemented a WebSocket-based solution that enabled real-time communication between the two parties. One of the problems of WebSocket connections is that they can be terminated unexpectedly, so I had to implement automatic reconnection and 'ping-pong' mechanisms to ensure that the chat module would remain functional even if the connection was lost.",
        <>
          Another interesting part of the project was developing e-mails, wild
          adventure. I had never created e-mails before this project and I was
          surprised how much work it takes to make them look good and work
          properly. Not to tear my hair out in frustration, I stuck to a
          framework called{" "}
          <Link href={"https://get.foundation/emails.html"}>
            <Text as={"span"} accent>
              Foundation for Emails 2
            </Text>
          </Link>{" "}
          (formerly Ink) that really eased the process of creating responsive
          templates.
        </>,
        "Another valuable lesson I gained from the project was my experience with Tailwind CSS and LESS. It was an opportunity for me to explore different styling approaches. However, I came to the realization that SCSS was far superior to LESS in terms of functionality and flexibility. Tailwind CSS, on the other hand, is a great tool for prototyping and creating quick mockups, but, to my mind, it's an arguable choice for large-scale projects.",
      ],
      title: "Problems & Solutions",
      direction: ProjectParagraphDirection.VERTICAL,
    },
  ],
};

export const ligvaCard: ProjectCardInfo = {
  id: ProjectSlug.LIGVA,
  name: "Ligva",
  cover: ligvaCover,
  description:
    "I had the opportunity to be part of an ambitious startup that was dedicated to revolutionizing the world of translations. Joining the team during the project's mid-development phase, my responsibilities encompassed various tasks, including the development of a chat module for smooth client communication, migrating the app to TailwindCSS, ensuring responsiveness across different devices, as well as crafting visually appealing landing pages and emails. Despite our collective efforts and the promising potential of the app, the challenges of funding and intense competition led to the closure of the project shortly after its release.",
  links: [
    {
      label: "read more",
      href: `${Route.PROJECTS}/${ProjectSlug.LIGVA}`,
      accent: true,
    },
  ],
};
