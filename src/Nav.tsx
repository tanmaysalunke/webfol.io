import React from "react";

const Nav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              className={`btn-menu ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`btn-menu ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`btn-menu ${
                activeSection === "skills" ? "active" : ""
              }`}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`btn-menu ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
