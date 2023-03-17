import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProjectShare from '../../components/ProjectShare/ProjectShare'
import RightSide from '../../components/RightSide/RightSide'
import Project from '../../components/Project/Project'

import "./Projects.css"
import ProjectsList from '../../components/Projects/ProjectsList'
const Projects = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className='projectscenter'>
            <ProjectShare/>
            <ProjectsList/>
        </div>
        <RightSide></RightSide>
        this is project 
     
    </div>
  )
}

export default Projects
