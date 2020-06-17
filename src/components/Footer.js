import React from "react";

import "./footerStyle.css";
import logoTMDb from '../assets/blue_square_2.svg';

const Footer = () => {
  return (
    <div>
      <div className="content">
        <div>
          <h2>Credits</h2>
          <img src={logoTMDb} alt="tmdb"/>
          <p>
            Este produto usa a API TMDb, mas não é endossado ou certificado pelo TMDb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
