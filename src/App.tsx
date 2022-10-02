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
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export class App extends React.Component {
  componentDidMount = () => {
    ReactGA.initialize("UA-236369204-1");
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
        <Box component="main">
          <Toolbar />
          <Header />
          <About />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
        </Box>
      </div>
    );
  }
}

export default App;
