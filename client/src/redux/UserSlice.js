import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState:{
        authUser: null,
        otherUsers: null,
        selectedUser: {}
    },
    reducers:{
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
        
    }
});

export const {setAuthUser,setOtherUsers, setSelectedUser} = UserSlice.actions;
export default UserSlice.reducer;