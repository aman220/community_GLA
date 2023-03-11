import React , { useState }from "react";
import "./Post.css";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comments.png";
import Share from "../../img/share.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };



  return (
    <div className="Post">
     <div class="usersprofile">
              
          <>
            <img src={data.userProfile} alt="" class="followerImg" />
            <div class="usersname">
              <span>
                <b>{data.userProfile}</b>
              </span>
              <span>@{data.name}</span>
            </div>
            <button className="button fc-button">Follow</button>
          </>
      </div>

      <div className="discription">
        <span> {data.desc}</span>
      </div>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt=""  style={{ cursor: "pointer" }}
          onClick={handleLike} />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <span>{data.likes} likes</span>
    </div>
  );
};

export default Post;






// import React, { useState, useEffect } from "react";
// import "./Post.css";
// import Heart from "../../img/like.png";
// import NotLike from "../../img/notlike.png";
// import Comment from "../../img/comments.png";
// import Share from "../../img/share.png";
// import { useSelector } from "react-redux";
// import { likePost } from "../../api/PostsRequests";
// import { getUser } from "../../api/UserRequests";

// const Post = ({ data }) => {
//   const [userProfile, setUserProfile] = useState(null);
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const [liked, setLiked] = useState(data.likes.includes(user._id));
//   const [likes, setLikes] = useState(data.likes.length);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await getUser(data.userId);
//         setUserProfile(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUserProfile();
//   }, [data.userId]);

//   const handleLike = () => {
//     likePost(data._id, user._id);
//     setLiked((prev) => !prev);
//     liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
//   };

//   return (
//     <div className="Post">
//       <div class="usersprofile">
//         {userProfile && (
//           <>
//             <img src={userProfile.profilePicture} alt="" class="followerImg" />
//             <div class="usersname">
//               <span>
//                 <b>{userProfile.username}</b>
//               </span>
//               <span>@{userProfile.name}</span>
//             </div>
//             <button className="button fc-button">Follow</button>
//           </>
//         )}
//       </div>

//       <div className="discription">
//         <span> {data.desc}</span>
//       </div>
//       <img
//         src={
//           data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""
//         }
//         alt=""
//       />

//       <div className="postReact">
//         <img
//           src={liked ? Heart : NotLike}
//           alt=""
//           style={{ cursor: "pointer" }}
//           onClick={handleLike}
//         />
//         <img src={Comment} alt="" />
//         <img src={Share} alt="" />
//       </div>
//       <span style={{ color: "var(--gray)", fontSize: "12px" }}>
//         {likes} likes
//       </span>
//     </div>
//   );
// };

// export default Post;

