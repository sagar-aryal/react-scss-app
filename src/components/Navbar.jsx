import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  // for handling navbar action during page scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [state]);

  return (
    <div className={`navbar ${state ? "navbarOnScroll" : ""}`}>
      <div className="navbar__logo">reactSCSS</div>
      <ul className="navbar__menu">
        <li>
          <a href="/" className="navbar__menu--link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navbar__menu--link">
            Showcase
          </a>
        </li>
        <li>
          <a href="/" className="navbar__menu--link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/" className="navbar__menu--link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navbar__menu--link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
