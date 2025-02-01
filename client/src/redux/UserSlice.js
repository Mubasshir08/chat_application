import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState:{
        authUser: null,
        otherUsers: null
    },
    reducers:{
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        }

    }
});

export const {setAuthUser,setOtherUsers} = UserSlice.actions;
export default UserSlice.reducer;