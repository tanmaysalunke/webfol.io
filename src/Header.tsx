import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#experience" className="btn-menu">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#skills" className="btn-menu">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" className="btn-menu">
              PROJECTS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
