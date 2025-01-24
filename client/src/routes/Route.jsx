import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])

export default Route
