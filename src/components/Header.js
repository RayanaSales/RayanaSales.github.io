// Header.js
import React from "react";
import "../assets/styles/Header.css";
import "../assets/styles/Global.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Rayana Sales' <span className="rainbow-text"> Portfolio</span>
        </div>
        <nav className="nav-links">
          <a href="/about">About</a>
          <a href="/blog">Skills</a>
          <a href="/customers">Certifications</a>
          <a href="/pricing">Experience</a>
          <a href="/enterprise">Volunteering</a>
          <a
            href="https://github.com/rayanasales"
            target="_blank"
            rel="noreferrer"
          >
            Github
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
            href="../assets/documents/Rayana_Sales_CV.pdf"
            className="get-started rainbow-bg"
            download
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
