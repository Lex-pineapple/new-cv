import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./about.module.scss";
import { LinedText } from "~/shared/lined-text";
import { SquigglyLine } from "~assets/squiggly-line";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(DrawSVGPlugin);

export const About = ({ className }: TWithClassname) => {
  const { t } = useTranslation();

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
          {t("about.header")}
        </LinedText>
        <p className={cn(styles.about__header, "about-header")}>
          {t("about.tagline")}
        </p>
        <p className={cn(styles.about__text, "about-text")}>{t("about.p1")}</p>
        <p className={cn(styles.about__text, "about-text")}>{t("about.p2")}</p>
        <p className={cn(styles.about__text, "about-text")}>{t("about.p3")}</p>
      </div>
      <div className={styles.svgLine_container}>
        <SquigglyLine className={cn(styles.line, "svg-line")} />
      </div>
    </section>
  );
};
