import React from 'react'
import './Post.css'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comments.png'
import Share from '../../img/share.png'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />

        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.caption}</span>
        </div>
    </div>
  )
}

export default Post