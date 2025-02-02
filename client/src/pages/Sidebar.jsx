import React from 'react';
import { IoSearchCircle } from "react-icons/io5";
import UsersDisplay from './UsersDisplay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/logout`);
      console.log(response.data)
      if (response.status === 200) toast.success(response.data.message);
      navigate('/login');
    } catch (error) {
        toast.error(error.response.data.message || 'An error occurred during logout.');
        console.log(error)
    }
  }
  return (
    <div className='w-1/3 border-r-2 border-gray-700 overflow-x-auto flex flex-col'>
      <form className='sticky top-3 mt-5 text-center'>
        <input type="text" className='input input-sm w-3/4' />
        <button type='submit' className='absolute right-12 top-0.5'>
          <IoSearchCircle className='text-black' size="30px" />
        </button>
      </form>
      <div className="divider"></div>
        <UsersDisplay />
        <button className='btn btn-error text-white rounded-none' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Sidebar