import cn from "classnames";
import styles from "./lang-switcher.module.scss";
import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLangChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.langSwitcher__wrapper}>
      <div className={styles.langSwitcher__container}>
        <label
          htmlFor="lang-en"
          className={cn(styles.langSwitcher__item, {
            [styles.langSwitcher__item_active]: i18n.language === "en",
          })}
        >
          EN
        </label>
        <input
          className={styles.langSwitcher__item}
          type="radio"
          name="langs"
          value="en"
          id="lang-en"
          checked={i18n.language === "en"}
          onChange={handleLangChage}
        />
        <label
          htmlFor="lang-ru"
          className={cn(styles.langSwitcher__item, {
            [styles.langSwitcher__item_active]: i18n.language === "ru",
          })}
        >
          RU
        </label>
        <input
          className={styles.langSwitcher__item}
          type="radio"
          name="langs"
          value="ru"
          id="lang-ru"
          checked={i18n.language === "ru"}
          onChange={handleLangChage}
        />
      </div>
    </div>
  );
};
