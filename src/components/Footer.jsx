import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../sass/footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_top">
          <div className="top_left">
            <img src="Vector.svg" alt="" />
          </div>
          <div className="top_right">
            <div className="links">
              <div>
                <p>Coinsub</p>
                <ul>
                  <li>Benefits</li>
                  <li>Features</li>
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <p>Documentation</p>
                <ul>
                  <li>Intro to Coinsub</li>
                  <li>Coinsub Protocol</li>
                  <li>Security</li>
                  <li>Solutions & Features</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div>
                <p>Legal</p>
                <ul>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="bottom_left">
            <p className="copy">© 2024 Coinsub. All rights reserved</p>
          </div>
          <div className="bottom_right">
            <LinkedInIcon htmlColor="#ffffff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
