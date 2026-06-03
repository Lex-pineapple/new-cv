import { HeaderLink } from "./components/header-link";
import styles from "./header.module.scss";

const LINKS = [
  { name: "Домой", href: "#main" },
  { name: "Обо мне", href: "#about" },
  { name: "Мой стэк", href: "#stack" },
  { name: "Проекты", href: "#projects" },
  { name: "Реккомендации", href: "#reviews" },
  { name: "Будущее", href: "#future" },
  { name: "Контакты", href: "#contacts" },
];

type THeader = {
  onLinkClick: (href: string) => void;
};

export const Header = ({ onLinkClick }: THeader) => {
  const onAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onLinkClick(href);
  };

  return (
    <header className={styles.root}>
      <div className={styles.contentWraper}>
        <div className={styles.logoWrapper}>
          <img src="logo.svg" />
        </div>
        <nav>
          <ul className={styles.linksWrapper}>
            {LINKS.map((link) => (
              <li key={link.name}>
                <HeaderLink
                  onClick={(e) => onAnchorClick(e, link.href)}
                  {...link}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
