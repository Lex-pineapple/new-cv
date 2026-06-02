import { LinedText } from "~/shared/lined-text";
import type { TWithClassname } from "~types/general";
import styles from "./main-slide.module.scss";
import cn from "classnames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export const MainSlide = ({ className }: TWithClassname) => {
  const firstStatRef = useRef<HTMLSpanElement>(null);
  const secondStatRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from(".projectsMain-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.from(".statistics-text", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.from(".statistics-number", {
      innerText: 0,
      duration: 1,
      snap: {
        innerText: 1,
      },
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "bottom center",
      },
    });
  });

  return (
    <div id="prj1" className={className}>
      <div className={styles.sectionWrapper}>
        <LinedText
          trigger={{
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
          }}
          className={"projects-h2"}
        >
          Проекты
        </LinedText>
        <div className={styles.mainContent__wrapper}>
          <div className={styles.mainContent__text}>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              В работе активно использую React 18+ и TypeScript – хуки,
              управление состоянием, маршрутизацию, оптимизацию, доступность.
              Для состояния применяю Redux Toolkit (также знакома с Zustand),
              для маршрутизации – React Router. Настраивала сборку на Webpack и
              Vite, разбираюсь в code splitting, мемоизации, виртуализации, умею
              работать с тяжёлыми состояниями.
            </p>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              Интегрирую фронтенд с REST, GraphQL, WebSocket/SSE, знаю
              OpenAPI/Swagger, использую Axios и Postman. Понимаю основы
              безопасности: CSP, XSS mitigation, разграничение прав. Уделяю
              внимание качеству: Jest / Vitest, Playwright / Cypress,
              Lighthouse, AXE, Storybook, ESLint, Prettier.
            </p>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              Поддерживаю брендинг, локализацию, PWA-сценарии, роли и права.
              Работаю с бэкенд-, AI- и платформенными командами, чтобы сценарии
              стабильно работали. Знакома с Docker, CI/CD (GitHub Actions /
              GitLab CI), имею опыт с дизайн-системами и компонентными
              библиотеками. Также готова работать с Svelte / SvelteKit (для
              поддержки OpenWebUI) и развиваться в AI / LLM / data-driven
              продуктах.
            </p>
          </div>
          <div className={styles.statistics__wrapper}>
            <p className={styles.statistics__item}>
              <span
                ref={firstStatRef}
                className={cn(styles.statistics__number, "statistics-number")}
              >
                6
              </span>
              <span className={"statistics-text"}>
                полноценных
                <br />
                проектов
              </span>
            </p>
            <p className={styles.statistics__item}>
              <span className={"statistics-text"}>Работала с</span>{" "}
              <span
                ref={secondStatRef}
                className={cn(styles.statistics__number, "statistics-number")}
              >
                5
              </span>{" "}
              <span className={"statistics-text"}>коммандами</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
