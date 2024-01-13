import React, { useState } from "react";
import { ReactComponent as LinkedInIcon } from "./icons/icons8-linkedin-2.svg";
import { ReactComponent as GitHubIcon } from "./icons/icons8-github-2.svg";
import { ReactComponent as EmailIcon } from "./icons/Email.svg";
import { ReactComponent as ResumeIcon } from "./icons/resume.svg";

const Contact: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section id="contact">
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/tanmay-kishor-salunke-8552a216b/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="tooltip-container"
        >
          <LinkedInIcon role="img" aria-label="LinkedIn" />
          {isHovering && <span className="tooltip">LinkedIn</span>}
        </a>
        <a
          href="https://github.com/tanmaysalunke"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="tooltip-container"
        >
          <GitHubIcon role="img" aria-label="GitHub" />
          {isHovering && <span className="tooltip">GitHub</span>}
        </a>
        <a
          href="mailto:tanmaysalunke4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="tooltip-container"
        >
          <EmailIcon role="img" aria-label="Email" />
          {isHovering && <span className="tooltip">Email</span>}
        </a>
        <a
          href="./Tanmay Kishor_Salunke_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="tooltip-container"
        >
          <ResumeIcon role="img" aria-label="Resume" />
          {isHovering && <span className="tooltip">View Resume</span>}
        </a>
      </div>
    </section>
  );
};

export default Contact;
