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
];

export const PlatformPrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={6}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/alfaleasing-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={undefined}
      translationKey="platform"
    />
  );
};
