import styles from "./ilabu-logo.module.scss";

export const ILabuLogo = () => {
  return (
    <div className={styles.companyLogo}>
      <img src="/ilabu-logo.png" className={styles.companyLogo__img} />
    </div>
  );
};
