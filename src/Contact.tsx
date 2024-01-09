import React from "react";
import { ReactComponent as LinkedInIcon } from "./icons/icons8-linkedin-2.svg";
import { ReactComponent as GitHubIcon } from "./icons/icons8-github-2.svg";
import { ReactComponent as EmailIcon } from "./icons/Email.svg";
import { ReactComponent as ResumeIcon } from "./icons/resume.svg";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/tanmay-kishor-salunke-8552a216b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon role="img" aria-label="LinkedIn" />
        </a>
        <a
          href="https://github.com/tanmaysalunke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon role="img" aria-label="GitHub" />
        </a>
        <a
          href="mailto:tanmaysalunke4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon role="img" aria-label="Email" />
        </a>
        <a
          href="./Tanmay Kishor_Salunke_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeIcon role="img" aria-label="Resume" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
