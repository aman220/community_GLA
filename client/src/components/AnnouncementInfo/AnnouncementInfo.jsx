import React from 'react'
import './AnnouncementInfo.css'

const AnnouncementInfo = ({data}) => {
    return (
        <div className="trend">
            <span><a href="javascript:;">{data.AnnouneName}</a></span>
            <span><a href="javascript:;">{data.AnnounceDesc}</a></span>
            <span><a href="javascript:;">By - {data.firstname}</a></span>
            <hr/>
        </div>
    )
}

export default AnnouncementInfo