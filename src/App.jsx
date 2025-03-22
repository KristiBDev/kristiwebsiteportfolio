import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

import ComputerModelContainer from "./components/computer/ComputerModelContainer";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Hero />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
     
      <section></section>
      <section></section> {/* empty sections for projects scroll snap */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;  