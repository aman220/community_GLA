import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.3rem' />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>Student</span>
            </div>

            <div className="info">
                <span>
                    <b>Qualification </b>
                </span>
                <span>B.Tech CS 2nd Year</span>
            </div>

            <div className="info">
                <span>
                    <b>Skills </b>
                </span>
                <span>Software Developer</span>
            </div>
        </div>
    )
}

export default InfoCard