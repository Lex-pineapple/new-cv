import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import styles from "./prj-template.module.scss";
import type { TWithClassname } from "~types/general";
import { PrjHeader } from "~components/projects/components/prj-header";
import { PrjDescr } from "~components/projects/components/prj-descr";
import cn from "classnames";

type TPrjTemplate = {
  id: number;
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
  stack: {
    icon: string;
    name: string;
  }[];
  onForwardClick: (id: number) => void;
  onBackwardsClick: (id: number) => void;
} & TWithClassname;

export const PrjTemplate = ({
  id,
  children,
  title,
  description,
  colorMain,
  colorSecondary,
  data,
  className,
  imgSrc,
  companyLogo,
  stack,
  onForwardClick,
  onBackwardsClick,
}: PropsWithChildren<TPrjTemplate>) => {
  return (
    <div
      id={`prj${id}`}
      className={cn(className, styles.root)}
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
        <div className={styles.childrenWrapper}>
          <p className={styles.stack__h}>Стек проекта</p>
          <div className={styles.stack}>
            {stack.map((item) => {
              return <div className={styles.stack__item}>{item.name}</div>;
            })}
          </div>
          {children}
        </div>
      </div>
      <button
        className={styles.btn_backwards}
        onClick={() => onBackwardsClick(id)}
      >
        O
      </button>
      {id !== 7 && (
        <button
          className={styles.btn_forward}
          onClick={() => onForwardClick(id)}
        >
          T
        </button>
      )}
    </div>
  );
};
