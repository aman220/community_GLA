import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <div className="s-nav-icon active">
            <img src={Home} alt="" />
            </div>
            <div className="s-nav-icon">
            <UilSetting/>
            </div>
            <div className="s-nav-icon">
            <img src={Noti} alt="" />
            </div>
            <div className="s-nav-icon">
            <img src={Comment} alt="" />
            </div>
        </div>

        <TrendCard/>
    </div>
  )
}

export default RightSide