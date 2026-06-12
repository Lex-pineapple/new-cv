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
    icon: "",
    name: "React",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
  },
  {
    icon: "",
    name: "Node.js",
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
