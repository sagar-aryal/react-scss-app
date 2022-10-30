import React from "react";

import "./scss/main.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Portfolio />
    </div>
  );
};

export default App;
