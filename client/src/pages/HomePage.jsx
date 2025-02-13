import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
const HomePage = () => {
  const navigate = useNavigate();
  const {authUser,selectedUser} = useSelector(state => state.user)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user`, {
          credentials: 'include', // Important to send cookies
        });

        if (response.status === 401) {
          const data = await response.json();
          console.log(data);
          toast.error(data.message);
          navigate('/login'); // Redirect to login if not authenticated
          // toast.error('You are not authenticated');
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        navigate('/login'); // Redirect on error too
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex'>
      <Sidebar />
      {
        selectedUser ? 
        <MessageContainer /> : 
        <div className='text-center mx-auto translate-y-1/2'>
          <h1 className='text-2xl text-white'>Hello {authUser?.userName || ''} !!</h1>
          <h3 className='text-gray-400'>Let's Start The Chat</h3>
        </div>
      }
    </div>
  )
}

export default HomePage