import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import {UilClipboard} from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { useSelector ,  useDispatch } from "react-redux";
import { uploadImage , uploadPost} from '../../actions/uploadAction';

const PostShare = () => {
    const [image, setImage] = useState(null)
    const loading = useSelector((state) => state.postReducer.uploading);
    const { user } = useSelector((state) => state.authReducer.authData);
    const imageRef = useRef()
    const dispatch =  useDispatch()
    const desc = useRef();

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage (img);
        }
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
          dispatch(uploadImage(data));
        } catch (err) {
          console.log(err);
        }
        
      }
      dispatch(uploadPost(newPost));
      resetShare();
    }

    // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };


    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input
                ref={desc} 
                required
                type="text" placeholder="What's in your mind ?" />
                <div className="postOptions">
                    <div className="option"
                    style={{color:"var(--photo)"}}
                    onClick={()=>imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color:"var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color:"var(--location)"}}>
                        <UilClipboard />
                        Project
                    </div>
                    <div className="option" style={{color:"var(--schedule)"}}>
                        <UilSchedule />
                        Meeting
                    </div>
                    <button className='button ps-button' onClick={handleSubmit}disabled={loading} >  {loading ? "uploading" : "Share"}</button>
                    <div style={{display:"none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare