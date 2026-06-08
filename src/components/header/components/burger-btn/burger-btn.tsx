import cn from "classnames";
import styles from "./burger-btn.module.scss";

type TBurgerBtn = {
  open: boolean;
  onClick: () => void;
};

export const BurgerBtn = ({ open, onClick }: TBurgerBtn) => {
  return (
    <div
      className={cn(styles.btn__root, {
        [styles.btn__root_active]: open,
      })}
      onClick={() => {
        onClick();
      }}
    >
      <div className={cn(styles.btn__line, styles.btn__line_top)}></div>
      <div className={cn(styles.btn__line, styles.btn__line_center)}></div>
      <div className={cn(styles.btn__line, styles.btn__line_bottom)}></div>
    </div>
  );
};
