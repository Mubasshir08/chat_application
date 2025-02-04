// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';

const appReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined; // Resets the entire state
  }
  return appReducer(state, action);
};

export default rootReducer;
