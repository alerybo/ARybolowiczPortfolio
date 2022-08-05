import React from "react";
import "./About.css";
import { ImLocation } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <div className="section__title">
        <span className="section__title-icon">✦</span>
        <p className="section__title-text">About Me</p>
      </div>

      <div className="container about__container">
        <div className="about__text">
          <p>
            I am a self taught illustrator and an aspiring frontend developer
            based in Warsaw, Poland. Currently I'm focused on building my Reacj
            JS portfolio.
          </p>
          <p>
            I'm also a Mechatronics Engineer with 3 years of professional
            experience in movie post-production.
          </p>
        </div>
        <div className="about__info-container">
          <div className="about__info">
            <ImLocation className="about__info-icon" />
            <span>Warsaw, Poland</span>
          </div>
          <div className="about__info">
            <AiFillPhone className="about__info-icon" />
            <span>+48 513 318 222</span>
          </div>
          <div className="about__info">
            <MdEmail className="about__info-icon" />
            <span>olarybolowicz@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
