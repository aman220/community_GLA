import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import "./Chat.css";
import { userChats } from "../../api/ChatRequests";
import Conversations from "../../components/Conversation/Conversations";
const Chat = () => {
  
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        // console.log(data) // update the state with the fetched data
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);
  

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversations
                  data={chat}
                  currentUser={user._id}
                 
                />
              </div>
            ))}
        </div>
      </div>

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          // setSendMessage={setSendMessage}
          // receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
