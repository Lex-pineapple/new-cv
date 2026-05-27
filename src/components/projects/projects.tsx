import cn from "classnames";
import type { TWithClassname } from "~types/general";
import styles from "./projects.module.scss";
import type { RefObject } from "react";

type TProjects = {
  ref: RefObject<HTMLDivElement | null>;
} & TWithClassname;

export const Projects = ({ className, ref }: TProjects) => {
  return (
    <section id="projects" className={cn(styles.root, className)} ref={ref}>
      <div className={styles.slide}>1</div>
      <div className={styles.slide}>2</div>
      <div className={styles.slide}>3</div>
      <div className={styles.slide}>4</div>
      <div className={styles.slide}>5</div>
    </section>
  );
};
