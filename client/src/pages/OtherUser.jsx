import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/UserSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const {_id, userName, profilePic} = user;
    const {selectedUser} = useSelector(store => store.user);
    // console.log('Profile Pic URL:', profilePic);

    const isSelectedHandler = (user) => {
        dispatch(setSelectedUser(user));
        // console.log(selectedUser);
        // console.log('Selected User ID:', user._id);
    }
    return (
        <div onClick={() => isSelectedHandler(user)} className={`${selectedUser && selectedUser._id === user._id ? 'bg-white text-black' : 'text-white'} hover:bg-blue-400 rounded-lg py-6`}>
            <div className='flex items-center space-x-2 ml-3'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={`${import.meta.env.VITE_SERVER_URL}${profilePic}`} />
                    </div>
                </div>
                <h3 className=''>{userName}</h3>
            </div>
            
        </div>
    )
}

export default OtherUser