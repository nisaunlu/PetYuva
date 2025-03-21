import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import chatReducer from './chatSlice';  

export const store = configureStore({
  reducer: {
    user: userReducer,   
    chat: chatReducer,  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,  
  }),
});
