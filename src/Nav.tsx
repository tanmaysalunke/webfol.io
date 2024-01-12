import React from "react";

const Nav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const layout = document.querySelector(".layout");
    if (section && layout) {
      const offsetTop = section.offsetTop;
      const calculatedTop =
        offsetTop - layout.clientHeight / 2 + section.offsetHeight / 2;
      layout.scrollTo({
        top: calculatedTop,
        behavior: "smooth",
      });
      window.history.pushState({}, "", `#${sectionId}`);
    }
  };

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
              onClick={(e) => scrollToSection(e, "about")}
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
              onClick={(e) => scrollToSection(e, "skills")}
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
