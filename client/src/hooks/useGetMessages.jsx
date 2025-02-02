import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetMessages = (id) => {
  const [messages, setMessages] = useState([]);
  const [errorMessages, setErrorMessages] = useState('');

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (!id) return;
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/message/${id}`);

        // ✅ Clear error if messages are found
        if (response.data && response.data.length > 0) {
          // console.log(response.data);
          setMessages(response.data);
          setErrorMessages(''); // Clear any previous error
        } else {
          setMessages([]); // Clear messages if no data
          setErrorMessages('No messages found.');
        }
      } catch (error) {
        console.error(error);
        setMessages([]); // ✅ Clear messages when there's an error
        setErrorMessages(error.response?.data?.message || 'An error occurred while fetching messages.');
      }
    };

    getMessages();
  }, [id]);

  return { messages, errorMessages };
};

export default useGetMessages;
