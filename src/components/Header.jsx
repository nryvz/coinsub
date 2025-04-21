import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "../sass/header.scss";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav_left">
          <img className="logo" src="Vector.svg" alt="" />
          <MenuIcon htmlColor="#ffffff" style={{ visibility: "hidden" }} />
        </div>
        <div className="links">
          <ul>
            <li className="link_item">Benefits</li>
            <li className="link_item">Features</li>
            <li className="link_item">FAQ</li>
            <li className="link_item">Pricing</li>
            <li className="link_item">Contact</li>
          </ul>
        </div>
        <div className="nav_right">
          <button className="started">Get Started</button>
          <MenuIcon htmlColor="#ffffff" className="menu_icon" />
          <img className="flag" src="image10.png" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
