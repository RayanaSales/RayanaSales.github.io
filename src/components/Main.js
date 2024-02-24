// Main.js
import React from "react";
import "../assets/styles/Main.css";
import "../assets/styles/Global.css";
import ProfileImage from "../assets/images/Rayana_Sales_PIC.jpeg"; 

function Main() {
  return (
    <main className="main">
      <div className="content">
        <h1>Email for developers</h1>
        <p>
          The best way to reach humans instead of spam folders. Deliver
          transactional and marketing emails at scale.
        </p>
        <div className="actions">
          <a href="/get-started" className="btn-primary">
            Get Started
          </a>
          <a href="/documentation" className="btn-secondary">
            Documentation
          </a>
        </div>
      </div>
      <div class="feature-image gradient-border mx-auto">
        <img src={ProfileImage} alt="Rayana Sales" class="profile-pic" />
      </div>
    </main>
  );
}

export default Main;
