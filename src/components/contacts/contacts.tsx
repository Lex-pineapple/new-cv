import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./contacts.module.scss";
import { ContactItem } from "~components/contacts/components/contact-item";

const contactData = [
  {
    text: "+375 (29) 142-83-61",
    href: "tel:+375291427361",
    icon: "/phone-icon.svg",
  },
  {
    text: "pineapplepear55@gmail.com",
    href: "mailto:pineapplepear55@gmail.com",
    icon: "/email-icon.svg",
  },
  {
    text: "Linkedin",
    href: "mailto:pineapplepear55@gmail.com",
    icon: "/linkedin-icon.svg",
  },
  {
    text: "Telegram",
    href: "mailto:pineapplepear55@gmail.com",
    icon: "/telegram-icon.svg",
  },
];

export const Contacts = ({ className }: TWithClassname) => {
  return (
    <section id="contacts" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <p className={styles.heading}>Мои контакты</p>
        <div className={styles.items__wrapper}>
          {contactData.map((item) => (
            <ContactItem {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
