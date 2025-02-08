import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const useGetRealTimeMessages = (id) => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);
  const { socket } = useSelector((state) => state.socket);
  const [errorMessages, setErrorMessages] = useState('');

  // ✅ 1️⃣ পুরোনো মেসেজ লোড করার ফাংশন
  useEffect(() => {
    const getMessages = async () => {
      try {
        if (!id) return;
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/message/${id}`);

        if (response.data && response.data.length > 0) {
          dispatch(setMessages(response.data));
          setErrorMessages('');
        } else {
          dispatch(setMessages([]));
          setErrorMessages(response.data.message || 'No messages found.');
        }
      } catch (error) {
        console.error(error);
        dispatch(setMessages([]));
        setErrorMessages(error.response?.data?.message || 'An error occurred while fetching messages.');
      }
    };

    getMessages();
  }, [id, dispatch]);

  // ✅ 2️⃣ নতুন মেসেজ রিয়েল-টাইমে যোগ করার ফাংশন
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log("New Message Received:", newMessage);
      dispatch(setMessages([...messages, newMessage]));
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, dispatch]);

  return { messages, errorMessages };
};

export default useGetRealTimeMessages;
