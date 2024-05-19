import React from "react";

import images from "../../assets/index";
import "./Hero.scss"

function Hero() {
  return (


    <header className="header__container">

      <div className="header__left">
        <div className="heading">
          <h1>
            Discover the <span>Best</span> Food and Drinks
          </h1>
        </div>

        <div className="info">
          <p className="para header_info">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>

          <a href="https://google.com" target="_blank" className="btn">
            Explore Now
          </a>
        </div>
      </div>
      <div className="header__right">
        <img src={images.header1} className="main_img" alt="border" />
        <img src={images.header2} className="bg__image" alt="Header_Image" />
      </div>
    </header>
  );
}

export default Hero;
