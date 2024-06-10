import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Menu.scss";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="menu__section">
      <div className="menu">
        <div className="menu__toggle" onClick={toggleMenu}>
          <span className="menu__button">Каталог товаров</span>
        </div>
        <ul className={`menu__list ${isOpen ? "open" : ""}`}>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Спальники
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Коврики
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Мебель
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Рюкзаки
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Гамаки
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Посуда
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
