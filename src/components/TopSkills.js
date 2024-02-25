// TopSkills.js
import React from "react";
import "../assets/styles/TopSkills.css";
import ReactIcon from "../assets/images/ReactIcon";
import ReduxIcon from "../assets/images/ReduxIcon";
import TddIcon from "../assets/images/TddIcon";
import JestIcon from "../assets/images/JestIcon";
import MicrosoftIcon from "../assets/images/MicrosoftIcon";
import CypressIcon from "../assets/images/CypressIcon";
import CiCdIcon from "../assets/images/CiCdIcon";
import TSIcon from "../assets/images/TSIcon";
import VueIcon from "../assets/images/VueIcon";

const skills = {
  React: { years: "5 years", IconComponent: ReactIcon },
  Redux: { years: "5 years", IconComponent: ReduxIcon },
  TDD: { years: "4 years", IconComponent: TddIcon },
  Jest: { years: "4 years", IconComponent: JestIcon },
  "C#": { years: "4 years", IconComponent: MicrosoftIcon },
  "Asp.Net": { years: "4 years", IconComponent: MicrosoftIcon },
  Cypress: { years: "3 years", IconComponent: CypressIcon },
  "CI/CD": { years: "3 years", IconComponent: CiCdIcon },
  TypeScript: { years: "3 years", IconComponent: TSIcon },
  "Node.js": { years: "5 years", IconComponent: ReactIcon },
  "Angular.js": { years: "3 years", IconComponent: ReactIcon },
  Jquery: { years: "3 years", IconComponent: ReactIcon },
  "Next.js": { years: "3 years", IconComponent: ReactIcon },
  "Nest.js": { years: "1 years", IconComponent: ReactIcon },
  "Vue.js": { years: "1 years", IconComponent: VueIcon },
  GraphQL: { years: "1 years", IconComponent: ReactIcon },
  Rest: { years: "7 years", IconComponent: ReactIcon },
};

const SkillButton = ({ skill, years, IconComponent }) => (
  <button className="skill-button" type="button">
    {/* <div className="icon-container">
      <IconComponent color="#8be9fd" /> 
    </div> */}
    <span className="skill-name">{skill}</span>
    <span className="skill-years">{years}</span>
  </button>
);

const TopSkills = () => (
  <div id="skills" className="skills-container">
    <h2>Top skills and years of usage</h2>
    <div className="buttons-container">
      {Object.entries(skills).map(([skill, { years, IconComponent }]) => (
        <SkillButton
          key={skill}
          skill={skill}
          years={years}
          IconComponent={IconComponent} // Passando o componente como prop
        />
      ))}
    </div>
  </div>
);

export default TopSkills;
