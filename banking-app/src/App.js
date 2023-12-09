import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Header />
      <About id="about" />
      <Services id="services" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
