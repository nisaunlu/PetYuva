// src/redux/chatSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Message {
  id: string;
  sender: string;
  receiver: string;
  text: string;
  timestamp: number;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessageLocal: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    clearMessages: state => {
      state.messages = [];
    },
  },
});

export const {sendMessageLocal, clearMessages} = chatSlice.actions;
export default chatSlice.reducer;
