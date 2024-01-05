import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/tanmay-kishor-salunke-8552a216b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"./icons8-linkedin-2.svg"} alt="LinkedIn Icon" />
        </a>
        <a
          href="https://github.com/tanmaysalunke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"./icons8-github-2.svg"} alt="GitHub Icon" />
        </a>
        <a
          href="mailto:tanmaysalunke4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"./email.svg"} alt="Email Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/tanmay-kishor-salunke-8552a216b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={"./resume.svg"} alt="Resume Icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
