import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./projects-carousel.module.scss";
import type { CSSProperties } from "react";
// import { useModalContext } from "~/providers";
import cn from "classnames";
import { useMediaQuery } from "usehooks-ts";

const projectsData = [
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
    data: {},
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
];

// type TProjectData = {
//   imgSrc: string;
//   title: string;
//   description: string;
//   chivos: [];
// };

export const ProjectsCarousel = () => {
  // const { onModalClick } = useModalContext();
  const isTablet = useMediaQuery("(width < 900px)");
  const isMobile = useMediaQuery("(width < 500px)");

  const getSlidesPerView = (isTablet: boolean, isMobile: boolean) => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    else return 4;
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
        {/* {(t("projects.arrayData", { returnObjects: true }) as TReviews[]).map(
          (item) => (
            <SwiperSlide>
              <ReviewCard {...item} />
            </SwiperSlide>
          ),
        )} */}
        {projectsData.map((item) => (
          <SwiperSlide style={{ width: "300px" }}>
            <div
              className={styles.card}
              style={
                {
                  "--bg-img": `url('${item.imgSrc}')`,
                } as CSSProperties
              }
              // onClick={() => onModalClick(item?.data)}
            >
              <div className={styles.card__title}>{item.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cn("pagination-prj", styles.pagination)}></div>
    </div>
  );
};
