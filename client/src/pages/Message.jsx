import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({ messageInfo, profilePic }) => {
  // console.log(profilePic);
  const { selectedUser } = useSelector(state => state.user);
  const { authUser } = useSelector(state => state.user);
  // console.log(selectedUser)
  // console.log(messageInfo);
  return (
    <div className={`chat ${selectedUser._id === messageInfo.receiverId ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={selectedUser._id === messageInfo.senderId ? `${import.meta.env.VITE_SERVER_URL}${selectedUser.profilePic}` : `${import.meta.env.VITE_SERVER_URL}${authUser.profilePic}`} />
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