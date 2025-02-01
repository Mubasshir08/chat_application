import React from 'react';
import { IoMdSend } from "react-icons/io";

const SendMessage = () => {
    return (
        <div className='relative'>
            <form className=''>
                <input type="text" className='input input-md w-full rounded-none' placeholder='Send a message...'/>
                <button type='submit' className='absolute right-2 top-3'>
                <IoMdSend size= "25px"/>
                </button>
            </form>
        </div>
    )
}

export default SendMessage