import cn from "classnames";
import type { TWithClassname } from "~types/general";
import styles from "./projects.module.scss";
import { useRef } from "react";
import { MainSlide } from "~components/projects/components/main-slide";
import { IlabuPrj } from "~components/projects/components/ilabu-prj";
import { ClevertecSitePrj } from "~components/projects/components/clevertec-site-prj";
import { CleverscopePrj } from "~components/projects/components/cleverscope-prj";
import { RetroBonusPrj } from "~components/projects/components/retro-bouns-prj";
import { PlatformPrj } from "~components/projects/components/platform-prj";
import { LKPPrj } from "~components/projects/components/lkp-prj";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "usehooks-ts";
import { ModalProvider } from "~/providers";
import { WebClient } from "~components/projects/components/web-client";

gsap.registerPlugin(useGSAP);

export type TPrjType = {
  onForwardClick: (id: number) => void;
  onBackwardsClick: (id: number) => void;
};

export const Projects = ({ className }: TWithClassname) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isDesktopSmall = useMediaQuery("(width < 1400px)");

  const { contextSafe } = useGSAP(() => {});

  const onPrjForward = contextSafe((id: number) => {
    const newId = id + 1;
    gsap.to("#projects", {
      xPercent: -12.5 * newId,
      ease: "power1.inOut",
    });
  });
  const onPrjBackwards = contextSafe((id: number) => {
    const newId = id - 1;
    gsap.to("#projects", {
      xPercent: -12.5 * newId,
      ease: "power1.inOut",
    });
  });
  const onShowAllProjects = contextSafe(() => {
    const showAllTween = gsap.to("#projects", {
      xPercent: -12.5,
      ease: "power1.inOut",
    });

    gsap.from(".prj2-phone-1", {
      y: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        containerAnimation: showAllTween,
        trigger: "#prj1",
        start: "top bottom",
        end: "bottom center",
      },
    });

    gsap.from(".prj-header", {
      x: 100,
      duration: 0.5,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        containerAnimation: showAllTween,
        trigger: "#prj1",
        start: "top bottom",
        end: "bottom center",
      },
    });
  });

  return (
    <ModalProvider>
      <section
        id="projects"
        className={cn(styles.root, className, {
          [styles.isDesktopSmall]: isDesktopSmall,
        })}
        ref={projectsRef}
      >
        <MainSlide
          className={styles.slide}
          setActive={() => onShowAllProjects()}
          isSmallVariant={isDesktopSmall}
        />
        {!isDesktopSmall && (
          <>
            <IlabuPrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <ClevertecSitePrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <CleverscopePrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <RetroBonusPrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <WebClient
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <PlatformPrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
            <LKPPrj
              onBackwardsClick={onPrjBackwards}
              onForwardClick={onPrjForward}
              className={styles.slide}
            />
          </>
        )}
      </section>
    </ModalProvider>
  );
};
