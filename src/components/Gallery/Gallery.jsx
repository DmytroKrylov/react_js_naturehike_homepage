// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Gallery.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const Gallery = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          // 1270: {
          //   slidesPerView: 4,
          //   spaceBetween: 50,
          // },
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">5 новинок Naturehike 2023 года</h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img1" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">
                Как термос Naturehike держит температуру?
              </h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img2" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">
                Как избежать конденсата в палатке?
              </h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">5 новинок Naturehike 2023 года</h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img1" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">
                Как термос Naturehike держит температуру?
              </h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="news__item">
            <a className="news__img2" href="#"></a>
            <div className="news__text">
              <h3 className="news__headline">
                Как избежать конденсата в палатке?
              </h3>
              <p className="news__description">
                Поскольку человек — теплокровное существо, его потребности
                меняются в зависимости от температуры воздуха: когда нам...
              </p>
              <div className="news__bottom">
                <p className="news__date">1 февраля 2023</p>
                <a className="news__link" href="#">
                  Naturehike
                </a>
              </div>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
