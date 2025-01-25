import { useState } from 'react'
import Route from './routes/route'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default App
