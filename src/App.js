import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;