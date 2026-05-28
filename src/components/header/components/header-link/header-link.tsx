import styles from "./header-link.module.scss";

type THeaderLink = {
  name: string;
  href: string;
  onClick: (e: React.MouseEvent) => void;
};

export const HeaderLink = ({ name, href, onClick }: THeaderLink) => {
  return (
    <a href={href} onClick={onClick} className={styles.root}>
      {name}
    </a>
  );
};
