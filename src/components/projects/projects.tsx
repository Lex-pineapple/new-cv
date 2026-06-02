import cn from "classnames";
import type { TWithClassname } from "~types/general";
import styles from "./projects.module.scss";
import type { RefObject } from "react";
import { MainSlide } from "~components/projects/components/main-slide";
import { IlabuPrj } from "~components/projects/components/ilabu-prj";
import { ClevertecSitePrj } from "~components/projects/components/clevertec-site-prj";

type TProjects = {
  ref: RefObject<HTMLDivElement | null>;
} & TWithClassname;

export const Projects = ({ className, ref }: TProjects) => {
  return (
    <section id="projects" className={cn(styles.root, className)} ref={ref}>
      <MainSlide className={styles.slide} />
      <IlabuPrj className={styles.slide} />
      <ClevertecSitePrj className={styles.slide} />
      <div className={styles.slide}>3</div>
      <div className={styles.slide}>4</div>
      <div className={styles.slide}>5</div>
    </section>
  );
};
