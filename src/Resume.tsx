import React from "react";

const Resume: React.FC = () => {
  return (
    <div>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        className="floating-icon"
      >
        {/* You can use an image or an icon library like FontAwesome */}
        <img className="FAB-icon" src="/cv.png" alt="CV Icon" />
      </a>
    </div>
  );
};

export default Resume;
