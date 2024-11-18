import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav">
          {/* Logo Section */}
          <div className="nav-logo">
            <img src="imgs/parking.png"/>
          </div>
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
          </div>
        </div>
      </nav>
    </div>
  );
}; 

export default Navbar;