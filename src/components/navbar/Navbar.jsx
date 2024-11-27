import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <h2 className="logo-part">IOT</h2>
          <h2 className="logo-part secondary">Management</h2>
        </div>

        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-button">
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
