// Experiences.js
import React from "react";
import "../assets/styles/Experiences.css";
import ButtonWithGradientBorder from "./ButtonWithGradientBorder";

const experiences = [
  {
    title: "Full-Stack Developer · Remote",
    company: "ThoughtWorks",
    period: "Mar 2021 - Present (3 years)",
  },
  {
    title: "Front-End Developer · Remote",
    company: "Mesa Mobile Thinking",
    period: "Sep 2020 - Mar 2021 (7 mos)",
  },
  {
    title: "Full-Stack Developer · Remote",
    company: "FAST Sol. Tecnológicas",
    period: "Feb 2018 - Aug 2020 (4 yrs)",
  },
];

function Experiences() {
  return (
    <div id="experiences" className="experiences">
      <h2>Experiences through the years</h2>
      <p>Together we make extraordinary impact</p>
      <div className="experiences-content">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience"
            style={{
              background: "linear-gradient(135deg, #ff79c6, #bd93f9, #8be9fd)",
            }}
          >
            <div className="experience-inner">
              <h4>{exp.company}</h4>
              <ButtonWithGradientBorder text={exp.title} />
              <p style={{ fontStyle: "italic" }}>{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
