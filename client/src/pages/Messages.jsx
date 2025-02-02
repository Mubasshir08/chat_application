import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/uaeGetMessages'

const Messages = () => {
  useGetMessages();
  return (
    <div className='pt-5 px-2 flex-1 overflow-auto'>
      <Message receiver = "me"/>
      <Message receiver = "other"/>
      <Message receiver = "me"/>
      <Message receiver = "other"/>
      <Message receiver = "me"/>
      <Message receiver = "other"/>
      <Message receiver = "me"/>
      <Message receiver = "other"/>
      
    </div>
  )
}

export default Messages