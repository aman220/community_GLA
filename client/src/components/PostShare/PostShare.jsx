import React, { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from '../../actions/uploadAction';
import ProfileModal from '../ProfileModal/ProfileModal'
import AnnounceModal from '../AnnounceModal/AnnounceModal';
import { Link } from 'react-router-dom';

const PostShare = () => {
  const [image, setImage] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false);
  const loading = useSelector((state) => state.postReducer.uploading);
  const { user } = useSelector((state) => state.authReducer.authData);
  const imageRef = useRef()
  const dispatch = useDispatch()
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const [modalOpened , setModalOpened] = useState(false);


    const handleMeetingButtonClick = () => {
      window.location.href = "https://meet.google.com/?authuser=0";
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost))
    reset()
  }

  // Reset Post Share
  const reset = () => {
    setImage(null);
    desc.current.value = ""
  }


  return (
    <div className="PostShare">
      <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} />
      <div>
        <input
          ref={desc}
          required
          type="text" placeholder="What's in your mind ?" />
        <div className="postOptions">
          <div className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="container">
                    <div className="option" style={{color:"var(--video)"}} onClick={() => setModalOpened(true)}>
                        <UilPlayCircle />
                        Announce
                        <AnnounceModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened} 
                    data = {user}
              />
                    </div>
                    </div>
          <Link to="/projects">
          <div className="option" style={{ color: "var(--location)" }}>
            
            <UilClipboard />
            Project
         
          </div>
          </Link>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule onClick={handleMeetingButtonClick}/>
            Meeting
          </div>
          <button className='button ps-button' onClick={handleSubmit} disabled={loading} >  {loading ? "uploading" : "Share"}</button>
          <div style={{ display: "none" }}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare