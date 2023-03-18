import { Modal, useMantineTheme } from "@mantine/core";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadAnnouncement } from "../../actions/uploadAction";
import NavBar from "../NavBar/NavBar";
import "./AnnounceModal.css"


const AnnounceModal = ({ modalOpened, setModalOpened, data }) => {
    const theme = useMantineTheme();
    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    
    const announeName = useRef();
    const announeDesc = useRef();

    const dispatch = useDispatch();
    const param = useParams();
    const {user} = useSelector((state)=>state.authReducer.authData);   
  
    const handleSubmit = (e)=> {
      e.preventDefault();
      
      const newAnnouncement = {
        userId : user._id,
        AnnouneName : announeName.current.value,
        AnnounceDesc : announeDesc.current.value,
        firstname : user.firstname,
        lastname: user.lastname
      }
      dispatch(uploadAnnouncement(newAnnouncement))
      setModalOpened(false);
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
            ref={announeName}
            required
          />
          
  
  
          <input
            type="text"
            className="infoInput"
            name="description"
            placeholder="Announement Description"
            ref={announeDesc}
            required
          />
  
  
  
  
          
  
          <button className="button infoButton" onClick={handleSubmit}>Submit</button>
        </form>
      </Modal>
    );
};

export default AnnounceModal