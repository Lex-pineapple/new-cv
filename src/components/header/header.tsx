import { HeaderLink } from "./components/header-link";
import styles from "./header.module.scss";

const LINKS = [
  { name: "Домой", href: "#main" },
  { name: "Обо мне", href: "#about" },
  { name: "Проекты", href: "#projects" },
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
      <nav>
        {LINKS.map((link) => (
          <HeaderLink
            key={link.name}
            onClick={(e) => onAnchorClick(e, link.href)}
            {...link}
          />
        ))}
      </nav>
    </header>
  );
};
