import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./future.module.scss";
import { LinedText } from "~/shared/lined-text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Future = ({ className }: TWithClassname) => {
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
          Развитие
        </LinedText>
        <div className={styles.text__wrapper}>
          <p className={cn(styles.text, "future-text")}>
            В рамках спецификации современных стандартов, некоторые особенности
            внутренней политики и по сей день остаются уделом либералов, которые
            жаждут быть в равной степени предоставлены сами себе. Но
            существующая теория требует от нас анализа анализа существующих
            паттернов поведения. Как принято считать, явные признаки победы
            институционализации ассоциативно распределены по отраслям.
          </p>
          <p className={cn(styles.text, "future-text")}>
            Вот вам яркий пример современных тенденций — перспективное
            планирование предполагает независимые способы реализации направлений
            прогрессивного развития. Таким образом, сплочённость команды
            профессионалов предполагает независимые способы реализации
            дальнейших направлений развития.
          </p>
        </div>
      </div>
    </section>
  );
};
