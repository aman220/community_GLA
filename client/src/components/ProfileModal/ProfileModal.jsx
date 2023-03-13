import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./ProfileModal.css"
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/UserAction";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const {user} = useSelector((state)=>state.authReducer.authData);

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onImageChange = (event) =>{
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
      ? setProfileImage(img)
      : setCoverImage(img);
    }
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    let UserData = formData;
    if(profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage); 
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if(coverImage){
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      className="custom-modal"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your info</h3>

        <input
          type="text"
          className="infoInput"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          value = {formData.firstname}
        />
        <input
          type="text"
          className="infoInput"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          value = {formData.lastname}
        />



        <input
          type="text"
          className="infoInput"
          name="worksAt"
          placeholder="Works at"
          onChange={handleChange}
          value = {formData.worksAt}
        />

        <input
          type="text"
          className="infoInput"
          name="qualification"
          placeholder="Qualification"
          onChange={handleChange}
          value = {formData.qualification}
        />



        <input
          type="text"
          className="infoInput"
          name="livesin"
          placeholder="Lives in"
          onChange={handleChange}
          value = {formData.livesin}
        />

        <input
          type="text"
          className="infoInput"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          value = {formData.country}
        />



        <input
          type="text"
          className="infoInput"
          name="description"
          placeholder="User Description"
          onChange={handleChange}
          value = {formData.description}
        />




        <label htmlFor="profileImg">Profile Image</label>
        <input type="file" name='profileImage' className="info-Input" onChange={onImageChange}/>
        <label htmlFor="coverImg">Cover Image</label>
        <input type="file" name="coverImage" className="info-Input" onChange={onImageChange}/>

        <button className="button infoButton" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;