import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2 className="section-header">Skills</h2>
      <div className="skill-tags">
        {[
          "Python",
          "Django",
          "Flask",
          "Java",
          "SQLite",
          "MySQL",
          "MongoDB",
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Bootstrap",
          "Git/GitHub",
        ].map((skill) => (
          <span className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
