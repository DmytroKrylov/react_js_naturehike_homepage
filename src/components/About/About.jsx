import "./About.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="about__content container">
        <h2 className="about__title">
          Почему <br /> Naturehike
        </h2>
        <div className="about__flex">
          <div>
            <p className="about__description">
              Главная цель Naturehike — производство снаряжения, которое сделает
              любой отдых на свежем воздухе легким и комфортным. <br /> Бренд
              завоевал доверие покупателей со всего мира благодаря высокому
              качеству и инновационному дизайну своих товаров для пеших
              прогулок, альпинизма, треккинга и продолжительных походов.
            </p>
            <p className="about__paragraph">
              Ближе познакомиться с Naturehike вы можете на странице о бренде.
            </p>
            <a className="about__link" href="#">
              О Бренде
            </a>
          </div>
          <div className="about__frame">
            <span className="about__video"></span>
            <span className="about__video1"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
