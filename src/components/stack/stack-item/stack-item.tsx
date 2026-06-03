import type { TCoords } from "~components/stack/components/stack-items/stack-items";
import styles from "./stack-item.module.scss";
import type { CSSProperties, RefObject } from "react";
import cn from "classnames";

type TStackItem = {
  path: string;
  color: string;
  name: string;
  itemChildren: {
    name: string;
    description: string;
  }[];
  ref: RefObject<HTMLParagraphElement>;
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
        <path d={path} fill="none" stroke={color} strokeWidth="4" />
        <circle
          cx={coords?.x}
          cy={coords?.y}
          r="5"
          fill="white"
          stroke={color}
          strokeWidth="4"
        />
      </svg>
      <div>
        <p className={styles.title} ref={ref}>
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
              <div>
                <div className={styles.inner__text}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
