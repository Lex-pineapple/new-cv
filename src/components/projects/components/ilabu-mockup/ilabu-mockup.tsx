import cn from "classnames";
import styles from "./ilabu-mockup.module.scss";

export const ILabuMockup = () => {
  return (
    <>
      <div className={cn(styles.mockup__container_first, "prj2-phone-1")}></div>
      <div
        className={cn(styles.mockup__container_second, "prj2-phone-1")}
      ></div>
    </>
  );
};
