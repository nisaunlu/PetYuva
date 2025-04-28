// src/redux/store.ts
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
      serializableCheck: false, // AsyncStorage veya tarih nesneleri gibi non-serializable uyarılarını önler
    }),
});

// 📌 Global tipler
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
