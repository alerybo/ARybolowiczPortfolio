import React from "react";
import CV from "../../assets/CV_Aleksandra_Rybolowicz.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-transparent">Contact</a>
    </div>
  );
};

export default CTA;