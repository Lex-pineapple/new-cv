import type { TWithClassname } from "~types/general";

import styles from "./reviews.module.scss";
import { LinedText } from "~/shared/lined-text";
import { ReviewCard } from "~components/reviews/components/review-card";
import cn from "classnames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "usehooks-ts";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP);

type TReviews = {
  name: string;
  place: string;
  text: string;
};

export const Reviews = ({ className }: TWithClassname) => {
  const isMobile = useMediaQuery("(width <= 800px)");
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from("#reviews-title", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#reviews",
        start: "top center",
        end: "bottom center",
      },
    });

    const items = gsap.utils.toArray(".review-card");
    gsap.from(items, {
      y: 100,
      opacity: 0,
      stagger: { each: 0.1, from: "random" },
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#reviews",
        start: "top center",
        end: "bottom center",
      },
    });
  });

  console.log(t("reviews.reviews", { returnObjects: true }));

  return (
    <section id="reviews" className={cn(className, styles.root)}>
      <div className={styles.sectionWrapper}>
        <LinedText
          className={"review-hr"}
          trigger={{
            trigger: "#reviews",
            start: "top center",
            end: "bottom center",
          }}
        >
          {t("reviews.header")}
        </LinedText>
        <p id="reviews-title" className={styles.mainText}>
          {t("reviews.tagline")}
        </p>
        <div className={styles.carousel__wrapper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={isMobile ? 1 : 2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true, el: ".pagination" }}
          >
            {(t("reviews.reviews", { returnObjects: true }) as TReviews[]).map(
              (item) => (
                <SwiperSlide>
                  <ReviewCard {...item} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <div className={cn("pagination", styles.pagination)}></div>
        </div>
      </div>
    </section>
  );
};
