import cn from "classnames";
import styles from "./review-card.module.scss";

type TReviewCard = {
  name: string;
  place: string;
  text: string;
};

export const ReviewCard = ({ name, place, text }: TReviewCard) => {
  return (
    <div className={cn(styles.root, "review-card")}>
      <div className={styles.avatar}>{name.split("")[0].toUpperCase()}</div>
      <p className={styles.title}>{name}</p>
      <p className={styles.subtitle}>{place}</p>
      <p className={styles.mainText}>{text}</p>
    </div>
  );
};
