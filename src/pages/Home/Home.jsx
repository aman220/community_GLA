import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import PostSide from '../../components/PostSide/PostSide'
import TrendingToggle from '../../img/trending.png'

const Home = () => {
  return (
    <div className="Home">
      
      <ProfileSide/>
      <PostSide/>
      <RightSide/>

      <div className="trending-toggle">
        <img src={TrendingToggle} alt="" />
      </div>
    </div>
  )
}

export default Home