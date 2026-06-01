import type { TWithClassname } from "~types/general";

import styles from "./stack.module.scss";
import { LinedText } from "~/shared/lined-text";
import cn from "classnames";

export const Stack = ({ className }: TWithClassname) => {
  return (
    <section id="stack" className={cn(styles.root, className)}>
      <div className={styles.sectionWrapper}>
        <LinedText
          className="stack-hr"
          trigger={{
            trigger: "#stack",
            start: "top center",
            end: "bottom center",
          }}
        >
          Мой стэк
        </LinedText>
      </div>
    </section>
  );
};
