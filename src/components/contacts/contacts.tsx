import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./contacts.module.scss";
import { ContactItem } from "~components/contacts/components/contact-item";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);

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
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contacts",
        start: "top bottom",
        end: "bottom center",
      },
    });
  });

  return (
    <section id="contacts" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <p className={styles.heading}>{t("contacts.header")}</p>
        <div className={styles.items__wrapper}>
          {contactData.map((item) => (
            <ContactItem {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
