import cn from "classnames";
import type { TWithClassname } from "~types/general";
import styles from "./projects.module.scss";
import type { RefObject } from "react";
import { MainSlide } from "~components/projects/components/main-slide";
import { IlabuPrj } from "~components/projects/components/ilabu-prj";
import { ClevertecSitePrj } from "~components/projects/components/clevertec-site-prj";
import { CleverscopePrj } from "~components/projects/components/cleverscope-prj";
import { RetroBonusPrj } from "~components/projects/components/retro-bouns-prj";
import { PlatformPrj } from "~components/projects/components/platform-prj";
import { FormUiPrj } from "~components/projects/components/form-ui-prj";
import { LKPPrj } from "~components/projects/components/lkp-prj";

type TProjects = {
  ref: RefObject<HTMLDivElement | null>;
} & TWithClassname;

export const Projects = ({ className, ref }: TProjects) => {
  return (
    <section id="projects" className={cn(styles.root, className)} ref={ref}>
      <MainSlide className={styles.slide} />
      <IlabuPrj className={styles.slide} />
      <ClevertecSitePrj className={styles.slide} />
      <CleverscopePrj className={styles.slide} />
      <RetroBonusPrj className={styles.slide} />
      <PlatformPrj className={styles.slide} />
      <FormUiPrj className={styles.slide} />
      <LKPPrj className={styles.slide} />
    </section>
  );
};
