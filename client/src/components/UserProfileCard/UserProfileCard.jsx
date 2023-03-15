import React from "react";
import { useSelector } from "react-redux";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import FollowersCard from "../FollowersCard/FollowersCard"
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import "./UserProfileCard.css";

const ProfileCard = ({location , person }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    // const { person } = useParams();
    const posts = useSelector((state) => state.postReducer.posts);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  
    // Get the user object based on the user ID in the URL
    const selectedUser = location.state?.person || user;
    
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
        <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{selectedUser.firstname} </span>
        <span>{user.workAt? user.worksAt: "Write about yourself"}</span>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>{selectedUser.userType}</span>
      </div>
      
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <a href="javascript:;">
              <span>{user.following.length}</span>
              <span>Following</span>
            </a>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <a href="#">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </a>
          </div>
          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <a href="#">
                  <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                  <span>Posts</span>
                </a>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      <div>
        <h2 style={{ margin: "1rem 1rem" }}>Description</h2>
        <div className="description-container">
          <div className="description">
            <span>

              {user.description}
            </span>
          </div>
        </div>
      </div>

      {location === 'profilePage' ? "" : <span>
      <Link style={{textDecoration: "none", color: "inherit" }} to={`/userprofile/${user._id}`}>My Profile</Link>
      </span>}
    </div>
  );
};

export default ProfileCard;
