import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./projects-carousel.module.scss";
import type { CSSProperties } from "react";

const projectsData = [
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
  {
    title: "iLabU Test Kits",
    imgSrc: "/alfaleasing-bg.jpg",
  },
];

export const ProjectsCarousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        // pagination={{ clickable: true, el: ".pagination" }}
      >
        {projectsData.map((item) => (
          <SwiperSlide>
            <div
              className={styles.card}
              style={
                {
                  "--bg-img": `url('${item.imgSrc}')`,
                } as CSSProperties
              }
            >
              <div className={styles.card__title}>{item.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
