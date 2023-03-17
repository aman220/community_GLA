import React, { useState, useRef } from "react";
import "./ProjectShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { uploadProjects } from "../../api/UploadRequest";

const ProjectShare = () => {
 
  
  const loading = useSelector((state) => state.postReducer.uploading);
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  const desc = useRef();
  const title = useRef();
  const tech = useRef();
  const req = useRef();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //post data
    const newProject = {
      userId: user._id,
      desc: desc.current.value,
      title : title.current.value,
      tech  : tech.current.value,
      req : req.current.value,
    };
    dispatch(uploadProjects(newProject))
    console.log(newProject)
  }

  return (
    <div onSubmit={handleSubmit} className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <span>Project Title</span>
        <input
        ref={title}
        required
          type="text"
          placeholder="What's in your mind ?"
         
          
        />

        <span>Project Description</span>
        <textarea
        ref={desc}
          type="text"
          placeholder="Project description"
          
          required
        />
        <div>
          <span>Project technology </span>
          <div style={{marginTop:10}}>
            <div className="input-group">
              <select
                className="infoInput"
                name="userType"
                ref={tech}
               
                required
              >
                <option value="">Select technology</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
              </select>
            </div>
          </div>
        </div>
        <span>Request</span>
        <input
        ref={req}
          type="text"
          placeholder="What you want ?"
         
          required
        />
        <button className='button ps-button' type="submit" onClick={handleSubmit} disabled={loading} >  {loading ? "uploading" : "Share"}</button>
      </div>
    </div>
  );
};

export default ProjectShare;
