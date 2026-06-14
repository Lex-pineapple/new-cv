import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./projects-carousel.module.scss";
import type { CSSProperties } from "react";
import cn from "classnames";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import { useModalContext } from "~/providers";
import { projectsData } from "~components/projects/consts/general";

export const ProjectsCarousel = () => {
  const { onModalClick } = useModalContext();
  const { t } = useTranslation();

  const isTablet = useMediaQuery("(width < 900px)");
  const isMobile = useMediaQuery("(width < 500px)");

  const getSlidesPerView = (isTablet: boolean, isMobile: boolean) => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    else return 3;
  };

  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={getSlidesPerView(isTablet, isMobile)}
        watchOverflow={false}
        pagination={{ clickable: true, el: ".pagination-prj" }}
      >
        {projectsData.map((item) => {
          return (
            <SwiperSlide style={{ width: "300px" }}>
              <div
                className={styles.card}
                style={
                  {
                    "--bg-img": `url('${item.imgSrc}')`,
                    "--bg-color": item.colors.accent,
                    "--text-color": item.colors.textAccent,
                  } as CSSProperties
                }
                onClick={() => onModalClick(item)}
              >
                <div className={styles.card__title}>
                  {t(`projects.${item.translationKey}.title`)}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={cn("pagination-prj", styles.pagination)}></div>
    </div>
  );
};
