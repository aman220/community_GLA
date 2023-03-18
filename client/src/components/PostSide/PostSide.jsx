import React, {useState} from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import { UilTimes } from '@iconscout/react-unicons'
import TrendingToggle from '../../img/trending.png'
import PlacementCard from '../Placement/PlacementCard'
import TrendCard from '../TrendCard/TrendCard'
// import Posts from '../Posts/Posts'
// import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import Placements from '../Placements/Placements'
const PostSide = () => {
  
  return (
    <div className="PostSide">
      <div className="PostSides">
      <PostShare/>
      <h2 >Top GLAdiator</h2>
      <Placements/>
      <Posts />
      </div>
    </div>
  )
}

export default PostSide