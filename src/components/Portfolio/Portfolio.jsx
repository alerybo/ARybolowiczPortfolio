import React from "react";
import "./Portfolio.css";
import { TbNorthStar } from "react-icons/tb";
import SKECZBUK from '../../assets/portfolio_skeczbuk.png';
import IVORY from '../../assets/portfolio_ivory.png';

const data = [
  {
    id: 1,
    img: SKECZBUK,
    title: "SKECZBUK",
    subtitle: "My Illustration Portfolio",
    github: "https://github.com/alerybo/skeczbuk",
    demo: "https://skeczbuk.netlify.app/",
  },
  {
    id: 2,
    img: IVORY,
    title: "IVORY",
    subtitle: "Fully responsive online clothing shop landing page mockup.",
    github: "https://github.com/alerybo/Ivory",
    demo: "https://ivoryclothing.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__title">
        <TbNorthStar className="section__title-icon" />
        <p className="section__title-text">Portfolio</p>
        <p className="section__subtitle">My most recent projects</p>
      </div>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, subtitle, github, demo }) => {
          return (
            <div className="portfolio__card" key={id}>
              <div className="portfolio__card-img">
                <img src={img} alt="" />
              </div>
              <article>
                <p className="portfolio__card-title">{title}</p>
                <p className="portfolio__card-subtitle">{subtitle}</p>
                <a href={github} className="btn">GITHUB</a>
                <a href={demo} className="btn btn-transparent">LIVE DEMO</a>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
