import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import chatReducer from './chatSlice';
import listingReducer from './listingSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    listings: listingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
