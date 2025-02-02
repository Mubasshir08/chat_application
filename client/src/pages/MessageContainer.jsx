import React from 'react'
import SendMessage from './SendMessage'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
  const {selectedUser} = useSelector(store => store.user);
  return (
    <div className='w-full flex flex-col'>
      <div className='bg-blue-400 w-full flex items-center space-x-2 p-1.5 rounded-tr-md'>
        <div className={`${selectedUser && selectedUser.profilePic ? "avatar online" : "py-8"} ml-1`}>
          <div className="w-16 rounded-full">
          {selectedUser && selectedUser.profilePic && (
              <img src={`${import.meta.env.VITE_SERVER_URL}${selectedUser.profilePic}`} alt='Profile Pic' />
            )}
          </div>
        </div>
        <h3 className='text-white'>{selectedUser && selectedUser.userName || ''}</h3>
      </div>
      <Messages />
      <SendMessage />
    </div>
  )
}

export default MessageContainer