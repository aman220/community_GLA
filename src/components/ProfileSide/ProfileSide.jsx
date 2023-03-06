import React from 'react'

import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      
       <ProfileCard/>
       <FollowersCard/>
     
    </div>
  )
}

export default ProfileSide
