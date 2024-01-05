import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a className="btn-menu" href="#experience">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a className="btn-menu" href="#skills">
              SKILLS
            </a>
          </li>
          <li>
            <a className="btn-menu" href="#projects">
              PROJECTS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
