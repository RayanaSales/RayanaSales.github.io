// TopSkills.js // <h2>Top skills and years of usage</h2>
import React from "react";
import "../assets/styles/TopSkills.css";

const skills = {
  Node: {
    years: "5 years",
    svgPath:
      "M18.6667 5.618L10 1.26 1.33333 5.618v9.86l1.50933.88 3.08533-1.248A2.25 2.25 0 007.5 13.728V6h1.5v7.728a3.75 3.75 0 01-2.3435 3.476l-2.01033.813L10 21.87l9.75-5.688V5.618zM10.5 9a3 3 0 013-3h1.7505C16.7685 6 18 7.23 18 8.75V9h-1.5v-.25A1.25 1.25 0 0015.2505 7.5H13.5a1.5 1.5 0 000 3h1.5a3 3 0 110 6H13.5a3 3 0 01-3-3h1.5a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 100-3H13.5a3 3 0 01-3-3z",
  },
  // Adicione outros skills conforme necessário
};

const SkillButton = ({ skill, years, svgPath }) => (
  <button className="skill-button" type="button">
    <div className="icon-container">
      <svg
        fill="#8be9fd"
        height="32"
        width="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svgPath} fill="currentColor" />
      </svg>
    </div>
    <span className="skill-name">{skill}</span>
    <span className="skill-years">{years}</span>
  </button>
);

const TopSkills = () => (
  <div className="skills-container">
    <h2>Top skills and years of usage</h2>
    <div className="buttons-container">
      {Object.entries(skills).map(([skill, { years, svgPath }]) => (
        <SkillButton
          key={skill}
          skill={skill}
          years={years}
          svgPath={svgPath}
        />
      ))}
    </div>
  </div>
);

export default TopSkills;
