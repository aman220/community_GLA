import React, { useEffect, useState } from "react";
import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";
import { useRef } from "react";
import { addMessage, getMessages } from "../../api/MessageRequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
const ChatBox = ({ chat, currentUser , setSendMessage , receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();


  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }



  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      senderId : currentUser,
      text: newMessage,
      chatId: chat._id,
  }
  const receiverId = chat.members.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}


  // Receive Message from parent component
  useEffect(()=> {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  
  },[receivedMessage])

  
  // Always scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])

  return (
    <>
      <div className="ChatBox-container">
        {chat? (
        <>
        <div
          className="users"
          style={{ display: "flex", gap: 5, marginLeft: 20 }}
        >
          <div className="online-dot"></div>
          <img
            src={
              userData?.profilePicture
                ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
                : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
            }
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: "0.8rem", marginLeft: 10 }}>
            <span>
              {userData?.firstname} {userData?.lastname}
            </span>
            <span>Online </span>
          </div>
        </div>

        {/* chat-body */}
        <div className="chat-body">
          {messages.map((message) => (
            <>
              <div ref={scroll}
                className={
                  message.senderId === currentUser ? "message own" : "message"
                }
              >
                <span>{message.text}</span>
                <span>{format(message.createdAt)}</span>
              </div>
            </>
          ))}
        </div>

        {/* chat sender */}
        <div className="chat-sender">
              <div>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick = {handleSend}>Send</div>
              {/* <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              /> */}
            </div>{" "}
            </>
            ) : (
              
              <span className="chatbox-empty-message">
              Tap on a chat to start conversation...
            </span>
            )}
        
      </div>
    </>
  );
};

export default ChatBox;
