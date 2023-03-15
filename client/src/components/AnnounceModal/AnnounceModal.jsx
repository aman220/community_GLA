import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./AnnounceModal.css"


const AnnounceModal = ({ modalOpened, setModalOpened, data }) => {
    const theme = useMantineTheme();
    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    
    const dispatch = useDispatch();
    const param = useParams();
    const {user} = useSelector((state)=>state.authReducer.authData);
  
    const handleChange = (e)=> {
      setFormData({...formData, [e.target.name]: e.target.value});
    };
  
   
  
    const handleSubmit = (e)=> {
      e.preventDefault();
      let UserData = formData;
        const data = new FormData();
        const fileName = Date.now() 
        data.append("name", fileName);
        try {
          
        } catch (err) {
          console.log(err);
        }
      }
      
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
          <h3>Upload Announcements</h3>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="Write Announcement"
            onChange={handleChange}
            value = {formData.AnnouneName}
          />
          
  
  
          <input
            type="text"
            className="infoInput"
            name="description"
            placeholder="Announement Description"
            onChange={handleChange}
            value = {formData.AnnounceDesc}
          />
  
  
  
  
          
  
          <button className="button infoButton" onClick={handleSubmit}>Submit</button>
        </form>
      </Modal>
    );
};

export default AnnounceModal