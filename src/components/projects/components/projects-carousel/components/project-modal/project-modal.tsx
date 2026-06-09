import type { CSSProperties, ReactNode } from "react";
import styles from "./project-modal.module.scss";
import { Closer } from "~assets/closer";
import cn from "classnames";

export type TProjectData = {
  title: string;
  companyIcon?: ReactNode;
  desc: string;
  items: {
    icon: string;
    text: string;
  }[];
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
  title = "TExt text text",
  isOpen,
  onClose,
  companyIcon,
  desc = "Приложение для ведения основных бизнес-процессов компании: управление сотрудниками (проведение калибровок, учет отпусков, персональных и контактных данных сотрудников, зарплат, отправки CV заказчикам), управление проектами и заказчиками, управление договорами и приложениями к ним, ведение документооборота.",
  items = [
    {
      text: "Спроектировала с нуля отказоустойчивую архитектуру взаимодействия Front- и Back-сервисов на Vue 3, сократив общие сроки интеграции команд.",
      icon: "/lab-svg-1.svg",
    },
    {
      text: "Разработала оптимальную структуру БД PostgreSQL: успешно реализовала весь цикл от сбора бизнес-сущностей до концептуального и логического проектирования.",
      icon: "/lab-svg-1.svg",
    },
    {
      text: "Ускорила выпуск продукта (Time-to-Market) за счет выстраивания эффективного взаимодействия с клиентом и грамотной трансформации требований в техническую документацию (BRD/SRS).",
      icon: "/lab-svg-1.svg",
    },
    {
      text: "Разработала архитектуру SPA-приложения с нуля: настроила безопасный роутинг, динамические зоны авторизации и централизованное управление состоянием через Vuex.",
      icon: "/lab-svg-2.svg",
    },
    {
      text: "Ускорила сборку интерфейса, внедрив современную компонентную базу Nuxt UI и обеспечив 100% адаптивность под Mobile и Desktop устройства.",
      icon: "/lab-svg-2.svg",
    },
  ],
  stack = [
    {
      icon: "",
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
  ],
  colors = {
    accent: "white",
    accentGlass: "#ffffff57",
    bg: "#ff1a02",
    textAccent: "black",
    textMain: "white",
  },
}: TProjectModal) => {
  return (
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
          <div className={styles.header__title}>{title}</div>
          <div className={styles.header__closerWrapper}>
            <button className={styles.header__closer} onClick={onClose}>
              <Closer color={colors.textAccent} />
            </button>
          </div>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.company}>{companyIcon}</div>
          <div className={styles.prj__desc}>{desc}</div>
          <div className={styles.prj__tasks}>
            {items.map((item) => (
              <div className={styles.tasks__item}>
                <div className={styles.tasks__iconWrapper}>
                  <img src={item.icon} />
                </div>
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
  );
};
