import React, { useEffect, useState } from "react";
import './ProjectsList.css'
import axios from 'axios';
import Project from '../Project/Project'
import { useSelector, useDispatch } from "react-redux";

const ProjectsList = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/projects/${user._id}/timeline`);
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, [user._id]);
  
  return (
    <div className="Posts">
      {projects.map((project, id)=>{
        return <Project data={project} key={id}/>
      })}
    </div>
  );
};

export default ProjectsList;
