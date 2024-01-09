import React from "react";

const Projects: React.FC = () => {
  const projList = [
    {
      id: 1,
      title: "GR918 - Software for System Hardware Inventory",
      duration: "MARCH - AUGUST 2022",
      description:
        "In the Smart India Hackathon,developed an award-winning solution for GR918 - a hybrid LAN and cloud-based inventory management system. Utilizing Python, Django, and Batch Scripting, designed a Django-based website with a robust UI and database models, and automated hardware data extraction using Batch Script and Python, orchestrated through Windows Task Scheduler and Linux/Ubuntu CronJob. Our innovative approach in evolving the project from LAN-based to a combined LAN and Cloud solution was pivotal in our victory in the intense 36-hour finale.",
      stack: ["Python", "Django", "Batch Scripting", "SQLite"],
      imageUrl: "url-to-project-1-image.jpg",
    },
    {
      id: 2,
      title: "E-Waste Tracker",
      duration: "JANUARY - APRIL 2022",
      description:
        "Led the creation of a dynamic Django-based web portal tailored for efficient electronic waste management and real-time tracking of electronic devices and components. This initiative involved thorough research into the e-waste strategies of laptop manufacturers, delving into aspects of supply chain management and government policies. I was responsible for developing the entire stack, which included backend logic using Python and Django, designing robust SQLite database models, and crafting a user-friendly frontend with HTML, CSS, and JavaScript. The primary focus was on maintaining data integrity and offering a seamless user experience, culminating in a vital tool for promoting environmental sustainability in the technology sector.",
      stack: ["Python", "Django", "SQLite", "Git"],
      imageUrl: "url-to-project-2-image.jpg",
    },
    {
      id: 3,
      title: "Location Tracking System",
      duration: "JANUARY - APRIL 2021",
      description:
        "Crafted an Android application in Java, incorporating a Firebase database for data management. The app leverages the device's GPS sensor for acquiring real-time location data, enabling live tracking on OpenStreetMap via API integration.",
      stack: ["Android - Java", "Firebase", "XML", "OpenStreetMap API", "Git"],
      imageUrl: "url-to-project-4-image.jpg",
    },
    {
      id: 4,
      title: "Mental Health Test Web Application",
      duration: "JANUARY - APRIL 2020",
      description:
        "Engineered a Flask app to enable college students to gauge their mental health through a strategic questionnaire, with MySQL integration for secure data handling and insightful analysis. This effort was bolstered by a partnership with college counselors, enhancing question validity and result interpretation to advance mental health awareness.",
      stack: ["Python", "Flask", "MySQL", "Git"],
      imageUrl: "url-to-project-3-image.jpg",
    },
  ];

  return (
    <section id="projects">
      <div className="row">
        <h2 className="section-header">Projects</h2>
        <div className="container-fluid">
          {projList.map((proj) => (
            <div className="row exp">
              <div className="col-4 col-sm-4 duration">
                <p className="exp-duration">{proj.duration}</p>
              </div>
              <div className="col-8 col-sm-8 experience">
                <p className="exp-title">{proj.title}</p>
                <div className="skill-tags">
                  {proj.stack.map((s) => (
                    <span className="skill-tag">{s}</span>
                  ))}
                </div>
                <p className="exp-description">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
