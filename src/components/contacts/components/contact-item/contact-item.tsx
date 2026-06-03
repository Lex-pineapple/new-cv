import styles from "./contact-item.module.scss";

type TContactItem = {
  icon: string;
  text: string;
  href: string;
};

export const ContactItem = ({ icon, text, href }: TContactItem) => {
  return (
    <a href={href} className={styles.root}>
      <div className={styles.img__wrapper}>
        <img src={icon} />
      </div>
      <p>{text}</p>
    </a>
  );
};
