import React, { useState } from "react";
import { RiMenu3Lin, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/DC1.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#CAM">CAM Services</a>
    </p>
    <p>
      <a href="#CAD">CAD Services</a>
    </p>
    <p>
      <a href="#possibility">Our Philosophy</a>
    </p>
    <p>
      <a href="#features">Why us?</a>
    </p>
    <p>
      <a href="#works">Our Work</a>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>
            <a href="#sign"></a>Sign in
          </p>
          <button type="button">Signup</button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container_links_sign ">
              <p>
                <a href="#sign"></a>Sign in
              </p>
              <button type="button">Signup</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
