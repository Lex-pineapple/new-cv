import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./main.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import { LinedText } from "~/shared/lined-text";
import { useMediaQuery } from "usehooks-ts";
import { LangSwitcher } from "~components/lang-switcher";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

export const Main = ({ className }: TWithClassname) => {
  const isMobile = useMediaQuery("(width < 900px)");
  const isTablet = useMediaQuery("(width < 1050px)");
  const { t } = useTranslation();

  const ref = useRef(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // on load animations
        mm.add("(width > 1390px)", () => {
          gsap.from("#shape-flower", {
            opacity: 0,
            x: -100,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
          gsap.to("#shape-flower", {
            rotation: -15,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        });
        mm.add("(width > 550px)", () => {
          gsap.from("#shape-clover", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
          gsap.to("#shape-clover", {
            rotation: 45,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
          gsap.from("#shape-star", {
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power1.inOut",
          });
          gsap.to("#shape-star", {
            scale: 0.5,
            duration: "random(0.5, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.from("#shape-circle", {
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power1.out",
          });
          gsap.to("#shape-circle", {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "bounce.out",
          });
        });

        gsap.from("#shape-star-left", {
          opacity: 0,
          duration: 2,
          stagger: 0.2,
          ease: "power1.out",
        });
        gsap.to("#shape-star-left", {
          scale: 0.5,
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const splitLN = SplitText.create("#h1-lastName", { type: "chars" });
        gsap.from(splitLN.chars, {
          y: 40,
          color: "#fff",
          opacity: 0,
          stagger: { each: 0.04, from: "start" },
          duration: 0.6,
          ease: "sine.out",
        });
        const splitFN = SplitText.create("#h1-firstName", { type: "chars" });
        gsap.from(splitFN.chars, {
          y: 40,
          color: "#ffa9d8",
          opacity: 0,
          stagger: { each: 0.04, from: "start" },
          duration: 0.6,
          ease: "sine.out",
        });
        gsap.from("#desc-title", {
          x: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        gsap.from("#desc > p", {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        });
        gsap.from("#contacts-main", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        });
        gsap.from("#circle-bg", {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    },
    { scope: ref },
  );
  return (
    <section id="main" className={cn(styles.root, className)} ref={ref}>
      <div className={styles.sectionWrapper}>
        <h1 id="h1" className={styles.headline}>
          <span id="h1-lastName" className={styles.headline_color}>
            {t("main.lastName")}
          </span>
          <br />
          <span id="h1-firstName">{t("main.firstName")}</span>
        </h1>
        <div className={styles.box}>
          <div id="circle-bg" className={styles.circleBg}>
            <img
              src={
                isMobile
                  ? "main-pic-placeholder-square.png"
                  : "main-pic-placeholder.png"
              }
              className={styles.mainImg}
            />
          </div>
        </div>
        <div className={styles.desc__wrapper}>
          <LinedText className="main-hr">{t("main.position")}</LinedText>
          <p id="desc-title" className={styles.desc__headline}>
            {t("main.tagline")}
          </p>
          <div id="desc" className={styles.desc__main}>
            <p className={styles.desc__text}>{t("main.textMainOne")}</p>
            <p className={styles.desc__text}>{t("main.textMainTwo")}</p>
          </div>
          <ul id="contacts-main" className={styles.contacts}>
            <li className={styles.contacts__item}>
              <a href="tel:+375291427361" className={styles.contacts__link}>
                +375 (29) 142-83-61
              </a>
            </li>
            <li className={styles.contacts__item}>
              <a
                href="mailto:pineapplepear55@gmail.com"
                className={styles.contacts__link}
              >
                pineapplepear55@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div id="shape-flower" className={styles.shape_flower}></div>
        <div id="shape-clover" className={styles.shape_clover}></div>
        <div id="shape-star" className={styles.shape_star}></div>
        <div id="shape-star-left" className={styles.shape_star_left}></div>
        <div id="shape-circle" className={styles.shape_circle}></div>
      </div>
      {!isTablet && <LangSwitcher />}
      <div className={styles.scrollPrompter}></div>
    </section>
  );
};
