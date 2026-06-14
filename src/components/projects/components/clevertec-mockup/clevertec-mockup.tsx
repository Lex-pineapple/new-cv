import styles from "./clevertec-mockup.module.scss";

export const ClevertecMockup = () => {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockup__device}>
        <img className={styles.mockup__imgSite} src="/clevertec-site.png" />
        <img className={styles.mockup__imgDevice} src="/laptop-mockup.svg" />
      </div>
      <div className={styles.mockup__device_phone}>
        <img
          className={styles.mockup__imgSite_phone}
          src="/clevertec-site.png"
        />
        <img
          className={styles.mockup__imgDevice_phone}
          src="/phone-mockup.svg"
        />
      </div>
    </div>
  );
};
