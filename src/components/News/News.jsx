import "./News.scss";

export const News = () => {
  return (
    <section className="news">
      <div className="news__content container">
        <h2 className="news__title">
          Новости <br /> Обзоры
        </h2>
        <ul className="news__list">
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
        </ul>
      </div>
    </section>
  );
};
