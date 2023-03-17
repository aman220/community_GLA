import React, { useEffect } from 'react'
import './TrendCard.css'
import { TrendData } from './TrendData'
import {useDispatch, useSelector} from 'react-redux'
import { getTimelineAnnounc } from '../../actions/AnnounceAction'

const TrendCard = () => {

    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const {announcement, loading} = useSelector((state)=>state.announcReducer)

    useEffect(()=> {
        dispatch(getTimelineAnnounc(user._id))
    },[])
    return (
        <div className="TrendCard">
            <h3>Announcements</h3>
            {announcement.map((announcement) => {
                return (
                    <div className="trend">
                        <span><a href="javascript:;">{announcement.AnnouneName}</a></span>
                        <span><a href="javascript:;">- {announcement.AnnounceDesc}</a></span>
                    </div> 
                )
            })}
        </div>
    )
}

export default TrendCard