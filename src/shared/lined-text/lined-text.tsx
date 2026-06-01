import type { PropsWithChildren, RefObject } from "react";
import styles from "./lined-text.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import cn from "classnames";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

type TLinedText = {
  trigger?: ScrollTrigger.Vars;
  className: string;
  ref?: RefObject<HTMLSpanElement | null>;
  linePosition?: "right" | "center";
  appear?: "move" | "fade-in";
};

export const LinedText = ({
  children,
  trigger,
  ref,
  className,
  linePosition = "right",
  appear = "move",
}: PropsWithChildren<TLinedText>) => {
  useGSAP(() => {
    if (trigger) {
      if (appear === "move")
        gsap.from(`.${className}`, {
          x: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: trigger,
        });
      else
        gsap.from(`.${className}`, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: trigger,
        });
    } else {
      const split = SplitText.create(`.${className}`, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0.1,
        scale: 0.8,
        filter: "blur(4px)",
        stagger: { each: 0.06, from: "center" },
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: trigger,
      });
    }
  });

  return (
    <span
      ref={ref}
      className={cn(
        styles.root,
        className,
        styles[`linePosition_${linePosition}`],
      )}
    >
      {children}
    </span>
  );
};
