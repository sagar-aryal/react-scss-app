import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";
import Showcase from "./components/Showcase";

import "./scss/main.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Showcase />
    </div>
  );
};

export default App;
