import { useState } from "react";
import "./Menu.scss";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="menu__toggle" onClick={toggleMenu}>
        <span>Каталог товарів</span>
        <span className="menu__toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      <ul className={`menu__list ${isOpen ? "open" : ""}`}>
        <li className="menu__item">
          <a href="#">Спальники</a>
        </li>
        <li className="menu__item">
          <a href="#">Коврики</a>
        </li>
        <li className="menu__item">
          <a href="#">Мебель</a>
        </li>
        <li className="menu__item">
          <a href="#">Рюкзаки</a>
        </li>
        <li className="menu__item">
          <a href="#">Гамаки</a>
        </li>
        <li className="menu__item">
          <a href="#">Посуд</a>
        </li>
        <div className="menu__scroll-indicator"></div>
      </ul>
    </div>
  );
};
