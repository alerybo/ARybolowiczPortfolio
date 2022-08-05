import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
