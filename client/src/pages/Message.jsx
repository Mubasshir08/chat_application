import React from 'react'

const Message = ({receiver}) => {
  return (
    <div className={`chat ${receiver === 'me' ? 'chat-start' : 'chat-end'}`}>
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
  <div className={`chat-bubble ${receiver === 'me' ? 'chat-bubble-warning' : 'chat-bubble-info'}`}>You were the Chosen One!</div>
</div>
  )
}

export default Message