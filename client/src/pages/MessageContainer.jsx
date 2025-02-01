import React from 'react'
import SendMessage from './SendMessage'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='bg-blue-400 w-full flex items-center space-x-2 p-1.5 rounded-tr-md'>
        <div className="avatar online ml-1">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <h3 className='text-white'>Jessy</h3>
      </div>
      <Messages />
      <SendMessage />
    </div>
  )
}

export default MessageContainer