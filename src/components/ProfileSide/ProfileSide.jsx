import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FallowersCard/FallowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
       <LogoSearch/>
       <ProfileCard/>
       <FollowersCard/>
     
    </div>
  )
}

export default ProfileSide
