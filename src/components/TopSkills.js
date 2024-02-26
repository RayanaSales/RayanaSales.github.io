// TopSkills.js
import React from "react";
import "../assets/styles/TopSkills.css";

const technologies = [
  { name: "Rest", years: "7 years" },
  { name: "React", years: "5 years" },
  { name: "Redux", years: "5 years" },
  { name: "Jest", years: "4 years" },
  { name: "C#", years: "4 years" },
  { name: "Asp.Net", years: "4 years" },
  { name: "Cypress", years: "3 years" },
  { name: "CI/CD", years: "3 years" },
  { name: "TypeScript", years: "3 years" },
  { name: "Node.js", years: "5 years" },
  { name: "Angular.js", years: "3 years" },
  { name: "Jquery", years: "3 years" },
  { name: "Next.js", years: "3 years" },
  { name: "Nest.js", years: "1 year" },
  { name: "Vue.js", years: "1 year" },
  { name: "GraphQL", years: "1 year" },
];

const TopSkills = () => (
  <div id="skills" className="skills-container">
    <h2>Top skills and years of experience</h2>
    <div className="skills-table-container">
      <div className="skills-table-content">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((tech) => (
              <tr key={tech.name}>
                <td>{tech.name}</td>
                <td>{tech.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default TopSkills;
