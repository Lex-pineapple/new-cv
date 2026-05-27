import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./contacts.module.scss";

export const Contacts = ({ className }: TWithClassname) => {
  return (
    <section id="contacts" className={cn(styles.root, className)}>
      контакты
    </section>
  );
};
