import React, { useEffect, useState } from "react";
import { getUser } from "../../api/UserRequests";
import "./ChatBox.css";
import { addMessage, getMessages } from "../../api/MessageRequest";
import { format } from "timeago.js";
const ChatBox = ({ chat, currentUserId }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
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
  }, [chat, currentUserId]);

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

  return (
    <>
      <div className="ChatBox-container">
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
              <div
                className={
                  message.senderId === currentUserId ? "message own" : "message"
                }
              >
                <span>{message.text}</span>
                <span>{format(message.createdAt)}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
