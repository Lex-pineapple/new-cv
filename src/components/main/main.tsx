import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./main.module.scss";

export const Main = ({ className }: TWithClassname) => {
  return (
    <section id="main" className={cn(styles.root, className)}>
      main content
    </section>
  );
};
