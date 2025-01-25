import React, { useState } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <div className='min-w-[500px]'>
      <div className="h-full w-full bg-red-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className='text-3xl font-bold text-center mt-5 mb-3'>Signup</h1>
      <form className="p-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange = {(e) => setUser({ ...user, username: e.target.value })}
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
        </div>
        
        <div className='flex my-2'>
            <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mr-2 text-white">Male</span>
                  <input type="checkbox" defaultChecked className="checkbox checkbox-primary" checked={user.gender === "male"} onChange={(e) => setUser({ ...user, gender: "male" })}/>
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mr-2 text-white">Female</span>
                  <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" checked={user.gender === "female"} onChange={(e) => setUser({ ...user, gender: "female" })}/>
                </label>
              </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Signup