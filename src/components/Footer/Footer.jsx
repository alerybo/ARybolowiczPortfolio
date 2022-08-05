import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h5 className="footer__logo">Aleksandra Rybołowicz</h5>
      <div className="footer__links">
        <a href="#" className="footer__link">
          HOME
        </a>
        <a href="#about" className="footer__link">
          ABOUT
        </a>
        <a href="#portfolio" className="footer__link">
          PORTFOLIO
        </a>
        <a href="#contact" className="footer__link">
          CONTACT
        </a>
      </div>
      <small className="footer__copyright">
        &copy; Aleksandra Rybołowicz All rights reserved
      </small>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/aleksandra-rybolowicz/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/alerybo" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com/skeczbuk" target="_blank">
        <AiFillInstagram />
      </a>
      </div>
    </footer>
  );
};

export default Footer;
