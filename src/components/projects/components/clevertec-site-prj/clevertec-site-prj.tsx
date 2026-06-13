import { PrjTemplate } from "~components/projects/components/prj-template";
import type { TWithClassname } from "~types/general";
import styles from "./clevertec-site-prj.module.scss";
import { ClevertecLogo } from "~components/projects/components/clevertec-logo";
import type { TPrjType } from "~components/projects/projects";

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
];

export const ClevertecSitePrj = ({
  className,
  onBackwardsClick,
  onForwardClick,
}: TWithClassname & TPrjType) => {
  return (
    <PrjTemplate
      id={2}
      onBackwardsClick={onBackwardsClick}
      onForwardClick={onForwardClick}
      stack={stack}
      imgSrc="/clevertec-bg.jpg"
      className={className}
      colorMain={"#ffa0a0"}
      colorSecondary={"#fffcfc"}
      companyLogo={<ClevertecLogo />}
      translationKey={"clevertec-site"}
    >
      <div className={styles.mockup}>
        <div className={styles.mockup__device}>
          <img className={styles.mockup__imgSite} src="/clevertec-site.png" />
          <img className={styles.mockup__imgDevice} src="/laptop-mockup.svg" />
        </div>
        <div className={styles.mockup__device_phone}>
          <img
            className={styles.mockup__imgSite_phone}
            src="/clevertec-site.png"
          />
          <img
            className={styles.mockup__imgDevice_phone}
            src="/phone-mockup.svg"
          />
        </div>
      </div>
    </PrjTemplate>
  );
};
