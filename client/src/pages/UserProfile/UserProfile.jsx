import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import './UserProfile.css'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <UserProfileCard location = "profilePage"/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile