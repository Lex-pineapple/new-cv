import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import styles from "./prj-template.module.scss";
import type { TWithClassname } from "~types/general";
import { PrjHeader } from "~components/projects/components/prj-header";
import { PrjDescr } from "~components/projects/components/prj-descr";
import cn from "classnames";
import { useTranslation } from "react-i18next";

type TChivo = {
  icon: string;
  text: string;
};

type TPrjTemplate = {
  id: number;
  colorMain: string;
  colorSecondary: string;
  companyLogo: ReactNode;
  imgSrc: string;
  stack: {
    icon: string;
    name: string;
  }[];
  onForwardClick: (id: number) => void;
  onBackwardsClick: (id: number) => void;
  translationKey: string;
} & TWithClassname;

export const PrjTemplate = ({
  id,
  children,
  colorMain,
  colorSecondary,
  className,
  imgSrc,
  companyLogo,
  stack,
  onForwardClick,
  onBackwardsClick,
  translationKey,
}: PropsWithChildren<TPrjTemplate>) => {
  const { t } = useTranslation();

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
          <PrjHeader>{t(`projects.${translationKey}.title`)}</PrjHeader>
          <PrjDescr>{t(`projects.${translationKey}.description`)}</PrjDescr>
          <div className={styles.prjAchievements__wrapper}>
            {(
              t(`projects.${translationKey}.chivos`, {
                returnObjects: true,
              }) as TChivo[]
            ).map((item) => (
              <div
                className={cn(styles.prjAchievements__item, "prj-achievement", {
                  [styles.hasIcon]: item.icon,
                })}
              >
                {item.icon && (
                  <div>
                    <img
                      className={styles.prjAchievements__img}
                      src={item.icon}
                    />
                  </div>
                )}
                <p className={styles.prjAchievements__text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.childrenWrapper}>
          <p className={styles.stack__h}>Стек проекта</p>
          <div className={styles.stack}>
            {stack.map((item) => {
              return (
                <div className={styles.stack__item}>
                  <img className={styles.stack__item_icon} src={item.icon} />
                  <p className={styles.stack__item_text}>{item.name}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.childrenContentWrapper}>{children}</div>
        </div>
      </div>
      <button
        className={styles.btn_backwards}
        onClick={() => onBackwardsClick(id)}
      >
        <img src="/arrow-icon.svg" />
      </button>
      {id !== 7 && (
        <button
          className={styles.btn_forward}
          onClick={() => onForwardClick(id)}
        >
          <img src="/arrow-icon.svg" />
        </button>
      )}
    </div>
  );
};
