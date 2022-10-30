import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__heading">About Us</h1>
      <div className="header__links">
        <a href="/" className="header__links--single">
          Home
        </a>
        <span>|</span>
        <a href="/" className="header__links--single">
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
