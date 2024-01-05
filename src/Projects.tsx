import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";

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
      duration: "AUGUST - APRIL 2022",
      description:
        "Led the creation of a dynamic Django-based web portal tailored for efficient electronic waste management and real-time tracking of electronic devices and components. This initiative involved thorough research into the e-waste strategies of laptop manufacturers, delving into aspects of supply chain management and government policies. I was responsible for developing the entire stack, which included backend logic using Python and Django, designing robust SQLite database models, and crafting a user-friendly frontend with HTML, CSS, and JavaScript. The primary focus was on maintaining data integrity and offering a seamless user experience, culminating in a vital tool for promoting environmental sustainability in the technology sector.",
      stack: ["Python", "Django", "SQLite", "Git"],
      imageUrl: "url-to-project-2-image.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      duration: "JANUARY - MARCH 2023",
      description: "Description for Project 3",
      stack: ["Python", "Django"],
      imageUrl: "url-to-project-3-image.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      duration: "JANUARY - MARCH 2023",
      description: "Description for Project 4",
      stack: ["Python", "Django"],
      imageUrl: "url-to-project-4-image.jpg",
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
