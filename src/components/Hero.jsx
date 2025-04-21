import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import "../sass/hero.scss";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_left">
          <button className="hero_button">Self-serve; $0 upfront cost!</button>
          <div className="hero_yazi">
            <div className="title">
              <p>
                The Future <br className="space" /> of Commerce
                <br className="space" /> For
              </p>
              <div className="new-animation-wrapper">
                <div className="new-animation-wrapper-content">
                  <div className="animation-content-container">
                    <div className="wrapper">
                      <ul className="animation-container-list">
                        <li className="animation-container-list-item">
                          Businesses
                        </li>
                        <li className="animation-container-list-item">
                          Individuals
                        </li>
                        <li className="animation-container-list-item">
                          Friends
                        </li>
                        <li className="animation-container-list-item">
                          Everyone
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero_subtitle_container">
                <p className="hero_subtitle">
                  Easily manage products, send invoices, and get paid fast, no
                  developers required! Our intuitive checkout boosts global
                  customer reach and conversions!
                </p>
              </div>
            </div>
          </div>
          <div className="hero_buttons">
            <button className="hero_button1">Get Started</button>
            <button className="hero_button2">
              <PlayArrowIcon />
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero_right">
          <img className="mask_img" src="Maskgroup.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
