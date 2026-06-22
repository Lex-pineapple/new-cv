import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <a href="https://github.com/Lex-pineapple" className={styles.link}>
          <img src="/github-icon.svg" className={styles.icon} />
          <p>Lex-pineapple</p>
        </a>
      </div>
    </footer>
  );
};
