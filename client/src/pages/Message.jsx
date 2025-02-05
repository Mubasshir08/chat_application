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
      setProfilePic(`${import.meta.env.VITE_SERVER_URL}${selectedUser.profilePic}`);
    }
    else{
      setProfilePic(`${import.meta.env.VITE_SERVER_URL}${authUser.profilePic}`);
    }
  },[selectedUser, messageInfo])
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
        <time className="text-xs opacity-50 text-white">12:45</time>
      </div>
      <div className={`chat-bubble`}>{messageInfo.message}</div>
    </div>
  )
}

export default Message