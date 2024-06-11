import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content container">
        <div className="hero__header">
          <a className="hero__logo" href="#"></a>
          <div className="hero__right">
            <div className="hero__top">
              <ul className="hero__list">
                <li className="hero__item">
                  <a className="hero__analytic" href="#"></a>
                  <span className="hero__span">0</span>
                </li>
                <li className="hero__item">
                  <a className="hero__like" href="#"></a>
                  <span className="hero__span">0</span>
                </li>
                <li className="hero__item">
                  <a className="hero__card" href="#"></a>
                  <span className="hero__span">0</span>
                </li>
              </ul>
              <div className="hero__topFlex">
                <a className="hero__tel" href="tel:+3806733434559">
                  +38 (067) 334 34 559
                </a>
                <ul className="hero__langFlex">
                  <li>
                    <a className="hero__lang" href="#">
                      RU
                    </a>
                  </li>
                  <span className="hero__line"></span>
                  <li>
                    <a className="hero__lang" href="#">
                      UA
                    </a>
                  </li>
                </ul>
                <a className="hero__accaunt" href="#"></a>
              </div>
            </div>
            <div className="hero__bottom">
              <DropdownMenu />
            </div>
          </div>
        </div>
        <h1 className="hero__title">
          Новинки від <br /> Narurehike
        </h1>
        <p className="hero__description">
          Ассортимент Naturehike имеет большое разнообразие: палатки; спальные
          мешки; матрасы; гамаки; одежда для туризма; рюкзаки; походная посуда.
        </p>
        <a className="hero__link" href="#">
          Перейти
        </a>
      </div>
    </section>
  );
};
