import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import FollowersCard from "../FollowersCard/FollowersCard"
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>garvit</span>
        <span>Software developer</span>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>Alumanai</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <a href="javascript:;">
              <span>6,890</span>
              <span>Followings</span>
            </a>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <a href="#">
              <span>1</span>
              <span>Followers</span>
            </a>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <a href="#">
                  <span>3</span>
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
              Hello my name is aman raj singh i am software develper in gla
              university mathura currently i am pursuing b tech from gla
              univeriy mathyra i am very smart body i am from aligarh i like to
              watch moviee or content taman ka
            </span>
          </div>
        </div>
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
