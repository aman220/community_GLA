import React, { useState, useRef } from "react";
import "./ProjectShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const ProjectShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [request , setRequest] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Project submitted:", { title, description, technology });
  };

  return (
    <div onSubmit={handleSubmit} className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <span>Project Title</span>
        <input
          type="text"
          placeholder="What's in your mind ?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <span>Project Description</span>
        <textarea
          type="text"
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div>
          <span>Project technology </span>
          <div style={{marginTop:10}}>
            <div className="input-group">
              <select
                className="infoInput"
                name="userType"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
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
        <form onSubmit={handleSubmit}></form>
        <span>Request</span>
        <input
          type="text"
          placeholder="What you want ?"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          required
        />
        <button className='button ps-button' type="submit">Share</button>
      </div>
    </div>
  );
};

export default ProjectShare;
