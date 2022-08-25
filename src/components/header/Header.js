import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import Me from "./Me";

const Header = () => {
  return (
    <header className="container header__container">
      <h5>Hello I`m</h5>
      <h1>Jay Zhdanov</h1>
      <h5>Fullstack Developer</h5>

      <CTA />
      <HeaderSocials />
      <Me />
      <a href="#contacts" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
