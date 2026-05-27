import type { TWithClassname } from "~types/general";
import cn from "classnames";
import styles from "./future.module.scss";

export const Future = ({ className }: TWithClassname) => {
  return (
    <section id="future" className={cn(styles.root, className)}>
      future
    </section>
  );
};
