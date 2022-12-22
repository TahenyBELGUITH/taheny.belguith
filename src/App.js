import React from "react";
import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <BackToTopBtn />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
