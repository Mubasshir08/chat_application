import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage