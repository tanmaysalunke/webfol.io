import React from "react";

const Experience: React.FC = () => {
  const expList = [
    {
      id: 1,
      title: "Teaching Assistant - CSE 110",
      company: "Arizona State University",
      duration: "AUGUST 2024 - PRESENT",
      description:
        "I led three lab sessions each week, providing hands-on instruction in Java programming concepts, debugging techniques, and code optimization. I supported students through study hall sessions by addressing their queries, offering tutoring, and resolving grading issues, ensuring their understanding of core programming principles. Additionally, I assisted faculty by proctoring exams, managing grading concerns, and offering extra instructional support to enhance the overall learning experience.",
      imageUrl: "url-to-project-2-image.jpg",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Arizona State University",
      duration: "MAY - AUGUST 2024",
      description:
        "I developed and launched the HyPT Center’s website, effectively presenting critical information such as member profiles, events, and news, which improved communication and resource sharing among international stakeholders. By replicating the Doodle poll functionality on the website, I facilitated global collaboration by ensuring synchronized meeting times and enhancing participation across diverse time zones. Additionally, I enhanced user engagement by implementing a registration feature that sends automated Zoom links and calendar invites to participants who RSVP, leading to a 25% increase in event attendance.",
      imageUrl: "url-to-project-2-image.jpg",
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Jio Platforms Limited",
      duration: "JAN 2023 - JULY 2023",
      description:
        "I enhanced system efficiency by 30% over the legacy Visitor Management Enterprise System by optimizing process flows, developing microflows and workflows, and integrating Continuous Integration/Continuous Deployment (CI/CD) pipelines. By integrating strategic vehicle check-in processes and automating data retrieval through Single Sign-On (SSO) and JSON-formatted SAP API integrations within a React framework, I reduced visitor check-in times by 15 minutes. Additionally, I improved user error rectification by 50% by leading a modular UI redesign in the Enterprise System; the redesign, implemented using iterative processes in Figma and React, significantly boosted user satisfaction and system usability.",
      stack: ["Python", "Django"],
      imageUrl: "url-to-project-1-image.jpg",
    },
    {
      id: 4,
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
