import React from 'react'
import './ProfileSide.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      
       <ProfileCard location = "homepage"/>
       <FollowersCard/>
     
    </div>
  )
}

export default ProfileSide
