import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from './components/Particle';
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Particles className='particles' /> 
      

    </div>
  );
}

export default App;
