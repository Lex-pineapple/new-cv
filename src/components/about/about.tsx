import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./about.module.scss";
import { LinedText } from "~/shared/lined-text";
import { SquigglyLine } from "~assets/squiggly-line";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(DrawSVGPlugin);

export const About = ({ className }: TWithClassname) => {
  useGSAP(() => {
    gsap.from(`.about-header`, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
      },
    });
    gsap.from(".about-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.from("#linePath", {
      duration: 1,
      drawSVG: "0",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
      },
    });
  });

  return (
    <section id="about" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <LinedText
          className="about-hr"
          trigger={{
            trigger: "#about",
            start: "top center",
            end: "bottom center",
          }}
        >
          Обо мне
        </LinedText>
        <p className={cn(styles.about__header, "about-header")}>
          Я фронтенд-разработчик с 4-летним коммерческим опытом.
        </p>
        <p className={cn(styles.about__text, "about-text")}>
          В работе активно использую React 18+ и TypeScript – хуки, управление
          состоянием, маршрутизацию, оптимизацию, доступность. Для состояния
          применяю Redux Toolkit (также знакома с Zustand), для маршрутизации –
          React Router. Настраивала сборку на Webpack и Vite, разбираюсь в code
          splitting, мемоизации, виртуализации, умею работать с тяжёлыми
          состояниями.
        </p>
        <p className={cn(styles.about__text, "about-text")}>
          Интегрирую фронтенд с REST, GraphQL, WebSocket/SSE, знаю
          OpenAPI/Swagger, использую Axios и Postman. Понимаю основы
          безопасности: CSP, XSS mitigation, разграничение прав. Уделяю внимание
          качеству: Jest / Vitest, Playwright / Cypress, Lighthouse, AXE,
          Storybook, ESLint, Prettier.
        </p>
        <p className={cn(styles.about__text, "about-text")}>
          Поддерживаю брендинг, локализацию, PWA-сценарии, роли и права. Работаю
          с бэкенд-, AI- и платформенными командами, чтобы сценарии стабильно
          работали. Знакома с Docker, CI/CD (GitHub Actions / GitLab CI), имею
          опыт с дизайн-системами и компонентными библиотеками. Также готова
          работать с Svelte / SvelteKit (для поддержки OpenWebUI) и развиваться
          в AI / LLM / data-driven продуктах.
        </p>
      </div>
      <div className={styles.svgLine_container}>
        <SquigglyLine className={cn(styles.line, "svg-line")} />
      </div>
    </section>
  );
};
