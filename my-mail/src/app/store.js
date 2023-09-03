import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice'
import useReducer  from '../features/userSlice';
const store = configureStore({
  reducer: {
    mail : mailReducer,
    user: useReducer
  },
});
export default store;
