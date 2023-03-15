import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
import {Link} from 'react-router-dom'
import "./User.css";

const User = ({ person , location } ) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

 

  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImg"
        />
        <div className="name" style={{ width: "100px" }}>
        <Link to={{ pathname: `/userprofile/${person._id}`, state: { person } }}>
  <span>{person.firstname}</span>
</Link>
           <span>@{person.username.slice(0, 8)}{person.username.length > 8 ? "..." : ""}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;