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
  const [show, setShow] = useState(false);
  return (
    <div className="PostSide">
      <div className="PostSides">
      <PostShare/>
      <Posts />
      </div>

      <div className="trending-toggle">
        <img src={TrendingToggle} alt="" onClick={()=> setShow(!show)}/>
      </div>

      {
        show && <div className="trending-mobile-view">
        <div className='close-btn'>
          <a href="javascript:;" onClick={()=> setShow(!show)}><UilTimes /></a>
        </div>
        <div className="TrendCardDiv">
          <TrendCard />
        </div>
      </div>
      } 
    </div>
  )
}

export default PostSide