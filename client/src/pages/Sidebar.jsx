import React from 'react';
import OtherUser from './OtherUser';
import { IoSearchCircle } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-1/3 border-r-2 border-gray-700 overflow-x-auto'>
      <form className='sticky top-3 mt-5 text-center'>
        <input type="text" className='input input-sm w-3/4' />
        <button type='submit' className='absolute right-12 top-0.5'>
          <IoSearchCircle className='text-black' size="30px" />
        </button>
      </form>
      <div className="divider"></div>
        <OtherUser />
        <OtherUser />
        <OtherUser />
        <OtherUser />
        <OtherUser />
    </div>
  )
}

export default Sidebar