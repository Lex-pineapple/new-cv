import styles from "./bottom-line.module.scss";

const CV_LINK = "logo.svg";

export const BottomLine = () => {
  return (
    <div className={styles.root}>
      <a href={CV_LINK} className={styles.link}>
        ✨ Скачать классическое резюме (PDF) ✨
      </a>
    </div>
  );
};
