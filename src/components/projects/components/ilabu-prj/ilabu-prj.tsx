import styles from "./ilabu-prj.module.scss";
import cn from "classnames";
import { PrjTemplate } from "~components/projects/components/prj-template";
import type { TPrjType } from "~components/projects/projects";
import type { TWithClassname } from "~types/general";

const stack = [
  {
    icon: "",
    name: "TypeScript",
  },
  {
    icon: "",
    name: "JavaScript",
  },
  {
    icon: "",
    name: "HTML",
  },
  {
    icon: "",
    name: "CSS/SCSS",
  },
  {
    icon: "",
    name: "React",
  },
  {
    icon: "",
    name: "Redux",
  },
  {
    icon: "",
    name: "RTK Query",
  },
  {
    icon: "",
    name: "Chakra UI",
  },
  {
    icon: "",
    name: "NestJS",
  },
  {
    icon: "",
    name: "PostgreSQL",
  },
  {
    icon: "",
    name: "Jest",
  },
  {
    icon: "",
    name: "Cypress",
  },
  {
    icon: "",
    name: "React Hook Form",
  },
  {
    icon: "",
    name: "Docker",
  },
  {
    icon: "",
    name: "Github Actions",
  },
  {
    icon: "",
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
