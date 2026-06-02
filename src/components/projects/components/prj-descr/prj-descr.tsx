import type { PropsWithChildren } from "react";

import styles from "./prj-descr.module.scss";

export const PrjDescr = ({ children }: PropsWithChildren) => {
  return <p className={styles.root}>{children}</p>;
};
