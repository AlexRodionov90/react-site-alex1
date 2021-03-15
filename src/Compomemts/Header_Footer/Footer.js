import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Изучаем React вместе!</div>
        <div className="footer_copyright">
          2021. © All rights reserved.
          <br />
          Made by Alex Rodionov
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
