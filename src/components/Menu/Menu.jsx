import { useState, useEffect } from "react";
import "./Menu.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleEnabled, setIsToggleEnabled] = useState(
    window.innerWidth < 1270
  );

  const toggleMenu = () => {
    if (isToggleEnabled) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsToggleEnabled(window.innerWidth < 1270);
      if (window.innerWidth >= 1270) {
        setIsOpen(true); // Відкрити меню, якщо ширина більше 1270
      } else {
        setIsOpen(false); // Закрити меню, якщо ширина менше 1270
      }
    };

    window.addEventListener("resize", handleResize);

    // Викликати handleResize одразу після монтування компонента
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="menu__section">
      <div className="menu container">
        <div
          className={`menu__toggle ${!isToggleEnabled ? "disabled" : ""}`}
          onClick={toggleMenu}
        >
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
