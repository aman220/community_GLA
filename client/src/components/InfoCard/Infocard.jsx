import React, { useEffect, useState} from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthAction";

const Infocard = () => {
    const [modalOpened , setModalOpened] = useState(false)

    const dispatch = useDispatch()
    const params = useParams();

    const profileUserId = params.id
    const [profileUser , setProfileUser] = useState({})

    const {user} = useSelector((state)=>state.authReducer.authData)

    const handleLogOut = ()=> {
        dispatch(logout())
      }

    useEffect(()=> {
        const fetchProfileUser = async()=> {
            if(profileUserId === user._id){
                setProfileUser(user)
            }
            else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser();
    }, [user])
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                <div>
                    <UilPen width="2rem" height="1.3rem" onClick={() => setModalOpened(true)} />
                    <ProfileModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened} 
                    data = {user}
                    />
                </div>
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
                <span>{profileUser.qualification}</span>
            </div>

            <div className="info">
                <span>
                    <b>Skills: </b>
                </span>
                <span>Software Developer</span>
            </div>
            <div className="info">
                <span>
                    <b>Works At: </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives In: </b>
                </span>
                <span>{profileUser.livesin}</span>
            </div>

            <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Infocard