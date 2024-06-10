import { Gallery } from "../Gallery/Gallery";
import "./News.scss";

export const News = () => {
  return (
    <section className="news">
      <div className="news__content container">
        <h2 className="news__title">Новости / Обзоры</h2>
        <Gallery />
      </div>
    </section>
  );
};
