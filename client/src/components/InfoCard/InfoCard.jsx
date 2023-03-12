import React, { useEffect, useState} from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import {useDispatch, useSelector} from "react-redux"
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/UserRequests.js'

const InfoCard = () => {
    const [modalOpened , setModalOpened] = useState(false);

    const dispatch = useDispatch()
    const params = useParams();

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})

    const {user} = useSelector((state)=>state.authReducer.authData)

    useEffect(()=>{
        const fetchProfileUser = async()=>{
            if(profileUserId === user._id){
                setProfileUser(user)
            }
            else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser();
    },[user])
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                    <UilPen width="2rem" height="1.3rem" onClick={() => setModalOpened(true)} />
                    <ProfileModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened} 
                    />
                </div>
                ):(
                    ""
                )}
            </div>

            <div className="info">
                <span>
                    <b>Status: </b>
                </span>
                <span>{profileUser.userType}</span>
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