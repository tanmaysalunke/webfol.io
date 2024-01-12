import React from "react";

const Header: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="header-content">
      <h1>
        <a href="/" className={`title-${darkMode ? "dark" : "light"}`}>
          Tanmay Kishor Salunke
        </a>
      </h1>
      <p className="subtitle">Software Engineer</p>
    </section>
  );
};

export default Header;
