import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./future.module.scss";
import { LinedText } from "~/shared/lined-text";

export const Future = ({ className }: TWithClassname) => {
  return (
    <section id="future" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <LinedText className="future-hr">Развитие</LinedText>
        <div className={styles.text__wrapper}>
          <p className={styles.text}>
            В рамках спецификации современных стандартов, некоторые особенности
            внутренней политики и по сей день остаются уделом либералов, которые
            жаждут быть в равной степени предоставлены сами себе. Но
            существующая теория требует от нас анализа анализа существующих
            паттернов поведения. Как принято считать, явные признаки победы
            институционализации ассоциативно распределены по отраслям.
          </p>
          <p className={styles.text}>
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
