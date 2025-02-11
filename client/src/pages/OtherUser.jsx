import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const {_id, userName, profilePic} = user;
    const {selectedUser, onlineUsers} = useSelector(store => store.user);
    const isOnline = onlineUsers && onlineUsers.includes(_id);
    // console.log(isOnline);
    // console.log(_id);
    console.log('Profile Pic URL:', profilePic);

    const isSelectedHandler = (user) => {
        dispatch(setSelectedUser(user));
        // console.log(selectedUser);
        // console.log('Selected User ID:', user._id);
    }
    return (
        <div onClick={() => isSelectedHandler(user)} className={`${selectedUser && selectedUser._id === user._id ? 'bg-white text-black' : 'text-white'} hover:bg-blue-400 rounded-lg py-6`}>
            <div className='flex items-center space-x-2 ml-3'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={`${profilePic}`} />
                    </div>
                </div>
                <h3 className=''>{userName}</h3>
            </div>
            
        </div>
    )
}

export default OtherUser