import { LinedText } from "~/shared/lined-text";
import type { TWithClassname } from "~types/general";
import styles from "./main-slide.module.scss";
import cn from "classnames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ProjectsCarousel } from "~components/projects/components/projects-carousel";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);

type TMainSlide = {
  setActive: () => void;
  isSmallVariant: boolean;
} & TWithClassname;

export const MainSlide = ({
  className,
  setActive,
  isSmallVariant,
}: TMainSlide) => {
  const firstStatRef = useRef<HTMLSpanElement>(null);
  const secondStatRef = useRef<HTMLSpanElement>(null);
  const { t } = useTranslation();

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

    gsap.from("#more-projects-btn", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
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
          {t("projects.main.header")}
        </LinedText>
        <div className={styles.mainContent__wrapper}>
          <div className={styles.mainContent__text}>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              {t("projects.main.p1")}
            </p>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              {t("projects.main.p2")}
            </p>
            <p className={cn(styles.projectsMain__text, "projectsMain-text")}>
              {t("projects.main.p3")}
            </p>
            {!isSmallVariant && (
              <button
                id="more-projects-btn"
                className={styles.btn}
                onClick={() => setActive()}
              >
                {t("projects.main.showAllBtn")}
              </button>
            )}
          </div>
          <div className={styles.statistics__wrapper}>
            <p className={styles.statistics__item}>
              <span
                ref={firstStatRef}
                className={cn(styles.statistics__number, "statistics-number")}
              >
                7
              </span>
              <span className={"statistics-text"}>
                {t("projects.main.stats.stat1start")}
                <br />
                {t("projects.main.stats.stat1end")}
              </span>
            </p>
            <p className={styles.statistics__item}>
              <span className={"statistics-text"}>
                {t("projects.main.stats.stat2start")}
              </span>{" "}
              <span
                ref={secondStatRef}
                className={cn(styles.statistics__number, "statistics-number")}
              >
                7
              </span>{" "}
              <span className={"statistics-text"}>
                {t("projects.main.stats.stat2end")}
              </span>
            </p>
          </div>
        </div>
        {isSmallVariant && <ProjectsCarousel />}
      </div>
    </div>
  );
};
