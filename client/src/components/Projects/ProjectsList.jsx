import React, { useEffect } from "react";
import './ProjectsList.css'
import { getTimelineProjects } from "../../actions/ProjectsAction";
import { useSelector, useDispatch } from "react-redux";
import Project from '../Project/Project'

const ProjectsList = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const {projects} = useSelector((state) => state.projectReducer);

  useEffect(() => {
    dispatch(getTimelineProjects(user._id));
  }, []);

 

  return (
    <div className="Posts">
        {projects.map((project, id) => (
            <Project  data={project} key={id} />
        ))}
    </div>
  );
}

export default ProjectsList;
