import React from 'react';
import OtherUser from './OtherUser';
import { IoSearchCircle } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-1/3 border-r-2 border-gray-700 overflow-x-scroll'>
      <form className='sticky top-3 mt-5 text-center'>
        <input type="text" className='input input-sm w-2/3' />
        <button type='submit' className='absolute right-20 top-0.5'>
          <IoSearchCircle className='text-black' size="30px" />
        </button>
      </form>
        <OtherUser />
        <OtherUser />
        <OtherUser />
        <OtherUser />
        <OtherUser />
    </div>
  )
}

export default Sidebar