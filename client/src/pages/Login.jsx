import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: '',
      password: '',
    });
  }
  return (
    <div className='min-w-[500px]'>
      <div className="h-full w-full bg-red-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-center mt-5 mb-3'>Login</h1>
        <form className="p-4" onSubmit={onSubmitHandler}>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-white" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2 text-white" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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