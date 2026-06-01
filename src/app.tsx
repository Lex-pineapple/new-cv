import gsap from "gsap";
import styles from "./app.module.scss";
import { About } from "./components/about";
import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";
import { Future } from "./components/future";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Projects } from "./components/projects";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Stack } from "~components/stack";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const containerRef = useRef(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      const initialVertContext = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#main",
            start: "top top",
            endTrigger: "#projects",
            end: "bottom bottom",
            snap: {
              snapTo: 1 / 3,
              duration: { min: 0.25, max: 0.75 },
              delay: 0.125,
              ease: "power1.inOut",
            },
          },
        });
      }, containerRef);

      const hrzScrollContext = gsap.context(() => {
        const hrzScrollData = gsap.utils.toArray("#projects > div");
        gsap.to(hrzScrollData, {
          xPercent: -100 * (hrzScrollData.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: projectsRef.current,
            scrub: 1,
            pin: true,
            snap: {
              snapTo: 1 / (hrzScrollData.length - 1),
              duration: { min: 0.25, max: 0.75 },
              delay: 0.125,
              ease: "power1.inOut",
            },
            end: () => `+=${projectsRef?.current?.offsetWidth}`,
          },
        });
      }, containerRef);

      const finalVertContext = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#future",
            start: "top bottom+=1",
            endTrigger: "#contacts",
            end: "bottom bottom",
            snap: {
              snapTo: 1 / 2,
              duration: { min: 0.25, max: 0.75 },
              delay: 0.125,
              ease: "power1.inOut",
            },
          },
        });
      }, containerRef);

      return () => {
        initialVertContext.revert();
        hrzScrollContext.revert();
        finalVertContext.revert();
      };
    },
    { scope: containerRef },
  );

  const onHeaderLinkClick = contextSafe((href: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: href, autoKill: true },
      ease: "power2.inOut",
    });
  });

  return (
    <div className={styles.viewportWrapper}>
      <Header onLinkClick={onHeaderLinkClick} />
      <div className={styles.viewport}>
        <div id="content" className={styles.content} ref={containerRef}>
          <Main className={styles.fullSlide} />
          <About className={styles.fullSlide} />
          <Stack className={styles.fullSlide} />
          <Projects className={styles.fullSlide} ref={projectsRef} />
          <Future className={styles.fullSlide} />
          <Contacts className={styles.fullSlide} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
