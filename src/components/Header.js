// Header.js
import React from "react";
import "../assets/styles/Header.css";
import "../assets/styles/Global.css";
import cv from "../assets/documents/Rayana_Sales_CV.pdf";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="nav-logo">
          Rayana Sales'
          <span className="rainbow-text" style={{ marginLeft: "5px" }}>
            Portfolio
          </span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a
            href="https://github.com/RayanaSales"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rayana-sales/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <div className="user-actions">
          <a
            href={cv}
            className="get-started rainbow-bg"
            download="Rayana_Sales_CV.pdf"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
