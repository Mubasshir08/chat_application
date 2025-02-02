import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'

const Messages = () => {
  const {selectedUser} = useSelector(state => state.user);
  const getMessages = useGetMessages(selectedUser._id);
  // console.log(getMessages);
  return (
    <div className='pt-5 px-2 flex-1 overflow-auto'>
      {
        getMessages.messages.length > 0 ? getMessages.messages.map(message => (
          <Message key={message._id} messageInfo={message} />
        )) : <p className='text-white text-center mt-52'>{getMessages.errorMessages}</p>
      }
      
    </div>
  )
}

export default Messages