import styles from "./ilabu-prj.module.scss";
import cn from "classnames";
import { PrjTemplate } from "~components/projects/components/prj-template";
import type { TPrjType } from "~components/projects/projects";
import type { TWithClassname } from "~types/general";

const stack = [
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
];

export const IlabuPrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={1}
      onForwardClick={onForwardClick}
      onBackwardsClick={onBackwardsClick}
      stack={stack}
      imgSrc="/ilabu-bg.png"
      companyLogo={
        <div className={styles.companyLogo}>
          <img src="/ilabu-logo.png" className={styles.companyLogo__img} />
        </div>
      }
      translationKey="ilabu"
      colorMain={"#c1e5dd"}
      colorSecondary={"#f5fbf9"}
      className={className}
    >
      <div className={cn(styles.mockup__container_first, "prj2-phone-1")}></div>
      <div
        className={cn(styles.mockup__container_second, "prj2-phone-1")}
      ></div>
    </PrjTemplate>
  );
};
