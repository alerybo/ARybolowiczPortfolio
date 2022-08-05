import React, { useState } from "react";
import "./Navbar.css";
import { BsToggleOff } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);

  //   Change navbar background color if page is scrolled < 80 px
  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  //Open / Close mobile menu
  const mobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle light/dark mode
  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    document.body.classList[lightTheme ? "add" : "remove"]('light-theme');
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <nav className={navbarActive ? "nav active" : "nav"}>
      <a href="#" className="nav__logo">
        AR
      </a>
      <div className={mobileMenuOpen ? "nav__links mobile" : "nav__links"}>
        <a href="#" className="nav__link" onClick={mobileMenuToggle}>
          HOME
        </a>
        <a href="#about" className="nav__link" onClick={mobileMenuToggle}>
          ABOUT
        </a>
        <a href="#portfolio" className="nav__link" onClick={mobileMenuToggle}>
          PORTFOLIO
        </a>
        <a href="#contact" className="nav__link" onClick={mobileMenuToggle}>
          CONTACT
        </a>
      </div>

      <AiOutlineMenu
        className="nav__icon nav__icon-menu "
        onClick={mobileMenuToggle}
      />
      <BsToggleOff className="nav__icon" onClick={toggleTheme} />
    </nav>
  );
};

export default Navbar;
