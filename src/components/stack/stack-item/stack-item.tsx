import type { TCoords } from "~components/stack/components/stack-items/stack-items";
import styles from "./stack-item.module.scss";
import { type CSSProperties } from "react";
import cn from "classnames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type TStackItem = {
  path: string;
  color: string;
  name: string;
  itemChildren: {
    name: string;
    description: string;
    icon?: string;
  }[];
  ref: (element: HTMLParagraphElement | null) => void;
  coords?: TCoords;
  dir?: "left" | "right" | "middle";
  padding: string;
};

export const StackItem = ({
  path,
  color,
  coords,
  ref,
  name,
  itemChildren,
  dir,
  padding,
}: TStackItem) => {
  useGSAP(() => {});

  return (
    <div
      className={cn(styles.root, styles[`root_${dir}`])}
      style={{
        paddingLeft: dir === "left" ? padding : 0,
        paddingRight: dir === "right" ? padding : 0,
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.5,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="4"
          className="pathClassName"
        />
        <circle
          cx={coords?.x}
          cy={coords?.y}
          r="5"
          fill="white"
          stroke={color}
          strokeWidth="4"
        />
      </svg>
      <div className={styles.wrapper}>
        <p className={cn(styles.title, `stack-item-title-${dir}`)} ref={ref}>
          {name}
        </p>
        <div
          className={styles.inner__wrapper}
          style={
            {
              "--local-color": color,
            } as CSSProperties
          }
        >
          {itemChildren.map((item) => {
            return (
              <div className={cn("inner-item", styles.inner)} key={item.name}>
                <img className={styles.inner__img} src={item.icon} />
                <div className={styles.inner__text}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
