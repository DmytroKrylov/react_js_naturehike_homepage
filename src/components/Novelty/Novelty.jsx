import "./Novelty.scss";

export const Novetly = () => {
  return (
    <section className="novetly">
      <div className="novetly__content container">
        <ul className="novetly__list">
          <li className="novetly__item">
            <a className="novetly__img" href="#"></a>
            <a className="novetly__title" href="#">
              Новинки
            </a>
          </li>
          <li className="novetly__item">
            <a className="novetly__img1" href="#"></a>
            <a className="novetly__title" href="#">
              Топ продаж
            </a>
          </li>
          <li className="novetly__item">
            <a className="novetly__img2" href="#"></a>
            <a className="novetly__title" href="#">
              Обзоры
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
