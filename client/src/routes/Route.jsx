import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/register",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
])

export default Route
