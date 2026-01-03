import "./skill.css";
import skillsData from "./icons/skill-icon";


function Skills() {
  return (
    <div className="skills-main-container">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>
      <div className="skills-grid-container">
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

