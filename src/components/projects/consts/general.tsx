import type { ReactNode } from "react";
import { AlfaleasingLogo } from "~components/projects/components/alfaleasing-logo";
import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
import { ILabuLogo } from "~components/projects/components/ilabu-logo";
import { RgsLogo } from "~components/projects/components/rgs-logo";

export type TProjectData = {
  translationKey: string;
  companyIcon: ReactNode;
  imgSrc: string;
  stack: {
    icon: string;
    name: string;
  }[];
  colors: {
    bg: string;
    accent: string;
    accentGlass: string;
    textAccent: string;
    textMain: string;
    mainBig: string;
    secondaryBig: string;
  };
};

export const projectsData: TProjectData[] = [
  {
    translationKey: "ilabu",
    companyIcon: <ILabuLogo />,
    imgSrc: "/ilabu-bg.png",
    stack: [
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "Redux",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "RTK Query",
      },
      {
        icon: "/icons/chakraui-icon.svg",
        name: "Chakra UI",
      },
      {
        icon: "/icons/nestjs-icon.svg",
        name: "NestJS",
      },
      {
        icon: "/icons/postgresql-icon.svg",
        name: "PostgreSQL",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/reacthookform-icon.svg",
        name: "React Hook Form",
      },
      {
        icon: "/icons/docker-icon.svg",
        name: "Docker",
      },
      {
        icon: "/icons/github-actions.svg",
        name: "Github Actions",
      },
      {
        icon: "/icons/vite-icon.svg",
        name: "Vite",
      },
    ],
    colors: {
      bg: "#c1e5dd",
      accent: "white",
      accentGlass: "#ffffff57",
      textAccent: "black",
      textMain: "black",
      mainBig: "#c1e5dd",
      secondaryBig: "#f5fbf9",
    },
  },
  {
    translationKey: "clevertec-site",
    companyIcon: <ClevertecLogo />,
    imgSrc: "/clevertec-bg.jpg",
    stack: [
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        icon: "/icons/cssmodules-icon.svg",
        name: "CSS Modules",
      },
      {
        icon: "/icons/ant-design-icon.svg",
        name: "Ant Design",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
    ],
    colors: {
      bg: "white",
      accent: "#1b0000",
      accentGlass: "#ffa9a91a",
      textAccent: "white",
      textMain: "",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
  {
    translationKey: "cleverscope",
    companyIcon: <ClevertecLogo />,
    imgSrc: "/clevertec-bg.jpg",
    stack: [
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        icon: "/icons/fastify-icon.svg",
        name: "Fastify",
      },
      {
        icon: "/icons/mongodb-icon.svg",
        name: "MongoDB",
      },
      {
        icon: "/icons/ant-design-icon.svg",
        name: "Ant Design",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/formik-icon.svg",
        name: "Formik",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "Redux",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "Redux Saga/Redux Thunk",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "RTK Query",
      },
    ],
    colors: {
      bg: "white",
      accent: "#1b0000",
      accentGlass: "#ffa9a91a",
      textAccent: "white",
      textMain: "",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
  {
    translationKey: "retro-bonus",
    companyIcon: <AlfaleasingLogo />,
    imgSrc: "/alfaleasing-bg.jpg",
    stack: [
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "RTK Query",
      },
      {
        icon: "/icons/react-router-icon.svg",
        name: "React Router",
      },
      {
        icon: "/icons/swr-icon.svg",
        name: "SWR",
      },
      {
        icon: "/icons/cssmodules-icon.svg",
        name: "CSS Modules",
      },
      {
        icon: "",
        name: "@alfalab/core-components",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/playwright-icon.svg",
        name: "Playwright",
      },
      {
        icon: "/icons/reacthookform-icon.svg",
        name: "React Hook Form",
      },
      {
        icon: "/icons/formik-icon.svg",
        name: "Formik",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "Redux",
      },
      {
        icon: "/icons/gitlab-icon.svg",
        name: "Gitlab CI",
      },
    ],
    colors: {
      bg: "#ff1300",
      accent: "white",
      accentGlass: "#ffdad72b",
      textAccent: "black",
      textMain: "white",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
  {
    translationKey: "web-client",
    companyIcon: <RgsLogo />,
    imgSrc: "/rgs-bg.jpg",
    stack: [
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/tanstack-icon.svg",
        name: "TanStack Query",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/reacthookform-icon.svg",
        name: "React Hook Form",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
    ],
    colors: {
      bg: "#b70038",
      accent: "white",
      accentGlass: "#ffffff29",
      textAccent: "black",
      textMain: "white",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
  {
    translationKey: "platform",
    companyIcon: <AlfaleasingLogo />,
    imgSrc: "/alfaleasing-bg.jpg",
    stack: [
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        icon: "/icons/cra-icon.svg",
        name: "Create-React-App",
      },
      {
        icon: "",
        name: "@alfalab/core-components",
      },
      {
        icon: "/icons/expressjs-icon.svg",
        name: "Express.js",
      },
      {
        icon: "/icons/postgresql-icon.svg",
        name: "PostgreSQL",
      },
      {
        icon: "",
        name: "Telegraf",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/vitest-icon.svg",
        name: "Vitest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/reacthookform-icon.svg",
        name: "React Hook Form",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
      {
        icon: "/icons/vite-icon.svg",
        name: "Vite",
      },
      {
        icon: "/icons/webback-icon.svg",
        name: "Webpack",
      },
      {
        icon: "/icons/gitlab-icon.svg",
        name: "Gitlab CI",
      },
    ],
    colors: {
      bg: "#ff1300",
      accent: "white",
      accentGlass: "#ffdad72b",
      textAccent: "black",
      textMain: "white",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
  {
    translationKey: "lkp",
    companyIcon: <AlfaleasingLogo />,
    imgSrc: "/alfaleasing-bg.jpg",
    stack: [
      {
        icon: "/icons/js-icon.svg",
        name: "JavaScript",
      },
      {
        icon: "/icons/ts-icon.svg",
        name: "TypeScript",
      },
      {
        icon: "/icons/html-icon.svg",
        name: "HTML",
      },
      {
        icon: "/icons/css-icon.svg",
        name: "CSS/SCSS",
      },
      {
        icon: "/icons/react-icon.svg",
        name: "React",
      },
      {
        icon: "/icons/nextjs-icon.svg",
        name: "Next.js",
      },
      {
        icon: "/icons/swr-icon.svg",
        name: "SWR",
      },
      {
        icon: "/icons/cssmodules-icon.svg",
        name: "CSS Modules",
      },
      {
        icon: "/icons/styled-components-icon.svg",
        name: "Styled Components",
      },
      {
        icon: "",
        name: "@alfalab/core-components",
      },
      {
        icon: "/icons/jest-icon.svg",
        name: "Jest",
      },
      {
        icon: "/icons/cypress-icon.svg",
        name: "Cypress",
      },
      {
        icon: "/icons/playwright-icon.svg",
        name: "Playwright",
      },
      {
        icon: "/icons/reacthookform-icon.svg",
        name: "React Hook Form",
      },
      {
        icon: "/icons/formik-icon.svg",
        name: "Formik",
      },
      {
        icon: "/icons/axios-icon.svg",
        name: "Axios",
      },
      {
        icon: "/icons/zustand-icon.svg",
        name: "Zustand",
      },
      {
        icon: "/icons/redux-icon.svg",
        name: "Redux",
      },
      {
        icon: "/icons/gitlab-icon.svg",
        name: "Gitlab CI",
      },
    ],
    colors: {
      bg: "#ff1300",
      accent: "white",
      accentGlass: "#ffdad72b",
      textAccent: "black",
      textMain: "white",
      mainBig: "#ffa0a0",
      secondaryBig: "#fffcfc",
    },
  },
];
