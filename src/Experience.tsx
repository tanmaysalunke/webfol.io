import React from "react";

const Experience: React.FC = () => {
  const expList = [
    {
      id: 1,
      title: "Software Developer",
      company: "Jio Platforms Limited",
      duration: "JAN 2023 - JULY 2023",
      description:
        "Awarded the 'Spotlight Award' for versatile front and back-end development, crucial to team success. Streamlined vehicle check-ins at Reliance Corporate Park, Navi Mumbai, reducing wait times by 15 minutes through UI design and API development. Enhanced system efficiency by 30% with Mendix microflows and CSS optimizations.",
      stack: ["Python", "Django"],
      imageUrl: "url-to-project-1-image.jpg",
    },
    {
      id: 2,
      title: "Tester (Team Lead)",
      company: "Jio Platforms Limited",
      duration: "JULY 2022 - JAN 2023",
      description:
        "Led a six-member team in extensive testing activities, including bug analysis and various testing methods. Employed JIRA for effective project management, identifying 43 unique issues. Collaborated with the U.S.-based Quality Assurance team, enhancing knowledge transfer for new team members.",
      imageUrl: "url-to-project-2-image.jpg",
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Mumbai University",
      duration: "JUNE - JULY 2020",
      description:
        "Conducted an audit of the existing website, initiating a strategic overhaul to boost functionality and user engagement. Led the redesign of the user interface with Figma, markedly enhancing the user experience based on stakeholder feedback. Collaboratively developed a new WordPress website, achieving a 70% improvement in SEO and performance. Utilized advanced tools such as WordPress and Figma, with a focus on SEO optimization and user-centric design.",
      imageUrl: "url-to-project-2-image.jpg",
    },
  ];
  return (
    <section id="experience">
      <div className="row">
        <h2 className="section-header">Experience</h2>
        <div className="container-fluid">
          {expList.map((exp) => (
            <div className="row exp">
              <div className="col-4 col-sm-4 duration">
                <p className="exp-duration">{exp.duration}</p>
              </div>
              <div className="col-8 col-sm-8 experience">
                <p className="exp-title">{exp.title}</p>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
