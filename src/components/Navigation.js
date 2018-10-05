import React from "react";

const Navigation = (props) => {
  
  return (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li className="current">
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li className="current">
        <a className="smoothscroll" href="#resume">
          Resume
        </a>
      </li>
      <li className="current">
        <a className="smoothscroll" href="#portfolio">
          Certifications
        </a>
      </li>
      <li className="current">
        <a className="smoothscroll" href="#testimonials">
        Quotations
        </a>
      </li>
      <li className="current">
        <a className="smoothscroll" href="#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
)};

export default Navigation;
