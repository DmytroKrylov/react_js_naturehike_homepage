import "./Category.scss";

export const Category = () => {
  return (
    <section className="category">
      <div className="category__content container">
        <ul className="category__list">
          <li className="category__item">
            <a className="category__img" href="#"></a>
            <p className="category__title">Палатки</p>
          </li>
          <li className="category__item">
            <a className="category__img category__img--1" href="#"></a>
            <p className="category__title">Спальники</p>
          </li>
          <li className="category__item">
            <a className="category__img category__img--2" href="#"></a>
            <p className="category__title">Коврики</p>
          </li>
          <li className="category__item">
            <a className="category__img category__img--3" href="#"></a>
            <p className="category__title">Мебель</p>
          </li>
          <li className="category__item">
            <a className="category__img category__img--4" href="#"></a>
            <p className="category__title">Рюкзаки</p>
          </li>
          <li className="category__item">
            <a className="category__img category__img--5" href="#"></a>
            <p className="category__title">Гамаки</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
