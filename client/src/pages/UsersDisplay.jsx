import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/UseGetOtherUsers';
import { useSelector } from 'react-redux';

const UsersDisplay = ({searchedUser}) => {
  // console.log(searchedUser);
  useGetOtherUsers();
  const { otherUsers } = useSelector(store => store.user)
  // console.log(otherUsers)
  if (!otherUsers) return <h1 className='text-center text-white flex-1'>Loading...</h1>;
  return (
    <div className='flex-1'>
      {
       searchedUser ? searchedUser.map(user => (
        <OtherUser key={user._id} user={user} />
      )) : otherUsers.map(user => (
          <OtherUser key={user._id} user={user} />
        ))
      }
    </div>
  )
}

export default UsersDisplay