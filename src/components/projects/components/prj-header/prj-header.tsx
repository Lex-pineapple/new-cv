import type { PropsWithChildren } from "react";
import type { TWithClassname } from "~types/general";

import styles from "./prj-header.module.scss";
import cn from "classnames";

export const PrjHeader = ({
  children,
  className,
}: PropsWithChildren<TWithClassname>) => {
  return <h2 className={cn(className, styles.root)}>{children}</h2>;
};
