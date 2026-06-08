import { useMediaQuery } from "usehooks-ts";
import { HeaderLink } from "./components/header-link";
import styles from "./header.module.scss";
import { BurgerBtn } from "~components/header/components/burger-btn";
import { useState } from "react";
import cn from "classnames";

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
  const isMobile = useMediaQuery("(width < 1050px)");
  const [navOpen, setNavOpen] = useState(false);

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
        <div
          className={cn(styles.linksNav__wrapper, {
            [styles.linksNav__wrapper_open]: isMobile && navOpen,
          })}
        >
          <nav className={styles.linksNav}>
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
        {isMobile && (
          <BurgerBtn open={navOpen} onClick={() => setNavOpen(!navOpen)} />
        )}
      </div>
    </header>
  );
};
