import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      toast.success('Login successful!');
      console.log(response.data);
      dispatch(setAuthUser(response.data));
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || 'An error occurred during login.');
    }
    // console.log(user);
    setUser({
      userName: '',
      password: '',
    });
  }
  return (
    <div className='min-w-[500px]'>
      <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-white text-center mt-5 mb-3'>Login</h1>
        <form className="p-4" onSubmit={onSubmitHandler}>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-white" htmlFor="username">
              Username
            </label>
            <input
              className="shadow input input-md appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              value={user.userName}
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2 text-white" htmlFor="password">
              Password
            </label>
            <input
              className="shadow input input-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
        <div className='w-1/2 mb-2 flex justify-between'>
          <h3 className='text-white'>Don't have an account?</h3>
          <Link to="/register" className="text-blue-500">Signup</Link>
        </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>



  )
}

export default Login