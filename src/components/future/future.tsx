import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./future.module.scss";
import { LinedText } from "~/shared/lined-text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);

export const Future = ({ className }: TWithClassname) => {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from(".future-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#future",
        start: "top center",
        end: "bottom center",
      },
    });
  });
  return (
    <section id="future" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <LinedText
          className="future-hr"
          trigger={{
            trigger: "#future",
            start: "top center",
            end: "bottom center",
          }}
        >
          {t("future.header")}
        </LinedText>
        <div className={styles.text__wrapper}>
          <p className={cn(styles.text, "future-text")}>{t("future.p1")}</p>
          <p className={cn(styles.text, "future-text")}>{t("future.p2")}</p>
        </div>
      </div>
    </section>
  );
};
