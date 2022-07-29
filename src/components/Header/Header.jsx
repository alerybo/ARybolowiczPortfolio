import React from "react";
import "./Header.css";
import ME from "../../assets/me.JPG";
import HeaderSocials from "./HeaderSocials";
import { BsMouse } from "react-icons/bs";
import CTA from "./CTA";

const Header = () => {
  return (
    
    <header id="header">
      <div className="container header__container">
        <div className="header__img">
          <img src={ME} />
        </div>
        <div className="header__content">
          <p>Hello I'm</p>
          <h1>Aleksandra Rybołowicz</h1>
          <p>Frontend Developer</p>
          <CTA />
        </div>
      </div>

      <HeaderSocials />

      <a href="#about" className="scroll__down">
        <span>SCROLL DOWN</span>
        <BsMouse className="scroll__down-icon" />
      </a>

    </header>
  );
};

export default Header;
