import { useTranslation } from "react-i18next";
import styles from "./bottom-line.module.scss";

const CV_LINK = "logo.svg";

export const BottomLine = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <a href={CV_LINK} className={styles.link}>
        ✨ {t("download-pdf")} (PDF) ✨
      </a>
    </div>
  );
};
