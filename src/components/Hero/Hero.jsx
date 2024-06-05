import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content container">
        <h1 className="hero__title">Новинки від Narurehike</h1>
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
