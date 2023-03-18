import React from 'react'
import './ProfileSide.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import SuggestionCard from '../SuggestionCard/SuggestionCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      
       <ProfileCard location = "homepage"/>
       <SuggestionCard/>
       <FollowersCard/>
     
    </div>
  )
}

export default ProfileSide
