import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
import type { TPrjType } from "~components/projects/projects";
import type { TWithClassname } from "~types/general";

const stack = [
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
];

export const LKPPrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={7}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/alfaleasing-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={undefined}
      translationKey="lkp"
    />
  );
};
