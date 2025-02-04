import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import toast from 'react-hot-toast';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user`, {
          credentials: 'include', // Important to send cookies
        });

        if (response.status === 401) {
          const data = await response.json();
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
      <MessageContainer />
    </div>
  )
}

export default HomePage