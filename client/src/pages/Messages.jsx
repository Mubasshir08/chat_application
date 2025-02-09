import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import useGetRealTimeMessages from '../hooks/useGetRealTimeMessages'

const Messages = () => {
  // useGetRealTimeMessages();
  const { selectedUser } = useSelector(state => state.user);
  // const { messages } = useSelector(state => state.message);
  const { messages,errorMessages } = useGetRealTimeMessages(selectedUser ? selectedUser._id : null);
  // console.log(messages);
  return (
    <div className='pt-5 px-2 flex-1 overflow-auto'>
      {
        messages && messages.length > 0 ? messages.map(message => (
          <Message key={message._id} messageInfo={message} />
        )) : <p className='text-white text-center mt-52'>{errorMessages}</p>
      }

    </div>
  )
}

export default Messages