import "./App.scss";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Novetly } from "./components/Novelty/Novelty";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Novetly />
    </>
  );
};

export default App;
