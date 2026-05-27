import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./about.module.scss";

export const About = ({ className }: TWithClassname) => {
  return (
    <section id="about" className={cn(styles.root, className)}>
      about
    </section>
  );
};
