import React, { useEffect } from 'react'
import axios from 'axios'

const uaeGetMessages = () => {
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/message/679a66c7335e8cf69591ece6`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMessages();
  },[])
}

export default uaeGetMessages