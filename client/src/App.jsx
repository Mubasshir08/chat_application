import { useEffect, useState } from 'react'
import Route from './routes/route'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'

function App() {
const [socket, setSocket] = useState(null)
const {authUser} = useSelector(state => state.user)
useEffect(()=>{
  if(authUser){
    const socket = io(`${import.meta.env.VITE_SERVER_URL}`,{
    
    });
    setSocket(socket)
  }
},[authUser])
return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default App
