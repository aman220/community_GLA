import React, {useState} from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import { UilTimes } from '@iconscout/react-unicons'
import TrendingToggle from '../../img/trending.png'
import TrendCard from '../TrendCard/TrendCard'
// import Posts from '../Posts/Posts'
// import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = () => {
  
  return (
    <div className="PostSide">
      <div className="PostSides">
      <PostShare/>
      <Posts />
      </div>
    </div>
  )
}

export default PostSide