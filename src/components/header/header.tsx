import { useMediaQuery } from "usehooks-ts";
import { HeaderLink } from "./components/header-link";
import styles from "./header.module.scss";
import { BurgerBtn } from "~components/header/components/burger-btn";
import { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "~components/lang-switcher";

const LINKS = [
  { id: "home", href: "#main" },
  { id: "about", href: "#about" },
  { id: "stack", href: "#stack" },
  { id: "projects", href: "#projects" },
  { id: "recommend", href: "#reviews" },
  { id: "future", href: "#future" },
  { id: "contacts", href: "#contacts" },
];

type THeader = {
  onLinkClick: (href: string) => void;
};

export const Header = ({ onLinkClick }: THeader) => {
  const isMobile = useMediaQuery("(width < 1050px)");
  const [navOpen, setNavOpen] = useState(false);
  const { t } = useTranslation();

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
                <li key={link.id}>
                  <HeaderLink
                    onClick={(e) => onAnchorClick(e, link.href)}
                    name={t(`header.links.${link.id}`)}
                    href={link.href}
                  />
                </li>
              ))}
            </ul>
          </nav>
          {isMobile && (
            <div className={styles.langSwitcher__wrapper}>
              <LangSwitcher />
            </div>
          )}
        </div>
        {isMobile && (
          <BurgerBtn open={navOpen} onClick={() => setNavOpen(!navOpen)} />
        )}
      </div>
    </header>
  );
};
