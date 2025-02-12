import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'


const Message = ({ messageInfo }) => {
  const scroll = useRef();
  const [profilePic, setProfilePic] = useState('');
  const { selectedUser } = useSelector(state => state.user);
  const { authUser } = useSelector(state => state.user);
  if(!selectedUser) return null;
  useEffect(() => {
    scroll.current?.scrollIntoView({behavior:"smooth"})
    if(selectedUser._id === messageInfo.senderId) {
      setProfilePic(`${selectedUser.profilePic}`);
    }
    else{
      setProfilePic(`${authUser.profilePic}`);
    }
  },[selectedUser, messageInfo]);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true // 12-hour format with AM/PM
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  

  // console.log(selectedUser)
  // console.log(messageInfo);
  return (
    <div ref={scroll} className={`chat ${selectedUser._id === messageInfo.receiverId ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src= {profilePic} />
        </div>
      </div>
      <div className="chat-footer">
        <time className="text-xs opacity-50 text-white">{formatTime(messageInfo.createdAt)}</time>
      </div>
      <div className={`chat-bubble`}>{messageInfo.message}</div>
    </div>
  )
}

export default Message