import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__menu">
          <div className="footer__top">
            <nav>
              <ul className="footer__list">
                <li>
                  <a className="footer__linkBig" href="#">
                    Каталог
                  </a>
                </li>
                <li>
                  <a className="footer__linkBig" href="#">
                    Акции
                  </a>
                </li>
                <li>
                  <a className="footer__linkBig" href="#">
                    Блог
                  </a>
                </li>
                <li>
                  <a className="footer__linkBig" href="#">
                    Отзывы
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="footer__list">
                <li>
                  <p className="footer__title">Компания</p>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    О нас
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__center">
            <nav>
              <ul className="footer__list">
                <li>
                  <p className="footer__title">Информация</p>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Оплата
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Доставка
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Блог
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Оферта
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Политика <br /> Конфиденциальности
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="footer__list">
                <li>
                  <p className="footer__title">Помощь</p>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Вопрос - Ответ
                  </a>
                </li>
                <li>
                  <a className="footer__linkSmall" href="#">
                    Стать дилером
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__bottom">
            <ul className="footer__list">
              <li>
                <a className="footer__tel" href="tel:+380673343459">
                  +380 (67) 334 34 59
                </a>
              </li>
              <li className="footer__linkSmall">
                г. Киев <br /> ул. Жилянская, 75 (офис)
              </li>
              <li>
                <a
                  className="footer__linkSmall footer__textUnderline"
                  href="mailto:info@naturehike-ua.com.ua"
                >
                  info@naturehike-ua.com.ua
                </a>
                <p className="footer__linkSmall">Обращения по общим вопросам</p>
              </li>
              <li>
                <a
                  className="footer__linkSmall footer__textUnderline"
                  href="mailto:opt@naturehike-ua.com.ua"
                >
                  opt@naturehike-ua.com.ua
                </a>
                <p className="footer__linkSmall">
                  Обращения оптовых покупателей
                </p>
              </li>
              <li>
                <a
                  className="footer__linkSmall footer__textUnderline"
                  href="mailto:corp@naturehike-ua.com.ua"
                >
                  corp@naturehike-ua.com.ua
                </a>
                <p className="footer__linkSmall">
                  Обращения корпоративных клиентов
                </p>
              </li>
              <li>
                <a
                  className="footer__linkSmall footer__textUnderline"
                  href="mailto:marketing@naturehike-ua.com.ua"
                >
                  marketing@naturehike-ua.com.ua
                </a>
                <p className="footer__linkSmall">
                  Обращения по вопросам рекламы
                </p>
              </li>
              <li>
                <a
                  className="footer__linkSmall footer__textUnderline"
                  href="mailto:service@naturehike-ua.com.ua"
                >
                  service@naturehike-ua.com.ua
                </a>
                <p className="footer__linkSmall">Сервисный центр</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__basement">
          <ul className="footer__social">
            <li>
              <a className="footer__fb" href="#"></a>
            </li>
            <li>
              <a className="footer__instagram" href="#"></a>
            </li>
          </ul>
          <ul className="footer__language">
            <li>
              <a className="footer__lang" href="#">
                UA
              </a>
            </li>
            <span className="footer__span">|</span>
            <li>
              <a className="footer__lang" href="#">
                RU
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
