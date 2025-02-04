import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export default store;