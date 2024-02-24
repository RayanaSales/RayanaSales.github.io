// About.js
import React from "react";
import "../assets/styles/About.css";
import ProfileImage from "../assets/images/Rayana_Sales_PIC.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-profile">
          <img src={ProfileImage} alt="Rayana Sales" className="about-photo" />
        </div>
        <div className="about-info">
          <h2>Full-Stack Software Developer (Focused in Front-End)</h2>
          <p>
            Hello, World! 👋🌍 I'm Rayana Sales, a passionate software developer
            and tech enthusiast. With over 8 years of experience in the field,
            I've had the opportunity to work on various exciting projects and
            explore different technologies. I currently work as a Senior
            Software Developer at ThoughtWorks, where I was able to develop my
            skills related to quality, software security, soft skills, and sense
            of leadership.
          </p>
          <h3>Education</h3>
          <p>
            Systems Analysis and Development <br /> Instituto Federal de Pernambuco <br />
            2014 - 2017
          </p>
          <h3>Languages</h3>
          <p>English: Full professional proficiency<br />Portuguese: Native</p>
          <h3>What am I looking for going forward?</h3>
          <p>
            I’m looking to engage in multicultural environments as I want to
            continue facing challenges related to management and coordination in
            an international context, in addition to contributing to solutions
            that have a significant impact on a global scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
