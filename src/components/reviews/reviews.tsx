import type { TWithClassname } from "~types/general";

import styles from "./reviews.module.scss";
import { LinedText } from "~/shared/lined-text";
import { ReviewCard } from "~components/reviews/components/review-card";
import cn from "classnames";

const data = [
  {
    name: "Михаил Шелест",
    place: "Ктото гдето",
    text: "Таким образом, укрепление и развитие внутренней структуры не оставляет шанса для направлений прогрессивного развития. Банальные, но неопровержимые выводы, а также диаграммы связей заблокированы в рамках своих собственных рациональных ограничений. Принимая во внимание показатели успешности, новая модель организационной деятельности позволяет выполнить важные задания по разработке поэтапного и последовательного развития общества.",
  },
  {
    name: "Алексей Володько",
    place: "Ктото гдето",
    text: "Таким образом, укрепление и развитие внутренней структуры не оставляет шанса для направлений прогрессивного развития. Банальные, но неопровержимые выводы, а также диаграммы связей заблокированы в рамках своих собственных рациональных ограничений. Принимая во внимание показатели успешности, новая модель организационной деятельности позволяет выполнить важные задания по разработке поэтапного и последовательного развития общества.",
  },
];

export const Reviews = ({ className }: TWithClassname) => {
  return (
    <section id="reviews" className={cn(className, styles.root)}>
      <div className={styles.sectionWrapper}>
        <LinedText className={"review-hr"}>Рекомендации</LinedText>
        <p className={styles.mainText}>Что обо мне говорят мои руководители</p>
        <div className={styles.cards__wrapper}>
          {data.map((item) => (
            <ReviewCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
