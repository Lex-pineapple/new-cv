import type { CSSProperties, ReactNode } from "react";
import styles from "./project-modal.module.scss";
import { Closer } from "~assets/closer";
import cn from "classnames";
import { useTranslation } from "react-i18next";

type TChivo = {
  icon: string;
  text: string;
};

export type TProjectData = {
  companyIcon?: ReactNode;
  translationKey?: string;
  stack: {
    icon: string;
    name: string;
  }[];
  colors: {
    bg: string;
    accent: string;
    accentGlass: string;
    textAccent?: string;
    textMain?: string;
  };
};

type TProjectModal = {
  isOpen: boolean;
  onClose: () => void;
} & TProjectData;

export const ProjectModal = ({
  translationKey,
  isOpen,
  onClose,
  companyIcon,
  stack,
  colors,
}: TProjectModal) => {
  const { t } = useTranslation();

  return translationKey ? (
    <div
      className={cn(styles.overlay, {
        [styles.overlay_open]: isOpen,
      })}
      style={
        {
          "--accent": colors.accent,
          "--accentGlass": colors.accentGlass,
          "--bg": colors.bg,
          "--textAccent": colors.textAccent ?? "black",
          "--textMain": colors.textMain ?? "white",
        } as CSSProperties
      }
    >
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <div className={styles.header__title}>
            {t(`projects.${translationKey}.title`)}
          </div>
          <div className={styles.header__closerWrapper}>
            <button className={styles.header__closer} onClick={onClose}>
              <Closer color={colors.textAccent} />
            </button>
          </div>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.company}>{companyIcon}</div>
          <div className={styles.prj__desc}>
            {t(`projects.${translationKey}.description`)}
          </div>
          <div className={styles.prj__tasks}>
            {(
              t(`projects.${translationKey}.chivos`, {
                returnObjects: true,
              }) as TChivo[]
            ).map((item) => (
              <div className={styles.tasks__item}>
                {item.icon && (
                  <div className={styles.tasks__iconWrapper}>
                    <img src={item.icon} />
                  </div>
                )}
                <div className={styles.tasks__text}>{item.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.prj__stack}>
            <div className={styles.stack__header}>Стек проекта</div>
            <div className={styles.stack__wrapper}>
              {stack.map((item) => (
                <div className={styles.stack__item}>
                  <div className={styles.stack__iconWrapper}>
                    <img src={item.icon} />
                  </div>
                  <div className={styles.stack__text}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
