import { useEffect, useRef, useState, type RefObject } from "react";
import { useMediaQuery } from "usehooks-ts";
import { StackItem } from "~components/stack/stack-item";

export type TCoords = {
  x: number;
  y: number;
};

type TStackItems = {
  headerRef: RefObject<HTMLSpanElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  items: {
    name: string;
    children: {
      icon?: string;
      name: string;
      description: string;
    }[];
    color: string;
  }[];
  className?: string;
  position?: "left" | "right" | "middle";
};

export const StackItems = ({
  headerRef,
  containerRef,
  items,
  className,
  position,
}: TStackItems) => {
  const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [circleCoords, setCircleCoords] = useState<TCoords[]>([]);
  const isTablet = useMediaQuery("(height < 1200px)");
  const isMobile = useMediaQuery("(width <= 600px)");

  const updatePath = () => {
    if (!containerRef.current || !headerRef.current || !itemRefs.current.length)
      return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    const itemsRects = itemRefs.current.map((item) => {
      return item?.getBoundingClientRect();
    });
    const rectB = headerRef.current.getBoundingClientRect();

    const newPaths: string[] = [];
    const newCircleCoords: TCoords[] = [];

    itemsRects.forEach((item, idx) => {
      if (item) {
        if (position === "left") {
          const startX = Math.round(item.left - containerRect.left);
          const startY = Math.round(
            item.top - containerRect.top + item.height + 6,
          );

          const endX = Math.round(
            rectB.left - containerRect.left + rectB.width / 2,
          );
          const endY = Math.round(rectB.top - containerRect.top + rectB.height);
          const path = `M ${startX} ${startY} C ${endX} ${startY}, ${endX} ${startY}, ${endX} ${endY}`;
          newCircleCoords[idx] = {
            x: startX,
            y: startY,
          };
          newPaths[idx] = path;
        }
        if (position === "right") {
          const startX = Math.round(
            item.left - containerRect.left + item.width,
          );
          const startY = Math.round(
            item.top - containerRect.top + item.height + 6,
          );

          const endX = Math.round(
            rectB.left - containerRect.left + rectB.width / 2,
          );
          const endY = Math.round(rectB.top - containerRect.top + rectB.height);
          const path = `M ${startX} ${startY} C ${endX} ${startY}, ${endX} ${startY}, ${endX} ${endY}`;
          newPaths[idx] = path;
          newCircleCoords[idx] = {
            x: startX,
            y: startY,
          };
        }
        if (position === "middle") {
          const startX = Math.round(
            item.left - containerRect.left + item.width / 2,
          );
          const startY = Math.round(item.top - containerRect.top);
          const endX = Math.round(
            rectB.left - containerRect.left + rectB.width / 2,
          );
          const endY = Math.round(rectB.top - containerRect.top + rectB.height);
          const path = `M ${startX} ${startY} L ${endX} ${endY}`;
          newPaths[idx] = path;
          newCircleCoords[idx] = {
            x: startX,
            y: startY,
          };
        }
      }
    });
    setPaths(newPaths);
    setCircleCoords(newCircleCoords);
  };

  const updatePathMobile = () => {
    if (!containerRef.current || !headerRef.current || !itemRefs.current.length)
      return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    const itemsRects = itemRefs.current.map((item) => {
      return item?.getBoundingClientRect();
    });
    const rectB = headerRef.current.getBoundingClientRect();

    const newPaths: string[] = [];
    const newCircleCoords: TCoords[] = [];
    itemsRects.forEach((item, idx) => {
      if (item) {
        const endX = Math.round(item.right);
        const endY = Math.round(item.top - containerRect.top + item.height + 6);

        const startX = 10;
        const startY = Math.round(rectB.top - containerRect.top + rectB.height);
        const path = `M ${startX} ${startY} L ${startX} ${endY - 20} A 20 20 0 0 0 ${startX + 20} ${endY} L ${endX} ${endY}`;
        newCircleCoords[idx] = {
          x: endX,
          y: endY,
        };
        newPaths[idx] = path;
      }
    });
    setPaths(newPaths);
    setCircleCoords(newCircleCoords);
  };

  useEffect(() => {
    if (isMobile) updatePathMobile();
    else updatePath();
    window.addEventListener("resize", isMobile ? updatePathMobile : updatePath);
    return () =>
      window.removeEventListener(
        "resize",
        isMobile ? updatePathMobile : updatePath,
      );
  }, [isMobile]);

  return (
    <div className={className}>
      {items.map((item, idx) => {
        return (
          <StackItem
            path={paths[idx]}
            color={item.color}
            name={item.name}
            itemChildren={item.children}
            ref={(e) => (itemRefs.current[idx] = e)}
            coords={circleCoords[idx]}
            dir={position}
            padding={isTablet ? "0" : `${Math.exp(4) * idx}px`}
          />
        );
      })}
    </div>
  );
};
