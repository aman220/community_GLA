import React, { useEffect, useState } from 'react'
import './TrendCard.css'
import { TrendData } from './TrendData'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelineAnnounc } from '../../actions/AnnounceAction'
import axios from 'axios'
import AnnouncementInfo from '../AnnouncementInfo/AnnouncementInfo'

const TrendCard = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    // const {announcement, loading} = useSelector((state)=>state.announcReducer)

    const [announcement, setAnnoun] = useState([]);

    useEffect(() => {
        const fetchAnn = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/announce/${user._id}/timeline`);
                setAnnoun(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAnn();
    }, [user._id]);

    return (
        <div className="TrendCard">
            <h3>Announcements</h3>
            {announcement.map((anncmnt, id) => {
                return (
                    <AnnouncementInfo data={anncmnt} key={id}/>
                )
            })}
        </div>
    )
}

export default TrendCard