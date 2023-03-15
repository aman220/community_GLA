import React from "react";
import "./Project.css"; // Import the CSS file for styling

const Project = () => {
  return (
    
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-card">
      <div className="project">
        <div className="project-image">
          <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="project-details">
          <h3 className="project-title">Project Title</h3>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dolor nec lectus faucibus viverra.
          </p>
          <div className="project-tech-stack">
            <span className="tech-stack-item">React</span>
            <span className="tech-stack-item">Node.js</span>
            <span className="tech-stack-item">Express.js</span>
          </div>
          <p className="project-request">
            <strong>Request:</strong> Need help with implementing authentication
          </p>
          <p className="project-user">by Aman</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Project;
