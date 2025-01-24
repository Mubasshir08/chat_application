import { useState } from 'react'
import Route from './routes/route'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <RouterProvider router={Route}/>
  )
}

export default App
