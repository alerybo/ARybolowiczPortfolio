import React from "react";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
