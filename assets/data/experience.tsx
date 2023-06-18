import { Text } from "components/ui/Text";
import { TimelinePoint } from "components/ui/Timeline/models";

import { Link } from "@/components/ui/Link";
import { ProjectSlug } from "@/constants/projects";
import { Route } from "@/constants/routes";

export const timeline: TimelinePoint[] = [
  {
    label: "2022",
    title: "PwC, Software engineer",
    description: [
      "PwC is a global network of firms delivering world-class assurance, tax, and consulting services for businesses. I am part of the AI&DA (Artificial Intelligence and Data Analysis) branch, which specializes in creating innovative software solutions for the clients. ",
      "I had the privilege of being heavily involved in the development of an ERP (Enterprise Resource Planning) software for a major player in the oil industry. This project utilized the micro-frontend approach, with React, Redux (including redux-observables), and TypeScript as core technologies. It was a complex endeavor that required great coordination and attention to detail, but it was incredibly rewarding to cooperate with a large team and see the software come to life and empower the company in streamlining their operations and enhancing efficiency.",
      <>
        At the beginning of my journey, I was assigned to a legacy project that
        required a modernization effort. One of the key tasks was migrating the
        codebase from class-based components to functional components using
        hooks, and integrating Redux Toolkit for state management. Additionally,
        I took on the responsibility of developing a project management and
        planning module using the{" "}
        <Link
          target={"_blank"}
          href={"https://dhtmlx.com/docs/products/dhtmlxGantt/"}
        >
          <Text accent as={"span"}>
            DHTMLX Gantt library
          </Text>
        </Link>{" "}
        as well as a flow-chart module utilizing{" "}
        <Link target={"_blank"} href={"https://reactflow.dev/"}>
          <Text accent as={"span"}>
            React Flow
          </Text>
        </Link>
        . These tasks required meticulous attention to detail, but they played a
        crucial role in modernizing the project and significantly enhancing its
        functionality and developer experience.
      </>,
      <>
        Upon transitioning to the ERP project, I took on a leadership role in
        developing an interactive strategy tree module. This involved
        implementing a robust algorithm for positioning the tree nodes and
        creating a visually appealing display with various controls and modes
        using{" "}
        <Link target={"_blank"} href={"https://reactflow.dev/"}>
          <Text accent as={"span"}>
            React Flow
          </Text>
        </Link>
        . Additionally, I integrated an overview mini-map within the scrollbar
        for enhanced navigation. Once this module was successfully delivered, I
        shifted my focus to developing a drag-and-drop interface module that
        served as a no-code solution for creating logic flows. This module
        utilized{" "}
        <Link target={"_blank"} href={"https://reactflow.dev/"}>
          <Text accent as={"span"}>
            React Flow
          </Text>
        </Link>{" "}
        and leveraged the power of WebSockets to ensure real-time communication
        and seamless functionality.
      </>,
      "One of my significant contributions involved enhancing TypeScript typing throughout different sections of the project, maintaining a UI library and extracting shared modules that were utilized across the project to keep everything DRY and improve maintainability. Moreover, I conducted thorough refactorings and performed code reviews to ensure code quality and maintainability.",
    ],
    period: [
      { date: new Date("2022-05-01"), text: "may 2022" },
      { date: new Date(), text: "present" },
    ],
  },
  {
    label: "2020",
    title: "Idaproject, Software engineer",
    description: [
      "Idaproject is a digital agency that specializes in the creation and maintenance of real estate websites. They have established partnerships with some of the largest developer firms in the industry.",
      "During our development process, we used ActiveCollab for project management. For the frontend, we utilized Nuxt.js with SSR (Server-Side Rendering), which really helps optimize SEO and enhance performance, but requires certain level of awareness about the technique, so I came to be quite comfortable using it. On the backend, we leveraged Python with Django to handle the server-side operations and admin dashboards for the clients.",
      "During my time at the company, I had the opportunity to work on four different projects in the real estate and accounting sectors. In addition to developing and maintaining three projects, doing code reviews, I also took on the role of a mentor for junior developers after a year of working with the company. This experience not only enhanced my technical skills in Vue.js but also helped me improve my communication abilities. ",
      "One of the most challenging tasks I undertook was a complex flat configurator. I came to an idea to create a Vuex module that could be easily reused as a plug-in solution. It required careful consideration of the architecture and implementation to ensure its flexibility and compatibility with different projects. It was a complex task that pushed me to think creatively and strategically, and I'm proud of the final result.",
      "In addition, I had the privilege of working on a project that involved developing a simple Learning Management System (LMS). This experience provided me with valuable insights into working with iframes and understanding how to effectively communicate with them and inject custom styles.",
      "One particularly rewarding experience was becoming part of the company's charity initiative to develop a new website for a social hotel catering to children with cancer. I played a crucial role in laying the foundation for the project and made significant contributions throughout its development. It was a fulfilling opportunity to contribute to a meaningful cause and utilize my skills for the benefit of others.",
    ],
    period: [
      {
        date: new Date("2020-06-01"),
        text: "june 2020",
      },
      {
        date: new Date("2022-05-01"),
        text: "may 2022",
      },
    ],
  },
  {
    label: "2019",
    title: "LuckyAds, Frontend engineer",
    description: [
      "LuckyAds is a native advertising platform that offers a comprehensive range of technical capabilities for Advertisers and Advertising Agencies to effectively place their advertisements.",
      "In our development process, we utilized Jira for efficient project management, while leveraging HTML, CSS, and JavaScript for frontend development. As part of my role, I was responsible for creating and delivering landing pages for agency clients, as well as maintaining the existing ones.",
      "One of the notable highlights during my time there was the development and implementation of a shared template integrated with Webpack bundler. This significantly expedited the development process, allowing us to utilize powerful tools like Babel and PostCSS for enhanced developer experience, browser support, code reduction, and improved overall quality of the end product.",
      "Additionally, I optimized the developers' workflow by creating a Node.js script to automate the translation of static HTML pages saving hours of manual work. With our landings being translated into more than 10 languages and deployed across different domains, the script efficiently replaced the text with translated versions in a matter of seconds, leaving us to focus on ensuring everything looked as intended.",
      <>
        Besides, I was responsible for developing an intra-company handbook for
        new employees. It inspired me to build a{" "}
        {
          <Link
            href={"https://www.npmjs.com/package/naviscroll"}
            target={"_blank"}
          >
            {" "}
            <Text as={"span"} accent>
              {" "}
              lightweight library{" "}
            </Text>{" "}
          </Link>
        }{" "}
        that generated a navigation menu based on the content of the page. Using
        the Intersection Observer API, the module dynamically checked the
        visibility of different sections and highlighted the corresponding menu
        items. This enhanced the user experience and made navigation within the
        handbook seamless and intuitive.
      </>,
    ],
    period: [
      {
        date: new Date("2019-09-01"),
        text: "september 2019",
      },
      {
        date: new Date("2020-06-01"),
        text: "june 2020",
      },
    ],
  },
  {
    label: "2018",
    title: "Ligva, Frontend engineer",
    description: [
      "I was thrilled to receive a recommendation for a frontend position at Ligva, an exciting startup that focused on creating a platform for affordable, speedy, and secure text translations.",
      "When I became part of the team, the project was already in progress, the frontend was being built with Nuxt.js, the backend leveraged Laravel and Node.js. My role involved a wide range of responsibilities which included developing a chat module with WebSockets to facilitate seamless communication with clients, migrating the app to TailwindCSS for improved styling consistency, ensuring that the app was fully responsive and accessible on various devices, and creating visually appealing landing pages and emails. Despite our team's combined efforts and the app's promising prospects, unfortunate obstacles such as funding limitations and fierce competition ultimately resulted in the project being discontinued soon after its launch.",
    ],
    period: [
      {
        date: new Date("2018-10-01"),
        text: "october 2018",
      },
      {
        date: new Date("2019-08-01"),
        text: "august 2019",
      },
    ],
  },
  {
    label: "2018",
    title: "Freelance, Frontend engineer",
    description: [
      "I began my journey as a freelance developer, taking on small assignments and actively working on personal projects to further refine my skills and gain a deeper understanding of the field.",
      <>
        One of the most significant projects I had the opportunity to work on
        was the development of a website for a local hotel. This project allowed
        me to take on a holistic role, handling everything from client
        communication to design, development, and final delivery. For the
        frontend, I utilized Nuxt.js, while leveraging Figma for the design
        process. To streamline the deployment process, I automated it using bash
        scripts, deploying the website to a hosting provider. Given the heavy
        presence of images in the project, I made it a priority to implement
        optimization techniques that would significantly improve loading times.
        It was an invaluable experience that allowed me to learn and grow
        tremendously. You can find more detailed information about this project
        by visiting{" "}
        <Link
          href={`${Route.PROJECTS}/${ProjectSlug.VICTORIA}`}
          target={"_blank"}
        >
          <Text as={"span"} accent>
            this link
          </Text>
        </Link>
        .{" "}
      </>,
    ],
    period: [
      {
        text: "february 2018",
        date: new Date("2018-02-01"),
      },
      {
        text: "september 2018",
        date: new Date("2018-09-01"),
      },
    ],
  },
];
