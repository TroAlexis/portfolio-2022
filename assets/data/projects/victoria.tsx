import { Link } from "components/ui/Link";
import { Text } from "components/ui/Text";
import VictoriaGoal from "images/projects/victoria/victoria-1.png";
import VictoriaDesign from "images/projects/victoria/victoria-2.png";
import VictoriaProblem from "images/projects/victoria/victoria-3.png";
import VictoriaCover from "images/projects/victoria/victoria-cover.jpg";
import React from "react";

import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";
import {
  Project,
  ProjectCardInfo,
  ProjectParagraphDirection,
} from "@/types/project";

export const victoriaProject: Project = {
  id: ProjectSlug.VICTORIA,
  title: "V-Victoria",
  image: VictoriaCover,
  stack: ["Nuxt.js", "Pug", "SCSS", "Webpack"],
  description: [
    "My first freelance project, where I had the opportunity to oversee every aspect from design to development. While my main focus has always been on development, I decided to step out of my comfort zone and embrace the challenge of taking on the design responsibilities as well. It was an intensive journey that demanded a lot of effort and creativity, but I take immense pride in the final outcome I was able to achieve.",
  ],
  links: [
    {
      label: "view live",
      href: "https://v-victoriya.ru/",
      target: "_blank",
      accent: true,
    },
  ],
  paragraphs: [
    {
      image: VictoriaGoal,
      description: [
        "During my time living in a small seaside town, I had the pleasure of hosting some friends for a summer getaway. To my surprise, the hotel they stayed at had an incredibly outdated website that desperately needed a revamp. Recognizing the potential for improvement, I took the initiative to contact the hotel owner and offer my services as a developer. Thankfully, they were receptive to my proposal, and I eagerly took on the project. Starting with wireframes, I meticulously refined the design based on feedback, before diving into the development phase. It was a rewarding experience to witness the transformation of the website from its initial state to a polished and modern online presence.",
      ],
      title: "Purpose & Goal",
      direction: ProjectParagraphDirection.LTR,
    },
    {
      image: VictoriaDesign,
      description: [
        "The design aspect was new and challenging for me, but also exciting. To create a visually appealing logo and landing page for the client's business, I collaborated with a logo designer and made necessary revisions until we achieved a great logo. Drawing inspiration from Dribbble and Behance, I spent weeks working on the design in Figma, going through several rounds of feedback and revisions to ensure the client's satisfaction. Once the design was finalized, I proceeded with development.",
      ],
      title: "Design Challenge",
      direction: ProjectParagraphDirection.RTL,
    },
    {
      image: VictoriaProblem,
      description: [
        'To deliver an exceptional user experience, I chose Nuxt.js as my framework of choice. It provided an "out-of-the-box" solution with excellent documentation and features. Considering the client\'s request for extensive visual content, I implemented smart strategies. This involved applying lazy-loading techniques for images and lazily loading/initializing the maps module using Intersection Observer.',
        "Image optimization played a crucial role in achieving optimal website performance. I utilized various loaders for image transformations, converting to the WebP format, and employed the picture tag to deliver the best possible image based on the user's viewport. Additionally, I combined SVG logos into an SVG sprite and injected them into the DOM. To further optimize the website, I utilized techniques like code-splitting, preloading, and prefetching.",
        <>
          Achieving great performance required extensive Webpack configuration
          and fine-tuning of Nuxt modules. During this process, I gained a deep
          understanding of how loaders, modules, and plugins work. I delved into
          HTML tags like &quot;picture&quot; and &quot;source&quot;, as well as
          attributes like &quot;srcset&quot; and &quot;sizes&quot;, learning how
          to utilize them effectively. This experience led to my first
          open-source contributions, including configuration enhancements to the
          {"   "}
          <Link
            href={
              "https://github.com/nuxt-community/svg-sprite-module/pull/240"
            }
            target={"_blank"}
          >
            <Text accent as={"span"}>
              @nuxt/svg-sprite-module
            </Text>
          </Link>
          {"  and  "}
          <Link
            href={"https://github.com/nuxt-community/svg-module/pull/75"}
            target={"_blank"}
          >
            <Text accent as={"span"}>
              @nuxt/svg-module
            </Text>
          </Link>
          {"   "}
          as well as adding support for the picture tag in the
          {"   "}
          <Link
            href={"https://github.com/lucaspulliese/vue-cool-lightbox/pull/88"}
            target={"_blank"}
          >
            <Text accent as={"span"}>
              vue-cool-lightbox
            </Text>
          </Link>
          {"   "} library.
        </>,
        "The reviews module posed a unique challenge as the API for retrieving reviews was not available. To overcome this, I utilized Cheerio, a powerful HTML parsing library, to extract the necessary data from a maps service. To ensure the reviews are always up-to-date, I implemented a custom script that runs during the build process and automatically updates the reviews, ensuring the website consistently reflects the latest feedback.",
        "Furthermore, the website features a fully validated booking form. I implemented a custom PHP script to validate the form fields and added an extra layer of security by integrating reCAPTCHA v3. This ensures that the form submissions are not only validated but also protected against potential bots and spam. Once the form is submitted, a notification with the booking details is sent to the client, providing a seamless and secure booking experience.",
      ],
      title: "Problems & Solutions",
      direction: ProjectParagraphDirection.VERTICAL,
    },
  ],
};

export const victoriaCard: ProjectCardInfo = {
  id: ProjectSlug.VICTORIA,
  name: "V-Victoria",
  cover: VictoriaCover,
  description:
    "A hotel website for a local business, built from the ground up leveraging power of Nuxt.js, SCSS, and Pug. The fully responsive design ensures a seamless experience across all devices, while advanced optimization techniques guarantee fast loading times. This project provided valuable experience in collaborating with clients and transforming their vision into reality. This project allowed me to gain even more valuable experience in frontend development, user experience design, and project management, while successfully bringing the client's vision to life.",
  links: [
    {
      label: "read more",
      accent: true,
      href: `${Route.PROJECTS}/${ProjectSlug.VICTORIA}`,
    },
    { label: "view live", href: "https://v-victoriya.ru/", target: "_blank" },
  ],
};
