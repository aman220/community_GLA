import React from 'react'
import './TrendCard.css'
import {TrendData} from './TrendData'
import {TrendTopic} from './TrendTopic'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Top GLAdiators</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>{trend.name}</span>
                    <span>{trend.glads} GLAds</span>
                </div>
            )
        })}

        <div className="partition-line"></div>

        <h3>Top Projects</h3>
        {TrendTopic.map((topic)=>{
            return(
                <div className="trend">
                    <span><a href="javascript:;">{topic.topic}</a></span>
                    <span>by <a href="javascript:;">{topic.discription}</a></span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard