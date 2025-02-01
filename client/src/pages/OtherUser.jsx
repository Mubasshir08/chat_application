import React from 'react'

const OtherUser = ({user}) => {
    const {userName, profilePic} = user
    console.log('Profile Pic URL:', profilePic);

    return (
        <div className='hover:bg-blue-400 hover:rounded-lg py-6'>
            <div className='flex items-center space-x-2 ml-3'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={`${import.meta.env.VITE_SERVER_URL}${profilePic}`} />
                    </div>
                </div>
                <h3 className='text-white'>{userName}</h3>
            </div>
            
        </div>
    )
}

export default OtherUser