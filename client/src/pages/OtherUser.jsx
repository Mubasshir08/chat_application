import React from 'react'

const OtherUser = () => {
    return (
        <div className='hover:bg-blue-400 hover:rounded-lg py-6'>
            <div className='flex items-center space-x-2 ml-3'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <h3 className='text-white'>Jessy</h3>
            </div>
            
        </div>
    )
}

export default OtherUser