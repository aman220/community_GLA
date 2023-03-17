import React, { useEffect } from "react";
import './ProjectsList.css'
import { getTimelineProjects } from "../../actions/ProjectsAction";
import { useSelector, useDispatch } from "react-redux";
// import { ProjectsData } from '../../Data/ProjectsData'
import Project from '../Project/Project'
const ProjectsList = () => {


  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.projectReducer);
  useEffect(() => {
    dispatch(getTimelineProjects(user._id));
  }, []);
  if (!projects) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="Posts">
        {projects.map((project, id)=>{
            return <Project data={project} id={id}/>
        })}
    </div>
  )
}

export default ProjectsList