import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({ messageInfo }) => {
  const { selectedUser } = useSelector(state => state.user);
  // console.log(selectedUser)
  // console.log(messageInfo);
  return (
    <div className={`chat ${selectedUser._id === messageInfo.receiverId ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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