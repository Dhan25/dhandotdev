import {
  Navbar,
  Home,
  About,
  Projects,
  Contact,
  Footer,
} from "./sections/Data";

function App() {
  return (
    <div className="font-poppins">
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
