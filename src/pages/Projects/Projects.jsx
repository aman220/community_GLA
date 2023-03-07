import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProjectShare from '../../components/ProjectShare/ProjectShare'
import RightSide from '../../components/RightSide/RightSide'

import "./Projects.css"
const Projects = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className='projectscenter'>
            <ProjectShare/>
        </div>
        <RightSide></RightSide>
     
    </div>
  )
}

export default Projects
