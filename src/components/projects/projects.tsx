import cn from "classnames";
import type { TWithClassname } from "~types/general";
import styles from "./projects.module.scss";
import { useRef } from "react";
import { MainSlide } from "~components/projects/components/main-slide";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "usehooks-ts";
import { ModalProvider } from "~/providers";
import { projectsData } from "~components/projects/consts/general";
import { PrjTemplate } from "~components/projects/components/prj-template";
import { ILabuMockup } from "~components/projects/components/ilabu-mockup";
import { ClevertecMockup } from "~components/projects/components/clevertec-mockup";

gsap.registerPlugin(useGSAP);

export type TPrjType = {
  onForwardClick: (id: number) => void;
  onBackwardsClick: (id: number) => void;
};

const getMockup = (translationKey: string) => {
  if (translationKey === "ilabu") return <ILabuMockup />;
  if (translationKey === "clevertec-site") return <ClevertecMockup />;
  return null;
};

export const Projects = ({ className }: TWithClassname) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isDesktopSmall = useMediaQuery("(width <= 1440px)");

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
    gsap.to(window, { duration: 1, scrollTo: { y: "#projects" } });
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
        {!isDesktopSmall &&
          projectsData.map((item, idx) => (
            <PrjTemplate
              key={item.translationKey}
              id={idx + 1}
              colorMain={item.colors.mainBig}
              colorSecondary={item.colors.secondaryBig}
              companyLogo={item.companyIcon}
              imgSrc={item.imgSrc}
              stack={item.stack}
              onForwardClick={onPrjForward}
              onBackwardsClick={onPrjBackwards}
              translationKey={item.translationKey}
              className={styles.slide}
            >
              {getMockup(item.translationKey)}
            </PrjTemplate>
          ))}
      </section>
    </ModalProvider>
  );
};
