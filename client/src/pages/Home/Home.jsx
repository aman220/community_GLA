import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import PostSide from '../../components/PostSide/PostSide'
import Profile from '../Profile/Profile'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
        {/* <Profile/> */}
      </div>
  )
}

export default Home