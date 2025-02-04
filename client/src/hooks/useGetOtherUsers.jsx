import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    const getOtherUsers = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user`)
            // console.log(response.data)
            dispatch(setOtherUsers(response.data))
        } catch (error) {
            console.log(error)
        };
      };
      getOtherUsers();
  }, [])
};

export default useGetOtherUsers