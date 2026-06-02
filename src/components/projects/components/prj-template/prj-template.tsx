import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import styles from "./prj-template.module.scss";
import type { TWithClassname } from "~types/general";
import { PrjHeader } from "~components/projects/components/prj-header";
import { PrjDescr } from "~components/projects/components/prj-descr";

type TPrjTemplate = {
  title: string;
  description: string;
  colorMain: string;
  colorSecondary: string;
  companyLogo: ReactNode;
  data: {
    text: string;
    icon: string;
  }[];
  imgSrc: string;
} & TWithClassname;

export const PrjTemplate = ({
  children,
  title,
  description,
  colorMain,
  colorSecondary,
  data,
  className,
  imgSrc,
  companyLogo,
}: PropsWithChildren<TPrjTemplate>) => {
  return (
    <div
      id="prj2"
      className={className}
      style={
        {
          "--accent-main": colorMain,
          "--accent-off-white": colorSecondary,
          "--img-src": `url('${imgSrc}')`,
        } as CSSProperties
      }
    >
      <div className={styles.sectionWrapper}>
        <div className={styles.descrSection}>
          {companyLogo}
          <PrjHeader>{title}</PrjHeader>
          <PrjDescr>{description}</PrjDescr>
          <div className={styles.prjAchievements__wrapper}>
            {data.map((item) => (
              <div className={styles.prjAchievements__item}>
                <div>
                  <img
                    className={styles.prjAchievements__img}
                    src={item.icon}
                  />
                </div>
                <p className={styles.prjAchievements__text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.childrenWrapper}>{children}</div>
      </div>

      <div className={styles.bgSkewedImg__wrapper}></div>
    </div>
  );
};
