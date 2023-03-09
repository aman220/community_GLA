import React from "react";
import "./Post.css";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comments.png";
import Share from "../../img/share.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <div class="usersprofile">
        <img src={data.profimg} alt="" class="followerImg" />
        <div class="usersname">
          <span><b>{data.name}</b></span>
          <span>@{data.username}</span>
        </div>
        <button className="button fc-button">Follow</button>
      </div>

      <div className="discription">
        <span> {data.caption}</span>
      </div>
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes} likes</span>
    </div>
  );
};

export default Post;
