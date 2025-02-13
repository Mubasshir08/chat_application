import React, { useEffect, useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import UsersDisplay from './UsersDisplay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {otherUsers} = useSelector(state => state.user)
  const [searchInput, setSearchInput] = useState('');
  const [isUserFound, setIsUserFound] = useState(true)
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const searchedUser = searchInput !== " " && otherUsers?.filter(user => (user.userName.toLowerCase().includes(searchInput.toLowerCase())))
    setSearchResult(searchedUser);
    // console.log(searchedUser);
    if(searchResult && searchResult.length > 0){
      setIsUserFound(true)
    }
   
  },[searchInput, searchResult]);
  // console.log('searchResult: ',searchResult);
  // console.log('searchInput: ',searchInput);


const searchBarHandler = (e) => {
  e.preventDefault();
  console.log('click')
  if(!searchResult || searchResult.length === 0){
    setIsUserFound(false)
  }
}

// console.log('isUserFound' ,isUserFound);

  const logoutHandler = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/logout`);
      dispatch({ type: 'LOGOUT' });
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
      <form className='sticky top-3 mt-5 mx-3 text-center' onSubmit={(e) => searchBarHandler(e)}>
        <input type="text" className='input input-sm w-full' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        <button type='submit' className='absolute inset-2/3 lg:inset-[85%] lg:top-[0.120rem] top-0.5'>
          <IoSearchCircle className='text-black' size="30px" />
        </button>
      </form>
      <div className="divider"></div>
        {isUserFound ? <UsersDisplay searchedUser={searchResult}/> : <h3 className='flex-1'>Not Found</h3>}
        <button className='btn btn-error text-white rounded-none' onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Sidebar