import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Messages = () => {
  const [profilePic, setProfilePic] = useState('');
  const { selectedUser } = useSelector(state => state.user);
  const { messages, errorMessages } = useGetMessages(selectedUser ? selectedUser._id : null);
  useEffect(() => {
    if (messages.length > 0) {
      messages.map(message => {
        // console.log(message.receiverId);
          // console.log(selectedUser._id);
          // console.log(selectedUser.profilePic);
        if (message.receiverId === selectedUser._id) {  
          setProfilePic(selectedUser.profilePic);
        }
        else{
          setProfilePic('https://www.gravatar.com/avatar/')
        }
      });
    }
  },[messages,errorMessages])
  console.log(profilePic);
  return (
    <div className='pt-5 px-2 flex-1 overflow-auto'>
      {
        messages.length > 0 ? messages.map(message => (
          <Message key={message._id} messageInfo={message} />
        )) : <p className='text-white text-center mt-52'>{errorMessages}</p>
      }

    </div>
  )
}

export default Messages