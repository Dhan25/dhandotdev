import {
  Navbar,
  Home,
  About,
  Projects,
  Contact,
  Footer,
} from "./sections/Data";

// import animate on scroll
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  });


  return (
    <div className="font-poppins overflow-x-hidden">
      <Navbar />  
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
