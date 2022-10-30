import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./pages/About";

import "./scss/main.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
