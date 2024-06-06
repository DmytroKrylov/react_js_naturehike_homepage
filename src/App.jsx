import "./App.scss";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { News } from "./components/News/News";
import { Novetly } from "./components/Novelty/Novelty";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Novetly />
      <News />
    </>
  );
};

export default App;
