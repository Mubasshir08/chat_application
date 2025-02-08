import { useEffect, useState } from 'react'
import Route from './routes/route'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setSocket } from './redux/socketSlice'
import { setOnlineUsers } from './redux/userSlice'

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.user);
  const { socket } = useSelector(state => state.socket);
  // useSelector(state => console.log(state.socket))
  // console.log(authUser.id)
  useEffect(() => {
    if (authUser) {
      console.log("Connecting socket...");
      const newSocket = io(`${import.meta.env.VITE_SERVER_URL}`, {
        query: { userId: authUser.id }
      });
      dispatch(setSocket(newSocket));
      newSocket.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      })
      return () => {
        console.log("Disconnecting socket...");
        newSocket.disconnect();
      };
    } else {
      if (socket) {
        console.log("User logged out, disconnecting socket...");
        socket.disconnect();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={Route} />
    </div>
  )
}

export default App
