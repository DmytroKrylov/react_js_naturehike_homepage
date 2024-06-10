import "./App.scss";
import { About } from "./components/About/About";
import { Category } from "./components/Category/Category";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Menu } from "./components/Menu/Menu";
import { News } from "./components/News/News";
import { Novetly } from "./components/Novelty/Novelty";

const App = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Category />
      <About />
      <Novetly />
      <News />
      <Footer />
    </>
  );
};

export default App;
