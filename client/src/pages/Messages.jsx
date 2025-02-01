import React from 'react'
import Message from './Message'
const Messages = () => {
  return (
    <div className='pt-5 flex-1 overflow-auto'>
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