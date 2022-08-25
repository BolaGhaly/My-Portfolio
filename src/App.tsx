import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import sr from "./ScrollReveal";
import ReactGA from "react-ga";

export class App extends React.Component {
  componentDidMount = () => {
    ReactGA.initialize(`"${process.env.REACT_APP_GA}"`);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 400,
      easing: "ease",
      reset: true,
    };

    sr.reveal(".s-1", config);
    sr.reveal(".s-2", config);
    sr.reveal(".s-3", config);
    sr.reveal(".s-4", config);
    sr.reveal(".s-5", config);
  };

  render() {
    return (
      <div id="home">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
