import React from "react";

import "./style.css";
import logoTMDb from '../../assets/blue_square_2.svg';

const Footer = () => {
  return (
    <div>
      <div className="content">
        <div>
          <h2>Credits</h2>
          <img src={logoTMDb} alt="tmdb"/>
          <p>
            This product uses the  <a href='https://www.themoviedb.org/' > TMDb API </a>but is not endorsed or certified by TMDb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
