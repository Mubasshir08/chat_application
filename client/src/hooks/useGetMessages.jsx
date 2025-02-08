import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetMessages = (id) => {
  const dispatch = useDispatch();
  // const [messages, setMessages] = useState([]);
  const {messages} = useSelector((state) => state.message);
  const [errorMessages, setErrorMessages] = useState('');

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (!id) return;
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/message/${id}`);

        // ✅ Clear error if messages are found
        if (response.data && response.data.length > 0) {
          // console.log(response);
          dispatch(setMessages(response.data));
          // setMessages(response.data);
          setErrorMessages(''); // Clear any previous error
        } else {
          // console.log(response.data.message);
          dispatch(setMessages([]));
          // setMessages([]); // Clear messages if no data
          setErrorMessages(response.data.message || 'No messages found.');
        }
      } catch (error) {
        console.error(error);
        // setMessages([]);
        dispatch(setMessages(error.response.data));
         // ✅ Clear messages when there's an error
        setErrorMessages(error.response?.data?.message || 'An error occurred while fetching messages.');
      }
    };

    getMessages();
  }, [id]);

  return { messages, errorMessages };
};

export default useGetMessages;
