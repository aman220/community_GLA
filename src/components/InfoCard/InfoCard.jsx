import React, { useState} from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal.jsx/ProfileModal'

const InfoCard = () => {
    const [modalOpened , setModalOpened] = useState(false)
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem" height="1.3rem" onClick={() => setModalOpened(true)} />
                    <ProfileModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened} 
                    />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status: </b>
                </span>
                <span>Student</span>
            </div>

            <div className="info">
                <span>
                    <b>Qualification: </b>
                </span>
                <span>B.Tech CS 2nd Year</span>
            </div>

            <div className="info">
                <span>
                    <b>Skills: </b>
                </span>
                <span>Software Developer</span>
            </div>
            <div className="info">
                <span>
                    <b>Wroks At: </b>
                </span>
                <span>wipro Inida pvt ltd</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives In: </b>
                </span>
                <span>Aligarh</span>
            </div>
        </div>
    )
}

export default InfoCard