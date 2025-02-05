import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const SendMessage = () => {
    const {selectedUser} = useSelector(state => state.user);
    const {messages} = useSelector(state => state.message);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    // console.log(message);
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/message/send/${selectedUser._id}`,{message},{
                headers : {
                    'Content-Type' : 'application/json'
                },
                withCredentials: true
            });
            console.log(response);
            dispatch(setMessages([...messages,response.data]))
        } catch (error) {
            console.log(error)
        }
        setMessage('');
    };
    return (
        <div onSubmit={onSubmitHandler} className='relative'>
            <form className=''>
                <input type="text" className='input input-md w-full rounded-none' placeholder='Send a message...' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className='absolute right-2 top-3'>
                <IoMdSend size= "25px"/>
                </button>
            </form>
        </div>
    )
}

export default SendMessage