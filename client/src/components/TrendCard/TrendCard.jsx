import React from 'react'
import './TrendCard.css'
import { TrendData } from './TrendData'

const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Announcements</h3>
            {TrendData.map((trend, glads) => {
                return (
                    <div className="trend" key={glads}>
                        <span><a href="javascript:;">{trend.announcement}</a></span>
                        <span><a href="javascript:;">- {trend._by}</a></span>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendCard