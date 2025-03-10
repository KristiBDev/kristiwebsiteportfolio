
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Test3d from "./components/test3d";

import ComputerModelContainer from "./components/computer/ComputerModelContainer";
const App = () => {
  return (
    <div className='container'>
    <section id="#home">
      <Hero/>
    </section>
    <section id="#services">
      <Services />
    </section>
    <section id="#portfolio">
      <Portfolio />
    </section>
    <section id="#contact">
      <Contact />
    </section> 
    </div> 

    //<Test3d />
    
    
    
   
    
  );
};

export default App  