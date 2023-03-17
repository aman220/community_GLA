import React from "react";
import "./Project.css"; // Import the CSS file for styling

const Project = ({data}) => {

  return (
    
    <div className="projects-container">
      <div className="project-card">
      <div className="project">
        <div className="project-image">
          <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="project-details">
          <h3 className="project-title">{data.title}</h3>
          <p className="project-description">
           {data.desc}
          </p>
          <div className="project-tech-stack">
            <span className="tech-stack-item">{data.tech}</span>
          </div>
          <p className="project-request">
            <strong>Request: </strong> {data.req}
          </p>
          <p className="project-user">by Aman</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Project;
