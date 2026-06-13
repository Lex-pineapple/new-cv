import { PrjTemplate } from "~components/projects/components/prj-template/prj-template";
import { RgsLogo } from "~components/projects/components/rgs-logo";
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
];

export const WebClient = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={5}
      onBackwardsClick={onBackwardsClick}
      onForwardClick={onForwardClick}
      stack={stack}
      imgSrc="/rgs-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<RgsLogo />}
      translationKey="web-client"
    />
  );
};
